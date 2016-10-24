---
title: DNSimple as Secondary Slave
excerpt: How to use DNSimple as Secondary Slave for your domain.
categories:
- Secondary DNS
---

# DNSimple as Secondary Slave

While DNSimple cannot be configured as secondary slave for your domain, this article explains how you can have zone redundancy for your domains.

We currently do not implement zone transfers (AXFR) from another primary DNS provider. That means you will be responsible of keeping the zones in in sync between your primary and DNSimple. You can accomplish this in several ways:

- [Adding the records](/articles/record-editor/) manually through our UI.
- [Importing a zone file](/articles/zone-files/#importing-records-from-a-zone-file) from your primary provider.
- [Using our API](https://developer.dnsimple.com/v2).

Once you are able to keep both zones in sync you will need to add the NS records corresponding to your primary DNS provider. You won't be able to do this using our [record editor](/articles/record-editor/) directly.


## Configuring DNSimple as a slave

These are the steps required in order to setup DNSimple as a slave for your domain.

- If you don't have the domain in your DNSimple account, [add it with "use DNSimple services"](/articles/adding-domain/).
- Go to the domain page and click on the DNS in the menu.
- Under the name server section click on <label>configure secondary DNS</label>.

  ![Change you Secondary DNS configuration](/files/secondary-dnsimple-slave-1.jpg)

- Select <label>Custom</label> as your provider.
- Enter the name servers of your primary DNS provider in the <label>Name servers</label> field. Do not enter any IP address to white-list as this is not needed.

  ![Configure primary DNS provider name servers](/files/secondary-dnsimple-slave-2.jpg)

- Click on <label>Enable</label>.
