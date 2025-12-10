---
title: Implementing a Gradual DMARC Policy
excerpt: Step-by-step guide to gradually implementing DMARC policies, starting with monitoring and moving to quarantine and reject.
meta: Learn how to implement DMARC gradually, starting with monitoring, then moving to quarantine, and finally to reject policies safely.
categories:
- Emails
---

# Implementing a Gradual DMARC Policy

### Table of Contents {#toc}

* TOC
{:toc}

---

Implementing DMARC gradually is a best practice that helps you identify and fix authentication issues before they affect email delivery. This guide walks you through the gradual implementation process, from monitoring to full enforcement.

## Why implement DMARC gradually?

Implementing DMARC gradually helps you:

- **Identify issues early:** Discover authentication problems before they affect delivery
- **Fix problems safely:** Address issues without impacting legitimate email
- **Build confidence:** Gradually increase enforcement as you verify everything works
- **Minimize disruption:** Avoid blocking legitimate emails during implementation
- **Learn your email ecosystem:** Understand all services sending email from your domain

<warning>
**Don't start with reject:** Starting with `p=reject` immediately can block legitimate emails if authentication isn't properly configured. Always start with monitoring.
</warning>

## Prerequisites

Before implementing DMARC:

1. **SPF configured:** SPF records must be properly configured
2. **DKIM configured:** DKIM records must be properly configured (recommended)
3. **Email services identified:** Know all services that send email from your domain
4. **Monitoring capability:** Have ability to receive and review DMARC reports

## Step 1: Start with monitoring (p=none)

The first step is to monitor your email authentication without affecting delivery.

### Create initial DMARC record

1. **Navigate to your domain:**
   - Use the account switcher to select the appropriate account
   - Click on your domain name from the Domain Names list
   - Click the **DNS** tab and open the **Record Editor**

2. **Add DMARC record:**
   - Click **Add record** and select **TXT**
   - Enter `_dmarc` in the **Name** field
   - Enter the following in the **Content** field:
     ```
     v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com
     ```
   - Replace `dmarc@yourdomain.com` with your email address for receiving reports
   - Click **Add record**

### Set up report collection

1. **Create report email address:**
   - Use an email address dedicated to DMARC reports (e.g., `dmarc@yourdomain.com`)
   - Or use an existing email address you monitor regularly

2. **Consider report aggregation service:**
   - Services like dmarcian, Postmark, or Valimail can parse and aggregate DMARC reports
   - Makes it easier to understand report data
   - Optional but recommended for easier analysis

### Monitor for 2-4 weeks

During the monitoring phase:

1. **Review DMARC reports regularly:**
   - Check reports weekly or bi-weekly
   - Look for authentication failures
   - Identify legitimate email sources

2. **Identify issues:**
   - Note which emails are failing SPF or DKIM
   - Identify unauthorized email sources
   - Document legitimate services that need configuration

3. **Fix authentication issues:**
   - Configure SPF for all legitimate email sources
   - Configure DKIM for all legitimate email sources
   - Remove or fix unauthorized email sources

<info>
**Monitoring period:** Most organizations monitor for 2-4 weeks, but you may need longer if you discover many issues to fix.
</info>

## Step 2: Move to quarantine (p=quarantine)

Once you've fixed authentication issues and verified everything is working, move to quarantine.

### Update DMARC record

1. **Update the DMARC record:**
   - Go to your domain's **DNS** tab
   - Open the **Record Editor**
   - Find the DMARC TXT record at `_dmarc`
   - Update the **Content** field to:
     ```
     v=DMARC1; p=quarantine; pct=25; rua=mailto:dmarc@yourdomain.com
     ```
   - `pct=25` means only 25% of failing emails will be quarantined initially
   - Click **Save**

### Start with percentage enforcement

Using `pct=25` (or even lower) means:
- Only 25% of emails that fail DMARC will be quarantined
- 75% will still be delivered (monitoring mode)
- Helps you test the impact before full enforcement

### Monitor closely

During quarantine phase:

1. **Monitor reports daily:**
   - Check DMARC reports more frequently
   - Look for legitimate emails being quarantined
   - Identify any issues quickly

2. **Check spam folders:**
   - Monitor spam/junk folders for legitimate emails
   - Check if legitimate emails are being quarantined
   - Fix any issues immediately

3. **Gradually increase percentage:**
   - After a week with no issues, increase to `pct=50`
   - Then `pct=75`
   - Finally `pct=100` (full quarantine)

### Full quarantine policy

Once you're confident, move to full quarantine:

