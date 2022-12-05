---
title: Name Server Sets
excerpt: How to use name server sets to facilitate the configuration of domain name servers and zone NS records.
categories:
- Name Servers
---

# What is a Name Server Set?

Name server sets are reusable groups of [name server](/articles/what-is-a-nameserver/) records that can be applied to the [name server delegation](/articles/setting-name-servers) and [secondary DNS](/articles/secondary-dns) configuration, and [zone NS records](/articles/zone-ns-records/) of your domains. They speed up the entry of name server and NS records and reduce possible mistakes like typos and other errors. 

<info>
Changes to a name server set's definition will not affect any existing domain name server or configurations that had included the name server set.
</info>

## Types of Name Server Sets

There are 2 types of name server sets:
- System name server sets
- Account name server sets

### System Name Server Sets {#system-name-server-sets}

System name server sets are pre-defined name server sets provided by DNSimple which cannot be modified. They contain [DNSimple name servers](/articles/dnsimple-nameservers).

### Account Name Server Sets {#account-name-server-sets}

Account name server sets are private to an account and may contain custom name servers. You can manage your account's name server sets at any time from the Account > Name Server Sets page, if you have [Full Access](/articles/domain-access-control#full-access) to the account.

## Creating an Account Name Server Set

<div class="section-steps" markdown="1">
#### To create a Name Server Set

1. Go to the <label>Account</label> page, and click the <label>Name Server Sets</label> tab.

    ![](/files/name-server-sets-from-account.png)

1. Click on <label>Add</label> to create a new name server set.

    ![](/files/name-server-sets-add.png)

1. Enter a unique label for the new name server set, and the hostname and optionally, glue IP(s), for each name server that you would like to be in the name server set.

    ![](/files/name-server-sets-new.png)

1. Click on <label>Save</label> to save the name server set.

</div>

## Updating an Account Name Server Set

<div class="section-steps" markdown="1">
#### To update a Name Server Set

1. Go to the <label>Account</label> page, and click the <label>Name Server Sets</label> tab.

    ![](/files/name-server-sets-from-account.png)

1. Search for the name server set you wish to update, and click on the _pencil_ icon to update it.

    ![](/files/name-server-sets-edit.png)

1. Update the information and click <label>Save</label> to save the changes to the name server set.

    ![](/files/name-server-sets-edit-screen.png)

</div>

## Deleting an Account Name Server Set

<div class="section-steps" markdown="1">
#### To delete a Name Server Set

1. Go to the <label>Account</label> page, and click the <label>Name Server Sets</label> tab.

    ![](/files/name-server-sets-from-account.png)

1. Search for the name server set you wish to delete, and click on the _trash_ icon to delete it.

    ![](/files/name-server-sets-delete.png)

<info>
Deleting a name server set will not affect any existing domain name server or NS record configurations that had included the name server set.
</info>

</div>