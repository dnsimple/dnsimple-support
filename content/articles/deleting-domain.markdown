---
title: Deleting a Domain
excerpt: How to delete a domain from a DNSimple account.
categories:
- Domains
---

# Deleting a Domain

<warning>
You should not delete an active domain registered or resolved with DNSimple.
</warning>

Considerations before deleting a domain:

You should not delete an active domain registered or resolving with DNSimple. Deleting a domain in your account will not remove or cancel your domain registration.

If you no longer require this domain, you will have to wait for it to expire to remove yourself as the owner.

Deleting a domain from your DNSimple account also removes all records of this domain. Once the domain has been deleted we will not be able to assist in recovering any of the records. They are deleted completely from our system.


<div class="section-steps" markdown="1">
##### To delete a domain

1.  Log in to DNSimple with your user credentials.
1.  Select the relevant domain from the Dashboard
1.  On the tabs to the left, click <label>Settings</label>.

    ![Settings tab](/files/settings-tab.png)

1.  The last card on the page lets you delete the domain.

    ![Delete domain](/files/delete-domain.png)

</div>

When a domain is hosted, DNSimple will stop resolving DNS for the domain.

If the domain is resolved with DNSimple, we will immediately stop resolving it, and the records will be removed according to their TTL.

