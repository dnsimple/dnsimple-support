---
title: Email Forwarding Limits and Quotas
excerpt: Detailed explanation of email forwarding limits, quotas, and billing at DNSimple.
meta: Email forwarding limits, message quotas, and billing details for each DNSimple plan. Understand what happens when you reach your forwarding limit.
categories:
- Emails
---

# Email Forwarding Limits and Quotas

### Table of Contents {#toc}

* TOC
{:toc}

---

Email forwarding at DNSimple is subject to limits and quotas based on your subscription plan. Email forwarding is billed monthly on a per-domain basis, and the number of forwarded messages and email forwards allowed per month varies depending on your DNSimple plan.

> [!NOTE]
> For the most current information about email forwarding limits for each plan, see [DNSimple Pricing](https://dnsimple.com/pricing).

## Billing structure {#billing}

### Per-domain billing

Email forwarding is billed separately for each domain where it is enabled. If you have email forwarding enabled on multiple domains, you will be charged for each domain individually.

**Example:**
- Domain 1 with email forwarding: $2/month
- Domain 2 with email forwarding: $2/month
- Total: $4/month

### Monthly billing cycle

Email forwarding is billed on a monthly basis. Charges are prorated if you enable or disable email forwarding partway through a billing cycle.

## Email forwarding limits by plan {#limits-by-plan}

The specific limits for email forwarding vary by plan. Generally, plans include:

- **Number of email forwards:** The maximum number of individual email forwarding rules you can create per domain
- **Message limits:** The maximum number of emails that can be forwarded per month per domain

> [!NOTE]
> Exact limits are detailed on the [DNSimple Pricing page](https://dnsimple.com/pricing). Limits typically increase with higher-tier plans.

## Understanding message limits {#message-limits}

Message limits refer to the total number of emails that can be forwarded per month for a domain. This includes:

- Emails forwarded through specific email forwards
- Emails forwarded through catch-all email forwards
- All emails processed by the email forwarding service

### How message limits work

1. **Monthly reset:** Message limits reset at the beginning of each billing cycle.
2. **Per-domain basis:** Limits apply separately to each domain.
3. **Cumulative counting:** All forwarded emails count toward the limit, regardless of which email forward handles them.

### What happens when limits are reached

If you reach your message limit:

- **Temporary suspension:** Email forwarding is temporarily suspended for that domain until the next billing cycle.
- **Upgrade option:** You can upgrade your plan to increase limits.

> [!WARNING]
> If email forwarding is suspended due to reaching message limits, emails sent to forwarded addresses will bounce until the limit resets or you upgrade your plan.

## Understanding email forward limits {#forward-limits}

Email forward limits refer to the maximum number of individual email forwarding rules you can create per domain.

### Types of email forwards

Email forward limits apply to:

- **Specific email forwards:** Individual forwarding rules (e.g., `hello@yourdomain.com` to `yourname@gmail.com`)
- **Catch-all email forwards:** A single catch-all forward counts as one email forward

### What happens when limits are reached

If you reach your email forward limit:

- **Cannot create new forwards:** You will not be able to create additional email forwards until you delete existing ones or upgrade your plan.
- **Existing forwards continue working:** Existing email forwards will continue to function normally.
- **Upgrade option:** You can upgrade your plan to increase the limit.

## Monitoring your usage {#monitoring}

### Check your current usage

To monitor your email forwarding usage:

1. Navigate to your domain's <label>Email Forwarding</label> tab.
2. Review the list of email forwards to see how many you have configured.
3. Check your account dashboard for any usage notifications or warnings.

> [!TIP]
> DNSimple tracks your email forwarding usage. [Contact support](https://dnsimple.com/feedback) if you need detailed usage statistics for your account.

### Best practices for monitoring

- **Regular reviews:** Periodically review your email forwarding configuration to ensure you are not approaching limits.
- **Remove unused forwards:** Delete email forwards you no longer need to stay within limits.
- **Plan ahead:** Consider your email forwarding needs when choosing a DNSimple plan.

## Managing limits effectively {#managing-limits}

### Optimize email forward usage

**Use catch-all strategically:**
- A catch-all email forward counts as one email forward but can handle emails to many addresses.
- Consider using a catch-all if you need to forward emails to many different addresses.

**Consolidate forwards:**
- If multiple email addresses forward to the same destination, consider whether you can consolidate them.
- Catch-all forwards only apply to addresses without specific forwards.

### Optimize message usage

**Filter at destination:**
- Use filters and rules in your destination email account (Gmail, Outlook, etc.) to manage forwarded emails.
- This does not reduce message counts but helps organize your inbox.

**Monitor for abuse:**
- Regularly check for spam or unwanted emails that might be consuming your message quota.
- Consider disabling catch-all forwards if they are receiving too much spam.

## Upgrading your plan {#upgrading}

If you need higher limits:

1. **Review your needs:** Assess your current usage and future requirements.
2. **Compare plans:** Review the [DNSimple Pricing page](https://dnsimple.com/pricing) to see which plan meets your needs.
3. **Upgrade:** Upgrade your plan through your DNSimple account settings.
4. **Immediate effect:** Higher limits take effect immediately upon upgrade.

> [!NOTE]
> When you upgrade mid-cycle, you will be charged a prorated amount for the remainder of the billing cycle.

## Common questions {#common-questions}

### Do limits reset monthly?

Yes, message limits reset at the beginning of each billing cycle. Email forward limits are based on the maximum number you can have at any time, not a monthly quota.

### Can I exceed limits temporarily?

No, limits are hard limits. You cannot exceed your plan's limits. If you need higher limits, you will need to upgrade your plan.

### What happens to existing forwards if I downgrade?

If you downgrade to a plan with lower email forward limits and you have more forwards than the new limit allows:

- You may need to delete some email forwards to stay within the new limit.
- Existing forwards will continue working until you reach the new limit.
- Contact support for assistance with managing this transition.

### Are there limits on email size?

Email forwarding has size limits for individual emails. Very large emails may not be forwarded successfully. [Contact support](https://dnsimple.com/feedback) if you are experiencing issues with large emails.

## Have more questions?

If you have additional questions about email forwarding limits, quotas, or billing, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
