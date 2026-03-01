---
title: Impact of Name Server Changes on Email Delivery
excerpt: Understand how changing name servers affects MX record resolution and email delivery during transitions.
meta: Learn how name server changes impact email delivery, including propagation delays, MX record resolution, and best practices for maintaining email service during DNS transitions.
categories:
- Emails
- Name Servers
---

# Impact of Name Server Changes on Email Delivery

### Table of Contents {#toc}

* TOC
{:toc}

---

Changing your domain's name servers affects all DNS record resolution, including MX records that direct email delivery. Understanding this relationship is crucial when migrating DNS providers or updating name server configurations, as improper planning can result in email delivery failures during the transition period.

## How name servers affect email delivery

Email delivery depends on MX (Mail Exchange) records, which specify which mail servers are responsible for accepting email for your domain, as defined in [RFC 1035, Section 3.3.9](https://datatracker.ietf.org/doc/html/rfc1035#section-3.3.9). These MX records are stored in your DNS zone file, which is served by your domain's authoritative name servers.

When you change your domain's name servers:

1. **MX record resolution changes**: Email servers query your new name servers to find MX records instead of your old ones.

2. **DNS propagation delays**: During the propagation period, some email servers may still query your old name servers while others query your new ones, leading to inconsistent MX record resolution.

3. **Email routing disruption**: If MX records aren't properly configured in your new DNS provider's zone file, or if propagation hasn't completed, email delivery can fail.

## What happens during name server changes

### Before the change

While your domain uses the old name servers, email delivery works normally:

- Sending mail servers query your old name servers for MX records.
- MX records point to your mail servers (e.g., Google Workspace, Microsoft 365, or your own mail server).
- Email is delivered successfully to the correct destination.

### During propagation

The transition period creates a complex situation:

- **Some email servers query old name servers**: These servers see your old MX records and continue delivering email to the correct mail servers.

- **Some email servers query new name servers**: These servers see your new MX records. If your MX records are configured correctly in your new DNS provider, email continues to work. If not, delivery fails.

- **Inconsistent resolution**: Different email servers may resolve different MX records, leading to unpredictable delivery behavior.

### After propagation completes

Once propagation is complete (typically within 24-48 hours):

- All email servers query your new name servers.
- MX records from your new DNS provider are used consistently.
- Email delivery stabilizes, assuming MX records are correctly configured.

## Common email delivery issues during transitions

### Missing MX records

If you change name servers but haven't added MX records to your new DNS provider's zone file, email delivery will fail once email servers start querying your new name servers.

**Symptoms:**
- Email bounces with "no MX record" errors
- Email is rejected by sending mail servers
- Delivery failures increase over time as more servers query new name servers

**Why it happens:** When name servers change but MX records aren't configured in the new DNS provider's zone file, email servers that query the new name servers receive no MX records, causing delivery to fail.

### Propagation delays

During the propagation period, some email servers may query old name servers while others query new ones, creating inconsistent behavior.

**Why it happens:** DNS propagation is not instantaneous. Different DNS resolvers and email servers update at different times, creating a window where some servers see old name servers while others see new ones. This inconsistency directly affects MX record resolution and email delivery.

**Symptoms:**
- Some emails are delivered successfully while others fail
- Intermittent email delivery issues
- Delivery failures that resolve themselves after a few hours

### Incorrect MX record configuration

If MX records in your new DNS provider don't match your email service requirements, email delivery will fail.

**Why it happens:** Different email service providers require specific MX records with specific priorities. If the MX records in your new DNS provider don't match these requirements exactly, email servers may attempt to deliver to incorrect mail servers or reject delivery entirely.

**Symptoms:**
- Email bounces or is rejected
- Email is delivered to wrong mail servers
- Delivery failures for specific email services

### TTL and caching issues

DNS resolvers cache MX records based on their TTL values. During transitions, cached records may delay the switch to new name servers.

**Why it happens:** DNS resolvers cache MX records to improve performance. When name servers change, resolvers continue using cached MX records until the TTL expires. This means some email servers may continue using old MX record information even after name servers have changed, creating a delay in recognizing the new configuration.

**Symptoms:**
- Email continues working with old configuration longer than expected
- Delayed recognition of new MX records
- Inconsistent behavior across different email servers

## Why email delivery can be affected

The relationship between name servers and email delivery is fundamental to how email works on the internet. When you change name servers, you're changing where email servers look to find your MX records. This creates several potential points of failure:

### The dependency chain

Email delivery depends on a chain of DNS lookups:

1. **Email server queries for MX records**: When someone sends you an email, their mail server performs a DNS query for your domain's MX records, as specified in [RFC 5321](https://datatracker.ietf.org/doc/html/rfc5321) (Simple Mail Transfer Protocol).

2. **DNS resolver finds authoritative name servers**: The DNS resolver uses your domain's name server delegation to determine which name servers are authoritative for your domain.

3. **MX records are retrieved**: The resolver queries your authoritative name servers for MX records.

4. **Email is delivered**: The sending mail server uses the MX records to determine where to deliver the email.

If any step in this chain is broken or inconsistent, email delivery can fail. Name server changes affect step 2, which can cascade through the entire process.

### The timing problem

The fundamental challenge with name server changes and email is timing. Email servers around the world may query your domain's MX records at different times, and they may be using different DNS resolvers that have cached different information. During the propagation period, this creates a situation where:

- Some email servers successfully deliver email because they're querying name servers that have the correct MX records
- Other email servers fail to deliver email because they're querying name servers that don't have MX records or have incorrect ones
- The same email server may succeed or fail depending on which DNS resolver it uses

This inconsistency is why email delivery can be unpredictable during name server transitions.

## Special considerations

### Email service providers

Different email service providers have specific MX record requirements:

- **Google Workspace**: Requires specific MX records with specific priorities. See [Google's MX record documentation](https://support.google.com/a/answer/140034).

- **Microsoft 365**: Has specific MX record requirements. See [Microsoft's documentation](https://learn.microsoft.com/en-us/microsoft-365/admin/setup/domains-faq).

- **Custom mail servers**: Ensure MX records point to the correct mail server hostnames and that those hostnames resolve to the correct IP addresses.

### Vanity name servers

When using vanity name servers, the relationship between name servers and email delivery becomes more complex. Glue records must be properly configured at the registry level, and MX records must exist in the zone file served by the vanity name servers. The propagation of glue records adds another layer of complexity to the transition process.

For more information, see [Managing Vanity Name Servers](/articles/vanity-nameservers/).

### Secondary DNS

When using Secondary DNS, MX records must be consistent across all name servers (both primary and secondary) to ensure reliable email delivery. If MX records differ between name servers, email delivery can become inconsistent depending on which name server an email server queries.

## Technical references

The email delivery process and DNS resolution are defined in several Internet Engineering Task Force (IETF) Request for Comments (RFC) documents:

- [RFC 5321](https://datatracker.ietf.org/doc/html/rfc5321): Simple Mail Transfer Protocol (defines how email servers use MX records for delivery)
- [RFC 1035, Section 3.3.9](https://datatracker.ietf.org/doc/html/rfc1035#section-3.3.9): Domain Names - Implementation and Specification (defines MX record format and structure)
- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035): Domain Names - Implementation and Specification (defines DNS protocol and name server delegation)

## Related articles

- [What Is an MX Record?](/articles/mx-record/): Learn about MX records and how they work.
- [Understanding Name Server Propagation](/articles/understanding-name-server-propagation/): Understand how name server changes propagate.
- [Troubleshooting Email Issues Related to Name Servers](/articles/troubleshooting-email-issues-name-servers/): Step-by-step guide to diagnosing and resolving email problems caused by name server issues.

## Have more questions?

If you have additional questions about how name server changes affect email delivery or need assistance with your email configuration, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
