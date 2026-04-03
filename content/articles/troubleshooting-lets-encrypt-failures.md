---
title: Troubleshooting Let's Encrypt Certificate Failures
excerpt: Your Let's Encrypt certificate is not issuing or renewing. Learn the common causes and how to fix them.
meta: Fix Let's Encrypt SSL certificate failures in DNSimple. Covers DNS delegation issues, CAA record blocks, rate limits, DNSSEC misconfigurations, and Empty Non-Terminal problems.
categories:
- SSL Certificates
---

# Troubleshooting Let's Encrypt Certificate Failures

### Table of Contents {#toc}

* TOC
{:toc}

---

Let's Encrypt certificates in DNSimple use DNS-based validation. The domain must resolve with DNSimple's name servers for the ACME challenge to succeed. If your certificate is not issuing or renewing, check the following.

## Domain Not Resolving With DNSimple {#delegation}

Let's Encrypt certificates require the domain to be delegated to and resolving with DNSimple's name servers. If the domain's name servers have been changed to another provider, the DNS challenge will fail.

**Check:** Go to the domain page in DNSimple and verify the name server delegation status. The domain must be using [DNSimple's name servers](/articles/dnsimple-nameservers/).

**Fix:** If the domain was moved to another DNS provider, [update the name servers back to DNSimple](/articles/pointing-domain-to-dnsimple/), or switch to a [Sectigo certificate](/articles/ordering-standard-certificate/) which does not require DNSimple DNS.

## Secondary DNS Conflict {#secondary-dns}

Let's Encrypt certificates are not compatible with [Secondary DNS](/articles/secondary-dns/). If your domain uses Secondary DNS, DNSimple cannot create the ACME challenge records needed for validation.

**Fix:** Either disable Secondary DNS for the domain or use a [Sectigo certificate](/articles/ordering-standard-certificate/) instead.

## CAA Records Blocking Issuance {#caa}

If your domain has [CAA records](/articles/caa-record/) and Let's Encrypt is not listed as an authorized CA, the certificate request will be denied.

**Fix:** Add a CAA record authorizing Let's Encrypt: `example.com. CAA 0 issue "letsencrypt.org"`. For wildcard certificates, also add: `example.com. CAA 0 issuewild "letsencrypt.org"`.

If you do not have any CAA records, this is not an issue - CAs can issue freely when no CAA records are present.

## DNSSEC Misconfiguration {#dnssec}

If [DNSSEC](/articles/dnssec/) is enabled for the domain but is misconfigured (for example, stale DS records at the registrar after a DNS provider change), the CA cannot securely resolve the ACME challenge record and validation will fail.

**Check:** Use an online DNSSEC validator (such as [DNSViz](https://dnsviz.net/)) to check for DNSSEC errors on your domain.

**Fix:** Either fix the DNSSEC configuration (update DS records at the registrar to match the current DNSKEY records) or disable DNSSEC if it is not required.

## Let's Encrypt Rate Limits {#rate-limits}

Let's Encrypt enforces [rate limits](https://letsencrypt.org/docs/rate-limits/) on certificate issuance. The most relevant limits are:

- **50 certificates per registered domain per week.** This includes all subdomains. If you manage many subdomains under one domain, you may hit this limit.
- **5 duplicate certificates per week.** If you request the same exact set of names multiple times, you may be rate-limited.

**Fix:** Wait for the rate limit window to expire (typically one week). If you are consistently hitting limits, consider consolidating names into fewer SAN certificates.

## Empty Non-Terminal (ENT) Issues {#ent}

ACME challenge records (e.g., `_acme-challenge.subdomain.example.com`) may create [Empty Non-Terminals (ENTs)](/articles/empty-non-terminals/) in your DNS zone. If you use wildcard DNS records, ENTs can affect resolution for intermediate domain names.

**Learn more:** [Wildcards and ENTs](/articles/empty-non-terminals/#the-acme-challenge-example)

## Auto-Renewal Failures {#auto-renewal}

If [auto-renewal](/articles/letsencrypt/#auto-renewal) is enabled but the certificate is not renewing, the most common causes are the issues listed above - delegation changes, DNSSEC problems, CAA records, or rate limits. DNSimple retries auto-renewal daily, so fixing the underlying issue will allow the next retry to succeed.

If the certificate has already expired, you will need to [order a new Let's Encrypt certificate](/articles/ordering-lets-encrypt-certificate/).

## Have more questions?

If you have any questions about Let's Encrypt certificate issues, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
