---
title: Improving Email Deliverability
excerpt: Step-by-step guide to improving email deliverability and ensuring your emails reach recipients' inboxes.
meta: Learn best practices and actionable steps to improve email deliverability, reduce spam filtering, and increase inbox placement rates.
categories:
- Emails
---

# Improving Email Deliverability

### Table of Contents {#toc}

* TOC
{:toc}

---

Improving email deliverability requires a systematic approach that addresses authentication, reputation, content, and sending practices. This guide provides actionable steps to improve your email deliverability.

## Prerequisites

Before improving email deliverability:

1. **Understand current status:** Know your current deliverability metrics
2. **Access to DNS records:** Ability to modify DNS records (if managing your own DNS)
3. **Email service access:** Access to your email service provider's settings and analytics
4. **Monitoring tools:** Access to deliverability monitoring tools (optional but recommended)

## Step 1: Set up email authentication

Proper email authentication is the foundation of good deliverability. Set up all three authentication methods:

### Configure SPF records

1. **Identify authorized senders:**
   - List all services that send email on your behalf
   - Include your email hosting provider, transactional email services, marketing platforms, etc.

2. **Create SPF record:**
   - Use DNSimple's [Record Editor](/articles/record-editor/) to add a TXT record
   - Include all authorized sending services using `include:` mechanisms
   - End with `~all` (soft fail) or `-all` (hard fail)

3. **Example SPF record:**
   ```
   v=spf1 include:_spf.google.com include:spf.mtasv.net ~all
   ```

4. **Verify SPF:**
   - Use `dig +short yourdomain.com TXT | grep "v=spf1"` to verify
   - Test with online SPF checkers (see [Verifying SPF](/articles/verifying-spf/) for recommended tools)
   - See [Verifying SPF](/articles/verifying-spf/) for detailed instructions

<info>
For detailed SPF setup instructions, see [Setting Up SPF Records](/articles/setting-up-spf/). To understand what SPF is, see [What Is an SPF Record?](/articles/spf-record/).
</info>

### Configure DKIM records

1. **Get DKIM information from your email provider:**
   - Contact your email hosting provider or check their documentation
   - Obtain the DKIM selector and public key

2. **Add DKIM record:**
   - Use DNSimple's [Record Editor](/articles/record-editor/) to add a TXT record
   - Create the record at `selector._domainkey.yourdomain.com`
   - Enter the DKIM public key provided by your email provider

3. **Verify DKIM:**
   - Use `dig +short selector._domainkey.yourdomain.com TXT` to verify
   - Send a test email and check headers for DKIM signature
   - See [Verifying DKIM](/articles/verify-dkim/) for detailed instructions

<info>
For detailed DKIM setup instructions, see [Setting Up DKIM](/articles/set-up-dkim/). To understand what DKIM is, see [What Is a DKIM Record?](/articles/dkim-record/). If you need to manage multiple DKIM selectors, see [Managing Multiple DKIM Selectors](/articles/managing-multiple-dkim-selectors/).
</info>

### Configure DMARC records

1. **Start with monitoring:**
   - Begin with `p=none` to monitor without affecting delivery
   - Set up a reporting email address using `rua=mailto:dmarc@yourdomain.com`

2. **Create DMARC record:**
   - Use DNSimple's [Record Editor](/articles/record-editor/) to add a TXT record
   - Create the record at `_dmarc.yourdomain.com`
   - Start with: `v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com`

3. **Gradually increase policy:**
   - After monitoring and fixing issues, move to `p=quarantine`
   - Finally, move to `p=reject` only after thorough testing
   - See [Implementing a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/) for detailed guidance

4. **Verify DMARC:**
   - Use `dig +short _dmarc.yourdomain.com TXT` to verify
   - Review DMARC reports regularly
   - See [Verifying DMARC](/articles/verifying-dmarc/) for detailed instructions

<info>
For detailed DMARC setup instructions, see [Setting Up DMARC](/articles/set-up-dmarc/). To understand what DMARC is, see [What Is a DMARC Record?](/articles/dmarc-record/). For information about alignment requirements, see [Understanding SPF, DKIM, and DMARC Alignment](/articles/understanding-spf-dkim-dmarc-alignment/).
</info>

