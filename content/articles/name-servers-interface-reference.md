---
title: DNSimple Interface Reference for Name Server Management
excerpt: Reference for the name server management interfaces in DNSimple, covering delegation, name server sets, vanity name servers, and zone NS records.
meta: Reference for all name server management interfaces in DNSimple. Covers the Edit Delegation page, Name Server Sets, Vanity Name Servers, and Zone NS Records controls with field descriptions and links to how-to guides.
categories:
- Name Servers
---

# DNSimple Interface Reference for Name Server Management

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides four distinct interfaces for managing name server configuration. Each applies to a different part of the delegation stack. This page describes what each interface does and what controls are available.

## Edit Delegation {#edit-delegation}

The Edit Delegation page controls apex delegation for domains registered with DNSimple. It is the registrar-level interface for updating which name servers the TLD zone lists for your domain.

**Location:** Domain page > <label>Registration</label> tab > Domain Delegation card > <label>Edit delegation</label>

![Domain Delegation card](/files/domain-delegation-card-2.png)

![Edit Delegation form](/files/complete-name-server-change.png)

| Control | Description |
|:--------|:------------|
| Name server fields | Enter up to six name server hostnames. DNSimple requires at least two. |
| <label>Use DNSimple name servers</label> button | Replaces all name server fields with the four current DNSimple edge hostnames. |
| <label>Add from name server set</label> | Populates the fields from a saved [name server set](/articles/name-server-sets/). |
| <label>Change name servers</label> button | Submits the delegation update to the registry. |

> [!NOTE]
> Edit Delegation is only available for domains registered with DNSimple. For domains registered elsewhere, update delegation at your external registrar.

For step-by-step instructions, see [Delegating a Domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/) or [Change delegation to another DNS provider](/articles/setting-name-servers/).

## Name Server Sets {#name-server-sets}

Name server sets are reusable groups of name server hostnames. They can be applied to Edit Delegation, secondary DNS configuration, and zone NS records. Account name server sets are managed from the Account page.

**Location:** <label>Account</label> page > <label>Name Server Sets</label> tab

![Name Server Sets list](/files/name-server-sets-from-account.png)

### Create a name server set

![New name server set form](/files/name-server-sets-new.png)

| Field | Description |
|:------|:------------|
| Label | A unique name for the set within your account. |
| Hostname | The fully qualified domain name of a name server. |
| Glue IPs (optional) | IPv4 and/or IPv6 addresses for the name server. Used only when updating delegation for domains registered with DNSimple and the name server is [in-bailiwick](/articles/name-servers-glossary/#in-bailiwick). |
| <label>Add name server</label> | Adds another hostname row to the set. |
| <label>Save</label> button | Creates or saves the name server set. |

### Edit a name server set

![Edit name server set](/files/name-server-sets-edit-screen.png)

The edit form uses the same fields as creation. Changes to a name server set do not affect existing delegations or configurations that previously used the set.

### Delete a name server set

![Delete name server set](/files/name-server-sets-delete.png)

Click the trash icon next to a set to delete it. Deleting a name server set does not affect existing delegations or NS record configurations that used the set.

> [!NOTE]
> System name server sets (containing the DNSimple edge name servers) are pre-defined by DNSimple and are not listed on this page. They cannot be modified.

For step-by-step instructions, see [Name Server Sets](/articles/name-server-sets/).

## Vanity Name Servers {#vanity-name-servers}

Vanity name servers let you use custom hostnames within your own domain (for example, `ns1.example.com`) instead of DNSimple's default edge hostnames. This feature is available on [Enterprise plans](/articles/dnsimple-plans/) only.

**Location:** Domain page > <label>DNS</label> tab > Vanity Name Servers section

![Vanity Name Servers card](/files/vanity-name-servers-card.png)

| Control | Description |
|:--------|:------------|
| <label>Configure</label> button | Sets up the current domain as the source of vanity name server hostnames. DNSimple automatically adds the required A, AAAA, and (if the domain is registered with DNSimple) glue records. |
| <label>Delegate</label> button | Uses an existing vanity name server configuration from another domain in your account. |

### After enabling

![Vanity Name Servers enabled](/files/vanity-name-servers-confirm-enabled.png)

Once vanity name servers are enabled, the card shows the active vanity hostnames and options to manage or disable the configuration.

| Control | Description |
|:--------|:------------|
| <label>Disable</label> button | Removes the vanity name server configuration and reverts to DNSimple edge hostnames. |

> [!WARNING]
> Disabling vanity name servers removes the glue records and A/AAAA records that were automatically added. If the domain is delegated using those vanity hostnames, disable and re-delegate in the same change window to avoid downtime.

For step-by-step instructions, see [Manage Vanity Name Servers](/articles/vanity-nameservers/).

## Zone NS Records {#zone-ns-records}

Zone NS records are the NS records published inside your DNSimple zone at the apex. They are separate from registrar-level delegation and are used in advanced configurations such as secondary DNS. For most domains delegated to DNSimple, these records are system-managed and do not require manual editing.

**Location:** Domain page > <label>DNS</label> tab > Zone NS Records section > <label>Edit zone NS records</label>

![Zone NS Records section](/files/zone-records-edit.png)

![Zone NS Records update form](/files/zone-ns-records-update.png)

| Control | Description |
|:--------|:------------|
| Name server hostname fields | Enter the hostnames to publish as NS records at the zone apex. |
| <label>Add from name server set</label> | Populates the fields from one or more saved [name server sets](/articles/name-server-sets/). |
| <label>Apply NS records</label> button | Saves the zone NS records. |

![Zone NS Records from name server set](/files/zone-ns-records-name-server-set.png)

> [!NOTE]
> Zone NS record changes only take effect if the domain is delegated to DNSimple at the registrar and has active DNS hosting. Editing these records does not change registrar-level delegation.

For step-by-step instructions, see [Zone NS Records](/articles/zone-ns-records/).

## Have more questions?

If you have any questions about name server management interfaces in DNSimple, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
