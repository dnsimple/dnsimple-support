---
title: Managing Vanity Name Servers
excerpt: How to enable and disable vanity name servers in DNSimple.
meta: Learn how to easily enable and disable vanity name servers in DNSimple to enhance your brand's online presence and improve your domain management experience.
categories:
- Name Servers
- Domains
- Enterprise
---

# Managing Vanity Name Servers

### Table of Contents

* TOC
{:toc}

---

If you want to use our name servers but have them appear as though they were your name servers, you can use the vanity name server functionality.

> [!NOTE]
> Vanity name servers are only available on [Enterprise plans](/articles/dnsimple-plans/).

## Enabling Vanity Name Servers

You can enable vanity name servers from the domain's DNS tab in your DNSimple account.

1. Use the **account switcher** at the top of the page to select the account you want to work with.
1. In your **Domain Names** list, click the name of the domain you want to enable vanity name servers on.
1. Click the **DNS** tab.
1. Scroll down to the **Vanity name servers** section.

You'll see two options:

**Configure** – Set up this domain as the source of vanity name servers (for example, `ns1.yourdomain.com`).

**Delegate** – Use an existing vanity name server configuration.

![Vanity Name Server card](/files/vanity-name-servers-card.png)

### Using the same domain

Click **Configure** to set up the domain as the provider of vanity name servers.

If you're using the same domain for the name server names (for example, `ns1.yourdomain.com` for `yourdomain.com`), DNSimple will automatically add the required A and AAAA records for ns1, ns2, etc. If your domain is registered with us, we'll also automatically add [glue records](/articles/what-are-glue-records/)

If the domain is registered elsewhere, and you're only using our DNS services, you need to request that your registrar add the glue records for you. You can find the IPv4 and IPv6 addresses for these records in our article on the [DNSimple name servers](/articles/dnsimple-nameservers/).

To use the domain on which you're enabling vanity name servers for the name server names, click **Enable**. The proper records will be added to the domain automatically.

![Vanity Name Servers on same domain](/files/vanity-name-servers-card-enable.png)

![Vanity Name Servers confirmation of enable](/files/vanity-name-servers-confirm-enabled.png)

### Using another domain

If you want to use another domain for the name server names on the domain for which you're configuring vanity name servers, enter the fully qualified domain name (FQDN) for the name server names you want to use, and click **Enable Vanity Name Servers**.

> [!WARNING]
> Ensure the FQDNs you provide have the proper records configured on the other domain before attempting to delegate to them. If you do not, your domain will not resolve. Please see our documentation about changing to [DNSimple name servers](/articles/dnsimple-nameservers/) for the IPv4 and IPv6 addresses required for your vanity name servers.

![Vanity Name Servers using other domain](/files/vanity-name-servers-other-domain.png)


If your domain is registered with DNSimple, we'll take care of the delegation automatically. If your domain is registered elsewhere, you'll need to update the name server delegation at your registrar to point to the vanity name servers you just configured.

## Delegating to existing vanity name servers

If you already configured vanity name servers on another domain and want to use them for a different domain, you can delegate to them.

To do this:

1. Use the **account switcher** to select the correct account.
1. In your **Domain Names** list, click the domain you want to delegate.
1. Click the **DNS** tab.
1. Scroll to the **Vanity name servers** section and click Delegate.
1. Enter the vanity name server hostnames (for example, `ns1.brand.com`, `ns2.brand.com`), then click **Delegate**.

If your domain is registered with us, the delegation will be handled automatically. If it's registered elsewhere, you'll need to update the name servers at your current registrar to match the ones you entered.

![Delegate Vanity Name Servers](/files/vanity-name-servers-delegate.png)

## Disabling Vanity Name Servers

To disable vanity name servers that you've previously configured, visit the **DNS** tab of the domain management page, and click **Stop delegation** on the **Vanity name servers** card.

![Vanity Name Servers Stop Delegation option](/files/vanity-name-servers-stop-delegation.png)

Once no zones are delegated to the vanity name servers, click **Disable**.

![Disable Vanity Name Servers](/files/vanity-name-servers-disable-card.png)

Clicking **Disable** will populate a confirmation:

![Disable Vanity Name Servers Confirmation](/files/vanity-name-servers-disable.png)

>Vanity name servers will now be disabled by changing the NS records served on your domain back to our defaults. If your domain is registered with us, the delegation will be changed back to our standard name servers as well. If you don't have the domain registered with us, you should change the delegation with your registrar to our name servers.

> [!NOTE]
> If your domain is registered with us, we'll automatically remove the related [glue records](/articles/what-are-glue-records/), assuming they are for the same domain name. If your domain is registered elsewhere, contact your registrar and request that they remove the glue records for you.

## Have more questions?

If you have any questions or need assistance with vanity name servers, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
