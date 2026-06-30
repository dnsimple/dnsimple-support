---
title: NIS2 Contact Email Verification
excerpt: Learn what NIS2 contact email verification is, how to complete it, and how it differs from ICANN registrant validation.
meta: NIS2 contact email verification at DNSimple confirms that the email address on a domain contact is valid. It is sent from support@dnsimple.com and, unlike ICANN registrant validation, does not cause domain suspension.
categories:
- Domains and Transfers
- Contacts
---

# NIS2 Contact Email Verification

### Table of Contents {#toc}

* TOC
{:toc}

---

NIS2 contact email verification confirms that you have access to the email address on a [domain contact](/articles/what-are-domain-contacts/). DNSimple sends it from `DNSimple <support@dnsimple.com>` with the subject "Action Required: Verify your contact email address." This verification is separate from the [ICANN registrant validation](/articles/icann-domain-validation/) that many domains also require, and it does not cause domain suspension.

## What NIS2 verification is {#what-it-is}

NIS2 refers to the EU [Network and Information Security Directive 2](https://nis2directive.eu/what-is-nis2/), which sets requirements for the accuracy of domain registration data. To meet these requirements, DNSimple verifies that the email address on a contact belongs to someone who can receive mail at it.

The verification applies to the contact's email address, not to a specific top-level domain. You may be asked to verify a contact even when the domain itself is not an EU domain. Once an email address is verified, that verified status applies wherever the contact is used.

A verified contact email is required to use that contact for domain registration, transfer, or change of ownership.

## When you receive a verification email {#when}

DNSimple sends a NIS2 verification email when the email address on a contact has not yet been verified. This commonly happens when you:

- Create a new contact during [domain registration](/articles/registering-domain/) or from the **Contacts** page.
- Update an existing contact to a new email address.

If you [change a domain contact](/articles/changing-domain-contact/) to one whose email is already verified, no new verification is required.

## What the verification email looks like {#email}

The email has these characteristics:

- **From:** `DNSimple <support@dnsimple.com>`
- **Subject:** Action Required: Verify your contact email address
- **Link:** a `https://dnsimple.com/email_verification/...` address unique to that contact email

The link is time-limited. The message states the exact date and time the link expires, so complete the verification before then. If you cannot find the email, check your spam folder.

## How to complete the verification {#complete}

<div class="section-steps" markdown="1">
##### Verify a contact email address

1. Open the verification email sent from `support@dnsimple.com`.
1. Click <label>Verify Email Address</label>, or copy the link into your browser.
1. Confirm the "Email Address Verified" page appears for the contact email.
</div>

If a domain still shows an "Email verification required" banner after you verify, click <label>Refresh</label> on the domain page to force DNSimple to fetch the latest status.

> [!NOTE]
> If the contact email was already verified, clicking the link sends you to your account settings with a message that verification has already been completed. That message refers to the contact email address, even though the page shown is your account settings. The verification is complete, and no further action is needed.

## NIS2 verification does not suspend your domain {#no-suspension}

If a contact email is not verified for NIS2, your domain is not suspended. An unverified contact email only limits using that contact for registration, transfer, or change of ownership. This is the main difference from [ICANN registrant validation](/articles/icann-domain-validation/), where failure to validate results in suspension of the domain after 15 days.

## How NIS2 verification differs from ICANN registrant validation {#vs-icann}

A domain can require both verifications at the same time. They come from different senders and satisfy different requirements.

| | NIS2 contact email verification | [ICANN registrant validation](/articles/icann-domain-validation/) |
|---|---|---|
| Requirement | EU NIS2 directive (registration data accuracy) | ICANN RDDS Accuracy program (RAA) |
| What it verifies | Access to the email address on a contact | The registrant email address for a domain |
| Sender | `support@dnsimple.com` | `noreply@emailverification.info` or `donotreply@name-services.com` |
| Link destination | `dnsimple.com/email_verification/...` | `emailverification.info` |
| If not completed | The contact cannot be used for registration, transfer, or ownership | Domain suspension after 15 days |

If you received two emails about the same domain, complete both. Verifying one does not satisfy the other.

## Have more questions?

If you need help completing NIS2 verification or are unsure which email to act on, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
