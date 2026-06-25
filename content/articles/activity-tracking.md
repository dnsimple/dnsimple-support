---
title: Activity Tracking
excerpt: How the DNSimple audit log records changes to domains and account settings, and how to review that history.
meta: Activity tracking shows who changed DNS records, domain settings, or account configuration and when. Full history is available on Teams plan and higher.
categories:
- Account
- Domains and Transfers
---

# Activity Tracking

### Table of Contents {#toc}

* TOC
{:toc}

---

> [!NOTE]
> Full activity history is available on the Teams plan and higher. Accounts on the Solo plan can view activity logs from the past 30 days. [See the difference between plans](/articles/dnsimple-plans/).

Activity history is an audit log of changes made to a specific domain or across your entire account. It helps you see who made a change, when it happened, and what was updated.

## Why activity tracking matters {#why-activity-tracking-matters}

Activity tracking adds accountability in team environments and supports [account security](/articles/account-securing/). Use it to trace unexpected DNS or permission changes, confirm when a change was applied, and review how a domain configuration changed over time.

Activity tracking records changes made through the DNSimple interface and API. It does not track changes made outside of DNSimple, such as direct registry modifications or changes made through integrated domain provider interfaces.

## Domain activity tracking {#domain-activity-tracking}

Domain-level activity tracking logs changes to a specific domain, including DNS record updates, contact changes, name server changes, and other domain operations. Each entry shows what changed, which user made the change, and when it occurred.

![Activity Tracking at domain level](/files/activity-tracking-1.png)

## Account activity tracking {#account-activity-tracking}

Account-level activity tracking logs changes across your entire account, including:

- Adjustments to account settings
- Modifications affecting multiple domains
- User actions and permission changes

This view helps you understand changes that affect the account as a whole, not just individual domains.

![Screenshot of dashboard of activity](/files/activity-tracking-dashboard.png)

## Events filter {#events-filter}

The **Events** filter shows event types within a chosen time frame. Filter by DNS changes, user actions, or other event types. Each entry includes:

- What changed, along with contextual data (for example record content)
- Which user triggered the event
- When the event took place

![Screenshot of link to view activity log](/files/view-activity-log.png)
![Overview of users activity](/files/user-activity-log.png)

## Have more questions?

If you have any questions about your activity tracking, [contact our support team](https://dnsimple.com/feedback), and we will be happy to help.