```
v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com
```

(Removing `pct=100` means 100% enforcement)

## Step 3: Move to reject (p=reject)

Only move to reject after thorough testing with quarantine.

### Update DMARC record

1. **Update the DMARC record:**
   - Go to your domain's **DNS** tab
   - Open the **Record Editor**
   - Find the DMARC TXT record at `_dmarc`
   - Update the **Content** field to:
     ```
     v=DMARC1; p=reject; pct=25; rua=mailto:dmarc@yourdomain.com
     ```
   - Start with `pct=25` again for safety
   - Click **Save**

### Start with percentage enforcement

Again, start with a low percentage:
- Only 25% of failing emails will be rejected
- 75% will still be quarantined
- Allows you to test impact before full enforcement

### Monitor closely

During reject phase:

1. **Monitor very closely:**
   - Check reports daily
   - Watch for any legitimate emails being rejected
   - Be ready to quickly revert if issues arise

2. **Check for bounce messages:**
   - Monitor for bounce messages from legitimate senders
   - Verify no legitimate emails are being rejected
   - Fix any issues immediately

3. **Gradually increase percentage:**
   - After confirming no issues, increase to `pct=50`
   - Then `pct=75`
   - Finally `pct=100` (full reject)

### Full reject policy

Once you're completely confident, move to full reject:

```
v=DMARC1; p=reject; rua=mailto:dmarc@yourdomain.com
```

(Removing `pct=100` means 100% enforcement)

## Timeline example

Here's a typical timeline for gradual DMARC implementation:

**Week 1-4: Monitoring (`p=none`)**
- Monitor and fix authentication issues
- Identify all legitimate email sources
- Configure SPF and DKIM for all sources

**Week 5-6: Quarantine with percentage (`p=quarantine; pct=25`)**
- Start with 25% quarantine
- Monitor closely
- Gradually increase to 100%

**Week 7-8: Full quarantine (`p=quarantine`)**
- 100% quarantine enforcement
- Monitor for any issues
- Ensure everything works correctly

**Week 9-10: Reject with percentage (`p=reject; pct=25`)**
- Start with 25% reject
- Monitor very closely
- Gradually increase to 100%

**Week 11+: Full reject (`p=reject`)**
- 100% reject enforcement
- Continue monitoring
- Maintain configuration

<info>
**Timeline varies:** Your timeline may be shorter or longer depending on your email ecosystem complexity and how quickly you identify and fix issues.
</info>

## Common issues and solutions

### Legitimate emails being quarantined/rejected

**Problem:** Legitimate emails are being quarantined or rejected after moving to stricter policies.

**Solutions:**
1. **Check authentication:** Verify SPF and DKIM are configured correctly for the sending service
2. **Check alignment:** Ensure SPF or DKIM aligns with the "From" domain
3. **Temporarily lower policy:** Revert to a less strict policy while fixing issues
4. **Fix configuration:** Update SPF or DKIM records as needed

### Unknown email sources in reports

**Problem:** DMARC reports show emails from unknown sources.

**Solutions:**
1. **Investigate source:** Check if the source is legitimate
2. **Configure if legitimate:** Add to SPF/DKIM if it's a legitimate service
3. **Block if unauthorized:** If unauthorized, it may be spoofing (DMARC is working!)

### Too many failures

**Problem:** Reports show many authentication failures.

**Solutions:**
1. **Identify sources:** Review reports to identify all email sources
2. **Fix configuration:** Ensure all legitimate sources are authenticated
3. **Extend monitoring:** Stay in monitoring mode longer if needed
4. **Fix issues before moving forward:** Don't move to stricter policies until failures are resolved

## Best practices

- ✅ Always start with `p=none` (monitoring)
- ✅ Use percentage enforcement (`pct`) when moving to stricter policies
- ✅ Monitor reports regularly throughout the process
- ✅ Fix all authentication issues before moving forward
- ✅ Test thoroughly at each stage
- ✅ Be patient - gradual implementation takes time
- ✅ Document your email ecosystem
- ✅ Keep monitoring even after full enforcement

## Related topics

- [Setting Up DMARC](/articles/set-up-dmarc/) - Initial DMARC setup
- [Understanding SPF, DKIM, and DMARC Alignment](/articles/understanding-spf-dkim-dmarc-alignment/) - Alignment requirements
- [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/) - Authentication troubleshooting
- [Improving Email Deliverability](/articles/improving-email-deliverability/) - Deliverability improvement

## Have more questions?

If you have additional questions or need any assistance with implementing a gradual DMARC policy, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
