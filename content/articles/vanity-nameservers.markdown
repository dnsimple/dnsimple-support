---
title: Vanity Name Servers
excerpt: How to enable and disable Vanity Name Servers in DNSimple.
categories:
- Name Servers
- Domains
---

# Vanity Name Servers

### Table of Contents

* TOC
{:toc}

---

If you would like to use our name servers but have them appear as though they were your name servers you may use the vanity name server functionality to accomplish this.

## Enabling Vanity Name Servers

It is possible to configure vanity name servers on a domain of yours in DNSimple by visiting the <label>DNS</label> tab on the domain's management page and clicking <label>Configure nameservers</label> on the <label>Vanity nameservers</label> card.

<info>
Vanity name servers are only available on [our business tier](https://dnsimple.com/pricing) or for [Master resellers](https://dnsimple.com/reseller). If you are not subscribed to one of these plans you will be prompted to upgrade your plan.
</info>

![Vanity Name Server card](/files/vanity-name-servers-card.png)

If you would like to use the domain on which you are enabling vanity name servers for the name server names, just click the <label>Enable Vanity Name Servers</label> button and the proper records will be added to the domain automatically.

<note>
If your domain is registered with us, we will also automatically add [glue records](https://howdns.works/ep7/). If you are only using our DNS services, you will need to request that your registrar add the glue records for you. The IPv4 and IPv6 addresses you need for these records are available in our document on the [DNSimple name servers](/articles/dnsimple-nameservers).
</note>

![Vanity Name Servers on same domain](/files/vanity-name-servers-same-domain.png)

If you would like to use another domain for the name server names on the domain for which you're configuring vanity name servers, please enter the fully qualified domain name (FQDN) for the name server names you'd like to use and click <label>Enable Vanity Name Servers</label>

<warning>
You should ensure the FQDNs you provide have the proper records configured on the other domain before attempting to delegate to them. If you do not, your domain will not resolve. Please see our documentation about changing to [DNSimple name servers](/articles/dnsimple-nameservers) for the IPv4 and IPv6 addresses required for your vanity name servers.
</warning>

![Vanity Name Servers with another domain](/files/vanity-name-servers-other-domain.png)

If your domain is registered with us, there is nothing left to do. If not, you should change the delegation at your current registrar to use the name server names you just configured.

## Disabling Vanity Name Servers

If you'd like to disable vanity name servers which you'd previously configured, you should visit the <label>DNS</label> tab of the domain management page and click <label>Configure nameservers</label> on the <label>Vanity Nameservers</label> card.

![Vanity Name Servers card](/files/vanity-name-servers-card.png)

You will be presented with a page on which you may disable the vanity name servers. Click the <label>Disable Vanity Name Servers</label> button.

![Disable Vanity Name Servers](/files/vanity-name-servers-disable.png)

Vanity name servers will now be disabled by changing the NS records served on your domain back to our defaults. If your domain is registered with us, the delegation will be changed back to our standard name servers as well. If you do not have the domain registered with us, you should [change the delegation with your registrar to our name servers](http://support.dnsimple.com/articles/delegating-dnsimple-hosted).
