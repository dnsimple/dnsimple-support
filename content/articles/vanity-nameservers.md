---
title: Manage Vanity Name Servers
excerpt: Enable, delegate, or disable vanity name servers so your zone uses branded name server hostnames while staying on DNSimple DNS.
meta: Enable or disable vanity name servers in DNSimple so delegation uses your own NS hostnames (for example ns1.example.com) on Enterprise plans, with steps for same-domain and other-domain setups.
categories:
- Name Servers
- Domains and Transfers
- Enterprise
---

# Manage Vanity Name Servers

### Table of Contents {#toc}

* TOC
{:toc}

---

Use this guide when you want DNSimple to answer DNS for your domain but public NS names look like **your** hostnames (for example `ns1.example.com`). For what vanity name servers are and when they apply, read [What Are Vanity Name Servers?](/articles/what-are-vanity-name-servers/).

> [!NOTE]
> Vanity name servers are only available on [Enterprise plans](/articles/dnsimple-plans/).

## Enabling Vanity Name Servers {#enabling-vanity-name-servers}

<div class="section-steps" markdown="1">
##### Open the vanity name servers card

1. Use the <label>Account switcher</label> at the top of the page to select the account you want to work with.
1. In your <label>Domain Names</label> list, click the name of the domain where you want to enable vanity name servers.
1. Click the <label>DNS</label> tab.
1. Scroll to the <label>Vanity name servers</label> section.
</div>

You will see two options:

- **Configure**: set up this domain as the source of vanity name servers (for example `ns1.yourdomain.com`).
- **Delegate**: use an existing vanity name server configuration from another domain.

![Vanity Name Server card](/files/vanity-name-servers-card.png)

### Using the same domain {#using-the-same-domain}

Click <label>Configure</label> when the name server names live on the **same** domain you are editing (for example `ns1.yourdomain.com` for `yourdomain.com`). DNSimple adds the required A and AAAA records for the vanity hosts. If the domain is registered with DNSimple, DNSimple also adds [glue records](/articles/what-are-glue-records/) at the registry when needed.

If the domain is registered elsewhere and you use DNSimple only for DNS, ask your registrar to add the glue records. Use the IPv4 and IPv6 targets listed in [DNSimple name servers](/articles/dnsimple-nameservers/).

<div class="section-steps" markdown="1">
##### Enable vanity on the same domain

1. Click <label>Configure</label>.
1. Click <label>Enable</label>. DNSimple adds the records the setup needs.

![Vanity Name Servers on same domain](/files/vanity-name-servers-card-enable.png)

![Vanity Name Servers confirmation of enable](/files/vanity-name-servers-confirm-enabled.png)

</div>

### Using another domain {#using-another-domain}

Use this path when the vanity hostnames are on a **different** domain than the zone you are configuring.

<div class="section-steps" markdown="1">
##### Enable vanity using another domain

1. Enter the fully qualified domain name (FQDN) for each vanity name server hostname you want to use.
1. Click <label>Enable Vanity Name Servers</label>.
</div>

> [!WARNING]
> The FQDNs you enter must already resolve correctly on the other domain. If they do not, your domain will not resolve. See [DNSimple name servers](/articles/dnsimple-nameservers/) for the IPv4 and IPv6 addresses you typically need when you point glue or A/AAAA targets at DNSimple.

![Vanity Name Servers using other domain](/files/vanity-name-servers-other-domain.png)

If the domain is registered with DNSimple, DNSimple updates delegation when it can. If the domain is registered elsewhere, update name server delegation at your registrar to the vanity hostnames you configured.

## Delegating to existing vanity name servers {#delegating-to-existing-vanity-name-servers}

Use this section when vanity name servers are already configured on another domain and you want **this** domain to use them.

<div class="section-steps" markdown="1">
##### Delegate to existing vanity hosts

1. Use the <label>Account switcher</label> to select the correct account.
1. In your <label>Domain Names</label> list, click the domain you want to delegate.
1. Click the <label>DNS</label> tab.
1. Scroll to the <label>Vanity name servers</label> section and click <label>Delegate</label>.
1. Enter the vanity name server hostnames (for example `ns1.brand.com`, `ns2.brand.com`), then click <label>Delegate</label>.
</div>

If the domain is registered with DNSimple, DNSimple handles delegation updates when it can. If the domain is registered elsewhere, update the name servers at your registrar to match the hostnames you entered.

![Delegate Vanity Name Servers](/files/vanity-name-servers-delegate.png)

## Disabling Vanity Name Servers {#disabling-vanity-name-servers}

<div class="section-steps" markdown="1">
##### Stop using vanity name servers

1. Open the domain, click the <label>DNS</label> tab, and find the <label>Vanity name servers</label> card.
1. Click <label>Stop delegation</label> on the card until no zones remain delegated to the vanity hosts.
1. Click <label>Disable</label>.
1. Confirm in the dialog if prompted.
</div>

![Vanity Name Servers Stop Delegation option](/files/vanity-name-servers-stop-delegation.png)

![Disable Vanity Name Servers](/files/vanity-name-servers-disable-card.png)

![Disable Vanity Name Servers Confirmation](/files/vanity-name-servers-disable.png)

> [!NOTE]
> Disabling vanity name servers changes the NS records DNSimple serves for the zone back to defaults. If the domain is registered with DNSimple, DNSimple also moves delegation back to standard DNSimple name servers when it can. If the domain is not registered with DNSimple, update delegation at your registrar to [DNSimple name servers](/articles/dnsimple-nameservers/).

> [!NOTE]
> If the domain is registered with DNSimple, DNSimple removes related [glue records](/articles/what-are-glue-records/) when they apply to the same domain name. If the domain is registered elsewhere, ask your registrar to remove glue records for the old vanity hosts.

## Have more questions?

If you have questions about vanity name servers, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
