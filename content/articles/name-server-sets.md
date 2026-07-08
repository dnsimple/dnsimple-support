---
title: Name Server Sets
excerpt: Create and reuse groups of name server hostnames for delegation, Secondary DNS, and zone NS records in DNSimple.
meta: Create and manage DNSimple name server sets to reuse the same name server hostnames when you edit delegation, Secondary DNS, or zone NS records, with optional glue IPs for DNSimple-registered domains.
categories:
- Name Servers
---

# Name Server Sets

### Table of Contents {#toc}

* TOC
{:toc}

---

Use this guide when you want to save a **reusable list of name server hostnames** (and optional glue IP addresses) in DNSimple, then pick that list when you change [name server delegation](/articles/setting-name-servers/), configure [Secondary DNS](/articles/secondary-dns/), or edit [zone NS records](/articles/zone-ns-records/). For the same pattern applied to full DNS record sets, see [How to Use Templates](/articles/templates/).

> [!NOTE]
> Changes to a name server set's definition will not affect any existing domain name server or configurations that had included the name server set.

## Video walk-through {#video-walk-through}

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/nuerJDLxMQA?rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=en" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Types of name server sets {#types-of-name-server-sets}

There are two types of name server sets:

- System name server sets
- Account name server sets

### System name server sets {#system-name-server-sets}

System name server sets are pre-defined name server sets provided by DNSimple which cannot be modified. They contain [DNSimple name servers](/articles/dnsimple-nameservers/). Unlike account name server sets, system name server sets are not listed on the Account > Name Server Sets page, as they are system-defined and cannot be managed by users.

### Account name server sets {#account-name-server-sets}

Account name server sets are private to an account and can contain custom name servers. You can manage your account's name server sets at any time from the Account > Name Server Sets page, if you have [full access](/articles/what-is-domain-access-control/#full-access) to the account.

## Creating an account name server set {#creating-an-account-name-server-set}

<div class="section-steps" markdown="1">
##### Create a name server set

1. Go to the <label>Account</label> page, and click the <label>Name Server Sets</label> tab.

    ![Name server sets on Account page](/files/name-server-sets-from-account.png)

1. Click on <label>Add</label> to create a new name server set.

    ![Adding a name server set](/files/name-server-sets-add.png)

1. Enter a unique label for the new name server set, the hostname, and (optionally) glue IP(s) for each name server you want in the name server set. Glue IP(s) are used only when changing [name server delegation](/articles/setting-name-servers/) for domains registered with DNSimple.

    ![New name server set](/files/name-server-sets-new.png)

1. Click on <label>Save</label> to save the name server set.

</div>

## Updating an account name server set {#updating-an-account-name-server-set}

<div class="section-steps" markdown="1">
##### Update a name server set

1. Go to the <label>Account</label> page, and click the <label>Name Server Sets</label> tab.

    ![Name server sets on Account page](/files/name-server-sets-from-account.png)

1. Search for the name server set you want to update, and click on the _pencil_ icon to update it.

    ![Editing a name server set](/files/name-server-sets-edit.png)

1. Update the information and click <label>Save</label> to save the changes to the name server set.

    ![Name server set update](/files/name-server-sets-edit-screen.png)

</div>

## Deleting an account name server set {#deleting-an-account-name-server-set}

<div class="section-steps" markdown="1">
##### Delete a name server set

1. Go to the <label>Account</label> page, and click the <label>Name Server Sets</label> tab.

    ![Name server sets on Account page](/files/name-server-sets-from-account.png)

1. Search for the name server set you want to delete, and click on the _trash_ icon to delete it.

    ![Deleting a name server set](/files/name-server-sets-delete.png)

</div>

> [!NOTE]
> Deleting a name server set will not affect any existing domain name server or NS record configurations that had included the name server set.

## Have more questions?

If you have questions about name server sets, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
