---
title: Troubleshooting DNSSEC Configurations
excerpt: A comprehensive guide to diagnosing and resolving common DNSSEC issues for your domain, including checks for DS records, DNSKEYs, RRSIGs, and NSEC/NSEC3 records. Learn how to use essential tools like DNSSEC Analyzer, DNSViz, and dig.
categories:
  - DNSSEC
---

# Troubleshooting DNSSEC Configurations

## Is DNSSEC active for your DNSimple domain?

To check DNSimple's DNSSEC status:

Select the correct account from the account switcher menu.

There are two ways to check:

1. **Domain Names List**: In your list of domains, look for a `DNSSEC` label on the domain. If present, it indicates DNSSEC is enabled.
1. **DNSSEC card**: When you are on the domain page, click the `DNSSEC` tab on the left side. On this page, you can see if DNSSEC is configured.
  > **Configured**:
    **Disabled**:

If DNSSEC is configured, you may still need to allow some time for the full signing process to complete (it may briefly show as "pending" before full activation).

## Verify DS record at your registrar (if the domain is not registered with DNSimple)
1. Log in to your domain registrar (where you registered your domain, e.g., GoDaddy, Namecheap, Google Domains, etc.).
1. Navigate to the DNSSEC or Nameserver management section for your domain.
1. Confirm that the `DS record(s) provided by DNSimple` have been correctly entered.
1. Pay close attention to:
  - Key Tag
  - Algorithm
  - Digest Type
  - Digest

<warning>
**Warning**
  
A single character mismatch will break the chain of trust and prevent DNSSEC validation for your domain. This is a common point of failure, especially when setting up DNSSEC manually.
</warning>

## Essential tools for diagnosing DNSSEC issues
Several online tools can help you assess the health of your DNSSEC configuration. These are your first line of defense for troubleshooting DNSSEC problems.

