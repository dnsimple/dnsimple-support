---
title: What Is an SRV Record?
excerpt: What an SRV record is, and how to add an SRV record in DNSimple.
categories:
- DNS
---

# SRV Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What Is an SRV Record?

[SRV (Service) records](https://en.wikipedia.org/wiki/SRV_record) help with service discovery. For example, SRV records are used in Internet Telephony to define where a [SIP service](https://en.wikipedia.org/wiki/Session_Initiation_Protocol ) can be found.

An SRV record typically defines a symbolic name and the transport protocol used as part of the domain name. It defines the priority, weight, port, and target for the service in the record content.

Here's an example of two SRV records.

    _sip._tcp.example.com.   3600 IN    SRV 10       60     5060 bigbox.example.com.
    _sip._tcp.example.com.   3600 IN    SRV 10       20     5060 smallbox1.example.com.

`_sip` is the symbolic name for the service and `_tcp` is the transport protocol. The symbolic name and transport protocol always start with an underscore.

The content of the SRV record defines a priority of 10 for both records. The first record has a weight of 60, and the second has a weight of 20. The priority and weight values can be used to encourage use of certain servers over others.

The final two values in the record define the port and hostname to connect to for accessing the service.

## Adding an SRV record

To add an SRV record in DNSimple:

1. On your Domain List, click the relevant domain. 
1. Click the **DNS** badge at the top right to access the [Record Editor](/articles/record-editor/).

<!--- needs screenshot -->

1. Click **Add record** on the left side. Choose **SRV**, and fill out the form.
1. Click **Add Record** at the bottom of the page to complete the process. You'll be returned to the Domain List with a banner indicating the record was successfully added. 

This is an example SRV record form: 

![Add SRV record](/files/srv-record.png)

The given example results in this SRV record:

    _sip._tcp.example.com. 3600	IN	SRV	10 20 5000 sip-server.example.com.

## Have more questions? 

You can [contact our support team](https://dnsimple.com/feedback) with any questions about adding SRV records, and we'll be happy to help. 
