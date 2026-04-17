---
title: Set Up MX Records for Email Hosting
excerpt: How to configure MX records for email hosting providers like Google Workspace, Microsoft 365, and other email services.
meta: Step-by-step guide to setting up MX records for email hosting providers, ensuring proper email delivery for your domain.
categories:
- Emails
- DNS
---

# Set Up MX Records for Email Hosting
### Table of Contents {#toc}

* TOC
{:toc}

---

MX records tell other mail servers where to deliver emails sent to addresses at your domain. When you use an email hosting service like Google Workspace, Microsoft 365, or another provider, you need to configure MX records to point to that service's mail servers.

## Understanding MX records for email hosting {#understanding}

[MX records](/articles/mx-record/) specify which mail servers are responsible for accepting email messages for your domain. Each MX record includes:

- **Priority value:** A number indicating the preference order (lower numbers = higher priority)
- **Mail server hostname:** The domain name of the mail server (e.g., `aspmx.l.google.com`)

When you configure email hosting, your email provider will give you specific MX records to add to your DNS zone. These records direct incoming email to your provider's mail servers.

## Prerequisites {#prerequisites}

Before setting up MX records for email hosting:

1. **Have a domain managed in DNSimple:** Your domain must be in your DNSimple account with a primary (forward) zone.
2. **Choose an email hosting provider:** Select a service like Google Workspace, Microsoft 365, FastMail, or another email hosting provider.
3. **Get MX record information:** Your email provider will provide the specific MX records you need to configure.

> [!WARNING]
> If you are currently using DNSimple's email forwarding service, enabling email hosting will require removing the email forwarding MX records. Email forwarding and email hosting cannot be used simultaneously because both use MX records, and a domain can only have one set of MX records.

## Provider-specific setup guides {#provider-guides}

DNSimple offers one-click services and detailed setup guides for popular email hosting providers. These guides cover MX records, domain verification, email authentication, and troubleshooting:

- **[Google Workspace](/articles/google-workspace-service/)** -- one-click service available, or manual MX record configuration
- **[Microsoft 365](/articles/office-365-service/)** -- one-click service available, or manual MX record configuration
- **[FastMail](/articles/fastmail-service/)** -- one-click service available
- **[Mailgun](/articles/mailgun-service/)** -- one-click service available
- **[Postmark](/articles/postmark-service/)** -- one-click service available
- **[Rackspace Email](/articles/rackspace-email-service/)** -- one-click service available
- **[Pobox](/articles/pobox-service/)** -- one-click service available
- **[Atmail](/articles/atmail-service/)** -- one-click service available

See the full list of [one-click services for email](/articles/services/#email).

## Setting up MX records for other email providers {#other-providers}

For email hosting providers that do not have a one-click service in DNSimple (e.g., Zoho, ProtonMail, or other providers):

<div class="section-steps" markdown="1">
##### Add MX records for other providers

1. Get MX record information from your email provider or their documentation.
1. In DNSimple, navigate to your domain's <label>DNS</label> tab and open the <label>Record Editor</label>.
1. Remove any existing MX records if you are switching providers.
1. Click <label>Add record</label> and select **MX**.
1. Leave the <label>Name</label> field blank (or enter `@`) for the root domain.
1. Enter the priority value provided by your email provider.
1. Enter the mail server hostname provided by your email provider.
1. Click <label>Add record</label>.
1. Repeat for all MX records provided by your email provider.
</div>

## Verifying MX records {#verifying}

After configuring MX records, verify they are working correctly:

1. **Check DNS propagation:** Use online tools like [whatsmydns.net](https://www.whatsmydns.net/#MX) to verify your MX records have propagated globally.
2. **Use dig command:** Test MX records using the `dig` command:
   ```
   dig +short yourdomain.com MX
   ```
3. **Test email delivery:** Send a test email to an address at your domain to verify delivery is working.
4. **Check with your provider:** Many email providers offer verification tools (like Google's MX checker) to confirm your configuration.

## Common considerations {#considerations}

**DNS propagation:** After adding or modifying MX records, it may take time for changes to propagate globally. This typically takes a few minutes to a few hours.

**Email service transition:** When switching from one email provider to another, plan for a transition period. Emails may be delivered to the old provider until DNS fully propagates.

**Multiple MX records:** Most email providers use multiple MX records with different priorities for redundancy. Always add all MX records provided by your email provider.

**Priority values:** Lower priority numbers indicate higher preference. Mail servers will try to deliver to the lowest priority server first.

## Troubleshooting {#troubleshooting}

If emails are not being delivered after setting up MX records:

1. **Verify MX records are published:** Use `dig` or online tools to confirm your MX records are visible.
2. **Check priority values:** Ensure priority values match what your email provider specified.
3. **Verify hostnames:** Ensure mail server hostnames are exactly as provided by your email provider.
4. **Check for conflicts:** Ensure you do not have conflicting MX records or email forwarding enabled.
5. **Wait for propagation:** Allow time for DNS changes to propagate (up to 48 hours, though typically much faster).

When switching providers, plan your MX record changes carefully and verify propagation before relying on the new mail path. If you need help, [contact support](https://dnsimple.com/feedback).

## Have more questions?

If you have additional questions or need any assistance with setting up MX records for email hosting, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
