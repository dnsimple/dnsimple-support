---
title: Deleting a Domain
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
1.  On the tabs to the left, click <label>Admin</label>.
    ![Admin tab](/files/admin-tab.jpg)
1.  Scroll to the bottom of the page and click <label>Delete Domain</label>.
    ![Delete domain](/files/delete-domain.jpg)

</div>

When a domain is hosted, DNSimple will stop resolving DNS for the domain.

If the domain is resolved with DNSimple, we will immediately stop resolving it and the records will be removed according to their TTL.

<note>
If the domain is registered with DNSimple, deleting the domain from your account will not delete the domain registration in the registry. Once a domain is registered you can't delete it, you have to wait for the domain to expire.
</note>
