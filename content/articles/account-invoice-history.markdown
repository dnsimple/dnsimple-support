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

You can view your payment history and manually retry failed invoices in DNSimple.

## View account invoice history {#viewing}

<div class="section-steps" markdown="1">
##### To view an account's invoice history

1. On the top right menu, choose the account you want to see the invoice history for.

    ![Account settings link](/files/account-settings-access.jpg)

1. Scroll down to the <label>Invoices</label> section and click on <label>View all</label>. You can also view your last invoice directly by clicking on the last invoice section.

    ![Invoice History Link](/files/account-billing-view-invoice-history-link.png)
</div>

## Payment states

Your invoices may be in certain states depending on different circumstances:

### `open` {#invoice-state-open}

An invoice in an `open` state is being prepared by our systems and is not ready for collection yet. It's unlikely that you'll see open invoices, as they only remain in this state for short periods of time.

### `collected` {#invoice-state-collected}

When an invoice has been paid for, it'll be in the `collected` state.

### `failed` {#invoice-state-failed}

When you make a purchase, like a domain registration or an SSL certificate, and we're unable to collect the payment, we'll notify you via email. The invoice will be marked as `failed`.

While the invoice is in this state, you won't be able to make other purchases. You can [retry the payment](#retrying) yourself, and our systems will also try to collect it every few hours.

### `dunned` {#invoice-state-dunned}

Depending on your plan, your subscription will renew every month or every year. When that happens, we attempt to collect the payment. If it fails, the invoice will be marked as `dunned`.

A `dunned` invoice will be retried every day. We'll notify you via email on every attempt.

<warning>
If we're unable to collect the payment after a certain period of time, your account will be cancelled. All the domains within the account will stop resolving immediately.
</warning>

### `needs_review` {#invoice-state-needs-review}

Sometimes an error occurs while collecting a payment, and our system is not able to verify whether the invoice has been paid or not. If this happens, the invoice will be flagged for manual review, putting it in the `needs_review` state. A member of the DNSimple team will manually verify whether the payment was collected or not.

<note>
If you have an invoice in this state for more than a day, please [contact us](https://dnsimple.com/contact) so we can sort it out for you.
</note>

### `refunded` {#invoice-state-refunded}

The payment for this invoice was collected and then money was returned to you for some reason. When this happens, we mark the corresponding invoice as `refunded`.

### `cancelled` {#invoice-state-cancelled}

An invoice in the `cancelled` state means you no longer have to pay it.

## Retry failed payments {#retrying}

While our system occasionally retries failed invoices automatically, you may want to manually retry your own invoices. The steps are as follows:

<div class="section-steps" markdown="1">
##### To retry a failed invoice

1. Access your [account's invoice history](#viewing).
1. Locate failed invoices in your history. They're highlighted in red.
1. Click the retry button on your failed invoice.

    ![Retry Button](/files/account-billing-retry-button.png)
</div>

<info>
It's possible the retry won't succeed, or the invoice will enter a "needs review" state. If you have repeated trouble retrying an invoice, or have an invoice enter the "Needs Review" state, please [contact us](https://dnsimple.com/contact) with details about the issue.
</info>
