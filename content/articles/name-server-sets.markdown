---
title: Name Server Sets
excerpt: How to use name server sets to facilitate the configuration of domain name servers and zone NS records.
categories:
- Name Servers
---

# What is a Name Server Set?

Name server sets are reusable groups of [name server](/articles/what-is-a-nameserver/) records that can be applied to the name server configuration, and zone NS records of your domains. They speed up the entry of name server and NS records and reduce possible mistakes like typos and other errors. 

<note>
Changes to a name server set's definition will not affect any existing domain name server or configurations that had made use of name server sets.
</note>

## Types of Name Server Sets

There are 2 types of name server sets, system name server sets, which are pre-defined name server sets provided by DNSimple and which contain DNSimple's name servers, and account name server sets, which are private to an account.

You can manage your account's Name Server Sets at any time from the Account > Name Server Sets page, if you have [Full Access](#full-access) to the account.

## Creating a Name Server Set

<div class="section-steps" markdown="1">
#### To create a Name Server Set

1. Go to the <label>Account</label> page, and click the <label>Name Server Sets</label> tab.
2. Click on <label>Add</label> to create a new name server set.
3. Enter a unique label for the new name server set, and the hostname and optionally, glue IP(s), for each name server that you would like to be in the name server set.
4. Click on <label>Save</label> to save the name server set.

## Updating a Name Server Set

<div class="section-steps" markdown="1">
#### To update a Name Server Set

1. Go to the <label>Account</label> page, and click the <label>Name Server Sets</label> tab.
2. Search for the name server set and click on the _pencil_ icon to update it.
3. Update the information and click <label>Save</label> to save the changes to the name server set.
