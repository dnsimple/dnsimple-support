---
title: CAA Records and SSL Certificates
excerpt: CAA records control which Certificate Authorities can issue SSL certificates for your domain. Misconfigured or missing CAA records are a common cause of certificate issuance failures.
meta: Learn how CAA records affect SSL certificate issuance at DNSimple, what values to use for Sectigo and Let's Encrypt, and how to troubleshoot CAA-related failures.
categories:
- SSL Certificates
---

# CAA Records and SSL Certificates

### Table of Contents {#toc}

* TOC
{:toc}

---

A [CAA (Certification Authority Authorization) record](/articles/caa-record/) is a DNS record that specifies which Certificate Authorities are allowed to issue SSL certificates for your domain. CAs are required to check CAA records before issuing a certificate — if your domain has CAA records and the CA is not listed, the certificate request will be denied, even if [domain validation](/articles/ssl-domain-validation-methods/) succeeds.

## How CAA affects certificate orders {#how-it-works}

When you order an SSL certificate, the CA checks your domain's DNS for CAA records as one of the final steps before issuance:

- **No CAA records present** — Any CA is allowed to issue a certificate for the domain. This is the default behavior. If you have not explicitly added CAA records, your certificate orders will not be affected.
- **CAA records present** — Only the CAs listed in the records are allowed to issue. If the CA processing your order is not listed, the order will fail.

CAA records are inherited by subdomains. A CAA record on `example.com` applies to `www.example.com`, `api.example.com`, and all other subdomains unless a more specific CAA record is set on the subdomain itself. For the full details of CAA record behavior, including inheritance and the `issuewild` tag, see [What Is a CAA Record?](/articles/caa-record/) and the [CAA Record Format and Policy Tags](/articles/caa-record-format/) reference.

## Required CAA values for DNSimple certificates {#values}

If you use CAA records and purchase certificates through DNSimple, you need to authorize the correct CA for each certificate type.

### Sectigo certificates {#sectigo}

For Sectigo single-name and wildcard certificates, authorize `sectigo.com`:

```
example.com.  CAA 0 issue "sectigo.com"
```

For **wildcard certificates**, you must also add an `issuewild` record. Sectigo wildcard certificates include both the wildcard name (`*.example.com`) and the bare domain (`example.com`), so both `issue` and `issuewild` are required:

```
example.com.  CAA 0 issue "sectigo.com"
example.com.  CAA 0 issuewild "sectigo.com"
```

> [!WARNING]
> If you purchase a Sectigo wildcard certificate and only have an `issue` record without a matching `issuewild` record, the wildcard portion of the certificate will be denied. This is one of the most common CAA-related issuance failures.

### Let's Encrypt certificates {#letsencrypt}

For Let's Encrypt single-name and wildcard certificates, authorize `letsencrypt.org`:

```
example.com.  CAA 0 issue "letsencrypt.org"
```

For Let's Encrypt wildcard certificates, add both:

```
example.com.  CAA 0 issue "letsencrypt.org"
example.com.  CAA 0 issuewild "letsencrypt.org"
```

### Using both Sectigo and Let's Encrypt {#both}

If you use both certificate types for different domains or subdomains within the same zone, authorize both CAs:

```
example.com.  CAA 0 issue "sectigo.com"
example.com.  CAA 0 issue "letsencrypt.org"
example.com.  CAA 0 issuewild "sectigo.com"
example.com.  CAA 0 issuewild "letsencrypt.org"
```

## Common CAA issues that block certificates {#troubleshooting}

If your certificate order fails and you have CAA records configured, check for these common problems:

- **CA not listed.** The most straightforward cause — the CA for your certificate type is not in your CAA records. Add the appropriate `issue` (and `issuewild` for wildcards) record.
- **Missing `issuewild` for wildcard certificates.** The `issuewild` tag specifically controls wildcard issuance. An `issue` record alone does not authorize wildcard certificates when `issuewild` records exist for the domain.
- **CAA records on a parent domain.** If you are ordering a certificate for `app.example.com` and `example.com` has CAA records, those records apply unless `app.example.com` has its own CAA records that override them.
- **Stale records after switching CAs.** If you previously used a different CA and configured CAA records for it, those records may still be in place. Update them to include your current CA.
- **DNS propagation delay.** After adding or changing CAA records, allow time for DNS propagation before retrying the certificate order.

## CAA and auto-renewal {#auto-renewal}

For Let's Encrypt certificates with [auto-renewal](/articles/ssl-auto-renewal/) enabled, CAA records are checked every time auto-renewal runs. If CAA records are present and Let's Encrypt is not authorized, the auto-renewal will fail.

DNSimple retries auto-renewal daily, so if you fix the CAA records, the next retry should succeed. However, if the issue persists until the certificate expires, you will need to [order a new certificate](/articles/get-lets-encrypt-certificate/).

## Managing CAA records in DNSimple {#managing}

To add or update CAA records, see [Managing CAA Records](/articles/manage-caa-record/). For a detailed explanation of the record format, tag types, and examples, see [CAA Record Format and Policy Tags](/articles/caa-record-format/).

## Have more questions?

If you have any questions about CAA records and how they affect your SSL certificates, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
