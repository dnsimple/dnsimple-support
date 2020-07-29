---
title: What's an SOA Record?
excerpt: What an SOA record is and how to add SOA records in DNSimple.
categories:
- DNS
---

# SOA Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What's an SOA record?

An SOA record is a Start of Authority. Every domain must have a Start of Authority record at the cutover point where the domain is delegated from its parent domain. For example, if the domain mycompany.com is delegated to DNSimple [name servers](/articles/dnsimple-nameservers/), we must include an SOA record for the name mycompany.com in our authoritative DNS records. We add this record automatically for every domain added to DNSimple. We show this record to you as a System Record on your domain's Manage page.

Here's a content example from an SOA record:

    ns1.dnsimple.com admin.dnsimple.com 2013022001 86400 7200 604800 300

The SOA record includes the following details:

HELLO EDITS 

- The primary name server for the domain, which is ns1.dnsimple.com or the first name server in the vanity name server list.
- The responsible party for the domain: admin.dnsimple.com.
- A timestamp that changes whenever you update your domain.
- The number of seconds before the zone should be refreshed.
- The number of seconds before a failed refresh should be retried.
- The upper limit in seconds before a zone is considered no longer authoritative.
- The negative result TTL (for example, how long a resolver should consider a negative result for a subdomain to be valid before retrying).

You can't configure these values me. 
