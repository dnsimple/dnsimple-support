---
title: Webhooks and API events
excerpt: This article describes the DNSimple API webhook service delivery and management.
categories:
- API
---

# Webhooks and API events

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple uses webhooks to deliver notification via HTTP regarding changes or events in your account.

For more technical information visit the [Webhook and Events section](https://developer.dnsimple.com/v2/webhooks/events/) in the API documentation.

## Managing Webhook recipients

To check your webhook recipients, log into your account and navigate to your account page.

Once you are there click on the <label>Automation</label> link in the left menu.

![Webhook listing](/files/webhooks-listing.png)

This shows all of the URL's where DNSimple publishes the events that happens in your account.

## Add a recipient

Click on the <label>New</label> link to add a new recipient.

![Add recipient](/files/webhooks-add-recipient.png)

You will be asked for an URL. After you've entered the URL, click on <label>Add Webhook</label> to add the recipient.

![Add the URL and save it](/files/webhooks-add-url.png)

Finally you will be redirected to the Automation section again and the new webhook will appear on the list of all the webhooks.

![Recipient added](/files/webhooks-recipient-added.png)

## Remove a recipient

You can also remove a token at any time by using the <label>Delete</label> button.

![Remove recipient](/files/webhooks-delete-recipient.png)

## Clear Suppression

Sometimes a webhook delivery fails. This may be due to a temporary error or more permanent problem. If an endpoint cannot be reached the delivery is retried, but if it keeps failing the recipient will be marked as *Suppressed* and no more events will be sent.

When there are recipients suppressed, an alert message appears and a red exclamation point next to a webhook indicates there is an issue and that the webhook is suppressed.

![Suppressed recipients](/files/webhooks-clear-suppression.png)

Click on the <label>Clear Suppression</label> button to clear the suppresion allowing the recipient to rececive events again.
