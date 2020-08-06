---
title: What is a CAA record?
excerpt: A Certification Authority Authorization (CAA) record is used to specify which certificate authorities (CAs) are allowed to issue certificates for a domain.
categories:
- DNS
---

# CAA Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What is a CAA record?

A **Certification Authority Authorization (CAA) record** is used to specify which [certificate authorities (CAs)](/articles/what-is-certificate-authority/) are allowed to issue certificates for a domain.

The purpose of the CAA record is to allow domain owners to declare which certificate authorities are allowed to issue a certificate for a domain. They also provide a means of indicating notification rules in case someone requests a certificate from an unauthorized certificate authority. If no CAA record is present, any CA is allowed to issue a certificate for the domain. If a CAA record is present, only the CAs listed in the record(s) are allowed to issue certificates for that hostname.

CAA records can set policy for the entire domain, or for specific hostnames. CAA records are also inherited by subdomains. Therefore, a CAA record set on `example.com` also applies to any subdomain, such as `subdomain.example.com` (unless overridden). CAA records can control the issuance single-name certificates, wildcard certificates, or both.

The DNS CAA record is specified by [RFC 6844](https://tools.ietf.org/html/rfc6844).


## CAA record format {#record-format}

The structure of a CAA record follows the standard top-level format definition defined [RFC 1035](https://tools.ietf.org/html/rfc1035#section-3.2.1). The RDATA section is composed of the following elements:

| Element | Description |
|:------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| flag  | An unsigned integer between 0-255.                                                                                                           |
|       | It is currently used to represent the _critical_ flag, that has a specific meaning per [RFC](https://tools.ietf.org/html/rfc6844#section-3). |
| tag   | An ASCII string that represents the identifier of the property represented by the record.                                                    |
| value | The value associated with the tag.                                                                                                           |

The CAA record consists of a flags byte and a tag-value pair referred to as a 'property'. Multiple properties may be associated with the same domain name by publishing multiple CAA RRs at that domain name.

The canonical representation is:

```
CAA <flags> <tag> <value>
```

The RFC currently defines 3 available tags:

- `issue`: explicity authorizes a single certificate authority to issue a certificate (any type) for the hostname.
- `issuewild`: explicity authorizes a single certificate authority to issue a wildcard certificate (and only wildcard) for the hostname.
- `iodef`: specifies a URL to which a certificate authority may report policy violations.

In DNSimple, the CAA record is represented by the following customizable elements:

| Element | Description |
|:------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| Name  | The host name for the record, without the domain name. This is generally referred to as "subdomain". We automatically append the domain name. |
| TTL   | The time-to-live in seconds. This is the amount of time the record is allowed to be cached by a resolver.                                  |
| Tag   | An ASCII string that represents the identifier of the property represented by the record.                                                  |
| Value | The value associated with the tag.                                                                                                         |

<info>
We don't allow configuration of the bit flag.
</info>


## CAA record usage

As explained in the format section, each CAA record contains only one tag-value pair. The tag must be one of the available tags. For example, if we want to limit the issuance of SSL certificates for `example.com` to the Let's Encrypt certificate authority, we should add the following CAA record:

```
example.com.  CAA 0 issue "letsencrypt.org"
```

If we want to allow both Let's Encrypt and Comodo, we should add 2 CAA records, one for each CA:

```
example.com.  CAA 0 issue "comodoca.com"
example.com.  CAA 0 issue "letsencrypt.org"
```

If we want to allow Let's Encrypt and Comodo only for wildcard, then we can use `issuewild`:

```
example.com.  CAA 0 issue "letsencrypt.org"
example.com.  CAA 0 issuewild "comodoca.com"
```

Note that the presence of issuewild overrides the `issue`. Therefore, Let's Encrypt _is not allowed_ to issue wildcard certificates.

Finally, to be notified of policy violations, you can add a record with the `iodef` tag that contains the email address to notify:

```
example.com.  CAA 0 iodef "mailto:example@example.com"
```

As mentioned before, the records are inherited by child hostnames. Let's look at an example of subdomain configuration:

```
example.com.        CAA 0 issue "letsencrypt.org"
alpha.example.com.  CAA 0 issue "comodoca.com"
beta.example.com.   CAA 0 issue "letsencrypt.org"
beta.example.com.   CAA 0 issue "comodoca.com"
```

In the example above, Let's Encrypt is the default CA for the example.com domain. However, only Comodo can issue a certificate for `alpha.example.com`. Both Comodo and Let's Encrypt can issue certificates for `beta.example.com`. And what about `foo.example.com`? Because no record exists for `foo.example.com`, but there is a record for `example.com`, in this case only Let's Encrypt is allowed to issue for `foo.example.com`.

<note>
#### Comodo Wildcard Certificates

Customers who purchase a Comodo wildcard certificate from us need to make sure they have an `issue` and `issuewild` CAA record, because they add an additional single-name to the certificate to cover the non-wildcard name. For example, buying a certificate for `*.example.com` issues a certificate with both `example.com` and `*.example.com` in the certificate names. This means you need to configure your CAA records like so:

    example.com.  CAA 0 issue "comodoca.com"
    example.com.  CAA 0 issuewild "comodoca.com"

The above rules apply to subdomain wildcard certificates as well.
</note>


## Querying CAA records

The CAA record is a relatively new resource record (RR), and not all tools support it. A notable example is `dig`; it doesn't support the standard syntax for querying CAA records. In order to query the CAA record for a domain with `dig` you must specify the RR type (257) directly.

```
$ dig google.com type257

; <<>> DiG 9.8.3-P1 <<>> google.com type257
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 64266
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;google.com.            IN  TYPE257

;; ANSWER SECTION:
google.com.     86399   IN  TYPE257 \# 19 0005697373756573796D616E7465632E636F6D

;; Query time: 51 msec
;; SERVER: 8.8.8.8#53(8.8.8.8)
;; WHEN: Thu Dec 29 21:07:18 2016
;; MSG SIZE  rcvd: 59
```

`dig` also doesn't support CAA inheritance, and the output of the query is the binary-encoded record (although in newer versions of `dig`, support for parsing the record data is present).

In order to test the development of our CAA implementation, at DNSimple we developed a simple utility called [`dnscaa`](https://github.com/weppos/dnscaa). It's a Go package that allows you to fetch CAA records, and it comes with a handy CLI.

```
$ digcaa google.com

1 records found
google.com. 86399   IN  CAA 0 issue "symantec.com"
```


## Manage CAA records

From the DNSimple record editor you can [add, remove, and update CAA records](/articles/manage-caa-record).
