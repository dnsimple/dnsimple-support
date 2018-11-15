---
title: Adding a Subdomain
excerpt: How to add a subdomain to a DNSimple account.
categories:
- Domains
---

# Adding a Subdomain

A subdomain is, technically speaking, a DNS record for a hostname that belongs to your domain. In other words, to add a subdomain you simply need to use our [DNS record editor](/articles/record-editor) and create the DNS record corresponding to the subdomain.

<div class="section-steps" markdown="1">
##### To add a subdomain

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header, click the <label>Domains</label> tab.
1.  Locate the relevant domain and click on the name to access the domain page.
1.  Click on the <label>DNS</label> tab (or quickly jump to the DNS records for that domain by clicking the button in the top right).

    ![DNS Tab](/files/example-domain-manage.jpg)

1.  From there, click the <label>Add record</label> drop-down button, and select the type of record you wish to create. [`A`, `ALIAS`, and `CNAME` records](/articles/differences-between-a-cname-alias-url) will all create a new subdomain.

    ![Custom Records](/files/example-domain-dns.jpg)

    That will take you the advanced editor and you may add the records for the subdomain there.

1.  To add a subdomain, just fill in the subdomain in the Name field. For example, `www` would be the subdomain `www.example.com`.

    ![Add Record](/files/add-a-record.png)
</div>
