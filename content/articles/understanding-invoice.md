---
title: Understanding Your DNSimple Invoice
excerpt: A detailed explanation of DNSimple invoices.
meta: Discover everything you need to know about DNSimple invoices, including billing cycles, payment methods, and how to manage your account effectively.
categories:
- Account
- Enterprise
---

# Understanding Your Invoice

### Table of Contents {#toc}

* TOC
{:toc}

---

Account owners receive invoices by email for various charges incurred throughout the billing cycle, like DNSimple subscription renewals, domain registrations, certificates, and other [purchases](#purchases).

[Teams](/articles/dnsimple-plans/#teams) and [Enterprise](/articles/dnsimple-plans/#enterprise) plans can specify a billing contact. This contact is not required to have a seat within the account. However, if they do not have a seat within the account, they will not be an authorized user, we cannot disclose account information to them, and they will not have an account login.

There are three types of invoices from DNSimple:

- Subscription fee
  - Solo — No base fee. Your hosted zones and query volume will show up here.
  - Teams — $29/month base fee
  - Enterprise — Custom pricing
- Domain registration, transfer, and renewal purchases
- Certificate purchases

Solo and Teams plan subscribers will see itemized billing for zones hosted on DNSimple and zone queries. Enterprise and higher plans receive custom billing rates.

If you have multiple high-volume zones or receive a very high number of monthly queries, [contact sales](https://dnsimple.com/sales) for Enterprise pricing, and we'll get you set up with what you need.

## Explanation of your invoice

Here's a closer look at what your invoice means:

![explanation of top of example invoice](/files/invoice-top.png)

|   | **Name** | **Description** |
|:--|:--|:--|
| 1 | **Invoice Number** | The unique number assigned to your invoice. |
| 2 | **Invoice Date** | The date the invoice was created. The invoice date is the first day of your billing cycle. For example, if your billing cycle is April 20 - May 20, your Invoice Date is April 20. |
| 3 | **Terms** | Indicates whether your invoice is `Due Upon Receipt`, `Open`, or `Paid`. |
| 4 | **Status** | Indicates whether or not your invoice has been paid.  |
| 5 | **To** | Your company name and address. To update this information, see Billing Settings. |

 ![explanation of line items in example invoice](/files/invoice-breakdown.png)

|    | **Name** | **Description** |
|:---|:--|:--|
| 1. | Product Name | This section gives an itemized listing of your [charges](#charge-types) for the invoice billing cycle. Invoices for purchases and subscriptions are sent separately.|
| 2. | Quantity | The quantity of each product you are being billed for. |
| 3. | Amount | The cost of a single product. |
| 4. | Discount | Any discounts that have been applied, per product, to your invoice. |
| 5. | Total | The total amount you will be charged per product. |
| 6. | Grand Total | The total amount owed.|

## Charge types

DNSimple has both recurring charges and purchases. Purchases, like the fees you pay for registering a domain or for buying a Standard or Wildcard SSL certificate, appear on a separate invoice from subscription fees. Purchases can also be recurring – for example, if you've enabled auto-renewal for a domain.

### Recurring charges

- DNSimple subscription
- [Email forwards](/articles/email-forwarding/)
- [Active Zones](/articles/dns-hosting/)
- [Query Volume](/articles/dns-query-limits/)

![Recurring charges](/files/recurring-charges.png)

### Purchases

- Domain registrations
- Domain renewals
- Domain transfers
- Standard or Wildcard SSL certificates

> [!NOTE]
> Domain registration charges can be recurring if you've enabled [auto-renewal](/articles/domain-auto-renewal/).

If a [discount code](/articles/discount-codes/) was applied during checkout, the discount appears in the **Discount** column for the domain registration line item.

## Proration

If you **upgrade** your plan, you'll receive a proration discount corresponding to the remaining days in your current subscription plan. We grant proration credit for anything you have paid for, with the exception of query volume fees, as those are paid per use rather than in advance. This credit is used for subscriptions only.

![Prorated invoice](/files/prorated-invoice.png)

If you **downgrade** your plan (e.g. moving from Teams to Solo), we do not grant proration credit. We wait until the end of the billing cycle, then change your plan.

## Active zones and billing {#active-zones}

You are billed monthly for each [active DNS zone](/articles/activate-deactivate-dns-zone/) in your account. If you have zones you are not using, [deactivating them](/articles/activate-deactivate-dns-zone/#deactivating-a-dns-zone) will stop the recurring charge for those zones. See the [pricing page](https://dnsimple.com/pricing) for current per-zone rates.

[DNS query volume fees](/articles/dns-query-limits/) are also billed per active zone based on the number of queries each zone receives.

## Common invoice questions {#faq}

**Why am I being charged for a zone I am not using?**
If the zone is still active in your account, it will appear on your invoice. [Deactivate the zone](/articles/activate-deactivate-dns-zone/#deactivating-a-dns-zone) to stop the charge.

**What does my subscription fee cover?**
Your subscription fee covers access to your [plan's features](/articles/dnsimple-plans/). Zone hosting and query volume are billed separately as usage-based charges. Domain registrations, renewals, and certificates are one-time purchases billed on separate invoices.

**Where can I see current pricing?**
Visit the [DNSimple pricing page](https://dnsimple.com/pricing) for up-to-date rates on subscriptions, zones, and queries.

> [!NOTE]
> If you are on an older plan that predates the current Solo, Teams, and Enterprise plans, your invoice may show different line items or billing cycles than what is described here. [Contact support](https://dnsimple.com/feedback) for help understanding charges on a legacy plan.

## Additional resources

- Learn how to find and view your [invoice history](/articles/account-invoice-history/).
- View which [payment methods](/articles/payment-methods/) DNSimple accepts.

## Have more questions?

If you have any questions about your invoice or charges, [contact us](https://dnsimple.com/feedback), and we'll be happy to help.

