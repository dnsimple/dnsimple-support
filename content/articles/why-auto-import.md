---
title: Why You Should Auto-Import DNS Records
excerpt: Auto-import your DNS records to reduce the risk of downtime and save significant time when migrating your DNS records.
meta: Discover why you should auto-import DNS records when transferring or hosting your domain. Reduce downtime, save time, and improve accuracy during DNS migration.
categories:
- DNS
---

# Why You Should Auto-Import DNS Records

Auto-importing DNS records is a powerful feature designed to make the process of transferring your domain or hosting its DNS with DNSimple as simple and seamless as possible. This feature reduces the risk of downtime and saves significant time when migrating your DNS records.

Instead of manually recreating every single record one-by-one (a process that can be tedious, time-consuming, and prone to human error), auto-importing allows DNSimple to scan and import your existing records for you automatically.

<note>
Auto-importing is a feature available on certain [DNSimple plans](https://dnsimple.com/pricing).
</note>

## Key Benefits of auto-importing

- **Reduces downtime:** The most critical benefit of auto-importing is minimizing or eliminating [downtime](https://support.dnsimple.com/articles/before-transferring-domain/). Quickly and accurately importing all existing records ensures your domain continues to function correctly, without interruption, during the DNS hosting transition.
- **Saves time and effort:** Manually recreating a DNS zone with dozens or even hundreds of records is a monumental task. Auto-importing automates this process, letting you set up your domain in minutes rather than hours.
- **Increases accuracy:** Manual entry is a common source of errors, like typos in IP addresses, hostnames, or text strings. The auto-import tool eliminates these risks by accurately replicating your existing records.
- **Simplifies complex records:** Auto-importing is particularly useful for complex or long records, like [TXT](https://support.dnsimple.com/articles/txt-record/) records for [DKIM](https://support.dnsimple.com/articles/dkim-record/), [DMARC](https://support.dnsimple.com/articles/dmarc-record/), or [SPF](https://support.dnsimple.com/articles/spf-record/), which can be difficult to copy and paste without error.

## How it works

Auto-import is an integrated part of the domain management process. We prompt you to [auto-import DNS records](/articles/auto-import-dns/) when a domain transfer is about to start or when you're adding a domain for DNS management. The tool scans your domain and imports common record types, including [`A`](/articles/a-record/), [`AAAA`](/articles/aaaa-record/), [`CNAME`](/articles/cname-record/), [`MX`](/articles/mx-record/), and [`TXT`](/articles/txt-record/)`. You also have the option to trigger the auto-import process at any time from the [Record Editor](/articles/record-editor/).

If a record conflicts with an existing record on your domain, we'll prompt you to confirm which record to keep. By default, we will not override your existing records.

## Have more questions? 
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

