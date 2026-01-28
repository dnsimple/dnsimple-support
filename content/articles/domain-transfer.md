---
title: Transfer a Domain to DNSimple
excerpt: How to transfer your registered domain to DNSimple.
meta: Easily transfer your domain names to DNSimple with our step-by-step guide. Discover how to streamline the process while avoiding downtime.
categories:
- Domains
---

# Transfer a Domain to DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Transferring a domain name to DNSimple is the process of moving your [domain registration](https://dnsimple.com/tlds) to DNSimple. DNSimple will act as a domain registrar, and you will be able to manage your entire domain configuration in your DNSimple account.

## Before starting

> [!WARNING]
> To avoid the possibility of downtime, you should [point the name servers for the domain to DNSimple (or another provider) before you begin the transfer](/articles/before-transferring-domain/). This will prevent downtime and allow you to perform changes to the DNS records during the domain transfer. You should also [remove any existing DS records](/articles/ds-records-changing-dns/) from your domain if you are changing DNS providers.

## Limitations

- A domain can only be transferred if it was registered more than 60 days ago and has not been transferred within the last 60 days.
- It can take up to seven (7) days for a transfer to complete, depending on the domain's Top Level Domain (TLD). To learn more about how to avoid downtime during this period, check out [this article](/articles/before-transferring-domain/).
- Expired domains can be transferred as long as the domain is still in its grace period and has not entered the redemption period. This applies to ICANN generic top-level domains (gTLDs); country code TLDs (ccTLDs) may have different rules.
- WHOIS privacy services may prevent the proper delivery of the transfer approval email. You will need to **turn the WHOIS privacy service off before starting the transfer**.

## Initiating the transfer

### Preparing the transfer

At your current Registrar:

1. Unlock your domain.
2. Turn off the WHOIS privacy service.
3. Get your domain authorization code. This code is often sent by your current registrar via email.
4. Make sure you can receive emails at the email address specified for the current registrant of the domain. You may want to [check out how the domain looks in the public whois](https://dnsimple.com/whois) to verify.
   
### Starting the transfer

At DNSimple:

1. Click <label>Add</label> in the dashboard for the account you want the domain to be transferred to.
2. Select <label>Transfer domain</label>.
3. Enter the name of the domain that is being transferred and click **Start Transfer**.
4. Enter the authorization code.
5. Select a registrant if a contact has already been made. If not, fill in the information needed to create a contact.
6. Depending on the TLD, you may have to fill out extended attributes that are required. 
7. WHOIS Privacy Protection can be enabled by checking the **Hide my contact information in WHOIS** box, so it's enabled immediately upon completion of the transfer.
8. Auto renewal for the domain is automatically checked to be enabled. This can be disabled if desired by unchecking the box. If auto renewal is disabled, check out [how to renew a domain](/articles/renewing-domain/).
9. Click <label>Transfer [Domain name]</label>. The card on file will be charged.

If you **_do not_** have a subscription, click on **Continue to Payment** where you will enter payment details.

   ![payment details screen](/files/domain-payment-page.png)

If you have already made a purchase once without a subscription, your card details have been saved. You can choose to use the saved details or add a new card.

  ![saved card](/files/saved-card.png)


   <note> Item will show as the domain you are transferring on either screen. 
   </note>


## Approving the transfer

The domain transfer request will be issued if there are no missing fields. For most domain extensions, the current registrant will receive an email from `donotreply@name-services.com` to authorize the transfer.

Follow the instructions in the email. We cannot issue the transfer request to the registry without approval of this email.

Once you've authorized the transfer, you may have to **wait up to seven days for your domain transfer to complete.**

> [!NOTE]
> The total transfer price will be held on your card immediately.
> Your card will be charged once the transfer completes.
> If the transfer fails, funds will be released.

## Transfer status

You can go to your domain names list to check on the status of pending transfers. Click on "transfer in process" to view detailed information about the transfer request.

## Canceling the transfer

If the domain is still in the transfer process, you can cancel the transfer, and the domain won't be moved away from your current registrar. To do this, navigate to your domain. Under the "Transferring" card, click "View status", then "Cancel transfer".

## After the transfer

When the transfer is completed, you will receive a confirmation email from DNSimple. Congratulations! Your domain is now transferred to DNSimple, and you can manage it from your DNSimple account.

### Changing name servers

**We don't automatically point your domain to our name servers** when the transfer completes.

To avoid unexpected downtime and confusion, we don't change the domain name servers upon a successful transfer. When the domain is transferred to us, we will keep using the same name servers previously configured for the domain.

You can now decide to [point the domain to DNSimple name servers](/articles/delegating-dnsimple-registered/) in one click or [manually configure the name servers](/articles/setting-name-servers/).

> [!WARNING]
> We suggest pointing [your domain to our name servers before the transfer](/articles/before-transferring-domain/) to avoid downtime during the transfer. Some DNS providers will stop serving the DNS for the domain as soon as the transfer is completed.

### Expiration extension

Most transferred domains will have the minimum required extension period. For example, `.com` domains will always be extended by one year when they are transferred.

The price of this extension is included in the transfer fee for most TLDs. You can check to see if this applies to a specific TLD by looking it up on our [TLD page](https://dnsimple.com/tlds).

## Have more questions?

If you have any questions about transferring domains with DNSimple, [contact us](https://dnsimple.com/feedback), and we'll be happy to help.
