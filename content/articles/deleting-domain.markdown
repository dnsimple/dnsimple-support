---
title: Deleting a Domain
excerpt: How to delete a domain from your DNSimple account.
categories:
- Domains
---

# Deleting a Domain

<warning>
You should not delete an active domain registered or resolved with DNSimple.
</warning>

<div class="section-steps" markdown="1">
##### To delete a domain

1.  Log into your DNSimple account.
1.  On the top-nav menu click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.
1.  On the right sidebar, click <label>Delete Domain</label>.

    ![Delete a Domain](http://f.cl.ly/items/2Z3w1v0H3T1L062e0w1a/dnsimple-domain-delete.png)

</div>

When a domain is hosted, DNSimple will stop resolving DNS for the domain.

If the domain is resolved with DNSimple, we will immediately stop resolving it and the records will be removed according to their TTL.

<note>
If the domain is registered with DNSimple, deleting the domain from your account will not delete the domain registration in the registry. Once a domain is registered you can't delete it, you have to wait for the domain to expire.
</note>
