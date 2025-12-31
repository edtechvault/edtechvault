import { supabase } from './supabase';

export interface PurchaseClickData {
  packageName: string;
  packageTier: string;
  stripeLink: string;
  userEmail?: string;
}

export interface PurchaseData {
  stripeCheckoutSessionId: string;
  stripePaymentIntentId?: string;
  packageName: string;
  packageTier: string;
  customerEmail: string;
  customerName?: string;
  amountTotal: number;
  currency?: string;
  paymentStatus: string;
  metadata?: Record<string, unknown>;
}

/**
 * Track when a user clicks on a purchase/checkout link
 */
export async function trackPurchaseClick(data: PurchaseClickData) {
  try {
    const { error } = await supabase.from('purchase_clicks').insert([{
      package_name: data.packageName,
      package_tier: data.packageTier,
      stripe_link: data.stripeLink,
      user_email: data.userEmail || null,
      clicked_at: new Date().toISOString(),
    }]);

    if (error) {
      console.error('Error tracking purchase click:', error);
      return { success: false, error };
    }

    return { success: true };
  } catch (error) {
    console.error('Exception tracking purchase click:', error);
    return { success: false, error };
  }
}

/**
 * Record a completed purchase (typically called from webhook)
 */
export async function recordPurchase(data: PurchaseData) {
  try {
    const { error } = await supabase.from('purchases').insert([{
      stripe_checkout_session_id: data.stripeCheckoutSessionId,
      stripe_payment_intent_id: data.stripePaymentIntentId || null,
      package_name: data.packageName,
      package_tier: data.packageTier,
      customer_email: data.customerEmail,
      customer_name: data.customerName || null,
      amount_total: data.amountTotal,
      currency: data.currency || 'usd',
      payment_status: data.paymentStatus,
      metadata: data.metadata || null,
      purchased_at: new Date().toISOString(),
    }]);

    if (error) {
      console.error('Error recording purchase:', error);
      return { success: false, error };
    }

    return { success: true };
  } catch (error) {
    console.error('Exception recording purchase:', error);
    return { success: false, error };
  }
}

/**
 * Get purchase statistics
 */
export async function getPurchaseStats() {
  try {
    const { data: clicks, error: clicksError } = await supabase
      .from('purchase_clicks')
      .select('package_tier');

    const { data: purchases, error: purchasesError } = await supabase
      .from('purchases')
      .select('package_tier, amount_total');

    if (clicksError || purchasesError) {
      console.error('Error fetching stats:', clicksError || purchasesError);
      return null;
    }

    return {
      totalClicks: clicks?.length || 0,
      totalPurchases: purchases?.length || 0,
      revenue: purchases?.reduce((sum, p) => sum + p.amount_total, 0) || 0,
    };
  } catch (error) {
    console.error('Exception fetching stats:', error);
    return null;
  }
}
