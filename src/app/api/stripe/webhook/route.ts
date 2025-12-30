import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

// Initialize Supabase with service role for server-side operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Initialize Stripe (only needed if you have a secret key for verification)
const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2024-12-18.acacia' })
  : null;

// Package mapping based on Stripe price/product IDs
// You'll need to update these with your actual Stripe price IDs
const PACKAGE_MAPPING: Record<string, { name: string; tier: string }> = {
  // Quick Launch Sprint Deposit
  'price_quick_launch': { name: 'Quick Launch Sprint', tier: 'quick-launch' },
  // Local Visibility Package Deposit  
  'price_local_visibility': { name: 'Local Visibility Package', tier: 'local-visibility' },
  // Growth System Deposit
  'price_growth_system': { name: 'Growth System', tier: 'growth-system' },
};

/**
 * Stripe Webhook Handler
 * Processes checkout.session.completed events to log purchases in Supabase
 */
export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = (await headers()).get('stripe-signature');

  if (!signature) {
    console.error('Missing stripe-signature header');
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    // Verify webhook signature if secret is configured
    if (process.env.STRIPE_WEBHOOK_SECRET && stripe) {
      try {
        event = stripe.webhooks.constructEvent(
          body,
          signature,
          process.env.STRIPE_WEBHOOK_SECRET
        );
        console.log('✅ Webhook signature verified');
      } catch (err) {
        console.error('⚠️ Webhook signature verification failed:', err);
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 400 }
        );
      }
    } else {
      // Fallback: parse without verification (not recommended for production)
      console.warn('⚠️ Webhook signature verification skipped - set STRIPE_WEBHOOK_SECRET');
      event = JSON.parse(body) as Stripe.Event;
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // Extract package information from metadata or line items
      const lineItems = session.line_items?.data || [];
      const firstItem = lineItems[0];
      
      // Try to determine package from metadata or price ID
      let packageInfo = PACKAGE_MAPPING[session.metadata?.price_id] || 
                        PACKAGE_MAPPING[firstItem?.price?.id];

      // Fallback: try to infer from amount
      if (!packageInfo) {
        const amount = session.amount_total;
        if (amount >= 50000) packageInfo = { name: 'Growth System', tier: 'growth-system' };
        else if (amount >= 30000) packageInfo = { name: 'Local Visibility Package', tier: 'local-visibility' };
        else packageInfo = { name: 'Quick Launch Sprint', tier: 'quick-launch' };
      }

      // Record the purchase in Supabase
      const { error } = await supabase.from('purchases').insert([{
        stripe_checkout_session_id: session.id,
        stripe_payment_intent_id: session.payment_intent || null,
        package_name: packageInfo.name,
        package_tier: packageInfo.tier,
        customer_email: session.customer_details?.email || session.customer_email,
        customer_name: session.customer_details?.name || null,
        amount_total: session.amount_total,
        currency: session.currency || 'usd',
        payment_status: session.payment_status,
        metadata: {
          session_metadata: session.metadata,
          customer_details: session.customer_details,
          line_items: lineItems.map((item: any) => ({
            description: item.description,
            amount: item.amount_total,
            quantity: item.quantity,
          })),
        },
        purchased_at: new Date().toISOString(),
      }]);

      if (error) {
        console.error('Error recording purchase in Supabase:', error);
        return NextResponse.json(
          { error: 'Failed to record purchase' },
          { status: 500 }
        );
      }

      console.log('✅ Purchase recorded:', {
        session_id: session.id,
        email: session.customer_details?.email,
        package: packageInfo.name,
      });

      return NextResponse.json({ received: true, recorded: true });
    }

    // Handle other event types if needed
    console.log('Received webhook event:', event.type);
    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

// Disable body parsing to get raw body for signature verification
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
