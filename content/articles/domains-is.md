---
title: .IS Domains
excerpt: This article explains the requirements and special procedures for .IS domain names.
meta: Transfer .IS domains to DNSimple using contact handle BDB2-IS instead of an auth code. Point name servers to DNSimple before starting the transfer.
categories:
- TLDs
---

# .IS Domains

* TOC
{:toc}

---

This article explains the requirements and special procedures for .IS domain names.

## Transferring a .IS domain to DNSimple {#transferring}

### Before you start

> [!WARNING]
> To avoid the possibility of downtime, point the name servers for the domain to DNSimple (or another provider) [before you begin the transfer](/articles/before-transferring-domain/). This prevents downtime and allows you to perform changes to the DNS records during the domain transfer.

<div class="section-steps" markdown="1">
##### 1. Starting the transfer
1. In the dashboard of the account you want to transfer the domain to, click <label>Add</label>.
2. Select <label>Transfer domain</label>.
3. Enter the domain name and click <label>Start Transfer</label>.
4. Select an existing registrant and complete any required extended attributes. If no registrant exists yet, enter the information needed to create a new contact.
5. Press <label>Transfer Domain</label>
</div>

<div class="section-steps" markdown="1">
##### 2. Providing the .IS contact handle

`.IS` domains do not use authorization codes (auth codes). The handoff happens at the registry (ISNIC) between the two registrars. Your current registrar needs the contact handle that `.IS` transfers to DNSimple arrive under.

1. After you have started the transfer, ask your current registrar to set this handle as the admin and billing contact for the domain, or set it yourself through the [ISNIC interface](https://www.isnic.is/en/):

   **BDB2-IS**

1. Click the confirmation link in the email ISNIC sends to the registrant to complete the transfer.

</div>

> [!NOTE]
> If you look up `BDB2-IS` in the ISNIC WHOIS, it will not show DNSimple's name. `.IS` transfers reach the registry through a registry partner, and the handle belongs to them. This is expected, and it is still the correct handle to give your current registrar.


## Have more questions? 

If you have any questions or need assistance registering your domain, [contact support](https://dnsimple.com/contact), and we'll be happy to help.
