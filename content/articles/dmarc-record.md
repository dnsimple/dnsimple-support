---
title: What Is a DMARC Record?
excerpt: What a DMARC record is, and how DMARC records work.
meta: Learn what DMARC records are, how they function, and how they can enhance your email security by preventing spoofing and phishing attacks effectively.
categories:
- DNS
- Emails
---

# DMARC Records

### Table of Contents {#toc}

* TOC
{:toc}

---
## What is a DMARC record?

**DMARC**, which stands for **Domain-based Message Authentication, Reporting and Conformance**, is a powerful email authentication, policy, and reporting protocol. It builds directly upon the foundational email authentication methods of [SPF (Sender Policy Framework)](/articles/spf-record/) and [DKIM (DomainKeys Identified Mail)](/articles/dkim-record/) to provide an overarching framework for email security.

Its primary purpose is to help email receivers determine if an incoming message legitimately aligns with what is known about the sender's domain. This capability is critical for combating email spoofing, phishing attacks, and spam, helping ensure only authorized messages reach inboxes.

## How DMARC works: building on SPF and DKIM
DMARC acts as a crucial layer of enforcement and feedback that works with SPF and DKIM. For DMARC to function effectively, your domain must have correctly configured SPF and DKIM records.

### Authentication and alignment
When a mail server receives an email, it first checks its SPF and/or DKIM status. DMARC then introduces the concept of **alignment**. It verifies that the "From" address (the one users see) in the email matches the domain that passed SPF authentication and/or the domain that signed the email with DKIM.

- **SPF alignment:** Checks if the visible "From" domain matches the domain used for the SPF check.
- **DKIM alignment:** Checks if the visible "From" domain matches the domain used for the DKIM signature. If either SPF or DKIM passes and aligns with the visible "From" address, the message passes DMARC authentication.

### Policy enforcement
Based on the DMARC record published in your DNS, you can instruct receiving mail servers what to do with messages that fail DMARC authentication and alignment. 

**These policies include:**
- `p=none`: Monitor only; take no action.
- `p=quarantine`: Treat as suspicious; usually means placing in spam/junk folder.
- `p=reject`: Do not accept the message; bounce it back to the sender. This allows domain owners to gradually ramp up their enforcement or maintain strict controls.

### Reporting and feedback
DMARC provides a powerful feedback mechanism. You can specify email addresses in your DMARC record to receive aggregated reports (RUA) and/or forensic reports (RUF) about email traffic sent from your domain. 

**These reports provide invaluable insights into:**
- Who is sending email claiming to be from your domain.
- Which emails are passing/failing SPF and DKIM.
- Where authentication failures are occurring. This data helps you identify legitimate email streams that might need DMARC configuration adjustments and detect unauthorized use of your domain.
  
### Key benefits of DMARC
**Stronger anti-phishing and anti-spoofing:** Provides a robust defense against impersonation.

**Enhanced deliverability:** Builds trust with receiving mail servers, improving inbox placement.

**Brand protection:** Prevents malicious use of your domain, safeguarding your brand reputation.

**Visibility and control:** The reporting feature gives you actionable data to understand your email ecosystem and enforce your sending policies effectively.

A DMARC record is published as a [TXT record](/articles/txt-record/) at a specific subdomain, typically `_dmarc.yourdomain.com`. The content of this TXT record contains all the DMARC policy tags and reporting addresses.

## Setting up, verifying, and monitoring DMARC
For step-by-step instructions on how to add a DMARC record to your DNSimple zone, including guidance on the required `_dmarc` subdomain and common policy tags, please refer to our dedicated How-To Guide: Setting Up DMARC (LINK NEW ARTICLE).

To verify that your DMARC record is correctly published and configured, consult our How-To Guide: [Verifying DMARC with dig and Online Tools](/articles/verifying-dmarc/). This covers using command-line tools like `dig` and online verification services.

## Technical details
For more on the technical specifications and intricacies of the DMARC protocol, visit [DMARC.org](http://DMARC.org). They provide extensive resources, including links to the relevant RFCs.

## Have more questions?
If you have additional questions or need any assistance with your DMARC records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