## Step 2: Monitor and improve sender reputation

### Check your reputation

1. **Use reputation monitoring tools:**
   - [Sender Score](https://www.senderscore.org/) - Free reputation score and monitoring
   - [Google Postmaster Tools](https://postmaster.google.com/) - Gmail-specific deliverability data
   - [Microsoft SNDS](https://sendersupport.olc.protection.outlook.com/snds/) - Outlook/Hotmail reputation and complaint data
   - [BarracudaCentral](https://www.barracudacentral.org/) - Email reputation and blacklist monitoring

2. **Check blacklists:**
   - Use [MXToolbox](https://mxtoolbox.com/blacklists.aspx) or similar tools to check if you're on blacklists
   - If blacklisted, follow the delisting process provided by the blacklist operator

3. **Monitor bounce rates:**
   - Keep bounce rates below 2%
   - Remove hard bounces immediately
   - Investigate and fix soft bounces
   - See [Understanding Email Bounces](/articles/understanding-email-bounces/) for more information about bounce types

### Improve reputation

1. **Maintain consistent sending:**
   - Avoid sudden spikes in sending volume
   - Gradually increase volume if needed (warm-up period)

2. **Reduce spam complaints:**
   - Only send to recipients who opted in
   - Make unsubscribe easy and immediate
   - Send relevant, valuable content

3. **Improve engagement:**
   - Send emails recipients want to read
   - Use engaging subject lines
   - Send at optimal times for your audience

## Step 3: Maintain list quality

### Clean your email list

1. **Remove invalid addresses:**
   - Regularly validate email addresses
   - Remove hard bounces immediately
   - Remove addresses that haven't engaged in a long time

2. **Remove inactive subscribers:**
   - Identify subscribers who haven't opened emails in 6-12 months
   - Send a re-engagement campaign
   - Remove those who don't re-engage

3. **Verify new subscribers:**
   - Use double opt-in to verify email addresses
   - Confirm subscribers want to receive emails

### Segment your list

1. **Segment by engagement:**
   - Separate highly engaged subscribers from low-engagement subscribers
   - Send more frequently to engaged subscribers
   - Send less frequently or re-engage low-engagement subscribers

2. **Segment by preferences:**
   - Allow subscribers to choose email types and frequency
   - Respect preferences and send accordingly

## Step 4: Optimize email content

### Avoid spam triggers

1. **Subject lines:**
   - Avoid ALL CAPS, excessive punctuation, or spam words
   - Keep subject lines clear and relevant
   - Test different subject lines

2. **Email content:**
   - Avoid spam trigger words and phrases
   - Maintain good text-to-image ratio
   - Use proper HTML formatting

3. **Links:**
   - Only link to reputable, legitimate websites
   - Avoid shortened URLs if possible (or use reputable services)
   - Ensure links work and aren't broken

### Improve email formatting

1. **HTML quality:**
   - Use clean, well-formatted HTML
   - Test emails in multiple email clients
   - Ensure emails are mobile-responsive

2. **Text version:**
   - Always include a plain text version
   - Ensure text version contains the same information

3. **Images:**
   - Don't rely solely on images
   - Include alt text for images
   - Ensure images load from reputable sources

## Step 5: Follow sending best practices

### Sending volume and frequency

1. **Gradual increase:**
   - If starting new, begin with low volume
   - Gradually increase over weeks/months
   - Monitor deliverability as you increase

2. **Consistent sending:**
   - Maintain consistent sending patterns
   - Avoid sudden spikes or drops
   - Send regularly but not too frequently

### Sending times

1. **Test optimal times:**
   - Test different sending times
   - Monitor open and engagement rates
   - Send at times when recipients are most likely to engage

2. **Consider time zones:**
   - Consider recipient time zones
   - Use segmentation to send at optimal times for each segment

## Step 6: Monitor and test

### Regular monitoring

1. **Track key metrics:**
   - Delivery rates
   - Inbox placement rates
   - Bounce rates
   - Spam complaint rates
   - Open and click rates

2. **Review analytics:**
   - Regularly review email analytics
   - Identify trends and issues
   - Adjust strategy based on data

### Testing

1. **Test emails:**
   - Send test emails to different providers (Gmail, Outlook, etc.)
   - Check spam folders
   - Verify authentication passes

2. **A/B testing:**
   - Test different subject lines
   - Test different content
   - Test different sending times
   - Use results to improve

## Troubleshooting common issues

### Emails going to spam

**Solutions:**
1. Verify email authentication (SPF, DKIM, DMARC) is correct - see [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/) for help
2. Check sender reputation
3. Review email content for spam triggers
4. Check blacklist status
5. Improve list quality and engagement
6. Ensure proper email authentication setup - see [Email Authentication Best Practices](/articles/email-authentication-best-practices/) and [Protecting Your Domain from Email Spoofing](/articles/protecting-your-domain-from-email-spoofing/)

### High bounce rates

**Solutions:**
1. Clean your email list regularly
2. Remove hard bounces immediately
3. Verify email addresses before sending
4. Investigate and fix soft bounces - see [Understanding Email Bounces](/articles/understanding-email-bounces/) for guidance
5. Use double opt-in for new subscribers
6. If using email forwarding, see [Handling Email Bounces with Email Forwarding](/articles/handling-email-bounces-with-email-forwarding/) for specific guidance

### Low engagement

**Solutions:**
1. Improve email content and relevance
2. Test and optimize subject lines
3. Adjust sending frequency
4. Better segment your email list
5. Send at optimal times

## Best practices summary

- ✅ Set up SPF, DKIM, and DMARC authentication
- ✅ Monitor sender reputation regularly
- ✅ Maintain clean, engaged email lists
- ✅ Avoid spam triggers in content
- ✅ Follow sending best practices
- ✅ Test and monitor regularly
- ✅ Respond quickly to issues
- ✅ Continuously improve based on data

## Related topics

### Email deliverability
- [Understanding Email Deliverability](/articles/understanding-email-deliverability/) - Overview of email deliverability
- [Monitoring Email Deliverability](/articles/monitoring-email-deliverability/) - Tools and techniques for monitoring

### Email authentication
- [What Is an SPF Record?](/articles/spf-record/) - Introduction to SPF
- [Setting Up SPF Records](/articles/setting-up-spf/) - SPF setup guide
- [Verifying SPF with dig and Online Tools](/articles/verifying-spf/) - How to verify SPF records
- [What Is a DKIM Record?](/articles/dkim-record/) - Introduction to DKIM
- [Setting Up DKIM](/articles/set-up-dkim/) - DKIM setup guide
- [Verifying DKIM with dig and Online Tools](/articles/verify-dkim/) - How to verify DKIM records
- [What Is a DMARC Record?](/articles/dmarc-record/) - Introduction to DMARC
- [Setting Up DMARC](/articles/set-up-dmarc/) - DMARC setup guide
- [Verifying DMARC with dig and Online Tools](/articles/verifying-dmarc/) - How to verify DMARC records
- [Understanding SPF, DKIM, and DMARC Alignment](/articles/understanding-spf-dkim-dmarc-alignment/) - Alignment requirements
- [Implementing a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/) - Gradual DMARC implementation
- [Managing Multiple DKIM Selectors](/articles/managing-multiple-dkim-selectors/) - Managing multiple DKIM keys
- [Email Authentication Best Practices](/articles/email-authentication-best-practices/) - Best practices for authentication
- [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/) - Guide to authentication issues

### Email security
- [Email Security Best Practices](/articles/email-security-best-practices/) - Comprehensive security guide
- [Protecting Your Domain from Email Spoofing](/articles/protecting-your-domain-from-email-spoofing/) - Spoofing protection guide

### Email bounces
- [Understanding Email Bounces](/articles/understanding-email-bounces/) - Overview of email bounces
- [Handling Email Bounces with Email Forwarding](/articles/handling-email-bounces-with-email-forwarding/) - Bounce handling with forwarding

### Email DNS records
- [Managing Email DNS Records](/articles/managing-email-dns-records/) - Comprehensive guide to email DNS records
- [Email DNS Records Quick Reference](/articles/email-dns-records-quick-reference/) - Quick reference for email records

### DNS management
- [How to Use the Record Editor](/articles/record-editor/) - Guide to DNSimple's Record Editor

## Have more questions?

If you have additional questions or need any assistance with improving email deliverability, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
