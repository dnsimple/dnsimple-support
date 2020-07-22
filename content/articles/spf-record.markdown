---
title: What's an SPF Record?
excerpt: What an SPF record is, and how the SPF record works.
categories:
- DNS
---

# SPF Records

### Table of Contents {#toc}

* TOC
{:toc}

---

<note>
Although the SPF record type is deprecated, it's still supported by DNSimple name servers. We may discontinue serving SPF records in the future, so you should **always** have a TXT record whose content is the same as the record using the SPF type.
</note>

## What's an SPF record?

An SPF record is a Sender Policy Framework record. It's used to indicate to mail exchanges which hosts are authorized to send mail for a domain. It's defined in [RFC 4408](https://www.ietf.org/rfc/rfc4408.txt), and clarified by [RFC 7208](https://www.ietf.org/rfc/rfc7208.txt).


## SPF record format

SPF records are typically defined using the TXT record type. There's also an SPF record type, but it's deprecated, and you should always have at least the TXT record definition present, even if you use the SPF type.

SPF records are defined as a single string of text. Here's an example record:

```
v=spf1 a mx ip4:69.64.153.131 include:_spf.google.com ~all
```

The SPF record always starts with the `v=` element. This indicates the SPF version that is used. Right now, the version should always be `spf1` as this is the most common version of SPF that is understood by mail exchanges.

One or more terms follow the version indicator. These define the rules for which hosts are allowed to send mail from the domain, or provide additional information for processing the SPF record. Terms are made up of mechanisms and modifiers. The following mechanisms are defined:

- `all`
- `include`
- `a`
- `mx`
- `ip4`
- `ip6`
- `exists`

<note>
The `ptr` type is also defined but shouldn't be used.
</note>

There are two modifiers defined:

- `redirect`
- `exp`


## SPF mechanisms

The following mechanisms define which IP addresses are allowed to send mail from the domain:

- `a`
- `mx`
- `ip4`
- `ip6`
- `exists`

A mail server will compare the IP address of the sender against the IP addresses defined in the mechanisms. If the IP address matches one of the mechanisms in the SPF record then follow the result handling rule. The default handling rule is `+` or pass.

The `include` mechanism allows you to authorize hosts outside of your administration by specifying their SPF records.

The `all` mechanism matches any address. This is usually used as the last mechanism which defines how to handle any sender IP that did not match the previous mechanisms.

All mechanisms may specify qualifiers for how to handle a match:

- `+` for pass
- `-` for fail
- `~` for soft fail
- `?` for neutral

As previously mentioned, the default handling rule is pass, which is the same as the `+` qualifier.


## SPF modifiers

Modifiers are name/value pairs (separated by an `=` sign) that provide additional information. Modifiers should appear at the end of the SPF record. A modifier may not appear more than once and unrecognized modifiers are ignored.

The `redirect` modifier is used to point to another SPF record to use for processing. This is used when you have multiple domains and want to apply the same SPF content across those multiple domains. Redirects should only be used if you control both domains, otherwise an `include` is used.

The `exp` modifier is used to provide an explanation in case of a `-` (fail) qualifier is present on a mechanism that is matched.

Note that we currently do not support modifiers in our SPF editing UI, but you may always add them if you are managing your SPF TXT record directly.


## SPF record limitations

**Each fully-qualified name may have at maximum one SPF record**, defined as a TXT record or as an SPF record type.

There are various limitations on the number of items and lookups permitted in an SPF record:

- SPF records may not have more than 10 mechanisms that require DNS lookups. These are the `include`, `a`, `mx`, `ptr`, and `exists` mechanisms.
- When evaluating the `mx` mechanism, the number of MX records queried is included in the overall limit of DNS lookups. Each `mx` mechanism must not result in querying more than 10 address records.
- The `ptr` mechanism is also included in the overall limit. Each `ptr` must not result in querying more than 10 address records.


## Tips for SPF records

Since you may only have one SPF record per fully-qualified name, if you need to add additional modifiers you should add them to your existing SPF record if it's present.

SPF records are most often specified on your naked domain name. If you need to exceed the number of modifiers allowed in a single SPF record, you may need to send some of your messages from subdomains below your naked domain. For example, if a third-party SaaS sends mail on your behalf, you may need to send email from `something.example.com` for that provider. This is especially true if you have multiple SaaS providers that send email on your behalf.

If you want to test your SPF records for compliance with the RFCs, you may want to use [an online SPF testing tool](https://www.kitterman.com/spf/validate.html).
