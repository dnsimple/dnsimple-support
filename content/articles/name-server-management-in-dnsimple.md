---
title: Name Server Management in DNSimple
excerpt: A detailed look at the name server management interface within your DNSimple account.
meta: Learn how to effectively manage name servers in DNSimple with our comprehensive illustrated guide, including available settings and information.
categories:
- Name Servers
---

# Name Server Management in DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Name server management in DNSimple is handled on a per-domain basis. This guide provides an overview of the name server management interface and available options within your DNSimple account.

## Accessing name server management

Name server settings are managed from the domain's **Registration** tab:

1. Use the **account switcher** at the top of the page to select the appropriate account.
2. In your **Domain Names** list, click the name of the domain you want to manage.
3. Click the **Registration** tab on the left sidebar.
4. Find the **Domain delegation** card to view and edit name server settings.

![Domain delegation card](/files/domain-delegation-card-2.png)

## Domain delegation card

The **Domain delegation** card displays the current name servers for your domain and provides options to edit them.

### Viewing current name servers

The card shows:
- Current name servers delegated for the domain
- Whether name servers are reserved (for Secondary DNS or Vanity Name Servers)
- Options to edit delegation

### Editing name server delegation

Click **Edit delegation** to change your domain's name servers.

![Edit delegation button](/files/domain-delegation-card.png)

## Setting name servers

### Using DNSimple name servers

To delegate your domain to DNSimple's name servers:

1. Click **Edit delegation** in the **Domain delegation** card.
2. Click **Use DNSimple name servers** to populate the form with [DNSimple name servers](/articles/dnsimple-nameservers/).
3. Confirm the change.

![Use DNSimple name servers](/files/use-dnsimple-name-servers.png)

### Using custom name servers

To delegate to other name servers:

1. Click **Edit delegation** in the **Domain delegation** card.
2. Enter the name server hostnames manually, or
3. Click **Add a name server set** to select from your [name server sets](/articles/name-server-sets/).

![Enter name servers](/files/complete-name-server-change.png)

### Using name server sets

Name server sets allow you to quickly apply predefined groups of name servers:

1. Click **Add a name server set** when editing delegation.
2. Select a name server set from the list.
3. The name servers from the set will be populated automatically.

![Add a name server set](/files/domain-delegation-add-name-server-set.png)

> [!NOTE]
> If a name server in the set has glue IP addresses associated with it and is a child zone of the domain (e.g., `ns1.example.com` for `example.com`), glue records will be created automatically at the registry.

## Reserved name servers

If you have [Secondary DNS](/articles/secondary-dns/) or [Vanity Name Servers](/articles/vanity-nameservers/) configured, those name servers are marked as "reserved" and cannot be edited or removed through the **Edit delegation** page.

![Reserved name servers](/files/reserved-name-servers.png)

To modify reserved name servers, click the configuration icon next to the reserved name server. This will take you to the Secondary DNS or Vanity Name Servers configuration page where you can make changes.

![Edit reserved name servers through configuration](/files/reserved-name-servers-edit-configuration.png)

## Glue records

When adding name servers that are subdomains of the domain (like `ns1.example.com` for `example.com`), glue records are required. DNSimple automatically handles glue record creation when:

- The domain is registered with DNSimple
- The name server is a child zone of the domain
- Glue IP addresses are provided in the name server set

For more information, see [What Are Glue Records?](/articles/what-are-glue-records/).

## System NS records

DNSimple automatically publishes NS records within your zone file to indicate which name servers are authoritative for your domain. These appear in the [System Records](/articles/system-records/) section and reflect either:

- DNSimple's default name servers (if delegated to DNSimple)
- Your vanity name servers (if configured)
- Custom name servers (if delegated elsewhere)

These system NS records are managed automatically and cannot be edited directly in the record editor.

## Name server sets management

Name server sets are managed from the **Account** page:

1. Go to the **Account** page.
2. Click the **Name Server Sets** tab.
3. Create, edit, or delete name server sets as needed.

For detailed instructions, see [Name Server Sets](/articles/name-server-sets/).

## Vanity name servers

Vanity name servers are configured from the domain's **DNS** tab, not the **Registration** tab. For information on managing vanity name servers, see [Managing Vanity Name Servers](/articles/vanity-nameservers/).

## Have more questions?

If you have any questions or need assistance with name server management in DNSimple, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

