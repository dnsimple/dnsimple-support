---
title: Common DNS Records
excerpt: Examples of the most common DNS records to configure for your domain.
meta: Discover essential DNS record types for your domain, including A, CNAME, MX, and TXT records. Learn how to configure them effectively for optimal performance.
categories:
- DNS
---

# Common DNS Records

### Table of Contents {#toc}

* TOC
{:toc}

---


<div class="aspect-ratio aspect-ratio--16x9 z-0 mb4">
  <iframe loading="lazy" src="https://www.youtube.com/embed/bifh31N2hFQ?si=uM3Z1oS1SqzQNLT4" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

The [Domain Name System (DNS)](/articles/what-is-dns/) is built on various record types, also known as resource records, each serving a specific function. While the DNS ecosystem includes many types, some are foundational for nearly every functional domain, while others are specialized, less common, or have been superseded.

This article will introduce you to the most common and essential DNS record types. We'll outline a basic set of DNS records that most domains need to function correctly for web browsing and email, along with simple ways to verify their presence.

## Understanding the most common DNS record types

Below is a summary of the most frequently used DNS record types. For a deeper dive into each, refer to their linked dedicated explanation articles.

### A record
**Description:** The most fundamental type. An A record maps a human-readable domain name (like www.example.com) directly to an IPv4 address (e.g., `192.0.2.1`). It's how your browser finds the specific server hosting a website.

**Learn more:** [What Is an A Record?](/articles/a-record/)

