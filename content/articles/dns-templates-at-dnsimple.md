---
title: DNS Templates at DNSimple
excerpt: Overview of DNSimple DNS template documentation, from creating and applying templates to template variables and SRV records.
meta: DNSimple DNS templates are reusable groups of DNS records you apply to any domain. Create templates, apply them, and use template variables.
categories:
- Templates
---

# DNS Templates at DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

A **DNS template** is a named, reusable group of DNS records stored on your account. Applying a template to a domain creates those records in its zone, without removing or overwriting records that are already there. Templates are managed from the <label>Templates</label> tab in the header. This page is the starting point for template documentation.

## Getting started {#getting-started}

- [How to Use Templates](/articles/templates/) - Create a template, add records to it, and apply it to a domain.

## Understanding templates {#understanding}

- [How DNS Templates Work](/articles/how-dns-templates-work/) - What a template contains, what applying one does to a zone, why an apply can fail, and how templates relate to one-click services.

## Working with templates {#working}

- [How to Use Templates](/articles/templates/) - The full create-and-apply walkthrough.
- [SRV records in templates](/articles/templates-with-srv-records/) - How SRV data splits across the name, content, and priority fields.

## Reference {#reference}

- [Template Record Variables and Syntax](/articles/template-record-variables/) - The `{{domain}}` variable, the `@` shorthand, and the record types each applies to.

## Related articles {#related}

- [Record editor](/articles/record-editor/) - Where templates are applied from.
- [One-click Services](/articles/services/) - DNSimple-maintained record sets for known providers, built on the same mechanism as templates.

## Have more questions?

If you have any questions about DNS templates, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
