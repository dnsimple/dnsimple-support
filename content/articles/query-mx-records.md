---
title: Querying MX Records
excerpt: How to query MX records with DNSimple.
meta: Learn how to easily query MX records with DNSimple to ensure proper email delivery for your domain. Get started today!
categories:
- DNS
---

# Querying MX Records

You can use [`dig`](/articles/what-is-dig/) to determine the [MX records](/articles/mx-record/) associated with a domain name. For more detailed instructions on using `dig`, see [How to Use dig](/articles/how-dig/). For a quick reference of `dig` syntax and options, see the [dig Reference Guide](/articles/dig-reference-guide/). 

MX records specify the mail servers responsible for receiving email on behalf of the domain. The result is contained in the **ANSWER** section. 

It includes:

- The fully-qualified domain name (FQDN)
- The remaining [time-to-live (TTL)](/articles/what-is-ttl/)
- The priority
- The mail server hostname
  
## Have more questions? 
If you have additional questions or need any assistance with MX records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
