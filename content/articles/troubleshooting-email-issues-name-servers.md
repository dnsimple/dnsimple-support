---
title: Troubleshooting Email Issues Related to Name Servers
excerpt: Diagnose and resolve email delivery problems caused by name server misconfiguration or propagation issues.
meta: Learn how to troubleshoot email delivery problems related to name server changes, including MX record resolution issues and propagation delays.
categories:
- Emails
- Name Servers
---

# Troubleshooting Email Issues Related to Name Servers

### Table of Contents {#toc}

* TOC
{:toc}

---

Email delivery problems often occur when name servers are changed, misconfigured, or during propagation periods. This guide helps you diagnose and resolve email issues related to name server delegation, MX record resolution, and DNS propagation.

## Common email issues related to name servers

### Email not being received

If emails sent to your domain are bouncing or not being delivered, the issue may be related to name server configuration.

**Symptoms:**
- Emails bounce with "no MX record" errors
- Delivery failures from sending mail servers
- Emails are rejected before reaching your mail server

**Possible causes:**
1. MX records are missing from your DNS zone file
2. Name servers are pointing to a DNS provider that doesn't have your MX records
3. MX records are incorrectly configured
4. Propagation hasn't completed after a name server change

**Diagnosis steps:**

1. **Check MX record resolution:**
   ```bash
   dig MX example.com
   ```
   If no MX records are returned, they're either missing or not configured in your current name servers' zone file.

2. **Verify name server delegation:**
   ```bash
   dig NS example.com
   ```
   Confirm that your domain is delegated to the correct name servers where your MX records should be configured.

3. **Query name servers directly:**
   ```bash
   dig MX example.com @ns1.dnsimple.com
   ```
   Replace `ns1.dnsimple.com` with your actual name server. This shows what MX records your name servers are serving.

**Solutions:**
- Add MX records to your DNS provider's zone file if they're missing
- Verify MX records match your email service provider's requirements
- Wait for propagation to complete if you recently changed name servers
- Ensure name servers are correctly delegated to your DNS provider

### Intermittent email delivery

During name server propagation, email delivery may work inconsistently.

**Symptoms:**
- Some emails are delivered while others bounce
- Delivery works from some senders but not others
- Email delivery improves over time (suggesting propagation)

**Possible causes:**
- Name server changes are still propagating
- Some email servers query old name servers while others query new ones
- MX records exist in new name servers but not all resolvers have updated

**Diagnosis steps:**

