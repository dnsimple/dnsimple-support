---
title: Troubleshooting Domain Expiration Issues
excerpt: Solutions for domain expiration and renewal problems, including failed renewals, expired domains, and auto-renewal issues.
meta: Troubleshoot domain expiration issues with our comprehensive guide. Learn how to resolve renewal failures, recover expired domains, and fix auto-renewal problems.
categories:
- Domains
---

# Troubleshooting Domain Expiration Issues

If you're experiencing problems with domain expiration, renewal, or auto-renewal, this guide will help you identify and resolve common issues. For general information about what happens when a domain expires, see [What Happens When a Domain Expires?](/articles/what-happens-when-domain-expires/).

### Table of Contents {#toc}

* TOC
{:toc}

---

## Domain expired unexpectedly

**Symptom**: Your domain expired even though you thought it was set to auto-renew.

**Why it happens**: Common reasons include:

- Auto-renewal was disabled
- Payment method failed or expired
- The domain is an auto-renew only domain that requires a subscription
- The domain entered redemption period before renewal could complete

**Resolution steps**:

1. **Check auto-renewal status**: Navigate to your domain in DNSimple and check the Registration tab to see if auto-renewal is enabled.

2. **Check payment method**: Ensure your payment method on file is valid and has sufficient funds. Update it if necessary.

3. **Renew manually**: If the domain is still in the grace period, you can [renew it manually](/articles/renewing-domain/). The domain will be reactivated immediately upon successful renewal.

4. **Restore the domain**: If the domain has entered the redemption period, you must [restore it](/articles/restoring-domain/), which includes a restore fee in addition to the renewal fee.

> [!WARNING]
> Certain domain names are [auto-renew only](/articles/domain-auto-renewal/) and cannot be renewed manually. For these domains, there is no grace period, and once they've expired, it's not possible to recover them unless you have an active subscription.

## Auto-renewal not working

**Symptom**: Auto-renewal is enabled, but your domain expired anyway.

**Why it happens**: Auto-renewal can fail due to:

- Payment method declined or expired
- Insufficient funds on the payment method
- Payment method removed from account
- Domain is auto-renew only and requires a subscription

**Resolution steps**:

1. **Check payment method**: 
   - Navigate to your account settings
   - Verify your payment method is valid and not expired
   - Ensure it has sufficient funds or credit available

2. **Update payment method**: If your payment method is invalid, update it with a valid credit card or payment method.

3. **Check for error notifications**: Check your email for notifications from DNSimple about failed renewal attempts. These emails will explain why the renewal failed.

4. **Enable auto-renewal**: If auto-renewal was disabled, [enable it](/articles/enabling-disabling-domain-auto-renewal/) to prevent future expiration issues.

5. **Renew manually**: If the domain has already expired but is still in the grace period, [renew it manually](/articles/renewing-domain/) to reactivate it immediately.

## Payment failed during renewal

**Symptom**: You received a notification that payment failed when attempting to renew your domain.

**Resolution steps**:

1. **Check payment method**: Verify your payment method is valid, not expired, and has sufficient funds.

2. **Update payment method**: If needed, update your payment method in your account settings.

3. **Retry renewal**: Once your payment method is updated, [renew the domain manually](/articles/renewing-domain/) to complete the renewal immediately.

4. **Contact your bank**: If your payment method should be valid, contact your bank or credit card company to ensure there are no blocks or restrictions on the transaction.

## Domain in redemption period

**Symptom**: Your domain has entered the redemption period and you cannot renew it normally.

**Why it happens**: After a domain expires and passes through the grace period (if applicable), it may enter a redemption period. During this time, only the previous registrant can recover the domain, and it must be restored through the previous registrar.

**Resolution**: You must [restore the domain](/articles/restoring-domain/) rather than renew it. The restoration process:

- Takes up to a day to complete
- Includes a mandatory restore fee in addition to the domain's renewal fee
- Automatically extends the domain's registration by the registry's minimum renewal period (usually 1 year)

