---
title: Troubleshooting DNSSEC
excerpt: A comprehensive guide to diagnosing and resolving common DNSSEC issues for your domain, including checks for DS records, DNSKEYs, RRSIGs, and NSEC/NSEC3 records. Learn how to use essential tools like DNSSEC Analyzer, DNSViz, and dig.
meta: Troubleshoot DNSSEC with our detailed guide, covering DS records, DNSKEYs, RRSIGs, and NSEC/NSE to ensure your domain's security.
categories:
  - DNSSEC
---

# Troubleshooting DNSSEC

If you're new to DNSSEC, start with [What Is DNSSEC?](/articles/what-is-dnssec/) to understand what DNSSEC is and how it works. For a comprehensive overview of DNSSEC at DNSimple, see [DNSSEC at DNSimple](/articles/dnssec/).

### Table of Contents {#toc}

* TOC
{:toc}
---

## Is DNSSEC active for your DNSimple domain?

There are two ways to check this:

1. **Domain Names List**: In your list of domains, look for a `DNSSEC` label on the domain. If present, it indicates DNSSEC is enabled.
1. **DNSSEC card**: When you are on the domain page, click the `DNSSEC` tab on the left side. On this page, you can see the DNSSEC state.

## Essential tools for diagnosing DNSSEC issues

Several online tools can help you assess the health of your DNSSEC setup. These are your first line of defense for troubleshooting DNSSEC problems.

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
You can check DNSSEC validation from your own command line using the `dig` utility, available on most Linux/macOS systems and via tools like WSL on Windows. For detailed instructions on using `dig`, see [How to Use dig](/articles/how-dig/). For a quick reference of `dig` syntax and options, see the [dig Reference Guide](/articles/dig-reference-guide/).

1. Open your terminal or command prompt.
1. Run the command: `dig +dnssec your-domain.com` (replace `your-domain.com` with your domain).

**What to look for:**
- `AD` flag (Authentic Data): This flag in the header of the `dig` output indicates that the response has been validated by a DNSSEC-aware resolver. If it's missing, validation failed.
- `RRSIG` records: You should see RRSIG records for your queried records (e.g., A, MX, etc.). To learn more about RRSIG records, see [Understanding RRSETs and RRSIGs in DNSSEC](/articles/understanding-rrsets-rrsigs/).
- `NSEC` or `NSEC3` records: Present if the hostname does not exist in a signed zone. To learn more about these records, see [Understanding NSEC and NSEC3 Records](/articles/nsec-nsec3-records/).
- `DNSKEY` records: Shown if queried directly. Example command: `dig +dnssec your-domain.com dnskey` To learn more about DNSKEY records, see [DNSKEY Records Explained](/articles/dnskey-records-explained/).

Troubleshooting `dig` output: If the `AD` flag is missing, it confirms a problem.

> [!NOTE]
> The `AD` flag will only appear if the DNS resolver `dig` is querying (e.g., your ISP's DNS, or a public resolver like 8.8.8.8 if specified) is itself performing DNSSEC validation. If your local resolver is not DNSSEC-aware, this flag will not appear, regardless of your domain's DNSSEC status. For definitive checks, always cross-reference with DNSSEC Analyzer or DNSViz.

## Common DNSSEC issues and their resolutions
This section details the most frequent problems identified by the tools and provides actionable steps to fix them, ensuring your DNSSEC is properly set up with DNSimple.

### Incorrect or missing DS records in the parent zone (registrar not DNSimple)
**Symptoms**: DNSSEC Analyzer/DNSViz report "No DS records found for domain" or "DS record mismatch." `dig` output lacks the `AD` flag. This is the single most common cause of DNSSEC validation failure.

**Why it happens**: The DS records weren't provisioned, were provisioned incorrectly, or haven't propagated yet.

**Resolution steps**:

1. **Verify DNSimple's DS records**: Go to the DNSSEC tab of your domain in your DNSimple account, and copy the exact DS record values provided.
1. **Access your registrar**: Log in to your domain registrar's website and provision the DS record. Instructions will vary depending on your particular domain registrar (e.g., GoDaddy, Namecheap, etc.).
1. **Allow propagation**: Registrar updates can take anywhere from a few seconds to a few hours, and cached DS records will invalidate after 24 hours. Re-check with DNSSEC Analyzer.

### Expired RRSIG (Resource Record Signature) records
**Symptoms**: DNSSEC Analyzer/DNSViz show "Signature Expired" or "RRSIG Validation Failure."

**Why it happens**: A DNSSEC operation on your domain didn't successfully complete, and DNSSEC key sets were left in place, eventually getting expired.

**Resolution steps**:
1. **Check your email inbox**: Check your email for any automated DNSSEC notifications, and follow the included instructions. Our system will automatically notify you when a DNSSEC operation doesn't complete successfully.

## Contact DNSimple support
Please reach out to our [expert support team](https://www.dnsimple.com/contact) at DNSimple about any DNSSEC-related issues.

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