1. **Check propagation status:**
   Use online tools like [whatsmydns.net](https://www.whatsmydns.net/#MX/) or [zone.vision](https://zone.vision/#/) to see if MX records are resolving consistently from different locations.

2. **Verify MX records from different resolvers:**
   ```bash
   dig MX example.com @8.8.8.8
   dig MX example.com @1.1.1.1
   ```
   Compare results from different DNS resolvers to see if they're consistent.

3. **Check WHOIS for name server changes:**
   ```bash
   whois example.com
   ```
   Verify when name servers were last changed and if changes are recent.

**Solutions:**
- Wait for propagation to complete (typically 24-48 hours)
- Ensure MX records are configured in both old and new name servers during transition, if possible
- Monitor email delivery during the propagation period
- Verify MX records are correctly configured in your new DNS provider

### Email delivered to wrong server

If emails are being delivered to incorrect mail servers, MX records may be misconfigured.

**Symptoms:**
- Emails arrive at unexpected mail servers
- Email is delivered but not accessible in expected mailbox
- Delivery to wrong email service provider

**Possible causes:**
- MX records point to incorrect mail server hostnames
- MX record priorities are incorrect
- Old MX records still cached or active

**Diagnosis steps:**

1. **Check current MX records:**
   ```bash
   dig MX example.com
   ```
   Verify that returned MX records match your email service provider's requirements.

2. **Compare with email service requirements:**
   - Google Workspace: Check [Google's MX record documentation](https://support.google.com/a/answer/140034)
   - Microsoft 365: Check [Microsoft's documentation](https://learn.microsoft.com/en-us/microsoft-365/admin/setup/domains-faq)
   - Other providers: Consult your email service provider's documentation

3. **Verify mail server hostnames resolve:**
   ```bash
   dig aspmx.l.google.com
   ```
   Ensure MX record hostnames resolve to correct IP addresses.

**Solutions:**
- Update MX records to match your email service provider's exact requirements
- Verify MX record priorities are correct
- Clear DNS caches if old records are still being served
- Wait for propagation if you recently updated MX records

### "No MX record" errors

Email servers cannot find MX records for your domain.

**Symptoms:**
- Bounce messages indicating "no MX record found"
- Email delivery failures with MX-related errors
- Sending mail servers cannot determine where to deliver email

**Possible causes:**
- MX records are completely missing from your DNS zone
- Name servers are not properly delegated
- DNS zone file doesn't include MX records
- Propagation issues after name server changes

**Diagnosis steps:**

1. **Check for MX records:**
   ```bash
   dig MX example.com
   ```
   If no records are returned, MX records are missing.

2. **Verify name server delegation:**
   ```bash
   dig NS example.com
   ```
   Ensure your domain is delegated to name servers where you've configured DNS records.

3. **Check zone file directly:**
   If you have access to your DNS provider's interface, verify MX records exist in the zone file.

4. **Test from authoritative name servers:**
   ```bash
   dig MX example.com @ns1.dnsimple.com
   ```
   Query your authoritative name servers directly to see what they're serving.

**Solutions:**
- Add MX records to your DNS provider's zone file immediately
- Verify name servers are correctly delegated
- Ensure MX records are configured before changing name servers
- Wait for propagation if you recently added MX records

## Step-by-step troubleshooting process

### Step 1: Verify name server delegation

First, confirm that your domain is delegated to the correct name servers:

```bash
dig NS example.com
```

**What to check:**
- Name servers match your DNS provider
- No typos in name server hostnames
- Multiple name servers are listed (for redundancy)

**If incorrect:**
- Update name server delegation at your domain registrar
- Wait for propagation (24-48 hours)
- Verify changes in WHOIS

### Step 2: Check MX record existence

Verify that MX records exist and are being served:

```bash
dig MX example.com
```

**What to check:**
- At least one MX record is returned
- MX records match your email service provider's requirements
- Mail server hostnames are correct

**If missing:**
- Add MX records to your DNS provider's zone file
- Verify records are saved correctly
- Wait a few minutes and query again

### Step 3: Verify MX record configuration

Ensure MX records are correctly configured:

**Check priorities:**
- Lower numbers indicate higher priority
- Priorities should match your email service provider's requirements

**Check mail server hostnames:**
- Hostnames must be fully qualified domain names (FQDNs)
- Hostnames must resolve to IP addresses (A or AAAA records)

**Verify with email service provider:**
- Compare your MX records with your email service provider's documentation
- Ensure all required MX records are present
- Verify priorities match exactly

### Step 4: Test resolution from multiple locations

Check if MX records resolve consistently:

```bash
# Test from different DNS resolvers
dig MX example.com @8.8.8.8
dig MX example.com @1.1.1.1
dig MX example.com @208.67.222.222
```

**What to check:**
- All resolvers return the same MX records
- No inconsistencies between different DNS resolvers
- Records match what you've configured

**If inconsistent:**
- Propagation may still be in progress
- Wait 24-48 hours for full propagation
- Check for caching issues

### Step 5: Verify mail server hostname resolution

Ensure MX record hostnames resolve to IP addresses:

```bash
dig aspmx.l.google.com
```

**What to check:**
- Mail server hostnames resolve to A or AAAA records
- IP addresses are valid and reachable
- No resolution errors

**If hostnames don't resolve:**
- Check for typos in MX record hostnames
- Verify mail server hostnames are correct
- Contact your email service provider if hostnames are incorrect

### Step 6: Test email delivery

Send test emails to verify delivery:

1. Send from external email addresses to your domain
2. Check if emails are received
3. Monitor for bounce messages
4. Check email service provider's logs if available

**If emails don't arrive:**
- Review bounce messages for specific error codes
- Check email service provider's status
- Verify MX records are still correct

## Common error messages and solutions

### "550 5.1.1 User unknown" or "550 5.1.2 Host unknown"

**Meaning:** The mail server cannot find the recipient or the domain. These error codes are defined in [RFC 5321, Section 4.2.2](https://datatracker.ietf.org/doc/html/rfc5321#section-4.2.2).

**Possible causes:**
- MX records point to incorrect mail servers
- Mail server hostnames don't resolve
- Email service provider configuration issues

**Solutions:**
- Verify MX records point to correct mail servers
- Check mail server hostname resolution
- Contact your email service provider

### "550 5.7.1 Relay access denied"

**Meaning:** The mail server is refusing to relay email. This error code is defined in [RFC 5321, Section 4.2.2](https://datatracker.ietf.org/doc/html/rfc5321#section-4.2.2).

**Possible causes:**
- MX records point to servers not configured to accept email for your domain
- Email service provider configuration incomplete

**Solutions:**
- Verify MX records match your email service provider's requirements
- Ensure your domain is properly configured in your email service provider's system
- Contact your email service provider for assistance

### "451 4.4.0 DNS query failed"

**Meaning:** The sending mail server cannot resolve DNS records. This is a transient error code defined in [RFC 5321, Section 4.2.2](https://datatracker.ietf.org/doc/html/rfc5321#section-4.2.2), indicating a temporary DNS resolution failure.

**Possible causes:**
- DNS resolution problems
- Name server delegation issues
- Propagation problems

**Solutions:**
- Verify name server delegation is correct
- Check DNS resolution from multiple locations
- Wait for propagation if changes were recent

## Prevention and best practices

### Before changing name servers

1. **Document current configuration:**
   - Record all MX records with priorities
   - Note mail server hostnames
   - Document email service provider requirements

2. **Configure MX records in new provider:**
   - Add all MX records before changing name servers
   - Verify configuration matches requirements exactly
   - Test MX record resolution from new name servers

3. **Plan the transition:**
   - Schedule during low-traffic periods
   - Inform your team about expected timeline
   - Prepare for potential email delivery delays

### During name server changes

1. **Monitor email delivery:**
   - Watch for bounce messages
   - Monitor delivery success rates
   - Track propagation progress

2. **Maintain old configuration:**
   - Keep MX records in old DNS provider if possible
   - Provides safety net during transition
   - Remove after propagation completes

3. **Verify continuously:**
   - Check MX record resolution regularly
   - Monitor from multiple locations
   - Test email delivery frequently

### After propagation completes

1. **Verify consistency:**
   - Confirm all resolvers return same MX records
   - Test email delivery from multiple sources
   - Monitor for 24-48 hours after change

2. **Update documentation:**
   - Record new name server information
   - Update internal documentation
   - Note any configuration changes

## Technical references

Email delivery error codes and DNS resolution are defined in Internet Engineering Task Force (IETF) Request for Comments (RFC) documents:

- [RFC 5321](https://datatracker.ietf.org/doc/html/rfc5321): Simple Mail Transfer Protocol (defines email delivery process and error codes)
- [RFC 1035, Section 3.3.9](https://datatracker.ietf.org/doc/html/rfc1035#section-3.3.9): Domain Names - Implementation and Specification (defines MX record format)
- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035): Domain Names - Implementation and Specification (defines DNS protocol and query process)

## Related articles

- [Impact of Name Server Changes on Email Delivery](/articles/impact-name-server-changes-email-delivery/): Understand how name server changes affect email
- [What Is an MX Record?](/articles/mx-record/): Learn about MX records and how to configure them
- [Understanding Name Server Propagation](/articles/understanding-name-server-propagation/): Understand propagation timelines
- [Troubleshooting Name Server Issues](/articles/troubleshooting-name-servers/): General name server troubleshooting
- [Domain Resolution Issues](/articles/domain-resolution-issues/): Broader DNS resolution troubleshooting

## Have more questions?

If you have additional questions about troubleshooting email issues related to name servers or need assistance with your email configuration, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
