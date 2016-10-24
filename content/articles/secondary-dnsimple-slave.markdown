---
title: Using DNSimple along other DNS providers
excerpt: How to use DNSimple along with other DNS providers to implement zone redundancy.
categories:
- Secondary DNS
---

# DNSimple as a Secondary DNS provider

While DNSimple cannot synchronize zone changes from other name servers using AXFR, you can combine our secondary DNS feature with our API or UI to have zone redundancy with other DNS providers. You will be responsible for keeping the zones in sync between other DNS providers and DNSimple. You can accomplish this in several ways:

- [Adding the records](/articles/record-editor/) manually through our UI.
- [Importing a zone file](/articles/zone-files/#importing-records-from-a-zone-file) from your primary provider.
- [Using our API](https://developer.dnsimple.com/v2).

Once you are able to keep both zones in sync you will need to add the NS records corresponding to your primary DNS provider. You won't be able to do this using our [record editor](/articles/record-editor/) directly. To do this you will need to use our Secondary DNS configuration feature.

## Configuring DNSimple along another DNS provider

These are the steps required in order to setup zone redundancy with another DNS provider:

- If you don't have the domain in your DNSimple account, [add it with "use DNSimple services"](/articles/adding-domain/).
- Go to the domain page and click on the DNS in the menu.
- Under the name server section click on <label>configure secondary DNS</label>.

  ![Change you Secondary DNS configuration](/files/secondary-dnsimple-slave-1.jpg)

- Select <label>Custom</label> as your provider.
- Enter the name servers of your primary DNS provider in the <label>Name servers</label> field. Do not enter any IP address to white-list as this is not needed.

  ![Configure primary DNS provider name servers](/files/secondary-dnsimple-slave-2.jpg)

- Click on <label>Enable</label>.
