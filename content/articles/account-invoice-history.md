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

Account owners can view an account's payment history and manually retry failed invoices in DNSimple.

## Viewing account invoice history {#viewing}

<div class="section-steps" markdown="1">
##### To view an account's invoice history

1. On the dashboard, choose the account you want to see the invoice history for.

1. Click **Account** at the top right, then click the **Billings and plans** tab on the left side. 

1. Scroll down to the <label>Invoices</label> section and click on <label>View all</label>. You can also view your last invoice directly by clicking **View** in the **Last Invoice** section.

    ![Invoice History Link](/files/account-billing-view-invoice-history-link.png)
</div>

## Payment states

Your invoices may be in certain states depending on different circumstances:

### `open` {#invoice-state-open}

An invoice in an `open` state is being prepared and isn't ready for collection yet. It's unlikely that you'll see open invoices, as they only remain in this state for short periods of time.

### `collected` {#invoice-state-collected}

An invoice in the `collected` state indicates it has been paid.

### `failed` {#invoice-state-failed}

When you make a [purchase](/articles/understanding-invoice/#purchases), like a domain registration or an SSL certificate, and we're unable to collect the payment, we'll notify the account owner via email. The invoice will be marked as `failed`.

While the invoice is in this state, you won't be able to make other purchases. You can [retry the payment](#retrying) yourself, and our systems will also try to collect it every few hours.

### `dunned` {#invoice-state-dunned}

Depending on your plan, your subscription will renew every month or every year. When that happens, we attempt to collect the payment. If it fails, the invoice will be marked as `dunned`.

A `dunned` invoice will automatically be retried once per week for three weeks. You can manually [retry the payment](#retrying) any time. We'll notify you via email on every attempt.

<warning>
If we're unable to collect the payment after three weeks, your [account will be canceled](/articles/what-happens-if-i-stop-paying/). **All domains within the account will stop resolving immediately**. 
</warning>

### `refunded` {#invoice-state-refunded}

The payment for this invoice was collected and then returned. When this happens, we mark the corresponding invoice as `refunded`.

### `canceled` {#invoice-state-canceled}

An invoice in the `canceled` state means you no longer have to pay it.

## Retrying failed payments {#retrying}

While our system occasionally retries failed invoices automatically, you may want to manually retry your own invoices.

<div class="section-steps" markdown="1">
##### To retry a failed invoice

1. Access your [account's invoice history](#viewing).
1. Locate failed invoices in your history, highlighted in red.
1. Click the **retry** button on your failed invoice.

    ![Retry Button](/files/account-billing-retry-button.png)
</div>

## Have more questions? 

You can [contact our support team](https://dnsimple.com/feedback) any time with questions about your account invoice history — we're here to help. 
