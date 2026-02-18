---
title: Domain Transfer Code Reference
excerpt: The formal structure, requirements, and key technical details of domain transfer codes.
meta: Learn more about the structure, requirements, and technical details for domain transfer codes (authorization codes).
categories:
- Domains and Transfers
---

# Domain Transfer Code Reference

This article serves as a reference for the formal structure, requirements, and key technical details of domain transfer codes.

## Transfer code overview

A transfer code (also called authorization code, auth code, or auth info) is a unique code required to authorize the transfer of a domain name from one registrar to another. The use of a transfer code is a common procedure for most TLDs, including all generic top-level domains (gTLDs) such as `.COM`, `.NET`, and `.ORG`.

## Transfer code terminology

Transfer codes are known by several names, all referring to the same concept:

- **Transfer code:** The most common term used at DNSimple
- **Authorization code:** The formal ICANN term
- **Auth code:** A shortened form of authorization code
- **Auth info:** An alternative term used by some registrars
- **EPP code:** Extended Provisioning Protocol code, the technical protocol term

## Transfer code format

**Character composition:** Transfer codes typically consist of alphanumeric characters (letters and numbers). The exact format and length vary by registrar and TLD.

**Length:** Transfer codes are typically between 6 and 32 characters long, though the exact length depends on the registrar and TLD.

**Case sensitivity:** Transfer codes are usually case-sensitive. You must enter the code exactly as provided, including any uppercase or lowercase letters.

**Special characters:** Some transfer codes may include hyphens or other special characters. Enter the code exactly as provided, including any special characters.

## When transfer codes are required

**Most gTLDs:** Transfer codes are required for all generic top-level domains (gTLDs), including `.COM`, `.NET`, `.ORG`, `.INFO`, and many others.

**Some ccTLDs:** Many country-code top-level domains (ccTLDs) also require transfer codes, though some have different transfer procedures.

**TLD-specific exceptions:** Some TLDs, such as `.UK`, have different transfer procedures that don't require an authorization code. For TLD-specific information, check the [list of TLDs supported by DNSimple](https://dnsimple.com/tlds) or contact support.

## Obtaining a transfer code

### When transferring a domain to DNSimple

To obtain a transfer code from your current registrar:

1. Log in to your account at your current registrar
2. Navigate to your domain management page
3. Unlock your domain (if it's locked)
4. Request the authorization code or transfer code
5. The code will typically be sent to the registrant email address via email

The exact process varies by registrar. Some registrars provide the code immediately in the domain management interface, while others send it via email.

### When transferring a domain away from DNSimple

To obtain a transfer code from DNSimple:

1. Log in to your DNSimple account
2. Navigate to the domain you want to transfer
3. Click **Transfer Out** in the registration section
4. The domain will be unlocked and the transfer code will be sent to the registrant email address within 6 hours

For step-by-step instructions, see [Transferring a domain away from DNSimple](/articles/transferring-domain-away/).

## Transfer code delivery

**Email delivery:** Transfer codes are typically sent via email to the registrant email address on file for the domain. The email may come from the registrar directly or from a third-party service provider.

**Delivery time:** At DNSimple, transfer codes are sent within 6 hours of requesting them. Do not click the request button more than once, as this slows down the delivery process.

**Email addresses:** Transfer codes are sent from addresses such as:
- `donotreply@name-services.com`
- `support@dnsimple.com`
- Other registrar-specific addresses

**Spam folder:** If you don't receive the transfer code, check your spam folder. Consider adding these email addresses to your trusted contacts to ensure optimal delivery.

## Transfer code security

**Confidentiality:** Transfer codes are sensitive and should be kept confidential. Only share the transfer code with the registrar where you're transferring the domain.

**Validity period:** Transfer codes typically remain valid for a limited time, though the exact validity period varies by registrar and TLD. If a code expires, you can request a new one.

**One-time use:** Some transfer codes may be single-use only. If a transfer fails, you may need to request a new code.

**Resending codes:** If you requested a transfer code and haven't received it within the expected time frame, you can request it again. However, avoid requesting it multiple times in quick succession, as this may delay delivery.

## Using a transfer code

**During transfer initiation:** When initiating a domain transfer, you'll be prompted to enter the transfer code. Enter the code exactly as provided, including any uppercase or lowercase letters and special characters.

**Code validation:** The gaining registrar will validate the transfer code with the losing registrar before proceeding with the transfer. If the code is incorrect or invalid, the transfer will be rejected.

**Transfer approval:** After entering the transfer code, you may need to approve the transfer request via email. The transfer cannot proceed without approval.

## Troubleshooting transfer codes

**Code not received:** If you haven't received a transfer code within the expected time frame:
1. Check your spam folder
2. Verify the registrant email address is correct and accessible
3. Wait the full expected time (6 hours for DNSimple)
4. Request the code again if necessary
5. Contact support if the issue persists

**Invalid code:** If a transfer code is rejected as invalid:
1. Verify you entered the code correctly, including case sensitivity
2. Check if the code has expired
3. Request a new code if necessary
4. Contact support for assistance

**Code expired:** If a transfer code has expired, request a new one from the losing registrar. The process for requesting a new code is the same as requesting the original code.

## TLD-specific considerations

**Special procedures:** Some TLDs have different transfer procedures that don't require a transfer code. For example, `.UK` domains use a different transfer process.

**Regulated TLDs:** Some regulated TLDs may have additional requirements or restrictions related to transfer codes. For more information, see [Regulated Top-Level Domains](/articles/tlds-regulated/).

## Have more questions?

If you have additional questions or need any assistance with transfer codes, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
