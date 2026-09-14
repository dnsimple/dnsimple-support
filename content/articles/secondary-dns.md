---
title: Add a secondary DNS server to DNSimple
excerpt: Enable outbound secondary DNS so DNSimple is the primary and another provider receives your zone over AXFR.
meta: Configure outbound secondary DNS in DNSimple with AXFR to Dyn, DNSMadeEasy, EasyDNS, a name server set, or a custom provider.
categories:
- Secondary DNS
- Enterprise
---

# Add a secondary DNS server to DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

This guide covers **outbound** secondary DNS: DNSimple is the primary (leader), and another provider is the secondary. For concepts, see [What is Secondary DNS?](/articles/what-is-secondary-dns/). For when to use secondary DNS, see [DNS Redundancy Options at DNSimple](/articles/dns-redundancy/).

To make DNSimple the secondary instead, see [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/).

> [!WARNING]
> Secondary DNS and [DNSSEC](/articles/dnssec/) require special considerations. Read [Why DNSSEC and Secondary DNS May Not Work Together](/articles/dnssec-and-secondary-dns/) before enabling both.

> [!WARNING]
> When using secondary DNS, ensure both providers handle [Empty Non-Terminals (ENTs)](/articles/empty-non-terminals/) consistently. Different providers may implement ENT behavior differently, especially with wildcard records. Inconsistent implementations can lead to different responses from your primary and secondary name servers. Learn more about [ENTs and Secondary DNS](/articles/empty-non-terminals/#wildcards-and-empty-non-terminals).

## Before starting

Choose, activate, and gather details for the secondary DNS provider you will use.

DNSimple provides pre-configurations and step-by-step guides for:

- [Dyn](/articles/secondary-dns-provider-dyn/)
- [DNSMadeEasy](/articles/secondary-dns-provider-dns-made-easy/)
- [EasyDNS](/articles/secondary-dns-provider-easy-dns/)

You can also choose <label>Custom</label> or <label>Choose from Name Server Set</label>. You can configure the secondary provider either before or after you enable the configuration in DNSimple.

You can configure secondary DNS on domains whether or not they currently delegate to DNSimple. If delegation points elsewhere, [point the domain to DNSimple](/articles/pointing-domain-to-dnsimple/) before the configuration takes effect.

If the domain is not registered with DNSimple, update delegation at your registrar to include the secondary name servers you chose. For example, if your secondary name servers are `ns1.secondary.com` and `ns2.secondary.com`, change delegation from:

- `ns1.dnsimple-edge.com`
- `ns2.dnsimple-edge.net`
- `ns3.dnsimple-edge.io`
- `ns4.dnsimple-edge.org`

to:

- `ns1.dnsimple-edge.com`
- `ns2.dnsimple-edge.net`
- `ns3.dnsimple-edge.io`
- `ns4.dnsimple-edge.org`
- `ns1.secondary.com`
- `ns2.secondary.com`

Revert that change if you disable secondary DNS later.

## Enable secondary DNS {#enable}

Open the domain, then open the <label>DNS</label> tab. Use the <label>Secondary DNS</label> card and click <label>Configure</label> for DNSimple as the primary server for the zone.

![DNS management page](/files/setup-secondary-dns.png)

Choose your secondary provider. For Dyn, DNSMadeEasy, or EasyDNS, values are prefilled. You can also apply name servers from a [name server set](/articles/name-server-sets/). Otherwise select <label>Custom</label> and enter NS names and IPs allowed for zone transfer. Click <label>Enable</label>.

![Custom input option](/files/secondary-dns-custom.png)

If you select <label>Choose from Name Server Set</label>, pick one of the name server sets configured on your account.

![Choose from name server set](/files/secondary-dns-name-server-set.png)

After you submit, the DNS page shows the updated configuration.

![Updated DNS management page](/files/secondary-dns-configured.png)

You may see warnings such as:

- The secondary DNS configuration is still propagating to the primary name server.
- Configured secondary name servers are not all serving the same zone data as the primary (propagation delay or an AXFR issue at the secondary provider).
- Registrar delegation is missing one or more name servers from the secondary DNS configuration.

![Secondary DNS warning](/files/secondary-dns-warning.png)

> [!WARNING]
> If your domain is registered with DNSimple, DNSimple replaces the current registry delegation with DNSimple name servers plus the secondary name servers you configured. If you were delegating elsewhere for DNS, registry values are updated to match the NS set on the apex zone in the record editor.

<div class="section-steps" markdown="1">
##### Add a secondary DNS zone with DNSimple as leader from the dashboard

1. Log in to DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. Click <label>Add</label> on the dashboard, then choose <label>Secondary DNS zone (with DNSimple as leader)</label>.
  ![Adding a secondary DNS zone with DNSimple as leader](/files/add-button-secondary-dns-dnsimple-as-leader.png)
1. Choose the provider.
1. Enter the <label>Zone name</label>.
1. Enter the <label>Name servers</label> and <label>IPs to whitelist</label> if you chose custom input.
1. Click <label>Enable</label>.
</div>

### Behind the scenes {#behind-the-scenes}

After secondary DNS is set up, zone changes on DNSimple are replicated to the secondary provider. Standard records and DNSimple record types such as ALIAS and URL are included; ALIAS and URL are resolved and the resulting values are pushed. See [How ALIAS Records Resolve with Secondary DNS](/articles/alias-and-secondary-dns/).

Until you disable secondary DNS, record changes in DNSimple stay synchronized to the secondary provider over AXFR.

## Edit secondary DNS configuration {#edit}

Change the configuration from the <label>DNS</label> tab using <label>Edit</label> on the Secondary DNS card.

![Reconfigure Secondary DNS](/files/reconfigure-secondary-dns.png)

## Disable secondary DNS {#disable}

Click <label>Delete Secondary DNS</label> on the Secondary DNS card, then confirm by typing the domain name.

![Delete Secondary DNS Configuration](/files/delete-secondary-dns.png)

Removal is staged rather than immediate. DNSimple first removes the local configuration, then removes the secondary name servers from your delegation, and only then stops serving zone transfers. The secondary name servers keep answering during that window, so cached NS records can expire before the zone stops being served.

How long the final step waits depends on the domain:

- For a <label>DNS Only</label> domain, one where DNSimple hosts the zone but does not track the registration, DNSimple continues to serve the configuration for 72 hours after you delete it.
- Otherwise, DNSimple waits for the highest record TTL in your zone, up to a maximum of 72 hours.

The delete confirmation dialog tells you which case applies. If it warns that the configuration will be served for 72 more hours, plan for the full 72 hours.

> [!WARNING]
> If the dialog shows the 72 hour warning, update the name servers at your registrar immediately after deleting the configuration. Until you do, your delegation still lists secondary name servers that are going to stop answering.

<div class="section-steps" markdown="1">
##### Finish removing secondary DNS

1. Delete the secondary DNS configuration in DNSimple.
1. At your registrar, remove the secondary name servers from the delegation, leaving only the DNSimple name servers.
1. At your secondary DNS provider, remove the zone or the secondary configuration for your domain.
</div>

If zone transfers were already failing before you disabled the configuration, see [Troubleshoot Secondary DNS Zone Transfers](/articles/troubleshooting-secondary-dns-transfers/).

## AXFR name server details {#axfr-name-server-details}

Give your secondary provider the host that answers AXFR queries.

- Hostname: **axfr.dnsimple.com** (prefer this when possible)
- IPs:
  - `18.189.127.127`
  - `2600:1f16:ae2:e902:6881:5f5e:c245:887e`

If these IP addresses change, DNSimple will notify you in advance using your account notification email.

## Frequently asked questions {#faq}

<div class="section-faq" markdown="1">
1. #### What is secondary DNS and why would I use it?

    Secondary DNS uses zone transfers (AXFR) so another provider can serve the same zone DNSimple hosts as primary. Resolvers can use either provider's name servers, which adds multi-provider redundancy. See [What is Secondary DNS?](/articles/what-is-secondary-dns/).

1. #### Can DNSimple serve as a secondary DNS provider?

    Yes. DNSimple can pull zones from an external primary over AXFR (inbound secondary DNS). See [Add DNSimple as a secondary DNS server](/articles/secondary-dns-dnsimple-as-secondary/). That feature is plan-gated. For syncing without AXFR, see [Using DNSimple alongside other DNS providers](/articles/secondary-dnsimple/).

1. #### How can I check that my secondary DNS configuration is correct?

    If you use a prepared provider configuration and still have trouble, [contact support](https://dnsimple.com/feedback). Otherwise use your provider's documentation and their tools to confirm they can transfer the zone from `axfr.dnsimple.com`.

1. #### How can I test that secondary DNS is working?

    After the secondary provider confirms AXFR works, query a secondary name server with `dig`. For example, if `ns5.dnsmadeeasy.com` is a secondary: `dig @ns5.dnsmadeeasy.com yourdomain.com`. Compare the answer to what DNSimple returns. Differences usually mean a misconfiguration or propagation delay.

1. #### Is the order of the name servers relevant?

    No. Resolvers select among the published name servers; order in the registrar, WHOIS, NS set, or secondary DNS configuration does not matter.
</div>

## Have more questions?

If you have any questions about outbound secondary DNS, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
