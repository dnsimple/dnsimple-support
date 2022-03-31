---
title: Adding a Handshake (HNS) Domain
excerpt: How to add a Handshake (HNS) domain to a DNSimple account.
categories:
- Domains
---

# Adding a Handshake (HNS) Domain

<note>
DNSimple only supports the management of second-level TLDs and above.
</note>

To add an HNS domain and manage its DNS records through DNSimple you have two options:

1. Register the domain with a registrar that sells second-level HNS TLDs.
2. Add DNSimple's NS records for the domain via your preferred method directly to the blockchain given you are the owner of the HNS TLD.

For both options the process of adding the domain to DNSimple is the same.

<div class="section-steps" markdown="1">
##### To add a domain

1.  Log in to DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  Click <label>Add Domain</label> from the Dashboard.
  ![Adding a domain button](/files/add-a-domain.png)
1.  Choose <label>Use DNSimple services</label> from the provided options.
  ![Adding a domain](/files/adding-a-domain.png)

You'll then be prompted for the name of the domain you want to add to your account.

After adding the domain to DNSimple you need to use the name servers from the [DNSimple name servers](/articles/dnsimple-nameservers) support article for your domain.
</div>

## Incompatible services

<warning>
Please note that handshake domains do not resolve in regular browsers by default, and require additional setup.
</note>

DNSimple DNS services are compatible with HNS domains. However, some services are incompatible with HNS domains due to not being resolvable withouth a Handshake-aware resolver.

Here is a list of known services that are not compatible:

* Certificates
* Email forwards
* Some One-Click-Services
* Netlify Connector
* ALIAS records pointing to other HNS domains which are not hosted with DNSimple

