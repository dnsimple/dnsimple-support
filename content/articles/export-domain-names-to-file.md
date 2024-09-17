---
title: Exporting Domain Names to a .CSV File
excerpt: This article explains how to export domain names to a .CSV or .ZIP file.
categories:
- Domains
---

# Exporting Domain Names to a .CSV File

This article explains how to export your domain names into a .CSV list.

### Table of Contents {#toc}

* TOC
{:toc}

---

## How to export your domain names list as a .CSV file

1. Visit the Domain Names page for your account.
1. Click **Export** in the top right.
1. You should see a banner notification that your .CSV file is being generated and will be emailed to you when it's ready (less than 5 minutes).


![screenshot: how to export your domain names list as a .csv file](/files/export-domain-names-to-file.png)

<info>
If you have more than 10k domains in your account, you'll receive the attachment as a .ZIP file.
</info>

## What's in the .CSV file?

We include domain registration and DNS zone details in the exported file:

| Attribute | Description |
| --- | --- |
| **domain_name** | name of the domain|
| **labels** | labels that have been attached to the domain|
| **registration_state** | the current registration state|
| **registration_contact** | the current registration contact|
| **expiration_date** | the date the domain expires |
| **renew_by** | the date the domain must be renewed by |
| **auto_renews** | whether the domain auto-renews |
| **renewal_price** | the domain renewal price |
| **whois_privacy** | whether the registration has Whois privacy protection |
| **dnssec** | whether DNSimple manages the DNSSEC configuration|
| **registry_name_server_records** | the name servers listed at the registry |
| **zone_name_server_records** | the NS records for the zone (according to DNSimple) |
| **zone_active** | whether the zone is resolving |
| **reverse** | whether the zone is reverse or not |
| **has_secondary** | whether and which type of secondary zone |
| **zone_providers** | the integrated zone providers |
| **certificates_count** | the number of related certificates |
| **email_forwards_count** | the number of related email forwards |
