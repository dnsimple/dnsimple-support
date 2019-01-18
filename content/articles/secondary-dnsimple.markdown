---
title: Using DNSimple along other DNS providers
excerpt: How to use DNSimple along with other DNS providers to implement zone redundancy.
categories:
- Secondary DNS
---

# DNSimple as a Secondary DNS provider

DNSimple can't synchronize zone changes from other name servers using AXFR, but you can combine our secondary DNS feature with our API or UI to have zone redundancy with other DNS providers. You're responsible for keeping the zones in sync between other DNS providers and DNSimple. There are several ways to do this:

- [Adding the records](/articles/record-editor/) manually through our UI.
- [Importing a zone file](/articles/zone-files/#importing-records-from-a-zone-file) from your primary provider.
- [Using our API](https://developer.dnsimple.com/v2).

Once you can keep both zones in sync, add the NS records corresponding to your primary DNS provider. You can't do this using our [record editor](/articles/record-editor/) directly. You'll need to use our Secondary DNS configuration feature.

## Configuring DNSimple along another DNS provider

To setup zone redundancy with another DNS provider:

- If you don't have the domain in your DNSimple account, [add it with "use DNSimple services"](/articles/adding-domain/).
- Go to the domain page and click on the DNS in the menu.
- Under the Secondary DNS card, click on <label>Use DNSimple along another DNS provider</label>.

  ![Change you Secondary DNS configuration](/files/secondary-dnsimple-1.png)

- Enter the name servers of your primary DNS provider in the <label>Name servers</label> field.

  ![Configure primary DNS provider name servers](/files/secondary-dnsimple-2.png)

- Click on <label>Save</label>.
