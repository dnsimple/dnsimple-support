---
title: Implement a Gradual DMARC Policy
excerpt: Step-by-step guide to gradually implementing DMARC policies, starting with monitoring and moving to quarantine and reject.
meta: Learn how to implement DMARC gradually under RFC 9989, starting with monitoring, then quarantine, then reject, without percentage-based rollout.
categories:
- Emails
---

# Implement a Gradual DMARC Policy

### Table of Contents {#toc}

* TOC
{:toc}

---

Implementing DMARC gradually helps you identify and fix authentication issues before they affect email delivery. Start with monitoring (`p=none`), then move to quarantine, then reject, only after reports show legitimate mail is aligned.

> [!NOTE]
> [RFC 9989](https://www.rfc-editor.org/rfc/rfc9989.html) (published May 2026) obsoletes RFC 7489 and removes the `pct` tag. Percentage-based rollout is no longer part of the DMARC specification, because receivers did not apply partial percentages consistently. Do not rely on `pct=25`, `pct=50`, or similar values for a staged rollout.

## Why implement DMARC gradually? {#why}

Implementing DMARC gradually helps you:

- **Identify issues early:** Discover authentication problems before they affect delivery
- **Fix problems safely:** Address issues without impacting legitimate email
- **Build confidence:** Increase enforcement only after you verify everything works
- **Minimize disruption:** Avoid blocking legitimate emails during implementation
- **Learn your email ecosystem:** Understand all services sending email from your domain

> [!WARNING]
> Do not start with `p=reject`. Starting with a reject policy immediately can block legitimate emails if authentication is not properly configured. Always start with monitoring.

## Prerequisites {#prerequisites}

Before implementing DMARC:

1. **SPF configured:** SPF records must be properly configured
2. **DKIM configured:** DKIM records must be properly configured (recommended)
3. **Email services identified:** Know all services that send email from your domain
4. **Monitoring capability:** Have ability to receive and review DMARC reports

## Step 1: Start with monitoring (p=none) {#monitoring}

The first step is to monitor your email authentication without affecting delivery.

### Create initial DMARC record {#create-record}

<div class="section-steps" markdown="1">
##### Add a monitoring-only DMARC record

1. Use the account switcher to select the appropriate account.
1. Click on your domain name from the <label>Domain Names</label> list.
1. Click the <label>DNS</label> tab and open the <label>Record Editor</label>.
1. Click <label>Add record</label> and select **TXT**.
1. Enter `_dmarc` in the <label>Name</label> field.
1. Enter the following in the <label>Content</label> field:
   ```
   v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com
   ```
   Replace `dmarc@yourdomain.com` with your email address for receiving reports.
1. Click <label>Add record</label>.
</div>

### Set up report collection

1. **Create report email address:** Use an email address dedicated to DMARC reports (e.g., `dmarc@yourdomain.com`), or use an existing email address you monitor regularly.

2. **Consider report aggregation service:** Services like dmarcian, Postmark, or Valimail can parse and aggregate DMARC reports, making it easier to understand report data. Optional but recommended for easier analysis.

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

> [!NOTE]
> Most organizations monitor for 2-4 weeks, but you may need longer if you discover many issues to fix.

## Step 2: Move to quarantine (p=quarantine) {#quarantine}

After `p=none` reporting shows that legitimate sources are aligned, start enforcement. Prefer a low-volume or low-complexity domain first if you manage more than one.

### Update DMARC record {#update-quarantine}

<div class="section-steps" markdown="1">
##### Update the DMARC record to quarantine

1. Navigate to your domain's <label>DNS</label> tab.
1. Open the <label>Record Editor</label>.
1. Find the DMARC TXT record at `_dmarc`.
1. Update the <label>Content</label> field to:
   ```
   v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com
   ```
1. Click <label>Save</label>.
</div>

### Monitor closely

During the quarantine phase:

1. **Monitor reports daily:**
   - Check DMARC reports more frequently
   - Look for legitimate emails being quarantined
   - Identify any issues quickly

2. **Check spam folders:**
   - Monitor spam/junk folders for legitimate emails
   - Check if legitimate emails are being quarantined
   - Fix any issues immediately

3. **Revert if needed:**
   - If legitimate mail is affected, change the policy back to `p=none` while you correct the sender
   - Return to quarantine only after reports look clean again

## Step 3: Move to reject (p=reject) {#reject}

Move to reject only after results remain clean under quarantine.

### Update DMARC record {#update-reject}

<div class="section-steps" markdown="1">
##### Update the DMARC record to reject

1. Navigate to your domain's <label>DNS</label> tab.
1. Open the <label>Record Editor</label>.
1. Find the DMARC TXT record at `_dmarc`.
1. Update the <label>Content</label> field to:
   ```
   v=DMARC1; p=reject; rua=mailto:dmarc@yourdomain.com
   ```
1. Click <label>Save</label>.
</div>

### Monitor closely

During the reject phase:

1. **Monitor very closely:**
   - Check reports daily
   - Watch for any legitimate emails being rejected
   - Be ready to quickly revert if issues arise

2. **Check for bounce messages:**
   - Monitor for bounce messages from legitimate senders
   - Verify no legitimate emails are being rejected
   - Fix any issues immediately

3. **Revert if needed:**
   - If legitimate mail is affected, temporarily move back to `p=quarantine` or `p=none` while you fix authentication
   - Return to reject only after delivery looks stable again

## About testing mode (t=y) {#testing-mode}

RFC 9989 introduces a `t` (testing mode) tag. With `t=y`, receivers that support RFC 9989 are asked to apply a policy one level softer than the published `p` value (for example, `p=reject; t=y` is treated like quarantine for failing messages).

> [!WARNING]
> Do not treat `t=y` as a guaranteed delivery-impact control during the transition. Receivers that still follow older DMARC behavior may ignore an unknown `t` tag and apply the published `p` policy fully. Use monitoring reports and careful policy changes as your primary rollout controls.

## Timeline example {#timeline}

Here is a typical timeline for gradual DMARC implementation:

**Week 1-4: Monitoring (`p=none`)**
- Monitor and fix authentication issues
- Identify all legitimate email sources
- Configure SPF and DKIM for all sources

**Week 5-6: Quarantine (`p=quarantine`)**
- Apply quarantine for failing messages
- Monitor reports and spam folders closely
- Revert to `p=none` if legitimate mail is affected

**Week 7-8: Confirm quarantine is stable**
- Keep quarantine in place while reports stay clean
- Fix any remaining authentication gaps

**Week 9+: Reject (`p=reject`)**
- Move to reject only after quarantine stays clean
- Continue monitoring
- Maintain configuration

> [!NOTE]
> Your timeline may be shorter or longer depending on your email ecosystem complexity and how quickly you identify and fix issues.

## Common issues and solutions {#issues}

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
2. **Configure if legitimate:** Add to SPF/DKIM if it is a legitimate service
3. **Block if unauthorized:** If unauthorized, it may be spoofing (DMARC is working)

### Too many failures

**Problem:** Reports show many authentication failures.

**Solutions:**
1. **Identify sources:** Review reports to identify all email sources
2. **Fix configuration:** Ensure all legitimate sources are authenticated
3. **Extend monitoring:** Stay in monitoring mode longer if needed
4. **Fix issues before moving forward:** Do not move to stricter policies until failures are resolved

## Best practices {#best-practices}

- Always start with `p=none` (monitoring)
- Move to `p=quarantine`, then `p=reject`, only after reports look clean
- Do not rely on `pct` for staged rollout
- Monitor reports regularly throughout the process
- Fix all authentication issues before moving forward
- Test thoroughly at each stage
- Be patient - gradual implementation takes time
- Document your email ecosystem
- Keep monitoring even after full enforcement

## Related articles {#related}

- [Set Up DMARC](/articles/set-up-dmarc/) - Initial DMARC setup
- [DMARC Record Reference](/articles/dmarc-record-reference/) - DMARC tags and record format
- [SPF, DKIM, and DMARC Alignment](/articles/understanding-spf-dkim-dmarc-alignment/) - Alignment requirements

## Have more questions?

If you have additional questions or need any assistance with implementing a gradual DMARC policy, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
