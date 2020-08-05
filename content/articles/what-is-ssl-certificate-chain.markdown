---
title: What is the SSL Certificate Chain?
excerpt: The difference between the root certificate, intermediate certificates, and server certificate.
categories:
- SSL Certificates
---

# What is the SSL Certificate Chain?

There are two types of [certificate authorities (CAs)](/articles/what-is-certificate-authority): **root CAs** and **intermediate CAs**. For an SSL certificate to be trusted, that certificate must have been **issued by a CA that's included in the trusted store of the device that's connecting**.

If the certificate wasn't issued by a trusted CA, the connecting device (eg. a web browser) checks to see if the certificate of the issuing CA was issued by a trusted CA. It continues checking until either a trusted CA is found (at which point a trusted, secure connection will be established), or no trusted CA can be found (at which point the device will usually display an error).

The list of SSL certificates, from the [root certificate](/articles/what-is-ssl-root-certificate) to the end-user certificate, represents the **SSL certificate chain**.

![A real SSL certificate chain](/files/dnsimple-ssl-chain.png)

## Example of an SSL Certificate chain

As an example, suppose you purchase a certificate from the *Awesome Authority* for the domain `example.awesome`.

*Awesome Authority* is not a root certificate authority. In other words, its certificate is not directly embedded in your web browser, therefore it can't be explicitly trusted.

- *Awesome Authority* utilizes a certificate issued by *Intermediate Awesome CA Alpha*.
- *Intermediate Awesome CA Alpha* utilizes a certificate issued by *Intermediate Awesome CA Beta*.
- *Intermediate Awesome CA Beta* utilizes a certificate issued by *Intermediate Awesome CA Gamma*.
- *Intermediate Awesome CA Gamma* utilizes a certificate issued by *The King of Awesomeness*.
- *The King of Awesomeness* is a Root CA. Its certificate is directly embedded in your web browser, therefore it can be explicitly trusted.

In our example, the SSL certificate chain is represented by 6 certificates:

1. End-user Certificate - Issued to: example.com; Issued By: Awesome Authority
1. Intermediate Certificate 1 - Issued to: Awesome Authority; Issued By: Intermediate Awesome CA Alpha
1. Intermediate Certificate 2 - Issued to: Intermediate Awesome CA Alpha; Issued By: Intermediate Awesome CA Beta
1. Intermediate Certificate 3 - Issued to: Intermediate Awesome CA Beta; Issued By: Intermediate Awesome CA Gamma
1. Intermediate Certificate 4 - Issued to: Intermediate Awesome CA Gamma; Issued By: The King of Awesomeness
1. Root certificate - Issued by and to: The King of Awesomeness

Certificate 1, the one you purchase from the CA, is your **end-user certificate**. Certificates 2 to 5 are **intermediate certificates**. Certificate 6, the one at the top of the chain (or at the end, depending on how you read the chain), is the [**root certificate**](/articles/what-is-ssl-root-certificate).

When you install your end-user certificate for `example.awesome`, you **must** bundle all the intermediate certificates and install them along with your end-user certificate. If the SSL certificate chain is invalid or broken, your certificate won't be trusted by some devices.

## Frequently Asked Questions

<div class="section-faq" markdown="1">
1.  #### Do I have to install the Root certificate on my server?

    No. The root certificate is usually embedded in your connected device. In the case of web browsers, root certificates are packaged with the browser software.

1.  #### How do I install the Intermediate SSL certificates?

    The procedure to install the Intermediate SSL certificates depends on the web server and the environment where you install the certificate.

    For instance, Apache requires you to bundle the intermediate SSL certificates and assign the location of the bundle to the `SSLCertificateChainFile` configuration. Conversely, NGINX requires you to package the intermediate SSL certificates in a single bundle with the end-user certificate.

    We provide a certificate installation wizard which contains installation instructions for several servers and platforms. If you purchase a certificate with us you can [use this wizard to obtain and install the files you need](/articles/installing-ssl-certificate) for your server.

    If your server isn't on the wizard, you can still obtain the proper files through it, then follow your web server's documentation to determine how to properly install your domain certificate and intermediate certificates.

1.  #### What happens if I don't install an Intermediate SSL certificate?

    If you don't install one or more intermediate SSL certificate, you break the certificate chain. That means you create a gap between a specific (end-user or intermediate) certificate and its issuer. When a device can't find a trusted issuer for a certificate, the certificate and the entire chain, from the intermediate certificate down to the final cerficate, can't be trusted.

    As a result, your final certificate won't be trusted. Web browsers will display an "Invalid certificate" or "certificate not trusted" error.

1.  #### How can I shorten the SSL certificate chain in my browser?

    This isn't possible. The only way to shorten a chain is to promote an intermediate certificate to root. Ideally, you should promote the certificate that represents your Certificate Authority, that way the chain will consist of just two certificates.

    Root certificates are packaged with the browser software. The list can only be altered by the browser maintainers.
</div>
