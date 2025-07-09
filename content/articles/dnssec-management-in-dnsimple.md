---
title: DNSSEC Management in DNSimple
excerpt: An illustrated guide to DNSSEC managment in DNSimple.
categories:
- DNSSEC
---

# DNSSEC Management in DNSimple

### Table of Contents {#toc}
* TOC
 {:toc}
---

DNSSEC is applied on a per-domain basis.

 ![screenshot of UI for applying DNSSec to a domain](/files/dnssec-per-domain.png)

1. **DNSSEC** tab - DNSSEC management options for the domain.
1. **Configure** in **Configure DNSSEC** card - Configure DNSSEC for the domain.
1. **Manage** in the **DS Records** card - Manage the DS Records for the domain.

## Configure DNSSEC

![screenshot of enable DNSSec button](/files/dnssec-configure.png)

1. **Enable DNSSEC** button - Turn on DNSSEC for the domain.

## Configured DNSSEC in Domain Names list

![screenshot of configuring DNSSEC in domains list](/files/dnssec-configure-domain-list.png)


1. When DNSSEC is configured, a **DNSSEC** tag is listed in the **Domain Names** list.

## View DNSSEC configuration

![screenshot of viewing DNSSEC configuration](/files/dnssec-view-config.png)

View Configuration in DNSSEC Configured card - View the domain's DNSSEC key set.

## Manage DS records

![screenshot of managing DS records](/files/dnssec-manage-ds-records.png)

1. **Add DS record** button - Add a DS record.
1. **DS record information** - Information related to the DS Record.
1. **Managed by DNSimple** - DS Record is managed by DNSimple. Not present when self-managed.

## Manage DS records when none are present

![screenshot of managing DS records when none present](/files/dnssec-manage-ds-records-empty.png)

1. **Add DS record** button - Add a DS record.

## Add DS record

### DS-Data Interface

![screenshot of managing DS records interactively](/files/dnssec-ds-records-interactive.png)


1. **DS-Data Interface** - Method for working with a DS record.
1. **Algorithm** - Choose algorithm type for the DS record.
1. **Keytag** - Enter KeyTag number.
1. **Digest Type** - Select the digest type for the DS record.
1. **Digest** - Enter the digest provided by your current DNS provider.
1. **Add DS record** button- Adds the DS record to DNSimple for the domain.

### KEY-Data Interface

![screenshot key data in a DS record](/files/dnssec-ds-record-keys.png)

1. **KEY-Data Interface** - Method used to manage the keys themselves (DNSKEY records).
1. **Algorithm** - Choose algorithm type for the DS record.
1. **Flags** - Choose the type of flag.
1. **Protocol** - Select the Protocol for the DS record.
1. **Public Key** - Enter the public key of the Key-Signing Key (KSK) of your zone signing configuration.
1. **Add DS record** button - Adds the DS record to DNSimple for the domain.

## Delete DS Record

![screenshot of dialog for deleting  DNSSEC](/files/dnssec-delete.png)


Click the **trash can** icon to delete the DS record.

![screenshot of confirmation for deleting DNSSEC](/files/dnssec-delete-confirm.png)


1. **Delete** button - Click to delete the DS record.

## Disable DNSSEC

![screenshot of disabling DNSSec](/files/dnssec-disable.png)


1. **Disable DNSSEC** button in **Disable DNSSEC** card - Start the process of disabling DNSSEC in DNSimple on the domain.

![screenshot of confirmation for disabling DNSSEC](/files/dnssec-disable-confirmation.png)


1. **Confirm** - Confirm the deletion of the DNSSEC configuration on the domain.
1. **Disable DNSSEC** button - Disables DNSSEC on the domain.

## Have more questions?
If you have any questions or need assistance with your DNSSEC management, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
