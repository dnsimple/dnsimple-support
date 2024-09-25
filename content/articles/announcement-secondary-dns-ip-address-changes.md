---
title: Secondary DNS IP Address Changes
excerpt: DNSimple will be updating the IP addresses used for Secondary DNS outbound notifications and zone transfers. The current IPv4 address (50.31.225.92) will be retired beginning [DATE], 2024. Affected customers will be notified via email.
categories:
---

# Secondary DNS IP Address Changes

<info>
This article contains information that is only relevant to customers with secondary DNS enabled, where DNSimple acts as the primary used for outbound notifications and zone transfers. If you are impacted, you will receive an email from us asking you to take action.
</info>

### Table of Contents {#toc}

* TOC
{:toc}

---

As part of our commitment to providing streamlined and reliable DNS management services, we are modernizing our secondary DNS infrastructure and updating the primary server IP addresses used for outbound notifications and zone transfers. **The current IPv4 address (50.31.225.92) will be retired beginning [DATE], 2024.**

## Who's impacted?

Accounts with any domains using [secondary DNS](/articles/secondary-dns/) to perform zone transfers from DNSimple to another secondary DNS provider or server will be required to update their zone configuration.

## What's changing and how it will impact your domains

If you have affected domains, you have until [DATE], 2024 to take action. After that date:

* **axfr.dnsimple.com** will resolve to the following IP addresses:
  - **IPv4:** 18.189.127.127
  - **IPv6:** 2600:1f16:ae2:e902:6881:5f5e:c245:887e
* All NOTIFY messages will be sent from the new IP addresses.
* All zone transfers must be requested from the new IP addresses.
* Any domain in your account with secondary DNS enabled will stop receiving updates unless the new IP addresses are added to the secondary DNS provider or server configuration.

## What do you need to do?

Review any domains you own with secondary DNS enabled, where DNSimple acts as the primary server used for outbound notifications and zone transfers.

Update your secondary DNS provider or server configuration as follows:

1. Allow NOTIFY messages from the new and old IP addresses:
  - **IPv4:** 18.189.127.127, 50.31.225.92
  - **IPv6:** 2600:1f16:ae2:e902:6881:5f5e:c245:887e
2. Update the primary server IP addresses or name:
  - **Name:** axfr.dnsimple.com
  - **IPv4:** 18.189.127.127
  - **IPv6:** 2600:1f16:ae2:e902:6881:5f5e:c245:887e
3. After [DATE], remove the old IP address from the NOTIFY allow list:
  - **IPv4:** 50.31.225.92

<info>
If your provider only performs zone transfers over IPv4, you can omit the IPv6 address from the configuration.
</info>

If you are using one of our pre-configured secondary DNS providers, review the setup instructions:

- [Dyn](/articles/secondary-dns-provider-dyn)
- [DNSMadeEasy](/articles/secondary-dns-provider-dns-made-easy)
- [EasyDNS](/articles/secondary-dns-provider-easy-dns)

## Have more questions?

If you have any questions or need assistance, reach out to our [support team](https://dnsimple.com/feedback), and we'll be happy to help.
