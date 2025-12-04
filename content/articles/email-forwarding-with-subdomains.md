---
title: Email Forwarding with Subdomains
excerpt: Learn how to set up email forwarding for subdomains in DNSimple.
meta: Step-by-step guide to configuring email forwarding for subdomains, allowing you to receive emails at addresses like user@subdomain.yourdomain.com.
categories:
- Emails
---

# Email Forwarding with Subdomains

### Table of Contents {#toc}

* TOC
{:toc}

---

Email forwarding can be configured for subdomains, allowing you to receive emails at addresses like `hello@subdomain.yourdomain.com`. This guide explains how to set up email forwarding for subdomains in DNSimple.

## Understanding email forwarding for subdomains

Email forwarding for subdomains works similarly to email forwarding for the root domain, but requires additional DNS configuration. When you set up email forwarding for a subdomain:

- The subdomain needs its own DNS zone or be configured as an alias
- MX records must be configured for the subdomain
- Email forwarding rules are created for the subdomain

<info>
**Subdomain requirements:** To use email forwarding with a subdomain, the subdomain must be properly configured in DNSimple. See [Adding a Subdomain](/articles/adding-subdomain/) for information about setting up subdomains.
</info>

## Prerequisites

Before setting up email forwarding for a subdomain:

1. **Subdomain exists:** The subdomain must be added to your DNSimple account.
2. **DNS configuration:** The subdomain must have proper DNS configuration (either as a separate zone or using alias records).
3. **Plan requirements:** You must be subscribed to a plan that includes email forwarding.

<warning>
**Email forwarding billing:** Email forwarding is billed per domain. If you set up email forwarding for a subdomain that's configured as a separate zone, it will be billed separately. If the subdomain uses alias records pointing to the main domain, email forwarding for the main domain will handle emails for the subdomain.
</warning>

## Setting up email forwarding for a subdomain

### Option 1: Subdomain as separate zone (recommended for independent email)

If you want the subdomain to have independent email forwarding:

1. **Ensure subdomain is a separate zone:**
   - Navigate to your domain list
   - Verify the subdomain appears as a separate domain/zone
   - If not, you may need to add it as a separate zone

2. **Enable email forwarding for the subdomain:**
   - Click on the subdomain name
   - Click the **Email Forwarding** tab
   - Create your first email forward to enable the service

3. **Create email forwards:**
   - Follow the same process as for the root domain
   - Create email forwards for addresses at the subdomain (e.g., `hello@subdomain.yourdomain.com`)

<info>
**Separate billing:** When a subdomain is configured as a separate zone with email forwarding, it's billed separately as its own domain.
</info>

### Option 2: Subdomain using alias records (uses main domain's email forwarding)

If your subdomain uses alias records pointing to the main domain:

1. **Verify alias configuration:**
   - Check that the subdomain has alias records pointing to the main domain
   - Email forwarding for the main domain will handle emails sent to the subdomain

2. **Configure email forwarding on main domain:**
   - Set up email forwarding on the main domain (if not already configured)
   - Create email forwards as needed

3. **Create email forwards for subdomain addresses:**
   - When creating an email forward, you can specify the subdomain in the "From" field
   - For example, to forward `hello@subdomain.yourdomain.com`, enter `hello@subdomain` in the From field
   - Or create a forward with the full address format if supported

<info>
**Email address format:** The exact format for subdomain email addresses may vary. Contact support if you need assistance with the specific format for your configuration.
</info>

## Creating email forwards for subdomain addresses

### Method 1: Using the subdomain in the From field

When creating an email forward for a subdomain address:

1. Navigate to the domain's **Email Forwarding** tab (or subdomain's tab if it's a separate zone).
2. Click **Add email forward**.
3. In the **From** field, enter the full local part including subdomain:
   - For `hello@subdomain.yourdomain.com`, you might enter: `hello@subdomain`
   - Or: `subdomain.hello` (depending on your configuration)
4. In the **To** field, enter the destination email address.
5. Click **Add email forward**.

### Method 2: Using catch-all for subdomain

You can set up a catch-all email forward that handles all emails to a subdomain:

1. Navigate to the appropriate **Email Forwarding** tab.
2. Click **Add email forward**.
3. Select **Catch-all** or enter `(.*)` in the **From** field.
4. Configure the catch-all to forward to your desired destination.
5. Click **Add email forward**.

