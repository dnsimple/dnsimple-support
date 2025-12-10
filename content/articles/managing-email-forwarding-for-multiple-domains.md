---
title: Managing Email Forwarding for Multiple Domains
excerpt: Learn how to efficiently manage email forwarding across multiple domains in DNSimple.
meta: Guide to managing email forwarding for multiple domains, including best practices and tips for efficient administration.
categories:
- Emails
---

# Managing Email Forwarding for Multiple Domains

### Table of Contents {#toc}

* TOC
{:toc}

---

If you manage multiple domains in DNSimple, you may want to set up email forwarding for each of them. This guide will help you efficiently manage email forwarding across multiple domains.

## Overview

Email forwarding in DNSimple is configured on a per-domain basis. Each domain can have its own email forwarding configuration, and email forwarding is billed separately for each domain where it's enabled.

<info>
**Billing:** Email forwarding is billed monthly on a per-domain basis. If you enable email forwarding on multiple domains, you'll be charged for each domain. See [Email Forwarding Limits and Quotas](/articles/email-forwarding-limits-and-quotas/) for more information.
</info>

## Setting up email forwarding for multiple domains

### Individual domain setup

To set up email forwarding for multiple domains:

1. **Navigate to each domain:**
   - Use the account switcher to select the appropriate account
   - Click on each domain name from your Domain Names list

2. **Enable email forwarding:**
   - Click the **Email Forwarding** tab for each domain
   - Create your first email forward to enable the service
   - Repeat for each domain where you want email forwarding

3. **Configure email forwards:**
   - Create the specific email forwards you need for each domain
   - Each domain can have its own set of email forwarding rules

### Bulk setup considerations

While DNSimple doesn't currently offer bulk email forwarding setup through the web interface, you can:

- **Use the API:** The DNSimple API supports programmatic management of email forwards, which can help with bulk operations
- **Plan your configuration:** Create a list of domains and their email forwarding needs before starting setup
- **Use templates:** If multiple domains need similar forwarding rules, use a consistent naming convention

<info>
For API-based management, see our [developer documentation](https://developer.dnsimple.com/v2/domains/email-forwards/).
</info>

## Managing email forwarding across domains

### Centralized management approach

If you want to forward emails from multiple domains to a single destination:

1. **Set up email forwarding on each domain:**
   - Enable email forwarding for each domain
   - Create email forwards pointing to your central email address

2. **Use consistent naming:**
   - Use the same local part (e.g., `hello`, `contact`, `info`) across domains
   - This makes it easier to manage and remember

3. **Example configuration:**
   - `hello@domain1.com` → `yourname@gmail.com`
   - `hello@domain2.com` → `yourname@gmail.com`
   - `hello@domain3.com` → `yourname@gmail.com`

### Domain-specific management approach

If each domain needs different email forwarding rules:

1. **Plan domain-specific rules:**
   - Determine which email addresses each domain needs
   - Create domain-specific forwarding rules

2. **Organize by purpose:**
   - Use email addresses that reflect each domain's purpose
   - For example: `sales@businessdomain.com`, `support@supportdomain.com`

3. **Document your configuration:**
   - Keep a record of which domains have which email forwards
   - This helps with troubleshooting and future management

## Best practices for multiple domains

### Consistent configuration

**Use similar email addresses:**
- Use consistent local parts (e.g., `contact`, `hello`, `info`) across domains when appropriate
- This makes it easier to remember and manage

**Standardize destinations:**
- If forwarding to the same destination, use consistent forwarding rules
- This simplifies management and reduces errors

### Organization and documentation

**Keep records:**
- Document which domains have email forwarding enabled
- Note which email addresses are configured for each domain
- Track any domain-specific requirements or exceptions

**Use labels or notes:**
- DNSimple allows you to label domains, which can help with organization
- Use labels to group domains with similar email forwarding needs

### Monitoring and maintenance

**Regular reviews:**
- Periodically review email forwarding configuration across all domains
- Remove unused email forwards to stay within limits
- Update forwarding rules as needs change

**Monitor usage:**
- Keep track of email forwarding usage across domains
- Ensure you're not approaching plan limits
- Upgrade your plan if needed

## Common scenarios

### Scenario 1: Multiple domains, single destination

You have multiple domains and want all emails to go to one email address:

**Setup:**
1. Enable email forwarding on each domain
2. Create catch-all email forwards on each domain
3. Point all catch-all forwards to your single destination email

**Benefits:**
- Simple to manage
- All emails in one inbox
- Easy to set up and maintain

**Considerations:**
- You'll need to identify which domain an email came from by checking the "To" field
- Each domain is billed separately for email forwarding

### Scenario 2: Domain-specific forwarding

Each domain needs to forward to different destinations:

**Setup:**
1. Enable email forwarding on each domain
2. Create domain-specific email forwards
3. Configure different destinations for each domain

**Benefits:**
- Clear separation of emails by domain
- Can forward to different team members or departments
- More organized email management

**Considerations:**
- More complex to manage
- Requires more planning and organization

### Scenario 3: Mixed approach

Some domains forward to a central address, others have domain-specific rules:

**Setup:**
1. Enable email forwarding on all domains
2. Configure catch-all forwards for domains that should all go to one place
3. Configure specific forwards for domains that need different handling

**Benefits:**
- Flexible configuration
- Balances simplicity with organization
- Adapts to different domain needs

## Using the dashboard for multiple domains

The DNSimple dashboard can help you manage email forwarding across domains:

1. **Quick access:**
   - Use the dashboard to quickly see all your domains
   - Click directly on domains to access their Email Forwarding tabs

2. **Add email forwards:**
   - Use the "Add" button on the dashboard to create email forwards
   - Select the domain from the dropdown when creating from the dashboard

3. **Monitor status:**
   - Check the dashboard for any notifications or alerts related to email forwarding

## Troubleshooting multiple domain issues

### Email forwarding not working for a specific domain

**Problem:** Email forwarding works for some domains but not others.

**Solutions:**
1. **Verify email forwarding is enabled:** Check that email forwarding is enabled for the specific domain
2. **Check MX records:** Verify MX records exist for the domain using `dig +short domain.com MX`
3. **Verify email forwards:** Ensure email forwards are configured correctly for that domain
4. **Check DNS propagation:** Allow time for DNS changes to propagate
5. **Test individually:** Send test emails to each domain to identify which ones have issues

### Managing limits across domains

**Problem:** You're approaching email forwarding limits across multiple domains.

**Solutions:**
1. **Review usage:** Check how many email forwards you have on each domain
2. **Remove unused forwards:** Delete email forwards you no longer need
3. **Consolidate where possible:** Use catch-all forwards when appropriate
4. **Upgrade plan:** Consider upgrading if you consistently need more limits

### Billing questions

**Problem:** Questions about billing for multiple domains.

**Solutions:**
1. **Per-domain billing:** Remember that email forwarding is billed per domain
2. **Check your invoice:** Review your DNSimple invoice to see charges for each domain
3. **Contact support:** If you have billing questions, contact support for clarification

## Related topics

- [What Is Email Forwarding?](/articles/what-is-email-forwarding/) - Overview of email forwarding
- [Email Forwarding Limits and Quotas](/articles/email-forwarding-limits-and-quotas/) - Information about limits and billing
- [Creating and Deleting Email Forwards](/articles/managing-email-forwards/) - How to create and manage email forwards
- [Email Forwarding Management](/articles/email-forwarding-management/) - Guide to the email forwarding interface

## Have more questions?

If you have additional questions or need any assistance with managing email forwarding for multiple domains, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
