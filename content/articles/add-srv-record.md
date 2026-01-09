---
title: Adding an SRV Record
excerpt: How to add an SRV record in DNSimple.
meta: Step-by-step guide to adding SRV records in DNSimple. Learn how to configure service location records for VoIP, messaging, and other services.
categories:
- DNS
---

# Adding an SRV record

To add an SRV record in DNSimple:

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the relevant domain.
1. Click the DNS badge at the top right to access the **Record Editor**.
1. Click **Add record**.
1. From the record type dropdown, select **SRV**.
1. Fill out the SRV record form with the required details.
1. Click **Add Record** at the bottom of the page to save it.

> [!NOTE]
> After the record is added, you'll be returned to the Domain List, and a banner will confirm the record was successfully added.

Example SRV record form:
![Add SRV record](/files/srv-record.png)

The given example results in this SRV record:
```
_sip._tcp.example.com. 3600	IN	SRV	10 20 5000 sip-server.example.com.
```

## Have more questions?
If you have additional questions or need any assistance with your SRV records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
