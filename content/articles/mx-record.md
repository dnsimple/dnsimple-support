---
meta: What an MX record is, and how to create MX records with DNSimple.
title: What's an MX Record?
excerpt: What an MX record is, and how to create MX records with DNSimple.
categories:
- DNS
---

# What's an MX Record?

MX stands for Mail eXchange. MX Records tell email delivery agents where they should deliver your email. You can have many MX records for a domain. They provide a way to have redundancy and ensure email will always be delivered.

Google Apps provides a common example of using MX Records to deliver email. When you create a Google Apps account and you want your email to be delivered to your Google Apps mail account, Google provides a set of MX records you need to add to DNSimple. Here are the default MX records Google suggests:

- aspmx.l.google.com 1
- alt1.aspmx.l.google.com 5
- alt2.aspmx.l.google.com 5
- aspmx2.googlemail.com 10
- aspmx3.googlemail.com 10

Google provides you with 5 different servers that can accept your email. Each MX record includes a priority value, which is a relative value compared to the other priorities of MX records for your domain. Addresses with lower values will be used first. Therefore, when a mail agent wants to deliver an email to you, it would first attempt to deliver to `aspmx.l.google.com`. If that server can't handle the delivery, it would move onto `alt1.aspmx.l.google.com`. If that server can't handle the delivery, it would move onto `alt2.aspmx.l.google.com`, and so on.

MX records make it easy to define what servers should handle email delivery. They allow you to provide multiple servers for maximum redundancy and ensured delivery.
