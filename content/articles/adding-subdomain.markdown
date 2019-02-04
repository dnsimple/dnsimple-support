---
title: Adding a Subdomain
excerpt: How to add a subdomain to a DNSimple account.
categories:
- Domains
---

# Adding a Subdomain

A subdomain is, technically speaking, a DNS record for a hostname that belongs to your domain. To add a subdomain, just use our [DNS record editor](/articles/record-editor) and create the DNS record corresponding to the subdomain.

<div class="section-steps" markdown="1">
##### To add a subdomain

1.  Log in to DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header, click the <label>Domains</label> tab.
1.  Locate the relevant domain and click on the name to access the domain page.
1.  Click on the <label>DNS</label> tab and scroll to the record card (or quickly jump to the DNS records for that domain by clicking the button in the top right).

    ![Access DNS records](/files/example-domain-manage.png)

1.  From there, click the <label>Add record</label> drop-down button, and select the type of record you want to create. [`A`, `ALIAS`, and `CNAME` records](/articles/differences-between-a-cname-alias-url) will all create a new subdomain.

    ![Custom Records](/files/example-domain-dns.jpg)

    That will take you the advanced editor where you can add the records for the subdomain.

1.  To add a subdomain, just fill in the subdomain in the Name field. For example, `www` would be the subdomain `www.example.com`.

    ![Add Record](/files/add-a-record.png)
</div>
