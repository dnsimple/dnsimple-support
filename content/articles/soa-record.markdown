---
title: What is a SOA Record?
excerpt: 
categories:
- DNS
---

# What is a SOA Record?

An SOA record is a Start of Authority. Every domain must have a Start of Authority record at the cutover point where the domain is delegated from its parent domain. For example if the domain mycompany.com is delegated to DNSimple's [DNS servers](../dnsimple-nameservers/), we must include an SOA record for the name mycompany.com in our authoritative DNS records. We add this record automatically for every domain that is added to DNSimple and we show this record to you as a System Record in your domain's Manage page.

Here is an example of the content from an SOA record:

    ns1.dnsimple.com admin.dnsimple.com 2013022001 86400 7200 604800 300

The SOA record includes the following details:

- The primary name server for the domain, which is ns1.dnsimple.com or the first name server in the vanity name server list for vanity name servers.
- The responsible party for the domain, which is admin.dnsimple.com.
- A timestamp that changes whenever you update your domain.
- The number of seconds before the zone should be refreshed.
- The number of seconds before a failed refresh should be retried.
- The upper limit in seconds before a zone is considered no longer authoritative.
- The negative result TTL (for example, how long a resolver should consider a negative result for a subdomain to be valid before retrying).

For the moment, these values cannot be configured by you.
