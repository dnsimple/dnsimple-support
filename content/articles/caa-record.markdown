---
title: What's a CAA record?
excerpt: A Certification Authority Authorization (CAA) record is used to specify which certificate authorities (CAs) are allowed to issue certificates for a domain.
categories:
- DNS
---

# CAA Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What's a CAA record?

A **Certification Authority Authorization (CAA) record** is used to specify which [certificate authorities (CAs)](/articles/what-is-certificate-authority/) are allowed to issue certificates for a domain.

CAA records allow domain owners to declare which certificate authorities are allowed to issue a certificate for a domain. They also provide a means of indicating notification rules if someone requests a certificate from an unauthorized certificate authority. If no CAA record is present, any CA is allowed to issue a certificate for the domain. If a CAA record is present, only the CAs listed in the record(s) are allowed to issue certificates for that hostname.

CAA records can set policy for the entire domain, or for specific hostnames, and are inherited by subdomains. For example, a CAA record set on `example.com` also applies to `subdomain.example.com`.

## CAA record format {#record-format}

CAA records must match the following pattern of:

```
<flags> <tag> <value>
```

See the [validations](#validation) section for more details about accepted values in the parts of CAA records and their constraints.

## Policies restricting certificate issuance to specific types and CAs

CAA records can control the issuance of single-name certificates, wildcard certificates, or both, though the `issue` and `issuewild` tags:
- `issue` sets a policy for single-name **and** wildcard certificate issuance.
- `issuewild` sets a policy for wildcard certificate issuance.

<warning>
When requesting a certificate for a wildcard domain name, an `issuewild` policy overrides any `issue` policies in the same name.
</warning>

As many CAA records as needed can be created on the same name to describe any desired set of restrictions for CAs.

## Policy requesting notifications on policy violations

CAA records with the `iodef` tag can be created to request CAs to report any policy violations through email or HTTP/HTTPS callback URLs. 

## CAA record examples {#record-examples}

**Allow Let's Encrypt to issue on `example.com`**
```
example.com.  CAA 0 issue "letsencrypt.org"

```

**Allow both Let's Encrypt and Sectigo**
```
example.com.  CAA 0 issue "sectigo.com"
example.com.  CAA 0 issue "letsencrypt.org"
```

**Allow Let's Encrypt to issue normal certs and Sectigo to issue _wildcard_ and normal certs**

```
example.com.  CAA 0 issue "letsencrypt.org"
example.com.  CAA 0 issuewild "sectigo.com"
```

**Complex permissions for Let's Encrypt**

```
example.com.  CAA 0 issue "letsencrypt.org;validationmethods=dns-01"
example.com.  CAA 0 issuewild "letsencrypt.org"
```

With this setup, Let's Encrypt can issue single-name certificates for example.com using the DNS validation method, while allowing any validation method for wildcard certificates.

**Request notification of policy violations by email**
```
example.com.  CAA 0 iodef "mailto:example@example.com"
```

**Disallow issuance of any certificates in a name**
```
example.com.  CAA 0 issue ";"
```

## Validation

The reference document for the DNS CAA record is the [RFC 8659](https://www.rfc-editor.org/rfc/rfc8659.html).

- The `flag` must be a number between `0` and `255`, `0` being the most commonly used value.
- The `tag` must be one of `issue`, `issuewild`, or `iodef`.
- The `value` part:
    - It must be wrapped between double quotes `"`.
    - There are no length restrictions on this part.
    - Any inner double quotes `"` must be escaped with the `\"` character sequence.
    - Based on the specific `tag` value, it must follow the extra rules described below:

#### `issue` and `issuewild` tag `value`

- It must contain a domain name.
- The domain name can be followed by a list of parameters with the following pattern:

   ```
   0 issue "letsencrypt.com;key1=value1;key2=value2"
   ```

- The domain name can also be left empty, which must be indicated providing just `";"` as a value:

   ```
   0 issue ";"
   ```

#### `iodef` tag `value`

- It must contain a URL.
- The provided URL must have one of the following schemes: `mailto`, `http`, or `https`.
- If the URL has the `mailto` scheme, it must conform to an email URL, like `mailto:admin@example.com`.
- If the URL has the `http` or `https` schemes, it must be a valid HTTP/HTTPS URL, like `https://dnsimple.com/report_caa`.
