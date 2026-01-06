---
title: CAA Record Format and Policy Tags
excerpt: The structure and canonical representation of a CAA record
meta: Learn more about the structure of CAA records and policy tags.
categories:
- DNS
---
# CAA Record Format and Policy Tags
A [Certification Authority Authorization (CAA) record](/articles/caa-record/) is a DNS record used to specify which Certificate Authorities (CAs) are authorized to issue certificates for a domain. This document details the formal structure and the specific policy tags used within CAA records.

## CAA record format
All CAA records must adhere to a specific pattern in their RDATA (Resource Data) section:
`<flags>` `<tag>` `<value>`

| Element | Type | Description | Constraints |
|:--------|:-----|:----|:----|
| `flags` | Integer | An unsigned 8-bit integer that indicates special properties of the tag. | Currently, only `0` (no flags set) and `128` (critical flag) are defined. |
| `tag` | String | An ASCII string that defines the meaning of the value. | Must be an ASCII string. Defined tags include `issue`, `issuewild`, `issuemail`, `iodef`, `contactemail`, and `contactphone`. |
| `value` | String | The value associated with the tag. | The format and content depend on the specific `tag` used. |

## CAA record flags
The `flags` byte provides specific instructions for CAs processing the record:
- **`0` (no flags set)**: This is the default. CAs process the record as usual.
- **`128` (critical flag)**: If this flag is set for a tag that a CA does not understand or support, the CA **must** refuse to issue the certificate. This prevents CAs from ignoring policies they don't explicitly recognize.

## CAA record tags and their values
CAA records support several defined tags, each serving a specific purpose related to certificate issuance or reporting.

### `issue` tag: restricting general certificate issuance
Sets a policy for issuing **single-name and non-wildcard TLS/SSL certificates** for the specified domain or hostname.
- **Value**: A domain name representing the allowed Certificate Authority (CA).
    - **Examples**: `"letsencrypt.org"`, `"sectigo.com"`.
    - To disallow all CAs from issuing non-wildcard certificates, use a value of `";"` (a single semicolon).
- **Optional parameters**: The value can include additional parameters appended after a semicolon, like `validationmethods=dns-01`.

### `issuewild` tag: restricting wildcard certificate issuance
Sets a policy specifically for issuing **wildcard certificates** (e.g., for `*.example.com`).
- **Value**: A domain name representing the allowed Certificate Authority (CA).
    - **Examples**: `"sectigo.com"`, `"digicert.com"`
    - To disallow all CAs from issuing wildcard certificates, use a value of `";"` (a single semicolon).
- **Interaction with `issue`**: When a certificate for a wildcard domain name is requested, an `issuewild` policy on the same name takes precedence over any `issue` policies.

### `issuemail` tag: restricting S/MIME certificate issuance
Sets a policy for issuing **S/MIME (Secure/Multipurpose Internet Mail Extensions) certificates**. S/MIME certificates are used for email encryption and digital signatures.
- **Value**: A domain name representing the allowed Certificate Authority (CA).
    - Example: `"digicert.com"`.
    - To disallow all CAs from issuing S/MIME certificates, use a value of `";"` (a single semicolon).

### `iodef` tag: requesting policy violation notifications
The `iodef` tag (Incident Object Description Exchange Format) allows domain owners to specify a method for CAs to report any policy violations (e.g., an unauthorized certificate request).
- **Value**: A URL for reporting. Typically an email address (prefixed with `mailto:`) or an HTTP/HTTPS callback URL.
    - **Example**: `"mailto:security@example.com"`
    - **Example**: `"https://iodef.example.com/report"`

### `contactemail` tag: specifying contact email for certificate validation

The `contactemail` tag allows domain owners to specify an email address that Certificate Authorities (CAs) must use to confirm domain ownership before issuing SSL certificates. This enables CAs to automatically validate certificate requests by emailing the specified contact address.
- **Value**: A valid email address.
    - **Example**: `"admin@example.com"`
    - **Example**: `"security@example.com"`

