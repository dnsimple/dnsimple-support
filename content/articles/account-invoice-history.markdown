---
title: Account Invoice History
excerpt: Using the payment history on your account and understanding the states of the listed invoices.
categories:
- Account
---

# Account Invoice History

### Table of Contents {#toc}

* TOC
{:toc}

---

It is possible to view your payment history and retry failed invoices manually in DNSimple.

## View Account Invoice History {#viewing}

<div class="section-steps" markdown="1">
##### To view account's invoice history

1. On the top right menu, choose the account that you want to see the invoice history for.

    ![Account settings link](/files/account-settings-access.jpg)

1. Scroll down to the <label>Invoices</label> section and click on <label>View all</label>. You can also view your last invoice directly by clicking on the last invoice section.

    ![Invoice History Link](/files/account-billing-view-invoice-history-link.png)
</div>

## Payment States

Your invoices may be in certain state depending on different circumstances. While what these states mean may be obvious some times it is worth a short explanation:

### `open` {#invoice-state-open}

An invoice in an `open` state is being prepared by our systems and is not ready for collection yet. It is unlikely that you see open invoices as they only remain in this state for very short periods of time.

### `collected` {#invoice-state-collected}

When an invoice has been paid for it will be in the `collected` state.

### `failed` {#invoice-state-failed}

When you make a purchase like a domain registration or an SSL certificate and we are not able to collect the payment for it you will be notified via email and the invoice will be marked as `failed`.

While the invoice is in this state you won't be able to make other purchases. Note that you will be able to [retry the payment](#retrying) yourself and our systems will also try to collect it every few hours.

### `dunned` {#invoice-state-dunned}

Depending of your plan your subscription will be renewed every month or every year. When that happens we attempt to collect the payment and if it fails the invoice will be marked as `dunned`.

A `dunned` invoice will be retried every day and you will get notified via email on every attempt.

<warning>
If we are unable to collect the payment after a certain period of time your account will be cancelled and all the domains within the account will stop resolving immediately.
</warning>

### `needs_review` {#invoice-state-needs-review}

Sometimes an error occurs while collecting a payment and our system is not able to verify whether the invoice has been paid for or not. If this happens the invoice will be flagged for manual review by putting it in the `needs_review` state. A member of the DNSimple team will manually verify whether the payment was collected or not.

<note>
If you have an invoice in this state for more than a day please [contact us](https://dnsimple.com/contact) so we can sort it out for you.
</note>

### `refunded` {#invoice-state-refunded}

The payment for this invoice was collected and then money was returned to you for some reason. When this happens we mark the corresponding invoice as `refunded`.

### `cancelled` {#invoice-state-cancelled}

An invoice in the `cancelled` state means that you no longer have to pay for it.


## Retry Failed Payments {#retrying}

While our system occasionally retries failed invoices automatically, it may make sense for you to manually retry your own invoices. The steps are as follows.

<div class="section-steps" markdown="1">
##### To retry a failed invoice

1. Access your [account's invoice history](#viewing).
1. Locate failed invoices in your history. They will be highlighted in red.
1. Click the retry button on your failed invoice.

    ![Retry Button](/files/account-billing-retry-button.png)
</div>

<info>
It is possible the retry will not succeed or the invoice will enter a "Needs Review" state. If you have repeated trouble retrying an invoice or have an invoice enter the "Needs Review" state, please [contact us](https://dnsimple.com/contact) with details about the issue.
</info>