<info>
**Catch-all behavior:** A catch-all email forward will handle emails sent to any address at the domain (or subdomain, depending on where it's configured) that doesn't have a specific forward.
</info>

## DNS configuration for subdomain email

For email forwarding to work with subdomains, the subdomain needs proper MX records. DNSimple automatically adds MX records when you enable email forwarding, but the configuration depends on how your subdomain is set up.

### Subdomain as separate zone

If the subdomain is a separate zone:
- DNSimple automatically adds MX records to the subdomain's zone when you enable email forwarding
- The MX records point to DNSimple's email forwarding servers
- No additional DNS configuration is typically needed

### Subdomain using alias records

If the subdomain uses alias records:
- The subdomain may inherit MX records from the main domain
- Or you may need to add MX records specifically for the subdomain
- Contact support for assistance with this configuration

## Testing subdomain email forwarding

After setting up email forwarding for a subdomain:

1. **Send a test email:** Send an email to an address at the subdomain (e.g., `test@subdomain.yourdomain.com`).
2. **Check destination:** Verify the email arrives at the destination address you configured.
3. **Check headers:** Review the email headers to confirm it was forwarded correctly.
4. **Test multiple addresses:** Test different addresses to ensure forwarding works as expected.

## Common scenarios

### Scenario 1: Department-specific email

You want separate email addresses for different departments using subdomains:

- `sales@sales.yourdomain.com`
- `support@support.yourdomain.com`
- `info@info.yourdomain.com`

**Solution:** Set up each subdomain as a separate zone (if needed) and configure email forwarding for each, or use the main domain's email forwarding with subdomain-specific addresses.

### Scenario 2: Project-specific email

You want email addresses for specific projects:

- `contact@project1.yourdomain.com`
- `hello@project2.yourdomain.com`

**Solution:** Configure email forwarding on the main domain with subdomain-specific addresses in the From field, or set up separate zones for each subdomain.

### Scenario 3: Catch-all for subdomain

You want to receive all emails sent to any address at a subdomain:

- `anything@subdomain.yourdomain.com` → forwarded to your main email

**Solution:** Set up a catch-all email forward for the subdomain (or main domain if using alias configuration).

## Troubleshooting

### Emails not being forwarded from subdomain

**Problem:** Emails sent to subdomain addresses aren't being forwarded.

**Solutions:**
1. **Verify subdomain configuration:** Ensure the subdomain is properly configured in DNSimple.
2. **Check MX records:** Verify MX records exist for the subdomain using `dig +short subdomain.yourdomain.com MX`.
3. **Verify email forwarding:** Ensure email forwarding is enabled for the subdomain (or main domain if using alias configuration).
4. **Check email forward configuration:** Verify the email forward is configured correctly for the subdomain address.
5. **Test DNS propagation:** Allow time for DNS changes to propagate.

### Subdomain email forwarding not available

**Problem:** You can't set up email forwarding for a subdomain.

**Solutions:**
1. **Check subdomain setup:** Ensure the subdomain is properly added to your DNSimple account.
2. **Verify plan:** Ensure your plan includes email forwarding.
3. **Check zone configuration:** Verify the subdomain is configured as expected (separate zone or alias).
4. **Contact support:** If issues persist, contact support for assistance.

## Best practices

**Plan your subdomain structure:** Consider how you want to organize email addresses before setting up subdomains.

**Use separate zones when needed:** If you need independent email forwarding for a subdomain, configure it as a separate zone.

**Test thoroughly:** Always test email forwarding after setting it up to ensure it works as expected.

**Document your configuration:** Keep notes about how your subdomain email forwarding is configured for future reference.

## Related topics

- [What Is Email Forwarding?](/articles/what-is-email-forwarding/) - Overview of email forwarding
- [Adding a Subdomain](/articles/adding-subdomain/) - How to add subdomains in DNSimple
- [Creating and Deleting Email Forwards](/articles/managing-email-forwards/) - How to create email forwards
- [Email Forwarding Management](/articles/email-forwarding-management/) - Guide to managing email forwarding

## Have more questions?

If you have additional questions or need any assistance with email forwarding for subdomains, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
