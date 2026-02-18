---
title: Do you support multi-year SSL certificates?
excerpt: Information about purchasing a multi-year SSL certificate with DNSimple.
meta: Discover how to purchase multi-year SSL certificates with DNSimple, ensuring long-term security and peace of mind for your online presence.
categories:
- SSL Certificates
---

# Can I purchase an SSL certificate for more than one year?

As of August 14, 2020, it's no longer possible to purchase certificates for a period of longer than one year. [As explained in this article](https://blog.dnsimple.com/2020/08/ssl-certificates-1-year/), with ballot SC31, the CA/B forum has effectively prohibited Certificate Authorities from issuing certificates that are valid for longer than 397 days, effective September 1, 2020.

This is an industry-standard requirement. It applies to any Certificate Authority or reseller, and not just to DNSimple.

## Certificate validity is getting shorter {#shorter-validity}

The CA/Browser Forum has approved a phased reduction in maximum SSL/TLS certificate lifetimes:

| Effective date   | Maximum certificate validity | Maximum DCV reuse |
|------------------|------------------------------|-------------------|
| March 15, 2026   | 200 days                     | 200 days          |
| March 15, 2027   | 100 days                     | 100 days          |
| March 15, 2029   | 47 days                      | 10 days           |

Starting **March 15, 2026**, Sectigo certificates purchased through DNSimple will be valid for a maximum of 200 days. You will need to purchase a new certificate before it expires to maintain uninterrupted coverage.

This change applies to all publicly trusted SSL/TLS certificates issued after March 15, 2026. Existing certificates issued before that date remain valid until their original expiration.
