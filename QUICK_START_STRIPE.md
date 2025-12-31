# 🚀 Quick Start: Stripe Integration

## ✅ What's Already Done

Your website now has full Stripe + Supabase integration:
- ✅ Pricing buttons link to Stripe checkout
- ✅ Click tracking to Supabase
- ✅ Purchase recording via webhooks
- ✅ Database tables created

## 🎯 What You Need to Do (5 Minutes)

### Step 1: Get Your Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copy your **Secret key** (starts with `sk_test_` or `sk_live_`)

### Step 2: Set Up Webhook

1. Go to [Stripe Webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Enter URL: `https://YOUR_DOMAIN.com/api/stripe/webhook`
4. Select event: **checkout.session.completed**
5. Click "Add endpoint"
6. Copy the **Signing secret** (starts with `whsec_`)

### Step 3: Add Environment Variables

In your deployment platform (Vercel, Netlify, etc.), add these:

```
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_secret_here
```

### Step 4: Test It!

1. Visit your pricing page
2. Click "Pay Deposit" on any package
3. Complete a test payment (use Stripe test card: `4242 4242 4242 4242`)
4. Check your Supabase dashboard:
   - Look in `purchase_clicks` table
   - Look in `purchases` table

## 🎉 You're Done!

Your integration is live. Every purchase will now be tracked in Supabase automatically.

## 📊 View Your Data

Go to [Supabase Dashboard](https://supabase.com/dashboard) → Your Project → Table Editor:
- **purchase_clicks** - See who clicked your buttons
- **purchases** - See completed sales

## ❓ Questions?

See `STRIPE_SETUP.md` for detailed configuration
See `STRIPE_INTEGRATION_SUMMARY.md` for technical details

---

**Stripe Links Currently Active:**
- Quick Launch: https://buy.stripe.com/eVqaEXewfaNk1gT0IpgEg04
- Local Visibility: https://buy.stripe.com/5kQ3cv4VF08G2kX1MtgEg06
- Growth System: https://buy.stripe.com/00w14nfAjbRobVx1MtgEg05
