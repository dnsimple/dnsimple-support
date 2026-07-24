---
title: Template Record Variables and Syntax
excerpt: The variables and shorthand you can use in DNS template records, and the record types each one applies to.
meta: DNSimple template records support the {{domain}} variable and the @ shorthand. Reference for which record types accept each, and the special SRV case.
categories:
- Templates
---

# Template Record Variables and Syntax

### Table of Contents {#toc}

* TOC
{:toc}

---

DNS template records support two substitutions that are resolved when the template is applied to a domain: the `{{domain}}` variable and the `@` shorthand. Both are replaced with the name of the domain the template is applied to.

For what templates are and how to apply them, see [How DNS Templates Work](/articles/how-dns-templates-work/) and [How to Use Templates](/articles/templates/).

## The {{domain}} variable {#domain-variable}

`{{domain}}` is replaced with the name of the domain the template is applied to. A template record with the content `{{domain}}` applied to `example.com` produces `example.com`.

`{{domain}}` works anywhere within a field. It can appear on its own, or as part of a longer value such as `www.{{domain}}`.

**`{{domain}}` is the only variable available in templates you create.** One-click services use the same substitution mechanism with a larger set of variables, because a service can collect settings from you when you apply it. Those variables do not work in your own templates.

## The @ shorthand {#at-shorthand}

`@` in a record's content is replaced with the domain name, but only under specific conditions.

### Record types that support it {#at-record-types}

| Record type |
|-------------|
| A |
| AAAA |
| CNAME |
| MX |
| URL |
| NS |
| SRV |

`@` is not substituted in any other record type. In a TXT record, for example, `@` is left exactly as written.

### When it is substituted {#at-conditions}

For the record types above, `@` is replaced when either of the following is true:

1. The content is **exactly** `@`, with nothing else in the field
2. The content **ends with** `@.`, which applies to **SRV records only**

An `@` anywhere else in the content is left alone. A CNAME with the content `www.@` is not substituted, because the `@` is neither the entire value nor a trailing `@.` on an SRV record.

### Examples {#at-examples}

Applied to `example.com`:

| Record type | Template content | Result |
|-------------|------------------|--------|
| CNAME | `@` | `example.com` |
| MX | `@` | `example.com` |
| SRV | `100 443 @.` | `100 443 example.com` |
| TXT | `@` | `@` (not substituted) |
| CNAME | `www.@` | `www.@` (not substituted) |

## The SRV case {#srv}

The trailing `@.` rule exists for SRV records specifically. SRV content holds a weight, a port, and a target, so the target sits at the end of a longer string rather than filling the field on its own. Without this rule there would be no way to point an SRV target at the domain apex from inside a template.

See [SRV records in templates](/articles/templates-with-srv-records/) for how the rest of an SRV record is split across the template fields.

## Priority is a separate field {#priority}

Priority is its own field on a template record. It is not part of the content string, and no substitution is applied to it. This matters most for SRV and MX records, where priority is part of the record but not part of the content you type.

## Have more questions?

If you have any questions about template variables, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
