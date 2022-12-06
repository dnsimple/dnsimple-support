---
title: Name Server Sets
excerpt: How to use name server sets to facilitate the configuration of domain name servers and zone NS records.
categories:
- Name Servers
---

# What Is A Name Server Set?

Name server sets are reusable groups of [name server](/articles/what-is-a-nameserver/) records that can be applied to the [name server delegation](/articles/setting-name-servers), [secondary DNS](/articles/secondary-dns) configuration, and [zone NS records](/articles/zone-ns-records/) of your domains. They speed up the entry of name server and NS records and reduce possible mistakes, like typos and other errors. 

<info>
Changes to a name server set's definition will not affect any existing domain name server or configurations that had included the name server set.
</info>

## Types of name server sets

There are two types of name server sets:
- System name server sets
- Account name server sets

### System name server sets {#system-name-server-sets}

System name server sets are pre-defined name server sets provided by DNSimple which cannot be modified. They contain [DNSimple name servers](/articles/dnsimple-nameservers). Unlike account name server sets, system name server sets are not listed on the Account > Name Server Sets page, as they are system-defined and cannot be managed by users.

### Account name server sets {#account-name-server-sets}

Account name server sets are private to an account and can contain custom name servers. You can manage your account's name server sets at any time from the Account > Name Server Sets page, if you have [full access](/articles/domain-access-control#full-access) to the account.

## Creating an account name server set

<div class="section-steps" markdown="1">
#### To create a name server set

1. Go to the <label>Account</label> page, and click the <label>Name Server Sets</label> tab.

    ![Name server sets on Account page](/files/name-server-sets-from-account.png)

1. Click on <label>Add</label> to create a new name server set.

    ![Adding a name server set](/files/name-server-sets-add.png)

1. Enter a unique label for the new name server set, the hostname, and (optionally) glue IP(s) for each name server you want in the name server set. Glue IP(s) are used only when changing [name server delegation](/articles/setting-name-servers) for domains registered with DNSimple.

    ![New name server set](/files/name-server-sets-new.png)

1. Click on <label>Save</label> to save the name server set.

</div>

## Updating an account name server set

<div class="section-steps" markdown="1">
#### To update a name server set

1. Go to the <label>Account</label> page, and click the <label>Name Server Sets</label> tab.

    ![Name server sets on Account page](/files/name-server-sets-from-account.png)

1. Search for the name server set you want to update, and click on the _pencil_ icon to update it.

    ![Editing a name server set](/files/name-server-sets-edit.png)

1. Update the information and click <label>Save</label> to save the changes to the name server set.

    ![Name server set update](/files/name-server-sets-edit-screen.png)

</div>

## Deleting an account name server set

<div class="section-steps" markdown="1">
#### To delete a name server set

1. Go to the <label>Account</label> page, and click the <label>Name Server Sets</label> tab.

    ![Name server sets on Account page](/files/name-server-sets-from-account.png)

1. Search for the name server set you want to delete, and click on the _trash_ icon to delete it.

    ![Deleting a name server set](/files/name-server-sets-delete.png)

<info>
Deleting a name server set will not affect any existing domain name server or NS record configurations that had included the name server set.
</info>

</div>
