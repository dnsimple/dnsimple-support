---
title: What is the SSL Certificate Chain?
excerpt: The SSL certificate chain is a series of certificates that link your server certificate to a trusted root certificate, establishing trust in your website's identity.
meta: Understand SSL certificate chains, how root and intermediate certificates work together, and why the complete chain is essential for browser trust.
categories:
- SSL Certificates
---

# What is the SSL Certificate Chain?

### Table of Contents {#toc}

* TOC
{:toc}

---

The **SSL certificate chain** (also called the **certificate chain of trust**) is a series of certificates that links your server's SSL certificate to a trusted [root certificate](/articles/what-is-ssl-root-certificate/). This chain establishes trust in your website's identity and allows web browsers to verify that your certificate is legitimate.

## How the certificate chain works {#how-it-works}

There are two types of [certificate authorities (CAs)](/articles/what-is-certificate-authority/): **root CAs** and **intermediate CAs**. For an SSL certificate to be trusted, that certificate must chain back to a CA that is included in the trusted store of the device that is connecting (such as a web browser or operating system).

Almost no certificate is issued directly by a CA in the trusted store. Your certificate is issued by an intermediate CA, and the intermediate CA is not itself in the trusted store — which is exactly why the chain is needed.

When a device validates a certificate, it follows this process:

1. It checks if the certificate was issued by a trusted CA directly.
2. If not, it checks if the certificate of the issuing CA was issued by a trusted CA.
3. It continues checking up the chain until either:
   - A trusted CA ([root certificate](/articles/what-is-ssl-root-certificate/)) is found, establishing trust
   - No trusted CA can be found, resulting in a security error

The list of SSL certificates, from the root certificate to the end-user certificate, represents the **SSL certificate chain**.

## Components of the certificate chain {#components}

The certificate chain consists of three types of certificates:

1. **End-user certificate** (also called server certificate): The certificate issued for your domain that you install on your web server.
2. **Intermediate certificates**: One or more certificates that link the end-user certificate to the root certificate. These are issued by intermediate CAs.
3. **Root certificate**: The top-level certificate issued by a root CA. Root certificates are embedded in browsers and operating systems and are the foundation of trust.

## Why intermediate certificates exist {#intermediates}

Root CAs keep their root certificates offline and secure to minimize the risk of compromise. Instead of issuing certificates directly, root CAs delegate issuance to intermediate CAs. This creates a security boundary: if an intermediate CA is compromised, only certificates issued by that intermediate CA are affected, not the entire root CA.

Intermediate certificates create the link between the root certificate and end-user certificates, forming the chain of trust.

![A real SSL certificate chain](/files/dnsimple-ssl-chain.png)

## Example of an SSL Certificate chain {#example}

As an example, suppose you purchase a certificate from the *Awesome Authority* for the domain `example.awesome`.

*Awesome Authority* is not a root certificate authority. Its certificate is not directly embedded in your web browser, so it cannot be explicitly trusted.

- *Awesome Authority* utilizes a certificate issued by *Intermediate Awesome CA Alpha*.
- *Intermediate Awesome CA Alpha* utilizes a certificate issued by *Intermediate Awesome CA Beta*.
- *Intermediate Awesome CA Beta* utilizes a certificate issued by *Intermediate Awesome CA Gamma*.
- *Intermediate Awesome CA Gamma* utilizes a certificate issued by *The King of Awesomeness*.
- *The King of Awesomeness* is a Root CA. Its certificate is directly embedded in your web browser, therefore it can be explicitly trusted.

In our example, the SSL certificate chain is represented by 6 certificates:

1. End-user Certificate - Issued to: example.awesome; Issued By: Awesome Authority
1. Intermediate Certificate 1 - Issued to: Awesome Authority; Issued By: Intermediate Awesome CA Alpha
1. Intermediate Certificate 2 - Issued to: Intermediate Awesome CA Alpha; Issued By: Intermediate Awesome CA Beta
1. Intermediate Certificate 3 - Issued to: Intermediate Awesome CA Beta; Issued By: Intermediate Awesome CA Gamma
1. Intermediate Certificate 4 - Issued to: Intermediate Awesome CA Gamma; Issued By: The King of Awesomeness
1. Root certificate - Issued by and to: The King of Awesomeness

Certificate 1, the one you purchase from the CA, is your **end-user certificate**. Certificates 2 to 5 are **intermediate certificates**. Certificate 6, the one at the top of the chain (or at the end, depending on how you read the chain), is the [**root certificate**](/articles/what-is-ssl-root-certificate/).

When you install your end-user certificate, you must bundle all the intermediate certificates and install them along with your end-user certificate. If the SSL certificate chain is invalid or broken, your certificate will not be trusted by some devices.

**Do not include the root certificate in the bundle you serve.** The chain describes the full path from your certificate to the root, but your server only needs to send the certificates the client does not already have — your end-user certificate and the intermediates. In the example above, that means certificates 1 to 5, not certificate 6. Clients already hold the root, so sending it adds bytes to every connection without adding trust.

## Why the complete chain is required {#complete-chain}

The certificate chain must be complete and unbroken for browsers to trust your certificate. When a browser validates your certificate, it follows the chain upward, verifying each certificate's signature against its issuer. If any link in the chain is missing, the browser cannot verify the certificate's authenticity and will display a security error.

### What happens with an incomplete chain

If intermediate certificates are missing, the browser cannot trace the path from your certificate to a trusted root certificate. This breaks the chain of trust, causing browsers to display "Invalid certificate" or "certificate not trusted" errors, even though your certificate itself is valid.

### Root certificates and browsers

Root certificates are embedded in web browsers and operating systems by their maintainers. You do not need to install root certificates on your server because they are already present in the client devices. The browser uses these pre-installed root certificates as the starting point for validating certificate chains.

### A certificate can have more than one valid chain {#multiple-paths}

The examples above describe a single path from your certificate to one root, which is the common case. But a CA can **cross-sign** an intermediate — have it signed by more than one root — so that one certificate has several valid paths to trust. This is how a newer CA stays trusted on older devices that do not yet carry its own root.

It matters because different clients can pick different paths, and a path that works in a current browser may fail on an older device. It also means a chain can break without anything on your server changing: when a cross-signing root expires, clients that were relying on that path stop trusting the certificate. This is what happened across the web in September 2021, when Let's Encrypt's cross-signing root DST Root CA X3 expired and sites that were serving a valid certificate began failing on older Android devices and OpenSSL 1.0.2.

If a certificate validates in your browser but not on an older client, a chain path is usually the reason. See [Troubleshooting SSL Certificate Chain Errors](/articles/troubleshooting-ssl-chain-errors/).


## Taking action {#taking-action}

- [Installing an SSL Certificate](/articles/install-ssl-certificate/) - Learn how to install your certificate and intermediate chain
- [SSL Certificates with Apache](/articles/ssl-certificate-with-apache/) - Apache-specific installation instructions
- [SSL Certificates with NGINX](/articles/ssl-certificate-with-nginx/) - NGINX-specific installation instructions

## Related reading {#related}

- [What is a Certificate Authority?](/articles/what-is-certificate-authority/) - Understand the role of CAs in the certificate ecosystem
- [What is a Root Certificate?](/articles/what-is-ssl-root-certificate/) - Learn about root certificates and trust anchors
- [SSL Certificate Types](/articles/ssl-certificates-types/) - Explore different certificate types and their characteristics

## Have more questions?

If you have additional questions or need any assistance with certificate chains and trust validation, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
