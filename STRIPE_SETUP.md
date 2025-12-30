# Stripe + Supabase Integration Setup Guide

This guide explains how the Stripe payment integration works with Supabase tracking.

## 🎯 What's Integrated

### 1. **Database Tables** (Supabase)
- `purchase_clicks` - Tracks when users click "Pay Deposit" buttons
- `purchases` - Stores completed purchases from Stripe webhooks

### 2. **Pricing Page Updates**
- All three pricing tiers now have direct Stripe checkout links
- Button text changed to "Pay Deposit" 
- Price period updated to "deposit"

### 3. **Click Tracking**
- Every click on a "Pay Deposit" button is logged to Supabase
- Tracks: package name, tier, Stripe link, timestamp

### 4. **Purchase Recording**
- Stripe webhook captures successful payments
- Stores: customer email, amount, package details, payment status

## 🔧 Stripe Configuration Needed

### Step 1: Configure Stripe Webhooks

1. **Go to Stripe Dashboard** → [Webhooks](https://dashboard.stripe.com/webhooks)

2. **Create a new webhook endpoint** with this URL:
   ```
   https://YOUR_DOMAIN.com/api/stripe/webhook
   ```

3. **Select events to listen for:**
   - `checkout.session.completed`

4. **Copy the webhook signing secret** (starts with `whsec_`)

5. **Add to your environment variables:**
   ```bash
   STRIPE_WEBHOOK_SECRET=whsec_your_signing_secret_here
   ```

### Step 2: Add Package Metadata to Stripe Products

To properly track which package was purchased, add metadata to your Stripe products:

1. Go to each product in Stripe Dashboard
2. Add metadata field:
   - **Key:** `package_tier`
   - **Value:** One of: `quick-launch`, `local-visibility`, or `growth-system`

### Step 3: Update Package Mapping (Optional)

If you want more precise tracking, update the `PACKAGE_MAPPING` in:
`src/app/api/stripe/webhook/route.ts`

Replace placeholder price IDs with your actual Stripe price IDs:

```typescript
const PACKAGE_MAPPING: Record<string, { name: string; tier: string }> = {
  'price_1ABC123': { name: 'Quick Launch Sprint', tier: 'quick-launch' },
  'price_2DEF456': { name: 'Local Visibility Package', tier: 'local-visibility' },
  'price_3GHI789': { name: 'Growth System', tier: 'growth-system' },
};
```

## 📊 Your Current Stripe Links

| Package | Stripe Checkout Link |
|---------|---------------------|
| Quick Launch Sprint | `https://buy.stripe.com/eVqaEXewfaNk1gT0IpgEg04` |
| Local Visibility Package | `https://buy.stripe.com/5kQ3cv4VF08G2kX1MtgEg06` |
| Growth System | `https://buy.stripe.com/00w14nfAjbRobVx1MtgEg05` |

## 🧪 Testing

### Test Click Tracking
1. Visit your website's pricing section
2. Click any "Pay Deposit" button
3. Check Supabase `purchase_clicks` table - you should see a new row

### Test Webhook (Local Development)

Use [Stripe CLI](https://stripe.com/docs/stripe-cli) to test webhooks locally:

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login to your Stripe account
stripe login

# Forward webhooks to your local server
stripe listen --forward-to localhost:3000/api/stripe/webhook

# Trigger a test checkout.session.completed event
stripe trigger checkout.session.completed
```

### Test Webhook (Production)

1. Make a real test payment using Stripe test mode
2. Check Supabase `purchases` table for the new entry
3. Verify webhook logs in Stripe Dashboard → Webhooks

## 📈 Viewing Your Data

### Query Purchase Clicks
```sql
SELECT 
  package_name,
  COUNT(*) as clicks,
  COUNT(DISTINCT user_email) as unique_users
FROM purchase_clicks
GROUP BY package_name
ORDER BY clicks DESC;
```

### Query Completed Purchases
```sql
SELECT 
  package_name,
  customer_email,
  amount_total / 100 as amount_usd,
  payment_status,
  purchased_at
FROM purchases
ORDER BY purchased_at DESC;
```

### Conversion Rate
```sql
SELECT 
  pc.package_name,
  COUNT(DISTINCT pc.id) as clicks,
  COUNT(DISTINCT p.id) as purchases,
  ROUND(COUNT(DISTINCT p.id)::numeric / NULLIF(COUNT(DISTINCT pc.id), 0) * 100, 2) as conversion_rate
FROM purchase_clicks pc
LEFT JOIN purchases p ON p.package_tier = pc.package_tier
GROUP BY pc.package_name;
```

## 🔒 Security Notes

1. **Webhook Verification**: The current implementation parses webhook events without signature verification. For production, you should verify signatures using the `STRIPE_WEBHOOK_SECRET`.

2. **Service Role Key**: Never expose `SUPABASE_SERVICE_ROLE_KEY` in client-side code. It's only used in the webhook API route (server-side).

3. **RLS Policies**: The tables have Row Level Security enabled. Only service role can insert data.

## 🚀 Next Steps

1. ✅ Database tables created
2. ✅ Click tracking implemented
3. ✅ Webhook endpoint created
4. ⏳ Configure Stripe webhook (see Step 1 above)
5. ⏳ Test the integration
6. ⏳ Monitor data in Supabase

## 📞 Support

If you encounter issues:
- Check Stripe webhook logs for errors
- Check Supabase logs for insert failures
- Verify environment variables are set correctly
- Test with Stripe CLI in development mode

---

**Built with ❤️ for edtechvault by Fusion AI**
