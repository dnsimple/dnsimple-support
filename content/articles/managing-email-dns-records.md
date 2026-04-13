---
title: Managing Email DNS Records
excerpt: How to add and manage MX, SPF, DKIM, DMARC, and other email-related DNS records in DNSimple.
meta: How to manage email DNS records in DNSimple, including MX, SPF, DKIM, DMARC, CNAME, and TXT records for email delivery and authentication.
categories:
- Emails
- DNS
---

# Managing Email DNS Records

### Table of Contents {#toc}

* TOC
{:toc}

---

Email delivery and authentication rely on several DNS record types: [MX](/articles/mx-record/) for routing, [SPF](/articles/spf-record/) for sender authorization, [DKIM](/articles/dkim-record/) for message signing, and [DMARC](/articles/dmarc-record/) for policy enforcement. DNSimple lets you manage all of these in the [Record Editor](/articles/record-editor/).

## Email DNS records overview {#overview}

Email functionality requires several types of DNS records:

- **MX records:** Direct email delivery
- **SPF records:** Authorize email senders
- **DKIM records:** Cryptographically sign emails
- **DMARC records:** Enforce email policies
- **CNAME records:** Autodiscover and other services
- **TXT records:** Various email-related configurations

## MX records {#mx}

[MX (Mail Exchange) records](/articles/mx-record/) specify which mail servers receive email for your domain. You need MX records when using an email hosting service (Google Workspace, Microsoft 365, etc.) or DNSimple's email forwarding.

### How to configure MX records

**For email hosting:** Add the MX records provided by your email hosting provider. Most providers require multiple MX records with different priorities.

**For email forwarding:** MX records are automatically added when you enable email forwarding. Do not manually add MX records for email forwarding.

> [!NOTE]
> For detailed MX record setup, see [Setting Up MX Records for Email Hosting](/articles/setting-up-mx-records-for-email-hosting/).

## SPF records {#spf}

[SPF (Sender Policy Framework) records](/articles/spf-record/) authorize which servers can send email from your domain. SPF is stored as a TXT record at the root domain.

### How to configure SPF

Add a TXT record at the root domain that includes all authorized email senders and ends with `~all` or `-all`:

```
v=spf1 include:_spf.google.com include:spf.mtasv.net ~all
```

> [!WARNING]
> Your domain must have only one SPF record. If you use multiple email services, combine all `include:` statements into a single record.

> [!NOTE]
> For detailed SPF setup, see [Setting Up SPF Records](/articles/setting-up-spf/).

## DKIM records {#dkim}

[DKIM (DomainKeys Identified Mail)](/articles/dkim-record/) records publish the public keys that receiving mail servers use to verify your emails were not tampered with in transit.

### How to configure DKIM

1. Get the DKIM selector and public key from each email service provider.
1. Add a TXT record at `selector._domainkey.yourdomain.com` with the public key as the value.
1. If you use multiple email services, each one may require its own selector. Add a separate record for each.

> [!NOTE]
> For detailed DKIM setup, see [Setting Up DKIM](/articles/set-up-dkim/) and [Managing Multiple DKIM Selectors](/articles/managing-multiple-dkim-selectors/).

## DMARC records {#dmarc}

[DMARC (Domain-based Message Authentication, Reporting & Conformance)](/articles/dmarc-record/) tells receiving servers what to do when SPF or DKIM checks fail, and where to send reports.

### How to configure DMARC

Add a TXT record at `_dmarc.yourdomain.com`. Start with `p=none` to monitor without affecting delivery, then gradually move to `p=quarantine` or `p=reject` once you have confirmed all legitimate senders pass authentication:

```
v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com
```

> [!NOTE]
> For detailed DMARC setup, see [Setting Up DMARC](/articles/set-up-dmarc/) and [Implementing a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/).

## CNAME records for email services {#cname}

Some email providers require [CNAME records](/articles/cname-record/) for features like Autodiscover (automatic client configuration) and webmail access.

**Autodiscover (Microsoft 365):** `autodiscover` pointing to `autodiscover.outlook.com`. This lets email clients like Outlook configure themselves automatically.

**Webmail:** Some providers use a `webmail` CNAME pointing to their webmail server.

## TXT records for email {#txt}

Beyond SPF, DKIM, and DMARC (which are all stored as [TXT records](/articles/txt-record/)), email providers may require additional TXT records for domain verification or provider-specific settings. Check your provider's documentation for any extra records they require.

## Managing records in DNSimple {#managing}

### Using the Record Editor {#record-editor}

<div class="section-steps" markdown="1">
##### Add an email DNS record

1. Log into DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. On the header, click the <label>Domains</label> tab, locate the relevant domain, and click on the name.
1. Click the <label>DNS</label> tab.
1. Open the <label>Record Editor</label>.
1. Click <label>Add record</label>.
1. Select the record type.
1. Enter the record details.
1. Click <label>Add record</label>.
</div>

To edit a record, click the edit icon, modify the details, and click <label>Save</label>. To delete a record, click the delete icon and confirm the deletion.

### Best practices {#best-practices}

- **One SPF record:** Only one SPF record per domain
- **Document selectors:** Keep track of DKIM selectors
- **Monitor DMARC:** Review DMARC reports regularly
- **Test changes:** Test after making DNS changes
- **Verify records:** Use `dig` to verify records are published

## Verifying records {#verifying}

### Using dig

**MX records:**
```bash
dig +short yourdomain.com MX
```

**SPF records:**
```bash
dig +short yourdomain.com TXT | grep "v=spf1"
```

**DKIM records:**
```bash
dig +short selector._domainkey.yourdomain.com TXT
```

**DMARC records:**
```bash
dig +short _dmarc.yourdomain.com TXT
```

### Using online tools

- [whatsmydns.net](https://www.whatsmydns.net/) — Check DNS propagation
- [MXToolbox](https://mxtoolbox.com/) — Check MX, SPF, DKIM, and DMARC records
- [Mail-Tester](https://www.mail-tester.com/) — Test email authentication

## Common issues {#issues}

### Multiple SPF records

**Problem:** Multiple SPF records cause SPF to fail.

**Solution:** Combine all SPF includes into a single record.

### Missing DKIM records

**Problem:** DKIM authentication failing.

**Solution:** Verify DKIM records exist and are correct for all email services.

### DMARC policy too strict

**Problem:** Legitimate emails being rejected by DMARC.

**Solution:** Start with monitoring, gradually increase policy after fixing issues.

## Have more questions?

If you have additional questions or need any assistance with managing email DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
