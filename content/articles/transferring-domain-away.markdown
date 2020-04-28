---
title: Transferring a domain away from DNSimple
excerpt: How to request a transfer code and transfer a domain from DNSimple to a different registrar.
categories:
- Domain Transfers
---

# Transferring a domain away from DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

This article describes the procedure to transfer a domain registered with DNSimple to another registrar. The term *gaining registrar* refers to the registrar where you want to transfer the domain, the *losing registrar* is the current registrar for the domain, in this case DNSimple.


## Before starting

<warning>
Once a domain transfer is started, you won't be able to change the name servers on the domain. If you want to change your name servers, you must change them before requesting your transfer at your new domain registrar.
</warning>

To transfer a domain to another registrar, the standard procedure requires you to:

1. Unlock the domain at DNSimple.
2. Request a transfer code from DNSimple.
3. Start the transfer at the gaining registrar.
4. Approve the transfer request.

The first two steps are handled at DNSimple. The other steps are the responsibility of the gaining registrar. We are unable to provide support for those steps.

The _transfer code_ (also called _authorization code_, _auth code_, or _auth info_) is required to authorize the transfer of a domain name. The use of a transfer code is a common procedure for most TLDs – including all the gTLDs, such as `.COM`, `.NET`, and `.ORG`.

Some TLDs have different transfer procedures:

- [.UK TLDs](/articles/domains-uk/#transfer-away)


## 1. Unlocking the domain and requesting a transfer code

You can prepare your domain for transfer out in a single step. This action will unlock the domain and send you the transfer code via email if necessary.

The transfer code is sent to the email listed as registrant (owner) for the domain. Before proceeding, [check the domain contact and update the email](/articles/changing-domain-contact/#updating-a-domain-contact) if it doesn't match an email you have access to.

<div class="section-steps" markdown="1">
##### Preparing the domain for transfer out

1.  Log in to DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header, click the <label>Domains</label> tab, locate the relevant domain, and click on the name to access the domain page.

1.  Go to the registration section and click <label>Transfer Out</label>

    ![Transfer out link](/files/domain-transfer-out-action.png)

    This will unlock the domain and, if necessary, email the transfer code to the domain registrant.
</div>

If you have requested a domain transfer out and have not received a transfer code, please [contact us](https://dnsimple.com/contact) and include your domain name in the email. We'll be happy to look into it and figure out why the transfer code has not arrived.


## 2. Starting the transfer at the gaining registrar

Once you have the transfer code, you need to start the transfer at the gaining registrar. Requesting the transfer code will not automatically initiate a transfer out.

Follow the gaining registrar's instructions to start a transfer, and enter the transfer code when requested.

DNSimple does not have access to this process. Contact the gaining registrar if you need help with this step.


## 3. Approving the transfer request

Depending on the TLD, the gaining registrar, the losing registrar, or both may send you an email to confirm the transfer request. Verify that the information in the request is correct (especially the name of the gaining registrar), and confirm the request.

After the transfer at the new registrar is initiated and the transfer code is provided, the transfer will be initiated at the Registry level. The registrar has 5 - 7 business days to release your domain(s). The transfer will automatically be approved at the end of this period. There's no way to speed this process along.

Once the transfer is approved, the domain(s) will now be with your new registrar, and no longer with DNSimple.
