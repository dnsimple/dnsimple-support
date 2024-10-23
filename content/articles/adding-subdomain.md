---
title: Adding a Subdomain
excerpt: How to add a subdomain to a DNSimple account.
categories:
- Domains
---

# Adding a Subdomain

A subdomain is a DNS record for a hostname that belongs to your domain. To add a subdomain, use our [DNS record editor](/articles/record-editor), and create the DNS record corresponding to the subdomain.

<div class="section-steps" markdown="1">
##### To add a subdomain

1.  If you have more than one account, select the relevant one.
1.  On the header, click the <label>Domain Names</label> tab.
1.  Locate the relevant domain, and click on the name to access the domain page.
1.  Click the <label>DNS</label> tab, and scroll to the **DNS Records** card, or click the **DNS** badge at the top right to jump to the DNS records for that domain.

<!--- needs screenshot -->

1.  Click <label>Add record</label>, and select the type of record you want to create. [`A`, `ALIAS`, and `CNAME` records](/articles/differences-between-a-cname-alias-url) will all create a new subdomain.

<!--- needs screenshot -->

    Choose a record to open advanced editor where you can add the records for the subdomain.

1.  To add a subdomain, fill in the subdomain in the **Name** field. For example, `www` would be the subdomain `www.example.com`.

<!--- needs screenshot -->
</div>

## Have more questions?

If you have any questions or need assistance adding subdomains, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
