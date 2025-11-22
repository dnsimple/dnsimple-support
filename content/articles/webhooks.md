---
title: Webhooks and API Events
excerpt: This article describes the DNSimple API webhook service delivery and management.
meta: Discover how to effectively manage and deliver webhooks with DNSimple's API. Learn to integrate real-time updates for your applications seamlessly.
categories:
- API
- Enterprise
---

# Webhooks and API Events

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple uses webhooks to deliver notifications via HTTP regarding changes or events in your account.

For more technical information, visit the [Webhook and Events section](https://developer.dnsimple.com/v2/webhooks/events/) in our API documentation.

## Managing Webhook recipients

1. Navigate to your account page.
2. Click the **Webhooks** tab on the left side.

This displays all the URLs where DNSimple publishes the events that happen in your account.

## Adding a recipient

1. Click **Add** to add a new recipient.
    ![screenshot of link to manage webhooks](/files/webhooks-link.png)
1. Enter the URL.
1. Click **Add Webhook** to add the recipient.
    ![Add the URL and save it](/files/webhooks-add-url.png)

You'll be redirected to the Webhooks section. The new webhook recipient will appear on the list of all webhooks.
![Screenshot of removing a webhook](/files/webhooks-list.png)

## Removing a recipient

You can remove a recipient by clicking **Delete**.
![delete a webhook](/files/webhook-delete.png)

## Clearing suppression

Sometimes a webhook delivery fails. If an endpoint cannot be reached, the delivery is retried. If it keeps failing, the recipient will be marked as *Suppressed*, and no more events will be sent.

When there are suppressed recipients, an alert message appears. A red exclamation point next to a webhook indicates there's an issue and that the webhook is suppressed.

![Suppressed recipients](/files/webhooks-clear-suppression.png)

Click **Clear Suppression** to clear the suppression and allow the recipient to receive events again.

## Have more questions?

If you have additional questions or need any assistance, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
