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

## Before you start

<warning>
Once a domain transfer is started, you will not be able to change the name servers on the domain. If you want to change your name servers then you must change them before you request your transfer at your new domain registrar.
</warning>

To transfer a domain to another registrar the standard procedure requires you to:

1. unlock the domain at DNSimple
1. request a transfer code from DNSimple
1. start the transfer at the gaining registrar
1. approve the transfer request sent via email

The first two steps are handled at DNSimple. The other steps are the responsibility of the gaining registrar, and we are not able to provide support for them.

The _Transfer Code_ (also called _Authorization Code_, _Auth Code_) is a code required to authorize the transfer of a domain name. The use of a transfer code is a common procedure for most of TLDs, including all the gTLDs such as `.COM`, `.NET`, `.ORG`. However, some TLDs have different transfer procedures:

- [Extra policy for .UK TLDs](/articles/domains-uk/#transfer-away)


## Unlock the domain and request transfer code

You can prepare your domain for transfer out in a single step. The action will unlock the domain, and send you the transfer code via email if necessary.

The transfer code is sent to the email listed as registrant (owner) for the domain. Before proceeding, [check the domain contact and update the email](/articles/changing-domain-contact/#updating-a-domain-contact) if it doesn't match an email you have access to.

<div class="section-steps" markdown="1">
##### To prepare the domain for transfer out

1.  Log into DNSimple with your user credentials.
1.  If you have more than one account, select the relevant one.
1.  On the header click the <label>Domains</label> tab, locate the relevant domain and click on the name to access the domain page.

1.  Go to the registration section and click <label>Transfer Out</label>

    ![Transfer out link](/files/domain-transfer-out-action.png)

    This will unlock the domain and, if necessary, email the transfer code to the domain registrant.
</div>

If you have requested a domain transfer out and have not received a code then please [contact us](https://dnsimple.com/contact) and include your domain name in the email. We'll be happy to look into it and figure out why the code has not yet arrived.

