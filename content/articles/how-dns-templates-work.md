---
title: How DNS Templates Work
excerpt: What a DNS template is, what happens when you apply one, and how templates relate to one-click services.
meta: A DNSimple template is a reusable group of DNS records you apply to any domain. Applying it adds records without overwriting existing ones.
categories:
- Templates
---

# How DNS Templates Work

### Table of Contents {#toc}

* TOC
{:toc}

---

A DNS template is a named, reusable group of DNS records stored on your account. Applying a template to a domain creates those records in the domain's zone. It does not remove or overwrite records that are already there.

For the steps to create and apply one, see [How to Use Templates](/articles/templates/).

## What a template contains {#contents}

A template has a name, a short identifier that is unique within your account, and any number of DNS records. There is no limit on how many records a template can hold, and the records can be of any type the [record editor](/articles/record-editor/) supports.

Templates belong to the account rather than to a domain, so one template can be applied to as many domains as you like.

## Who can use templates {#permissions}

Templates are managed at the account level. The <label>Templates</label> tab appears in the header only for users who can manage the account. A member with domain-level access can work with a domain's records directly but will not see the Templates tab at all.

## What happens when you apply a template {#applying}

Applying a template adds each of the template's records to the target zone. Two things follow from that:

- **Existing records are left alone.** A template never deletes or replaces a record that is already in the zone.
- **The application is recorded.** A zone keeps track of which templates have been applied to it.

A template can be applied to a zone or to a domain.

## Why applying a template can fail {#failures}

Applying a template is all or nothing. If any record the template would create is invalid for the target zone, the whole application fails and nothing is added.

The usual cause is a conflict with a record that already exists. For example, a template that creates a `beta` CNAME record cannot be applied to a domain that already has a `beta` CNAME, because the zone cannot hold both.

To resolve it, remove or rename the conflicting record in the zone, then apply the template again.

## Template variables {#variables}

Template records do not have to hard-code a domain name. Two substitutions are available:

- `{{domain}}` is replaced with the name of the domain the template is applied to
- `@` on its own is replaced with the same value, for certain record types

`{{domain}}` is the only variable available in templates you create. For the full rules, including which record types accept `@` and the special case for SRV records, see [Template Record Variables and Syntax](/articles/template-record-variables/).

## Templates and one-click services {#services}

One-click [services](/articles/services/) are built on the same mechanism as templates. The difference is who maintains them and what they can do:

| | Template | One-click service |
|---|---|---|
| Created by | You | DNSimple |
| Maintained by | You | DNSimple |
| Variables | `{{domain}}` and `@` | Can also collect settings from you when applied |
| Best for | Record sets specific to your setup | Connecting a domain to a known provider |

If a service already exists for the provider you are configuring, use it. Build a template when you have a record set of your own that you repeat across domains.

## Have more questions?

If you have any questions about how templates work, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
