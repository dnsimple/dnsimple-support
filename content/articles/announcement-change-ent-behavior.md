---
title: Change of Non-Compliant ENT Behavior
excerpt: We are updating our name server behavior to properly handle Empty Non-Terminal (ENT) records.
meta: Learn about DNSimple's update to RFC 4592-compliant ENT behavior. Understand how Empty Non-Terminal records will be handled and what action you may need to take.
categories:
  - DNS
---

# Change of Non-Compliant ENT Behavior

> [!INFO]
> This article contains information that is only relevant to customers with specific zone records. If you are impacted, you will receive an email from us asking you to take action.

### Table of Contents {#toc}

* TOC
{:toc}

---

As part of our ongoing commitment to DNS standards compliance and improved resolution behavior, we are updating our name server behavior to properly handle Empty Non-Terminal (ENT) records according to [RFC 4592 section 4.9](https://datatracker.ietf.org/doc/html/rfc4592#section-4.9). This change will be implemented on **December 1, 2025**, with a transition period ending on **November 30, 2025**.

Following this update, DNSimple name servers will respond correctly to ENT queries, returning `NOERROR` with an empty answer section (a `NODATA` response) instead of incorrectly applying wildcard records. This change ensures full compliance with DNS standards and improves predictability for DNSSEC-compliant zones.

## Who's impacted?

This announcement impacts customers with zones that contain an Empty Non-Terminal (ENT) which is a descendant of a wildcard record.

## What are Empty Non-Terminals?

In DNS, an *Empty Non-Terminal* is an intermediate domain name in a DNS hierarchy that exists only because it is a path to a deeper name, but has no records of its own. For example, in the following zone `b.c.example.com` is an Empty Non-Terminal. It has no records itself, but exists because of `a.b.c.example.com`.

```
$ORIGIN example.com.
*.c.example.com.     IN  CNAME   one.test.
a.b.c.example.com.   IN  CNAME   two.test.
```

A typical example is represented by [DKIM records](https://support.dnsimple.com/articles/dkim-record/), that often generate an ENT due to their specific naming structure.

## What's changing?

Let's take the previous zone as a reference:

- `b.c.example.com` is an Empty Non-Terminal. It has no records itself, but exists because of `a.b.c.example.com`.
- According to RFC 4592, a query for `b.c.example.com` should return `NOERROR` with an empty answer section (also known as a `NODATA` response), indicating the name exists but has no records. Importantly, the wildcard at `*.c.example.com` should not apply here, because the name exists (even if empty).
- On the other hand, a query for a name like `x.c.example.com` (which doesn't exist) should be synthesized from the wildcard, returning a CNAME to `one.test`.

Currently, DNSimple name servers do not comply with RFC 4592 for ENTs. When querying an ENT that is a descendant of a wildcard, DNSimple name servers incorrectly return the wildcard match.

For instance, querying `b.c.example.com` would return:

```
$ dig @127.0.0.1 b.c.example.com A +short
one.test.
```

Once the correct behavior is rolled out, DNSimple name servers will respond with `NOERROR` and an empty answer section (no records).

According to the RFC, `b.c.example.com` exists as an ENT (because of `a.b.c.example.com`) and should return `NOERROR` with an empty answer section, not a wildcard response.

## What you need to do

Unless you are relying on the non-compliant behavior, you don't need to take any action. Instead, if you rely on the name servers returning the content of the wildcard for an ENT, you will need to create an explicit record to return the desired value **by November 30, 2025**.

Using the example above, to restore the non-compliant behavior you will need to add the following record:

```
b.c.example.com.   IN  CNAME   one.test.
```

While ENT-related scenarios are statistically rare, DNS resolvers must behave predictably and follow published standards. This is particularly important for DNSSEC-compliant zones.

## Have more questions?

If you have additional questions or need any assistance, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