For more information about the redemption period and restoration process, see [What Happens When a Domain Expires?](/articles/what-happens-when-domain-expires/#redemption-period) and [Restoring a Domain](/articles/restoring-domain/).

> [!WARNING]
> The restore fee is mandatory and cannot be waived. The final price will be the restore fee plus the domain's renewal fee.

## Domain deleted and cannot be recovered

**Symptom**: Your domain has been deleted and is no longer available for restoration.

**Why it happens**: After the redemption period, domains enter a "Pending Delete" period (typically 5 days) during which they cannot be recovered. After this period, the registry deletes the domain, and it becomes available for anyone to register as a new domain. For more details about the deletion period, see [What Happens When a Domain Expires?](/articles/what-happens-when-domain-expires/#deletion-period).

**Resolution**: Unfortunately, once a domain has been deleted by the registry, it cannot be recovered. You would need to register it again as a new domain if it becomes available, but there's no guarantee you'll be able to obtain it, as it will be available on a first-come, first-served basis.

**Prevention**: To avoid this situation in the future:

- [Enable auto-renewal](/articles/enabling-disabling-domain-auto-renewal/) for your domains
- Keep your payment method up to date
- Monitor expiration notifications
- Renew domains before they expire

## Not receiving expiration notifications

**Symptom**: You're not receiving email notifications about upcoming domain expirations.

**Resolution steps**:

1. **Check spam folder**: Expiration notification emails may have been filtered. Look for emails from DNSimple.

2. **Verify account email**: Ensure the email address on your DNSimple account is correct and can receive email. [Update it](/articles/changing-email/) if necessary. For instructions on updating your account email, see [Changing Your Email Address](/articles/changing-email/).

3. **Check notification settings**: While expiration notifications cannot be disabled (they're required), ensure your email provider isn't blocking DNSimple emails.

4. **Check domain list**: You can also check your domain list in DNSimple to see expiration dates and domains that are expiring soon.

## Expired domain cannot be transferred

**Symptom**: You're trying to transfer an expired domain but the transfer is being denied.

**Why it happens**: ICANN rules permit expired domains to be transferred only if:

- The domain is still in its grace period (not in redemption)
- The transfer completes before the domain enters redemption period
- This applies to ICANN generic top-level domains (gTLDs); country code TLDs (ccTLDs) may have different rules

**Resolution**: 

1. **Renew first**: If the domain is still in the grace period, renew it first, then initiate the transfer.

2. **Contact support**: If you need to transfer an expired domain that's in grace period, contact us at [support@dnsimple.com](mailto:support@dnsimple.com) or through the [contact page](https://dnsimple.com/contact) for assistance.

3. **Restore then transfer**: If the domain has entered redemption, you must restore it first, then wait for it to be active before transferring.

> [!WARNING]
> These rules do not apply to country code TLDs (ccTLDs), which may have different expiration and transfer rules.

## Auto-renew only domains

**Symptom**: You're trying to renew a domain manually, but the option is not available, or the domain expired and cannot be recovered.

**Why it happens**: Some domains are [auto-renew only](/articles/domain-auto-renewal/) and require an active subscription to DNSimple. These domains:

- Cannot be renewed manually
- Have no grace period
- Cannot be recovered once expired
- Must have auto-renewal enabled with a valid payment method

**Resolution**: 

1. **Ensure you have a subscription**: Auto-renew only domains require an active DNSimple subscription. Verify your subscription status.

2. **Enable auto-renewal**: [Enable auto-renewal](/articles/enabling-disabling-domain-auto-renewal/) for the domain and ensure your payment method is valid.

3. **Contact support**: If you're unsure whether your domain is auto-renew only or need help setting up auto-renewal, [contact support](https://dnsimple.com/feedback).

## Grace period questions

**Symptom**: You're unsure about grace periods and when you can renew your expired domain.

**Important information**:

- **Grace period is not guaranteed**: Our registrar partners may offer a non-guaranteed 29-day grace period for renewal for most generic top-level domains (gTLDs). There is no guaranteed grace period. For more details, see [What Happens When a Domain Expires?](/articles/what-happens-when-domain-expires/#grace-period).

- **Early renewal doesn't lose time**: Renewal years are always added to the end of the current registration period, so you will never lose time on your domain by renewing early.

- **ccTLDs may differ**: Country code TLDs (ccTLDs) may have different grace period rules or no grace period at all. See [What Happens When a Domain Expires?](/articles/what-happens-when-domain-expires/) for more information about expiration periods.

**Resolution**: If your domain has expired, attempt to [renew it immediately](/articles/renewing-domain/). If renewal is not available, the domain may have entered redemption period, and you'll need to [restore it](/articles/restoring-domain/) instead.

## Have more questions?

If you've tried these troubleshooting steps and are still experiencing issues with domain expiration or renewal, [contact our support team](https://dnsimple.com/feedback). Please include:

- Your domain name
- The current status of the domain (expired, in redemption, etc.)
- Whether auto-renewal is enabled
- Your payment method status
- Any error messages you've encountered
- Steps you've already taken to resolve the issue

We'll be happy to help you renew or restore your domain and prevent future expiration issues.
