---
title: DNSSEC Management in DNSimple
excerpt: An illustrated guide to DNSSEC management in DNSimple.
meta: Learn how to effectively manage DNSSEC in DNSimple with our comprehensive illustrated guide, ensuring your domain's security and integrity with ease.
categories:
- DNSSEC
---

# DNSSEC Management in DNSimple

<note> DNSSEC is applied on a per-domain basis. </note>

![DNSSEC tab](/files/DNSSEC-tab-reference.png)

1. **DNSSEC tab** - DNSSEC management options for the domain.
2. **Enable DNSSEC button in the DNSSEC card** - Enable DNSSEC for the domain. 

## Enable DNSSEC

![Enable DNSSEC](/files/DNSSEC-enable-reference.png)

1. **Manage DS Records**  - Manage DS records for domains not resolving with DNSimple.
2. **Continue button** - Goes to options to have DNSimple fully manage the domain DNSSEC. 

<information> When DNSSEC is enabled, a DNSSEC tag is listed in the Domain Names list.</information>

### Add DS Record For Domain Not Delegated to DNSimple

![Add DS Record button](/files/DNSSEC-DS-record-add-button-reference.png)

1. **Add DS Record button** - Add a DS record.

![Add DS Record page](/files/DNSSEC-DS-record-add-page-reference.png)

1. **Algorithm** - Choose algorithm type for the DS record.
2. **Keytag** - Enter KeyTag number.
3. **Digest Type** - Select the digest type for the DS record.
4. **Digest** - Enter the digest provided by your current DNS provider.
5. **Public Key** - Enter the public key of the Key-Signing Key (KSK) of your zone signing configuration.
6. **Add DS Record button** - Adds the DS record to DNSimple for the domain.

### Enable Fully Managed DNSSEC

![Fully Managed Reference](/files/DNSSEC-fully-managed-reference.png)

1. **Continue button** - Goes to options to have DNSimple fully manage the domain DNSSEC.
2. **Enable DNSSEC button** - Enables fully managed DNSSEC.
3. **Change Delegation button** - Only available if the domain is not delegated to DNSimple.
4. **Manage DS Records button** - Used to manage DS Records when the domain is using another DNS provider.

### Enabling DNSSEC

![Enabling DNSSEC reference](/files/DNSSEC-enabling-page-reference.png)

1. **Enabling Notification** - Notification that DNSSEC is being enabled.
2. **We're Enabling DNSSEC on (domain) Card** - Status card for DNSSEC.
3. **Refresh page button** - Refreshes page and status.

![DNSSEC Enabled](/files/DNSSEC-enabled-reference.png)

1. **DNSSEC is Enabled on (domain) Card** - Shows DNSSEC is enabled on domain.
2. **Disable DNSSEC Button** -  Disables DNSSEC on the domain.

## Disable DNSSEC

After clicking on the **Disable DNSSEC button** in the Disable DNSSEC card, you will start the process of disabling DNSSEC. 

![Confirm Disable](/files/DNSSEC-disable-confirm-reference.png)

1. **Confirm**- Confirm the deletion of the DNSSEC configuration on the domain.
2. **Disable DNSSEC button** - Disables DNSSEC on the domain.

### Disabling DNSSEC

![Disabling DNSSEC](/files/DNSSEC-disabling-reference.png)

1. **Disabling Notification** - Notification that DNSSEC is being disabled.
2. **We're Disabling DNSSEC on (domain) Card** - Status card for DNSSEC.
3. **Refresh page button** - Refreshes page and status. 

## Have more questions? 
If you have any questions or need assistance with your DNSSEC management, [contact support](https://dnsimple.com/feedback), and we’ll be happy to help.

