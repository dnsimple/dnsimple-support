---
title: What Happens if I Stop Paying for My DNSimple Subscription?
excerpt: What happens to your DNSimple account and services when subscription payment fails and the account is canceled.
meta: If DNSimple cannot collect subscription payment after 21 days, your account is canceled and DNSimple services stop. Domains you registered remain in your account.
categories:
- Account
---

# What Happens if I Stop Paying for My DNSimple Subscription?

### Table of Contents {#toc}

* TOC
{:toc}

---

If DNSimple cannot collect your monthly subscription payment, the account enters a retry period before cancellation. This article explains the timeline, what stops when your subscription is canceled, and where to go next.

For the full renewal and retry process, see [Subscription Renewals](/articles/subscription-renewals/).

## Failed payment and the 21-day window {#failed-payment}

When a renewal payment fails, DNSimple attempts to collect payment from the card on file once per week for **21 days**. Payment status updates go to your account notification email. You can also manually retry renewal payments - see [Account Invoice History](/articles/account-invoice-history/#retrying).

During this period, your account is **not** canceled, and your domains continue to resolve.

## When your subscription is canceled {#cancellation}

If payment cannot be collected after 21 days, DNSimple cancels your subscription and notifies you by email. All services provided by DNSimple stop at that point.

## What happens to your domains after cancellation {#after-cancellation}

- **DNS resolution:** Domains pointing to DNSimple name servers will no longer resolve and will become unreachable, responding with a `SERVFAIL` or `NXDOMAIN` DNS error code. Domains that are not pointing to DNSimple name servers continue to resolve if they use valid external name servers.
- **Registered domains:** You can still manage domains registered with DNSimple. They are not deleted or removed from your account.
- **Auto-renewal and privacy:** Domains set to auto-renew **will not** renew automatically, and WHOIS privacy is disabled.

Canceling your subscription stops DNSimple services. It does not delete your account or remove your domains. See [Unsubscribe From Your DNSimple Plan](/articles/cancel-subscription/) for how to cancel billing intentionally.

## Billing contacts and account access {#billing-contacts}

If you are a billing contact but not an authorized user, you cannot reactivate the subscription yourself. Contact an account administrator to restore service or update payment details. Authorized users can update the card on file in [Changing Payment Details](/articles/changing-payment-details/). If you cannot sign in, see [Forgot Password](/articles/forgot-password/).

## Reactivating your subscription {#reactivation}

You can restore service by reactivating your subscription. See [Reactivate Your Subscription](/articles/reactivate-subscription/) for the steps.

## Have more questions?

If you have additional questions or need any assistance with your subscription payments, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
