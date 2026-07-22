---
title: Troubleshoot Billing and Payment Failures
excerpt: What to do when a DNSimple invoice or subscription renewal payment fails, including how to update your card, retry payment, and restore service.
meta: Fix failed DNSimple invoice payments and subscription renewals. Update your card, retry failed invoices, and reactivate if your subscription was canceled for non-payment.
categories:
- Account
---

# Troubleshoot Billing and Payment Failures

### Table of Contents {#toc}

* TOC
{:toc}

---

Use this guide when a DNSimple payment fails, a renewal invoice is unpaid, or service stopped after failed collection. For how invoices and renewals work, see [Understanding Your DNSimple Invoice](/articles/understanding-invoice/) and [Subscription Renewals](/articles/subscription-renewals/).

DNSimple sends payment status updates to your account [notification email](/articles/changing-email/#setting-or-changing-the-notification-email). On eligible plans, invoice emails may also go to a separate [billing email](/articles/billing-settings/#changing-the-billing-email).

## Failed purchase invoice {#failed-purchase-invoice}

**Symptom:** You tried to register a domain, buy a certificate, or make another purchase, and payment did not go through. The invoice shows as `failed`, and you cannot make other purchases until it is paid.

**What to do:**

1. [Update your payment method](/articles/changing-payment-details/) if the card on file is expired, declined, or incorrect.
1. Open [Account Invoice History](/articles/account-invoice-history/) and [retry the failed payment](/articles/account-invoice-history/#retrying).
1. If the retry still fails, contact your bank or card issuer, then retry again.

> [!NOTE]
> While an invoice is in the `failed` state, DNSimple also retries collection automatically every few hours. You can still retry manually any time.

## Failed subscription renewal {#failed-subscription-renewal}

**Symptom:** Your monthly subscription renewal failed. You received a [dunned invoice](/articles/account-invoice-history/#invoice-state-dunned) and an email about the failed attempt. Domains still resolve during the retry window.

**What to do:**

1. [Update your payment method](/articles/changing-payment-details/) so the card on file can be charged.
1. [Retry the dunned invoice](/articles/account-invoice-history/#retrying) from Account Invoice History.
1. Watch your notification email for weekly retry updates during the collection window.

From the first failed renewal attempt, you have **21 days** to fix payment. DNSimple retries about once per week during that period. Details are in [Subscription Renewals](/articles/subscription-renewals/#failed-renewal).

> [!WARNING]
> If DNSimple cannot collect the renewal after the retry window, the subscription is canceled and DNSimple services stop. See [What Happens if I Stop Paying for My DNSimple Subscription?](/articles/what-happens-if-i-stop-paying/).

## Card declined or expired {#card-declined-or-expired}

**Symptom:** Charges fail because the card is declined, expired, or no longer valid.

**What to do:**

1. Confirm the card details with your bank or card issuer.
1. [Change the payment details](/articles/changing-payment-details/) on the account.
1. Return to [Account Invoice History](/articles/account-invoice-history/) and retry any `failed` or `dunned` invoices.

Account owners and members with [Full Access](/articles/what-is-domain-access-control/#full-access) can update payment details.

## Cannot make new purchases {#cannot-make-new-purchases}

**Symptom:** The interface blocks new purchases such as domain registrations or SSL certificates.

**What to do:**

1. Check [Account Invoice History](/articles/account-invoice-history/) for a `failed` invoice from a previous purchase.
1. [Retry that payment](/articles/account-invoice-history/#retrying) after updating the card if needed.
1. When the invoice moves to `collected`, try the purchase again.

## Subscription canceled after failed payments {#subscription-canceled}

**Symptom:** Renewal collection failed through the full retry window. The subscription was canceled, and domains stopped resolving.

**What to do:**

1. Read [What Happens if I Stop Paying for My DNSimple Subscription?](/articles/what-happens-if-i-stop-paying/) for what is disabled and what remains in the account.
1. [Reactivate your subscription](/articles/reactivate-subscription/). Reactivation starts a **new subscription** on a current plan. Your domains, DNS records, contacts, and account history remain in the account.
1. If you cannot sign in, see [Deactivated Account](/articles/account-deactivated/).

> [!NOTE]
> Reactivation does not grant another free trial if you already used one. Legacy plans cannot be reactivated as-is. Choose a current plan when you resubscribe.

## Account deactivated {#account-deactivated}

**Symptom:** You cannot use the account, or the sign-in page returns the message `Your account has been deactivated.`

Deactivation can follow non-payment, chargebacks, fraud, or other policy issues. See [Deactivated Account](/articles/account-deactivated/) for reasons and how to contact support.

If the deactivation is only about unpaid subscription fees, resolving billing and [reactivating](/articles/reactivate-subscription/) may restore service.

## Have more questions?

If you have questions about a failed payment or restoring service, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
