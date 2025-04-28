---
title: What Happens if I Stop Paying for My DNSimple Subscription?
excerpt: What happens if an account is canceled for non-payment.
meta: Learn what happens to your DNSimple account and services if you stop paying. Understand the implications and steps to take for a smooth transition.
categories:
- Account
---

## What Happens if I Stop Paying for My DNSimple Subscription?

In the event of a failed renewal payment, our system will attempt to collect payment from the card on file once per week for 21 days. We will notify the email associated with your account as to whether the attempt has failed or succeeded. Payments for renewal fees can also be manually retried — [learn how](/articles/account-invoice-history#retrying).

An account is canceled if payment cannot be collected after 21 days. We will immediately notify you by email, and all services provided by DNSimple will stop.

## If your account is cancelled 

- Domains pointing to DNSimple's name servers will no longer resolve and will immediately become unreachable, responding with a `SERVFAIL` or `NXDOMAIN` DNS error code.
- Domains that are not pointing to DNSimple's name servers will continue to resolve provided they are pointed to valid external name servers.
- You will still be able to manage any domains registered with DNSimple. They will not be deleted or otherwise removed from your account.
- Domains in your account set to auto-renew **will not** renew automatically, and WHOIS privacy will be disabled.

## Troubleshooting

- If you are the billing contact but are not an authorized user, you must contact the authorized user to reactivate the subscription.
- Ensure the card on file is not expired and has up-to-date billing information.
- If you don't remember your login details, click **Forgot password** on the login page, and we will send you a password reset email. 

## Reactivating your account

You have the option to reactivate a canceled subscription. Just follow the steps outlined in [this article](/articles/reactivate-subscription).

## Have more questions?

If you have additional questions or need any assistance with your subscription payments, please [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 
