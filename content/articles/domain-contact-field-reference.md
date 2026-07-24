---
title: Domain Contact Field Reference
excerpt: Which domain contact fields are required, their maximum lengths, and the formats DNSimple accepts.
meta: Reference for DNSimple domain contact fields: which are required, their maximum lengths, and accepted formats for phone numbers and country codes.
categories:
- Contacts
---

# Domain Contact Field Reference

### Table of Contents {#toc}

* TOC
{:toc}

---

Every domain contact in DNSimple has the same set of fields. Most are required, several have maximum lengths that are shorter than customers expect, and two have formats that must match a standard. This page lists them all.

For how to create and edit contacts, see [Managing Your Contacts](/articles/contact-management/).

## Field requirements {#fields}

| Field | Required | Maximum length | Notes |
|-------|----------|----------------|-------|
| First name | Yes | 60 | |
| Last name | Yes | 60 | |
| Organization name | No | - | If set, job title becomes required |
| Job title | Only with an organization | 60 | |
| Email address | Yes | 128 | Stored in lowercase |
| Phone | Yes | 20 | Must be a valid E.164 number |
| Fax | No | 20 | Must be a valid E.164 number if provided |
| Address line 1 | Yes | 60 | |
| Address line 2 | No | 60 | |
| City | Yes | 60 | |
| State or province | Yes | 60 | |
| Postal code | Yes | 16 | |
| Country | Yes | - | Must be a valid ISO 3166 country code |
| Label | No | - | Used to tell similar contacts apart |

## Fields that depend on other fields {#dependencies}

**Job title is required only when an organization name is present.** If you register domains as an individual, leave both blank. If you enter an organization name, you must also enter a job title.

## Format requirements {#formats}

**Phone and fax numbers must be in E.164 format.** E.164 is the international standard: a plus sign, the country code, then the subscriber number, with no spaces, dashes, or parentheses. For example, `+15551234567` rather than `(555) 123-4567`.

**Country must be a valid ISO 3166 code.** The contact form presents this as a country picker, so you do not normally enter the code by hand.

## How values are stored {#normalization}

DNSimple normalizes contact values on save:

- Leading and trailing whitespace is removed from every text field
- Email addresses are converted to lowercase
- Country codes are converted to uppercase

A field containing only spaces is treated as blank, so it will not satisfy a required field.

## How contacts are displayed {#display}

A contact displays by its label when one is set, and by first and last name otherwise. Labels are useful when the same person appears as a contact more than once, for example a personal contact and a company contact with the same name.

## What is not a contact field {#extended-attributes}

**Extended attributes are not contact fields.** Some TLDs require additional registry-specific information, such as a registrant type or a local tax identifier. These are collected during registration and during a registrant change, they vary by TLD, and they are not stored on the contact itself. Domains using [domain trustee](/articles/what-is-domain-trustee/) show only the extended attributes that still apply for that trustee configuration.

## Have more questions?

If you have any questions about domain contact fields, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
