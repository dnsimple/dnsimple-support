---
title: Deleting a Domain
excerpt: How to delete a domain from a DNSimple account.
categories:
- Domains
---

# Deleting a Domain

<warning>
Please review these considerations before deleting a domain:

You should not delete an active domain registered or resolved with DNSimple. Deleting a domain in your account **will not** remove or cancel your domain registration.

Deleting a domain from your DNSimple account also removes all records of this domain. Once the domain has been deleted we will not be able to assist in recovering any of the records. They are deleted completely from our system.
</warning>

If the domain is registered with DNSimple, deleting the domain from your account will not delete the domain registration in the registry. Once a domain is registered you can't remove ownership through registrar deletion. You have to wait for the domain to expire, or transfer to a new owner.

When a domain is hosted, DNSimple will stop resolving DNS for the domain.

If the domain is resolved with DNSimple, we will immediately stop resolving it, and the records will be removed according to their TTL.


<div class="section-steps" markdown="1">
##### To delete a domain

1.  Log in to DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header, click the <label>Domains</label> tab, locate the relevant domain, and click on the name to access the domain page.
1.  On the tabs to the left, click <label>Settings</label>.

    ![Settings tab](/files/settings-tab.png)

1.  The last card on the page lets you delete the domain.

    ![Delete domain](/files/delete-domain.png)

</div>

When a domain is hosted, DNSimple will stop resolving DNS for the domain.

If the domain is resolved with DNSimple, we will immediately stop resolving it, and the records will be removed according to their TTL.