### DNSSEC Analyzer (by Verisign/ICANN)
1. Go to: [https://dnssec-analyzer.verisignlabs.com/](https://dnssec-analyzer.verisignlabs.com/)
1. Enter your domain name and press Enter.

**What to look for:**
- Green check mark, "All Good": Indicates successful DNSSEC validation.
- Red "X" or warning symbols: Hover over them for details.

Common issues highlighted include:
- Missing DS records at the parent (your registrar)
- Incorrect DS records
- Missing DNSKEY records
- Expired signatures (RRSIG)
- Problems with NSEC/NSEC3 records

### DNSViz:
1. Go to: [https://dnsviz.net/](https://dnsviz.net/)
1. Enter your domain name, click "Analyze", then "Continue" if you have not analyzed your domain name before. Otherwise, click "Go."

What to look for: DNSViz provides a highly detailed visual representation of your DNSSEC chain of trust.
- Green lines: Indicate successful validation paths.
- Red lines or boxes: Highlight errors or warnings. Hovering over these will provide detailed error messages and suggestions. This tool is excellent for pinpointing where the chain of trust breaks for your DNSSEC-signed domain.

### Local DNSSEC validation _(using `dig`)_:
You can check DNSSEC validation from your own command line using the `dig` utility, available on most Linux/macOS systems and via tools like WSL on Windows.

1. Open your terminal or command prompt.
1. Run the command: `dig +dnssec your-domain.com` (replace `your-domain.com` with your domain).

**What to look for:**
- `AD` flag (Authentic Data): This flag in the header of the `dig` output indicates that the response has been validated by a DNSSEC-aware resolver. If it's missing, validation failed.
- `RRSIG` records: You should see RRSIG records for your queried records (e.g., A, MX, etc.).
- `NSEC` or `NSEC3` records: Present if the hostname does not exist in a signed zone.
- `DNSKEY` records: Shown if queried directly. Example command: `dig +dnssec your-domain.com dnskey`

Troubleshooting `dig` output: If the `AD` flag is missing, it confirms a problem.

<info>
The `AD` flag will only appear if the DNS resolver `dig` is querying (e.g., your ISP's DNS, or a public resolver like 8.8.8.8 if specified) is itself performing DNSSEC validation. If your local resolver is not DNSSEC-aware, this flag will not appear, regardless of your domain's DNSSEC status. For definitive checks, always cross-reference with DNSSEC Analyzer or DNSViz.
</info>

## Common DNSSEC configuration issues and their resolutions
This section details the most frequent problems identified by the tools and provides actionable steps to fix them, ensuring your DNSSEC is properly configured with DNSimple.

### Issue 1: Incorrect or missing DS records at the parent (registrar not DNSimple)
**Symptoms**: DNSSEC Analyzer/DNSViz report "No DS records found for domain" or "DS record mismatch." `dig` output lacks the `AD` flag. This is the single most common cause of DNSSEC validation failure.

**Why it happens**: The DS records you provided to your registrar weren't entered, were entered incorrectly, or haven't propagated yet.

**Resolution steps**:

1. **Verify DNSimple's DS records**: Go to your domain in your DNSimple account, and copy the exact DS record values provided.
1. **Access your registrar**: Log in to your domain registrar's website (e.g., GoDaddy, Namecheap, etc.).
1. **Navigate to DNSSEC settings**: Find the DNSSEC management section for your domain. This might be under "Domain Management," "DNS Settings," or "Security."
1. **Update/add DS records**: Enter (or re-enter) the DS records exactly as provided by DNSimple. Double-check every character, and ensure there are no spaces before or after.
  - Key Tag
  - Algorithm
  - Digest Type
  - Digest Value
1. **Save changes**: Apply the changes at your registrar.
1. **Allow propagation**: Registrar updates can take anywhere from a few minutes to 24 hours to propagate globally. Re-check with DNSSEC Analyzer.

### Issue 2: Missing or incorrect DNSKEY records in your zone
**Symptoms**: DNSSEC Analyzer/DNSViz report "DNSKEY records missing" or "DNSKEY validation failure."

**Why it happens**: This is less common with DNSimple's automated DNSSEC management, but could occur if records were accidentally deleted, or if there was an unusual issue during the automated signing process.

**Resolution steps**:
1. **Check DNSimple's DNSSEC status**: Ensure DNSSEC is still showing as "configured" in your DNSimple account.
2. **Re-enable DNSSEC (if necessary)**: If the status is disabled, try re-enabling DNSSEC within DNSimple for your domain. This will trigger a regeneration of the necessary DNSKEY records and a re-signing of your zone.
3. **Contact DNSimple support**: If re-enabling doesn't resolve the issue, or if you suspect an internal DNSimple problem, reach out to our support team with details.

### Issue 3: Expired RRSIG (Resource Record Signature) records
**Symptoms**: DNSSEC Analyzer/DNSViz show "Signature Expired" or "RRSIG Validation Failure."

**Why it happens**: DNSSEC signatures have a validity period. If your zone isn't regularly re-signed, these signatures will expire, breaking validation. DNSimple automates this process (known as "signature rollover"), so if you see this, it usually points to an underlying issue with that automation.

**Resolution steps**:
1. **Check DNSimple's DNSSEC status**: Verify that DNSSEC is enabled in your DNSimple account.
1. **Toggle DNSSEC**: Try disabling and re-enabling DNSSEC for the domain within DNSimple. This often forces a re-signing of your zone.
1. **Contact DNSimple support**: If signatures repeatedly expire, this indicates a problem with the automated signing process. Please provide details to DNSimple support for investigation.

### Issue 4: Problems with NSEC/NSEC3 records
**Symptoms**: DNSSEC Analyzer/DNSViz report "NSEC/NSEC3 record issues" or "Authenticated denial of existence failure."

**Why it happens**: These records are crucial for proving that a domain or record doesn't exist securely. Issues here can sometimes be related to incorrect zone configuration or signing, even for domains managed by DNSimple.

**Resolution steps**:
1. **Verify DNSSEC status in DNSimple**: Ensure DNSSEC is enabled.
1. **Toggle DNSSEC**: Try disabling and re-enabling DNSSEC for the domain within DNSimple. This often regenerates and correctly configures NSEC/NSEC3 records.
1. **Contact DNSimple support**: If the issue persists, it likely requires deeper investigation by our support team.

### Issue 5: DNSSEC key rollover issues
**Symptoms**: Intermittent validation failures, especially after a key rollover (when DNSimple generates new keys to maintain security). DNSViz might show issues with old versus new keys.

**Why it happens**: Key rollovers are complex. While DNSimple automates them, there can be brief periods of inconsistency if caching is aggressive or if registrars don't update DS records quickly enough.

**Resolution steps**:

1. **Patience**: Sometimes these are transient issues that resolve themselves as DNS caches clear and new keys propagate across the internet. Wait a few hours.
1. **Verify DS records (again)**: Ensure your registrar has the latest DS records provided by DNSimple. If DNSimple performed a key rollover, new DS records might have been generated, and your registrar needs to be updated manually.
1. **Check DNSSEC Analyzer/DNSViz**: These tools will indicate if the issue is related to an old DS record pointing to an expired key.
1. **Contact DNSimple support**: If issues persist beyond a few hours, DNSimple support can investigate the rollover process for your domain.

## Contact DNSimple support
If you've followed all the steps above, and your DNSSEC configuration still isn't validating, it's time to reach out to our [expert support team](https://www.dnsimple.com/contact) at DNSimple.

Before contacting support, please gather the following information:

- **Your domain name**: _(e.g., `yourwebsite.com`)_
- **Description of the problem**: What exactly is failing? (e.g., "DNSSEC Analyzer shows 'DS record mismatch'," "My site isn't loading for users in Europe when DNSSEC is enabled").
- **Tools used and their output**:
  - Screenshots from DNSSEC Analyzer and DNSViz are incredibly helpful.
  - The exact `dig +dnssec` output.
  - Any specific error messages you've encountered.
- **Steps you've already taken**: (e.g., "I've verified DS records at my registrar multiple times," "I've tried toggling DNSSEC off and on in DNSimple").
- **Time of observation**: When did you first notice the issue?

Providing this information allows our support team to diagnose and resolve your DNSSEC issue much more quickly, getting your secure DNS up and running again.
