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

If you want to use our name servers but have them appear as though they were your name servers, you can use the vanity name server functionality.

## Enabling Vanity Name Servers

You can configure vanity name servers on your domain(s) in DNSimple by visiting the <label>DNS</label> tab on the domain's management page and clicking <label>Configure name servers</label> on the <label>Vanity name servers</label> card.

<info>
Vanity name servers are available as an option on on certain plans. [See the difference between plans](/articles/differences-between-dnsimple-plans/).
</info>

![Vanity Name Server card](/files/vanity-name-servers-card-enable.png)

To use the domain on which you're enabling vanity name servers for the name server names, click the <label>Enable</label> link and the proper records will be added to the domain automatically.

<note>
If your domain is registered with us, we'll also automatically add [glue records](https://howdns.works/ep7/). If you're only using our DNS services, you need to request that your registrar add the glue records for you. The IPv4 and IPv6 addresses you need for these records are available in our document on the [DNSimple name servers](/articles/dnsimple-nameservers).
</note>

![Vanity Name Servers on same domain](/files/vanity-name-servers-same-domain.png)

If you want to use another domain for the name server names on the domain for which you're configuring vanity name servers,  enter the fully qualified domain name (FQDN) for the name server names you want to use, and click <label>Enable Vanity Name Servers</label>

<warning>
Ensure the FQDNs you provide have the proper records configured on the other domain before attempting to delegate to them. If you do not, your domain will not resolve. Please see our documentation about changing to [DNSimple name servers](/articles/dnsimple-nameservers) for the IPv4 and IPv6 addresses required for your vanity name servers.
</warning>

![Vanity Name Servers with another domain](/files/vanity-name-servers-other-domain.png)

If your domain is registered with us, there's nothing left to do. If not, you should change the delegation at your current registrar to use the name server names you just configured.

## Disabling Vanity Name Servers

To disable vanity name servers that you've previously configured, visit the <label>DNS</label> tab of the domain management page and click <label>Disable</label> on the <label>Vanity Nameservers</label> card.

![Vanity Name Servers card](/files/vanity-name-servers-card-disable.png)

You'll see a page where you can disable the vanity name servers. Click the <label>Disable Vanity Name Servers</label> button.

![Disable Vanity Name Servers](/files/vanity-name-servers-disable.png)

Vanity name servers will now be disabled by changing the NS records served on your domain back to our defaults. If your domain is registered with us, the delegation will be changed back to our standard name servers as well. If you don't have the domain registered with us, you should [change the delegation with your registrar to our name servers](https://support.dnsimple.com/articles/delegating-dnsimple-hosted).
