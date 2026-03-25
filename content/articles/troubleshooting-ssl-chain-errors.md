---
title: Troubleshooting SSL Certificate Chain Errors
excerpt: Your SSL certificate shows "not trusted" errors even though it is valid. Learn how to fix certificate chain issues.
meta: Fix SSL certificate chain errors like "certificate not trusted" or incomplete chain warnings. Covers missing intermediate certificates, wrong chain order, and verification steps.
categories:
- SSL Certificates
---

# Troubleshooting SSL Certificate Chain Errors

### Table of Contents {#toc}

* TOC
{:toc}

---

A valid, non-expired SSL certificate can still cause browser errors if the [certificate chain](/articles/what-is-ssl-certificate-chain/) is incomplete or incorrectly configured on your server. The chain links your server certificate to a trusted [root certificate](/articles/what-is-ssl-root-certificate/) through one or more [intermediate certificates](/articles/what-is-ssl-certificate-chain/).

## Symptoms {#symptoms}

Certificate chain errors typically appear as:

- `ERR_CERT_AUTHORITY_INVALID` in Chrome
- "This certificate was signed by an unknown authority" in Firefox
- "Certificate not trusted" in various clients and tools
- SSL test tools reporting "chain issues" or "incomplete chain"

The certificate itself may show as valid and not expired, but the browser cannot trace the trust path from your certificate to a recognized root.

## Missing Intermediate Certificate {#missing-intermediate}

**Cause:** The most common chain error. Your server is presenting the server certificate but not the intermediate certificate(s) that connect it to the root. Some browsers (notably Chrome on desktop) can work around this by fetching intermediates automatically, but others (mobile browsers, API clients, curl) will reject the connection.

**Fix:**

1. Download the intermediate certificate bundle from your certificate page in DNSimple. DNSimple provides the full chain for every certificate it issues.
2. Install the intermediate certificate alongside your server certificate. The exact method depends on your platform:
   - **Apache:** Use the `SSLCertificateChainFile` directive or concatenate the chain with the certificate in `SSLCertificateFile`.
   - **NGINX:** Concatenate the server certificate and intermediate chain into a single file and reference it with `ssl_certificate`.
   - **IIS / Azure:** Import the PFX file, which bundles the certificate, chain, and private key together.
3. After installation, verify the chain with an online tool such as [SSL Labs](https://www.ssllabs.com/ssltest/) or [SSL Checker](https://www.sslshopper.com/ssl-checker.html).

For platform-specific instructions, see [Installing an SSL Certificate](/articles/installing-ssl-certificate/).

## Wrong Chain Order {#wrong-order}

**Cause:** The certificates are present but concatenated in the wrong order. The correct order is:

1. Server certificate (your domain's certificate)
2. Intermediate certificate(s) (one or more, in order from lowest to highest)
3. Root certificate (optional -- browsers have these pre-installed)

**Fix:** Re-concatenate the certificate files in the correct order. The server certificate must come first, followed by the intermediate(s).

## Verifying Your Chain {#verify}

You can test your certificate chain without a browser using these methods:

**Online tools:**

- [SSL Labs Server Test](https://www.ssllabs.com/ssltest/) - Provides a detailed chain analysis and grade.
- [SSL Checker](https://www.sslshopper.com/ssl-checker.html) - Quick chain verification.

**Command line (OpenSSL):**

```
openssl s_client -connect example.com:443 -servername example.com
```

Look for the certificate chain in the output. A complete chain shows your server certificate, the intermediate(s), and the path to the root. If you see "verify error:num=20:unable to get local issuer certificate", the intermediate is likely missing.

## Have More Questions?

If you have any questions about certificate chain errors, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
