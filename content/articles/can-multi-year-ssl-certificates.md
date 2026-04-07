---
title: Do you support multi-year SSL certificates?
excerpt: Information about purchasing a multi-year SSL certificate with DNSimple.
meta: DNSimple does not support multi-year SSL certificates. Maximum certificate validity is dropping to 200 days in 2026, 100 days in 2027, and 47 days in 2029.
categories:
- SSL Certificates
---

# Do you support multi-year SSL certificates?

As of August 14, 2020, it is no longer possible to purchase certificates for a period of longer than one year. With ballot SC31, the CA/B forum prohibited Certificate Authorities from issuing certificates that are valid for longer than 397 days, effective September 1, 2020. For the full timeline of validity changes, see [SSL Certificate Validity Changes (2026 - 2029)](/articles/announcement-ssl-certificate-validity-changes/).

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

## Have more questions?

If you have any questions or need assistance, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
