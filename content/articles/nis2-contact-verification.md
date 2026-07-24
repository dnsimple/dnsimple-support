---
title: NIS2 Contact Email Verification
excerpt: Learn what NIS2 contact email verification is, how to complete it, and how it differs from ICANN registrant validation.
meta: NIS2 contact email verification at DNSimple confirms a domain contact's email is valid. Unlike ICANN registrant validation, it does not suspend your domain.
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

## When verification is required {#when}

DNSimple requires verification when the email address on a contact has not yet been confirmed. This applies to the contact's email address itself, not to a specific top-level domain, so you may be asked to verify a contact even when the domain is not an EU domain. Once an email address is verified, that verified status applies wherever the contact is used.

A verified contact email is required to use that contact for domain registration, transfer, or change of ownership.

## What the verification email looks like {#email}

The email has these characteristics:

- **From:** `DNSimple <support@dnsimple.com>`
- **Subject:** Action Required: Verify your contact email address
- **Link:** a `https://dnsimple.com/email_verification/...` address unique to that contact email

The link expires 7 days after the verification email is sent. The message states the exact date and time it expires, so complete the verification before then. If you cannot find the email, check your spam folder.

## How to verify your contact email address {#verify}

<div class="section-steps" markdown="1">
##### Confirm the contact email

1. Open the verification email from `support@dnsimple.com`.
1. Click <label>Verify Email Address</label>, or copy the link into your browser.
1. Confirm the "Email Address Verified" page appears for the contact email.
</div>

## Resend the verification email {#resend}

If you did not receive the email, resend it from the contact's page.

<div class="section-steps" markdown="1">
##### Resend verification

1. Log into DNSimple.
1. On the header, click the <label>Contacts</label> tab.
1. Select the contact whose email needs verification.
1. In the <label>Verification pending</label> notice, click <label>Resend verification email</label>.
</div>

> [!NOTE]
> If the contact email was already verified, clicking the link sends you to your account settings with a message that verification has already been completed. That message refers to the contact email address, even though the page shown is your account settings. The verification is complete, and no further action is needed.

## If you cannot receive email at that address {#cannot-receive}

You must be able to receive mail at the contact email address to verify it. If the address is wrong or cannot receive email, [change the domain contact](/articles/changing-domain-contact/) to one with an email address you can access. A new verification is sent automatically for the updated email. If you still cannot complete verification, [contact support](https://dnsimple.com/feedback) with the affected domain name.

## NIS2 verification does not suspend your domain {#no-suspension}

If a contact email is not verified for NIS2, your domain is not suspended. An unverified contact email only limits using that contact for registration, transfer, or change of ownership. This is the main difference from [ICANN registrant validation](/articles/icann-domain-validation/), where failure to validate results in suspension of the domain after 15 days.

## How NIS2 verification differs from ICANN registrant validation {#vs-icann}

A domain can require both verifications at the same time. They come from different senders and satisfy different requirements.

| | NIS2 contact email verification | [ICANN registrant validation](/articles/icann-domain-validation/) |
|---|---|---|
| Requirement | EU NIS2 directive (registration data accuracy) | ICANN RDDS Accuracy program (RAA) |
| What it verifies | Access to the email address on a contact | The registrant email address for a domain |
| Sender | `support@dnsimple.com` | `noreply@emailverification.info` or `donotreply@name-services.com` |
| Where you act | The contact's page in DNSimple | The domain's page in DNSimple |
| If not completed | The contact cannot be used for registration, transfer, or ownership | Domain suspension after 15 days |

If you received two emails about the same domain, complete both. Verifying one does not satisfy the other.

## Have more questions?

If you need help completing NIS2 verification or are unsure which email to act on, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