### AAAA record
**Description:** The IPv6 counterpart to the A record. An AAAA record maps a domain name to an IPv6 address (e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334`). Increasingly essential for modern internet connectivity.

**Learn more:** [What Is an AAAA Record?](/articles/aaaa-record/)

### CNAME record
**Description:** Functions as an alias, mapping one hostname to another hostname (e.g., `blog.example.com` to `yourblog.wordpress.com`). It's commonly used to reduce duplication and simplify maintenance when multiple names point to the same service.

**Learn more:** [What Is a CNAME Record?](/articles/cname-record/)

### MX record
**Description:** Identifies the mail servers responsible for receiving email for a domain. If you want to receive emails at your domain (e.g., `you@example.com`), these records must be correctly configured.

**Learn more:** [What Is an MX Record?](/articles/mx-record/)

### NS record
**Description:** Delegates a domain or subdomain to a set of authoritative name servers. These records are critical for the DNS hierarchy, telling resolvers which servers are responsible for your domain's DNS information.

**Learn more:** [What Is an NS Record?](/articles/ns-record/)

### SRV record
**Description:** Helps clients locate specific services (like VoIP or instant messaging) by defining the hostname, port, priority, and weight of servers offering that service.

**Learn more:** [What Is an SRV Record?](/articles/srv-record/)

### SOA record
**Description:** The "Start of Authority" record stores vital administrative information about your DNS zone, including the primary name server, the domain administrator's email, and various timers for zone transfers and caching. Every zone must have an SOA record, though DNSimple automatically manages these for you.

**Learn more:** [What Is an SOA Record?](/articles/soa-record/)

### TXT record
**Description:** Used to associate arbitrary text content with a domain. TXT records are highly versatile and are essential for various purposes like email authentication (SPF, DKIM, DMARC) and domain ownership verification.

**Learn more:** [What Is a TXT Record?](/articles/txt-record/)

### CAA record
**Description:** A security record that allows you to specify which Certificate Authorities (CAs) are authorized to issue SSL/TLS certificates for your domain. This helps prevent unauthorized certificate issuance.

**Learn more:** [What Is a CAA Record?](/articles/caa-record/)

### ALIAS record (DNSimple proprietary)
**Description:** A DNSimple-specific record that provides CNAME-like functionality but can be used on the root domain (apex zone) and coexist with other records.

**Learn more:** [What Is an ALIAS Record?](/articles/alias-record/)

### URL record (DNSimple proprietary)
**Description:** A DNSimple-specific record that enables easy web (HTTP) redirects from one hostname to another URL, handled by DNSimple's redirector service.

**Learn more:** [What Is a URL Record?](/articles/url-record/)

## Example DNS records for a typical domain

While every domain's DNS configuration can be unique, a basic set of records is common to most domains for fundamental internet functionality (website and email). If you've just purchased a domain or are reviewing an existing setup, use this list as a checklist.

_This article assumes `example.com` is your domain name._

1. Root domain record (`example.com`): Every domain needs a record for its root (or apex) domain. Without it, your domain won't resolve, and web browsers will return an error.
- **Common configuration:**
    - An A record typically points to the IPv4 address where your website is hosted.
    - If you're using a cloud service (like Heroku, Netlify, GitHub Pages) that provides a hostname (not a static IP), and you need other records (like MX) on your root domain, an ALIAS record is the typical choice.
    - If the root domain needs to redirect to another URL (e.g.,`www.example.com`), you can use a URL record.

<note> 
A CNAME record cannot be used for the root domain (example.com) if you need any other records (like MX or NS) at that name. An invalid configuration with a CNAME at the root will break other services, like email. 
</note>

- **To verify (using `dig`):**
    - Open your terminal and type `dig example.com.` The `ANSWER SECTION` should return at least one A record (or ALIAS/URL records which synthesize as A records in the response).
    - Example A record output:

    ```
    dig dnsimple.com

    ;; ANSWER SECTION:
    dnsimple.com.		59	IN	A	104.245.210.170
    ```
### 2. www subdomain: (`www.example.com`)

It's common to have the `www` subdomain configured in addition to the root domain. There are several possibilities:

1. Using an A record to point to the same IP of the root domain.
2. Using a CNAME record to point to the root domain.
3. Using a URL record to redirect to the root domain.

<tip>
Using an ALIAS record for the `www` subdomain is not incorrect, however it's generally unnecessary. In most cases, you can replace the ALIAS with the CNAME.
</tip>

<div class="section-steps" markdown="1">
##### To verify

1. Use `dig www.example.com` to check the presence of a www record.
1. The answer should return at least one A record or exactly one CNAME record as below:

    ```
    dig www.dnsimple.com

    ;; ANSWER SECTION:
    www.dnsimple.com.	59	IN	A	104.245.210.170
    ```

    ```
    dig www.dnsimple.com

    ;; ANSWER SECTION:
    www.dnsimple.com.	3599	IN	CNAME	dnsimple.com.
    dnsimple.com.		59	IN	A	104.245.210.170
    ```
</div>

### 3. MX email records

If you want to receive emails for your domain, you need to have at least one MX record pointing to your doamin mail server. For rendudancy, there are generally two or more MX records, each with different content and priority.

<div class="section-steps" markdown="1">
##### To verify

1. Use `dig MX example.com` to check the presence of MX records on the root domain.
1. The answer should return at least one MX record as below:

    ```
    dig MX www.dnsimple.com

    ;; ANSWER SECTION:
    dnsimple.com.		3599	IN	MX	1 aspmx.l.google.com.
    dnsimple.com.		3599	IN	MX	5 alt1.aspmx.l.google.com.
    dnsimple.com.		3599	IN	MX	5 alt2.aspmx.l.google.com.
    dnsimple.com.		3599	IN	MX	10 alt3.aspmx.l.google.com.
    dnsimple.com.		3599	IN	MX	10 alt4.aspmx.l.google.com.
    ```
</div>

### 4. CAA record

It's advisable to [add a CAA record](/articles/caa-record/) to the root domain to specify which certificate authorities can issue a certificate for your domain.

<div class="section-steps" markdown="1">
##### To verify

1. Use `dig CAA example.com` to check for the presence of a CAA record on the root domain.
1. The answer should return at least one CAA record as below:

    ```
    dig CAA www.dnsimple.com

    ;; ANSWER SECTION:
    dnsimple.com.		3599	IN	CAA	0 iodef "mailto:ops@dnsimple.com"
    dnsimple.com.		3599	IN	CAA	0 issue "amazonaws.com"
    dnsimple.com.		3599	IN	CAA	0 issue "sectigo.com"
    dnsimple.com.		3599	IN	CAA	0 issue "letsencrypt.org"
    dnsimple.com.		3599	IN	CAA	0 issuewild "sectigo.com"
    ```
</div>
