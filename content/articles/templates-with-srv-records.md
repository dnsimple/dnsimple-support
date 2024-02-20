---
title: SRV records in templates
excerpt: How to configure templates with SRV records
categories:
- Templates
---

# SRV records in Templates

DNS templates do not display all the fields necessary for configuring SRV records. However this is possible by combining the data within the name and content fields.

A typical SRV record contains the following data:

* A symbolic name, like `sip`.
* A protocol, like `tcp` or `udp`.
* A weight, like `100`.
* A port, like `443`.
* A target, like `target.example.com`.
* A priority, like `10`.

We can combine the information above on the name and content fields like this:

* The name field contains the symbolic name and protocol information in the following format: `_sip._tcp`.
* The content field includes the weight, port and target separated by spaces: `100 443 target.example.com`

![Template creation for SRV records](/files/template-with-srv-record.png)