### `contactphone` tag: specifying contact phone for certificate validation
The `contactphone` tag allows domain owners to specify a phone number that Certificate Authorities (CAs) must use to confirm domain ownership before issuing SSL certificates. This enables CAs to automatically validate certificate requests by contacting the specified phone number.
- **Value**: A valid phone number, including country code.
    - **Example**: `"+1 555 123 4567"`
    - **Example**: `"+44 20 7946 0958"`

## CAA record examples
Common CAA record configurations

<note>
A domain can have multiple CAA records to describe the desired set of restrictions.
</note>

| Scenario | Example DNSimple configuration (name / flags / tag / content) | Canonical form (for reference) | Description |
|:--------|:-----|:----|:----|
| **Allow Let's Encrypt to issue** | `example.com / 0 / issue / "letsencrypt.org"` | `example.com. CAA 0 issue "letsencrypt.org"` | Only allows Let's Encrypt to issue single-name and non-wildcard certificates for `example.com` and its subdomains (unless overridden). |
| **Allow both Let's Encrypt and Sectigo** | `example.com / 0 / issue / "sectigo.com"<br>example.com / 0 / issue / "letsencrypt.org"` | `example.com. CAA 0 issue "sectigo.com"<br>example.com. CAA 0 issue "letsencrypt.org"` | Allows either Sectigo or Let's Encrypt to issue single-name and non-wildcard certificates. If any other CA attempts to issue, it should be denied. |
| **Specific wildcard authority** | `example.com / 0 / issue / "letsencrypt.org"<br>example.com / 0 / issuewild / "sectigo.com"` | `example.com. CAA 0 issue "letsencrypt.org"<br>example.com. CAA 0 issuewild "sectigo.com"` | Allows Let's Encrypt to issue single-name certs. Specifically allows Sectigo to issue wildcard certificates. For wildcard requests, `issuewild` overrides `issue`. |
| **Specific validation method for Let's Encrypt** | `example.com / 0 / issue / "letsencrypt.org;validationmethods=dns-01"` | `example.com. CAA 0 issue "letsencrypt.org;validationmethods=dns-01"` | Allows Let's Encrypt to issue single-name certificates for `example.com`, but only if the `dns-01` validation method is used. |
| **Request notification of violations by email** | `example.com / 0 / iodef / "mailto:security@example.com"` | `example.com. CAA 0 iodef "mailto:security@example.com"` | Requests CAs to send incident reports to the specified email address if they detect policy violations (e.g., an unauthorized certificate request). |
| **Disallow all domain name cert issuance** | `example.com / 0 / issue / ";"` | `example.com. CAA 0 issue ";"` | Explicitly prevents any Certificate Authority from issuing single-name or non-wildcard certificates for this domain or its subdomains. |
| **Disallow all S/MIME cert issuance** | `example.com / 0 / issuemail / ";"` | `example.com. CAA 0 issuemail ";"` | Explicitly prevents any Certificate Authority from issuing S/MIME certificates for this domain or its subdomains (as per RFC 9495). |
| **Disallow all certificate issuance** | `example.com / 0 / issue / ";"<br>example.com / 0 / issuewild / ";"<br>example.com / 0 / issuemail / ";"`| `example.com. CAA 0 issue ";"<br>example.com. CAA 0 issuewild ";"<br>example.com. CAA 0 issuemail ";"` |

## Quotes and special characters in CAA values
- **Double quotes/backslashes**: If your CA or provider gives you a CAA record value with double quotes around the entire string, or backslashes before semi-colons (e.g., `";"` or `k=rsa\;`), you can safely remove them when entering the value into DNSimple's content field. DNSimple's name servers handle these automatically.
- **Other characters**: Do not modify forward slashes or other unusual characters that are part of the legitimate value string (e.g., within a `validationmethods` parameter or an `iodef` URL).

## References
[RFC 8659](https://datatracker.ietf.org/doc/html/rfc8659): CAA Resource Record for DNS (primary specification for CAA records).
[RFC 9495](https://datatracker.ietf.org/doc/html/rfc9495): Mail Certification Authority Authorization (Mail CAA) (specifics for `issuemail` tag).

## Have more questions?
If you have additional questions or need any assistance with your CAA records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
