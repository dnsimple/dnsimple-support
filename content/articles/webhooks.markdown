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

DNSimple uses webhooks to deliver notifications via HTTP regarding changes or events in your account.

For more technical information, visit the [Webhook and Events section](https://developer.dnsimple.com/v2/webhooks/events/) in our API documentation.

## Managing Webhook recipients

To check your webhook recipients, log in to your account, and navigate to your account page.

Click on the <label>Automation</label> link in the left menu.

![Webhook listing](/files/webhooks-listing.png)

This shows all the URLs where DNSimple publishes the events that happen in your account.

## Adding a recipient

Click on the <label>New</label> link to add a new recipient.

![Add recipient](/files/webhooks-add-recipient.png)

You'll be asked for a URL. After you've entered the URL, click on <label>Add Webhook</label> to add the recipient.

![Add the URL and save it](/files/webhooks-add-url.png)

You'll then be redirected to the Automation section. The new webhook recipient will appear on the list of all webhooks.

![Recipient added](/files/webhooks-recipient-added.png)

## Removing a recipient

You can remove a recipient by using the <label>Delete</label> button.

![Remove recipient](/files/webhooks-delete-recipient.png)

## Clearing suppression

Sometimes a webhook delivery fails. This may be due to a temporary error or more permanent problem. If an endpoint cannot be reached, the delivery is retried. If it keeps failing, the recipient will be marked as *Suppressed*, and no more events will be sent.

When there are suppressed recipients, an alert message appears, and a red exclamation point next to a webhook indicates there's an issue and that the webhook is suppressed.

![Suppressed recipients](/files/webhooks-clear-suppression.png)

Click on the <label>Clear Suppression</label> button to clear the suppresion and allow the recipient to rececive events again.
