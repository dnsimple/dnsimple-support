---
title: SRV records in templates
excerpt: How to configure templates with SRV records.
meta: SRV records in DNSimple templates split their data across the name, content, and priority fields. Learn the format and how to target the domain apex.
categories:
- Templates
---

# SRV records in templates

### Table of Contents {#toc}

* TOC
{:toc}

---

An SRV record in a [DNS template](/articles/templates/) splits its data across three fields: the service and protocol go in the name field, the weight, port, and target go in the content field, and the priority goes in its own field.

## SRV record components {#components}

A typical SRV record contains the following data:

- A symbolic service name, like `sip`
- A protocol, like `tcp` or `udp`
- A priority, like `10`
- A weight, like `100`
- A port, like `443`
- A target, like `target.example.com`

## How to enter them in a template {#format}

Combine the components across the template record fields as follows:

| Field | Contains | Example |
|-------|----------|---------|
| Name | The service name and protocol, each prefixed with an underscore | `_sip._tcp` |
| Content | The weight, port, and target, separated by spaces | `100 443 target.example.com` |
| Priority | The priority on its own | `10` |

Priority is a separate field on the record. Do not include it in the content string, or the record will not resolve as intended.

![Template creation for SRV records](/files/template-with-srv-record.png)

## Pointing an SRV target at the domain apex {#apex}

To target the domain the template is applied to, end the content with `@.` rather than naming a host. The `@` is replaced with the domain name when the template is applied.

For example, a content value of:

```
100 443 @.
```

applied to `example.com` produces:

```
100 443 example.com
```

This shorthand works in the content field for A, AAAA, CNAME, MX, URL, NS, and SRV records. SRV is the only type where it is recognized at the end of a longer value rather than on its own. See [Template Record Variables and Syntax](/articles/template-record-variables/) for the complete rules.

## Have more questions?

If you have any questions about SRV records in templates, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
