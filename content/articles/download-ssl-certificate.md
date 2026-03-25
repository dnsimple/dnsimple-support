---
title: How to Download Your SSL Certificate Files
excerpt: Download your SSL certificate, intermediate chain, and private key from DNSimple for installation on your server.
meta: Learn how to download your SSL certificate files from DNSimple, including the server certificate, intermediate chain, and private key. Includes file format guidance for different platforms.
categories:
- SSL Certificates
---

# How to Download Your SSL Certificate Files

### Table of Contents {#toc}

* TOC
{:toc}

---

After your SSL certificate is [issued](/articles/how-long-to-issue-ssl-certificate/), you can download the certificate files from your DNSimple account. You will need these files to [install the certificate](/articles/installing-ssl-certificate/) on your web server or hosting platform.

## Before You Start {#before}

- The certificate must be in an **issued** state. If the certificate is still pending validation, complete the [validation process](/articles/getting-started-ssl-certificates/#validate) first.
- You will need the server certificate, the intermediate certificate chain, and (if DNSimple generated the [CSR](/articles/what-is-csr/)) the [private key](/articles/ssl-private-keys/).

## Download the Certificate Files {#download}

<div class="section-steps" markdown="1">
##### Steps to download your certificate files

1. Log into DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. On the header, click the <label>Domain Names</label> tab, locate the relevant domain, and click on the name to access the domain page.
1. Scroll down to the <label>SSL certificates</label> section and click on the certificate you want to download.
1. On the certificate detail page, scroll to the download section. You will find:
   - **Server certificate** - Your domain's certificate file.
   - **Intermediate certificate chain** - The chain of trust linking your certificate to the root CA.
   - **Private key** - Available only if DNSimple generated the CSR. If you provided a custom CSR, you already have the private key.
1. Click each file to download it.
</div>

> [!WARNING]
> Keep your private key secure. Do not share it, email it, or store it in a public repository. If your private key is compromised, [reissue the certificate](/articles/ssl-certificate-reissue/) immediately.

## Which Files You Need by Platform {#platforms}

| Platform | Files needed | Format |
| -------- | ------------ | ------ |
| Apache   | Server certificate, intermediate chain, private key (separate files) | PEM |
| NGINX    | Server certificate + chain (concatenated into one file), private key | PEM |
| IIS / Azure | All three bundled into one file | PFX / PKCS#12 |
| Heroku   | Server certificate, intermediate chain, private key | PEM |

> [!TIP]
> If your platform requires a PFX file and DNSimple provides PEM files, you can convert them using OpenSSL: `openssl pkcs12 -export -out certificate.pfx -inkey private.key -in certificate.crt -certfile chain.crt`

For platform-specific installation instructions, see [Installing an SSL Certificate](/articles/installing-ssl-certificate/).

## Have More Questions?

If you have any questions about downloading your certificate files, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
