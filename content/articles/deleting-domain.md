---
title: Deleting a Domain
excerpt: How to delete a domain from a DNSimple account.
meta: Learn the simple steps to delete a domain from your DNSimple account. Follow our guide for a smooth and hassle-free domain removal process.
categories:
  - Domains
---

# Deleting a Domain

<warning>
Do not delete an active domain registered or resolving with DNSimple. Deleting a domain in your account **will not** remove or cancel your domain registration.

Deleting a domain from your DNSimple account will permanently delete the records for the domain. This is irreversible and unrecoverable. If you unintentionally delete the domain, you will need to recreate the records.
</warning>

If the domain is registered with DNSimple, deleting the domain from your account will not delete the domain registration in the registry. Once a domain is registered, you can't remove ownership through registrar deletion. You have to wait for the domain to expire, or transfer it to a new owner.

When a domain is hosted, DNSimple will stop resolving DNS for the domain.

If the domain is resolved with DNSimple, we will immediately stop resolving it, and the records will be removed according to their TTL (Time To Live).

<div class="section-steps" markdown="1">
##### To delete a domain

1. If you have more than one account, select the relevant one.
1. On the header, click the <label>Domain Names</label> tab. Click the relevant domain name to access the domain page.
1. On the tabs to the left, click <label>Settings</label>.
   ![screenshot of deleting a domain](/files/domain-delete.png)

1. On the **Delete Domain** card, click **Delete Domain**.
   ![Delete domain](/files/delete-domain.png)

</div>

## Have more questions?

If you have any questions about deleting domains, [contact our support team](https://dnsimple.com/feedback), and we'll be happy to help.
