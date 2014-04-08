---
title: What is the CSR?
excerpt: A certificate authority (CA) is an entity that issues digital certificates.
categories:
- SSL Certificates
---

# What is the Certificate Signing Request (CSR)?

The **Certificate Signing Request** (also **CSR** or **certification request**) is a block of encrypted text that is sent to the [Certificate Authority](/articles/what-is-a-certificate-authority/) in order to apply for a certificate.

The CSR contains information that will be included in your certificate, such as the [common name](/articles/what-is-common-name/) and the company/owner details. It also contains the public key that will be embedded in the certificate.

<info>
We automatically generates the CSR for you using the information from the contact associated with the certificate, along with an unique public/private encryption key pair. This works for the majority of cases, including all PaaS such as Heroku or Amazon.

The private key associated with the certificate will be available to download, once generated, from your certificate page.

If you want to use a custom private key or you have some advanced requirement, you can generate a custom CSR and paste the custom CSR in the certificate purchase page.
</info>
