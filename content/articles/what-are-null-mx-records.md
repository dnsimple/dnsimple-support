---
title: What Are Null MX Records?
excerpt: Learn what null MX records are, why they're important for security, and when to use them.
meta: Understand null MX records and how they prevent backscatter and improve email security for domains that don't accept email.
categories:
- Emails
- DNS
---

# What Are Null MX Records?

### Table of Contents {#toc}

* TOC
{:toc}

---

A **null MX record** is a special type of MX record that explicitly indicates that a domain does not accept email. This prevents mail servers from attempting to deliver email to the domain and helps protect against backscatter and other email-related issues.

## Understanding null MX records

Standard MX records specify which mail servers should receive email for a domain. A null MX record, on the other hand, explicitly states that a domain has no mail servers and will not accept email.

Null MX records are defined in [RFC 7505](https://datatracker.ietf.org/doc/html/rfc7505) and use a special format:

- **Priority:** 0
- **Mail server:** `.` (a single dot, representing the root of the DNS hierarchy)

This combination tells mail servers: "This domain does not accept email. Do not attempt delivery."

## Why use null MX records?

### Prevent backscatter

**Backscatter** occurs when a mail server receives an email that it cannot deliver and sends a bounce message (non-delivery report) back to the sender. However, if the original email was spoofed (had a fake sender address), the bounce message goes to an innocent third party.

Null MX records prevent this by telling mail servers upfront that the domain doesn't accept email, so they won't attempt delivery and won't generate bounce messages.

### Security benefits

Null MX records provide several security benefits:

- **Prevent email spoofing:** By explicitly stating a domain doesn't accept email, you reduce the risk of your domain being used in email spoofing attacks.
- **Reduce spam:** Prevents your domain from being targeted by spam or phishing attempts.
- **Protect reputation:** Helps protect your domain's reputation by preventing failed delivery attempts.

### Compliance and best practices

Using null MX records is considered a best practice for domains that don't need email functionality. It's a clear, standards-based way to communicate that a domain doesn't accept email.

## When to use null MX records

Use null MX records when:

- **Your domain doesn't need email:** You're using the domain only for websites, APIs, or other non-email purposes.
- **You want to prevent email delivery attempts:** You want to explicitly tell mail servers not to attempt delivery.
- **You're concerned about security:** You want to reduce the risk of email-related security issues.
- **You're following best practices:** You want to follow RFC 7505 recommendations for domains that don't accept email.

<warning>
**Important:** Only use null MX records if you're certain your domain will never need to receive email. If you might need email in the future, it's better to simply not have any MX records rather than using a null MX record.
</warning>

## When not to use null MX records

Do not use null MX records if:

- **You use email forwarding:** DNSimple's email forwarding service requires MX records. Null MX records will prevent email forwarding from working.
- **You use email hosting:** Any email hosting service (Google Workspace, Microsoft 365, etc.) requires MX records pointing to their mail servers.
- **You might need email in the future:** If there's any possibility you'll need email functionality, don't use null MX records.

## How null MX records work

When a mail server tries to deliver an email to a domain with a null MX record:

1. **DNS lookup:** The mail server performs a DNS lookup for MX records.
2. **Null MX detected:** The mail server finds the null MX record (priority 0, mail server `.`).
3. **Delivery prevented:** The mail server recognizes this as a null MX record and does not attempt delivery.
4. **Immediate rejection:** The mail server can immediately reject the email or return an error to the sender, without attempting delivery.

This is more efficient and secure than attempting delivery to a non-existent mail server, which would result in a delayed bounce message.

## Null MX records vs. no MX records

There's an important difference between having a null MX record and having no MX records at all:

**No MX records:**
- Mail servers may fall back to attempting delivery to the domain's A record (if one exists).
- This can lead to delivery attempts, connection timeouts, and delayed bounce messages.
- Less clear communication about email acceptance.

**Null MX record:**
- Explicitly states the domain does not accept email.
- Prevents delivery attempts entirely.
- Clear, standards-based communication.
- More secure and efficient.

<info>
According to RFC 7505, if a domain has no MX records, mail servers should check for an A or AAAA record and attempt delivery there. A null MX record prevents this fallback behavior.
</info>

## Technical details

Null MX records follow this format:

```
Priority: 0
Mail Server: .
```

In DNSimple's Record Editor, you would create this as:
- **Record type:** MX
- **Name:** (blank or `@` for root domain)
- **Priority:** 0
- **Mail server:** `.`

The single dot (`.`) represents the root of the DNS hierarchy and is the standard way to represent "no mail server" in DNS.

## Related topics

- [Setting Up Null MX Records](/articles/setting-up-null-mx-records/) - Step-by-step guide to configuring null MX records
- [What Is an MX Record?](/articles/mx-record/) - General information about MX records
- [Email Forwarding](/articles/email-forwarding/) - Information about DNSimple's email forwarding service

## Have more questions?

If you have additional questions or need any assistance with null MX records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
