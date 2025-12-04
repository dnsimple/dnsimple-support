---
title: Protecting Your Domain from Email Spoofing
excerpt: Learn how to protect your domain from email spoofing using SPF, DKIM, and DMARC.
meta: Step-by-step guide to protecting your domain from email spoofing and preventing unauthorized use of your domain for malicious emails.
categories:
- Emails
---

# Protecting Your Domain from Email Spoofing

### Table of Contents {#toc}

* TOC
{:toc}

---

Email spoofing occurs when attackers send emails that appear to come from your domain, even though they're not authorized. This guide explains how to protect your domain from email spoofing using email authentication protocols.

## What is email spoofing?

Email spoofing is when someone sends emails that appear to come from your domain, but they're not authorized to send on your behalf. Spoofed emails are often used for:

- **Phishing attacks:** Tricking recipients into revealing sensitive information
- **Spam:** Sending unwanted emails
- **Malware distribution:** Spreading viruses and malware
- **Brand impersonation:** Damaging your brand reputation

## How email authentication prevents spoofing

Email authentication protocols (SPF, DKIM, and DMARC) help prevent spoofing by:

1. **Authorizing senders:** SPF specifies which servers can send email from your domain
2. **Cryptographically signing:** DKIM signs emails to prove authenticity
3. **Enforcing policies:** DMARC tells receivers what to do with unauthenticated emails

## Step 1: Configure SPF

SPF (Sender Policy Framework) authorizes which servers can send email from your domain.

### Set up SPF record

1. **Identify authorized senders:**
   - List all services that send email on your behalf
   - Include email hosting providers
   - Include transactional email services
   - Include marketing platforms

2. **Create SPF record:**
   - Add a TXT record in DNSimple
   - Include all authorized senders
   - Use `~all` initially, then `-all` for stronger protection

3. **Example SPF record:**
   ```
   v=spf1 include:_spf.google.com include:spf.mtasv.net ~all
   ```

<info>
For detailed SPF setup, see [Setting Up SPF Records](/articles/setting-up-spf/).
</info>

## Step 2: Configure DKIM

DKIM (DomainKeys Identified Mail) cryptographically signs emails to prove they're authentic.

### Set up DKIM records

1. **Get DKIM information:**
   - Contact each email service provider
   - Obtain DKIM selector and public key for each service

2. **Add DKIM records:**
   - Add TXT records at `selector._domainkey.yourdomain.com`
   - Enter the DKIM public key for each service

3. **Verify DKIM:**
   - Send test emails and check headers
   - Verify DKIM signatures are present

<info>
For detailed DKIM setup, see [Setting Up DKIM](/articles/set-up-dkim/).
</info>

## Step 3: Configure DMARC

DMARC (Domain-based Message Authentication, Reporting & Conformance) enforces policies and provides reporting.

### Set up DMARC record

1. **Start with monitoring:**
   - Create DMARC record with `p=none`
   - Set up reporting address (`rua=mailto:dmarc@yourdomain.com`)
   - Monitor for a few weeks

2. **Gradually increase policy:**
   - Move to `p=quarantine` after fixing issues
   - Finally move to `p=reject` for strongest protection

3. **Example DMARC record:**
   ```
   v=DMARC1; p=reject; rua=mailto:dmarc@yourdomain.com
   ```

<info>
For detailed DMARC setup, see [Setting Up DMARC](/articles/set-up-dmarc/) and [Implementing a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/).
</info>

## Step 4: Monitor and respond

### Review DMARC reports

Regularly review DMARC reports to:

- **Identify unauthorized use:** See who is sending email from your domain
- **Find issues:** Discover authentication problems
- **Monitor trends:** Track changes over time

### Respond to spoofing

If you discover spoofing:

1. **Verify it's spoofing:** Confirm the emails are actually unauthorized
2. **Check your configuration:** Ensure SPF, DKIM, and DMARC are correct
3. **Strengthen policies:** Move to stricter DMARC policies if needed
4. **Monitor closely:** Watch for continued spoofing attempts

## Best practices

### Comprehensive authentication

- ✅ Configure all three: SPF, DKIM, and DMARC
- ✅ Use strict DMARC policies (`p=reject`)
- ✅ Monitor authentication regularly

### Regular monitoring

- ✅ Review DMARC reports weekly or bi-weekly
- ✅ Check sender reputation regularly
- ✅ Monitor for unauthorized use

### Gradual implementation

- ✅ Start with monitoring (`p=none`)
- ✅ Fix issues before moving to stricter policies
- ✅ Test thoroughly at each stage

## Related topics

- [Setting Up SPF Records](/articles/setting-up-spf/) - SPF setup
- [Setting Up DKIM](/articles/set-up-dkim/) - DKIM setup
- [Setting Up DMARC](/articles/set-up-dmarc/) - DMARC setup
- [Email Security Best Practices](/articles/email-security-best-practices/) - Security best practices
- [Email Authentication Best Practices](/articles/email-authentication-best-practices/) - Authentication best practices

## Have more questions?

If you have additional questions or need any assistance with protecting your domain from email spoofing, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
