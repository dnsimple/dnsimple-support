---
meta: What an SRV record is, and how to add an SRV record in DNSimple.
title: What's an SRV Record?
excerpt: What an SRV record is, and how to add an SRV record in DNSimple.
categories:
- DNS
---

# SRV Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What's an SRV record?

SRV records help with service discovery. For example, SRV records are used in Internet Telephony to define where a SIP service may be found.

An SRV record typically defines a symbolic name and the transport protocol used as part of the domain name. It defines the priority, weight, port, and target for the service in the record content.

Here's an example of two SRV records.

    _sip._tcp.example.com.   3600 IN    SRV 10       60     5060 bigbox.example.com.
    _sip._tcp.example.com.   3600 IN    SRV 10       20     5060 smallbox1.example.com.

From the name, `_sip` is the symbolic name for the service and `_tcp` is the transport protocol. The symbolic name and transport always start with an underscore.

The content of the SRV record defines a priority of 10 for both records. The first record has a weight of 60 and the second a weight of 20. The priority and weight values can be used to encourage use of certain servers over others.

The final two values in the record define the port and hostname to connect to for accessing the service.


## Add an SRV record

To add an SRV record in DNSimple, you might fill in the new SRV record form like this:

![Add SRV record](/files/srv-record.png)

This would result in an SRV record like this:

    _sip._tcp.example.com. 3600	IN	SRV	10 20 5000 sip-server.example.com.
