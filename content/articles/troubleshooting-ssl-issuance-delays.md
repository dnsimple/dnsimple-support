---
title: Troubleshooting SSL Certificate Issuance Delays
excerpt: Your SSL certificate is stuck in a pending or submitted state. Learn the common causes and how to resolve them.
meta: Fix SSL certificate issuance delays in DNSimple. Covers pending email validation, CAA record blocks, DNS propagation issues, and Let's Encrypt rate limits.
categories:
- SSL Certificates
---

# Troubleshooting SSL Certificate Issuance Delays

### Table of Contents {#toc}

* TOC
{:toc}

---

After ordering an SSL certificate, it moves through validation and issuance before it is ready to install. If your certificate is stuck in a "submitted" or "pending" state, one of the following issues is likely the cause.

## Sectigo Certificate Delays {#sectigo}

### Email validation not completed {#email-not-completed}

The most common cause of Sectigo certificate delays is that the [domain validation email](/articles/ssl-certificates-email-validation/) has not been approved. Sectigo will not issue the certificate until someone clicks the approval link in the validation email.

**Check:**

1. Verify you selected the correct validation email address on the certificate page in DNSimple.
2. Check the inbox (and spam/junk folder) of that email address for the validation message from Sectigo.
3. If the email was not received, see [Troubleshooting Email Validation for SSL Certificates](/articles/troubleshooting-ssl-email-validation/).

### CAA records blocking issuance {#caa-sectigo}

If your domain has [CAA records](/articles/caa-record/) and Sectigo is not listed as an authorized certificate authority, Sectigo will refuse to issue the certificate even after email validation succeeds.

**Fix:** Add a CAA record authorizing Sectigo: `example.com. CAA 0 issue "sectigo.com"`. For wildcard certificates, also add: `example.com. CAA 0 issuewild "sectigo.com"`.

### Extended CA review {#ca-review}

Occasionally, Sectigo holds a certificate for additional review. This can add hours or days to the issuance process. If your certificate has been pending for more than 24 hours after email approval, [contact support](https://dnsimple.com/feedback) and we will investigate with Sectigo.

## Let's Encrypt Certificate Delays {#letsencrypt}

Let's Encrypt certificates are typically issued within 30-60 minutes. If your certificate has been pending longer, see [Troubleshooting Let's Encrypt Certificate Failures](/articles/troubleshooting-lets-encrypt-failures/) for DNS delegation, rate limit, and CAA issues.

## General Tips {#general}

- Check the certificate status on the certificate detail page in your DNSimple account. The status indicates which stage the certificate is in.
- Review [How Long Does It Take to Issue an SSL Certificate?](/articles/how-long-to-issue-ssl-certificate/) for expected timelines by certificate type.
- If the certificate has been pending for an unusually long time and you have verified all the above, [contact support](https://dnsimple.com/feedback) and we will investigate.

## Have More Questions?

If you have any questions about certificate issuance, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
