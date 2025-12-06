---
title: Delegating a Domain registered with DNSimple to DNSimple
excerpt: Step-by-step guide to delegating your domain to DNSimple's name servers. Learn how to change name servers and ensure your domain resolves correctly with DNSimple.
categories:
- Name Servers
---

# Delegating a Domain registered with DNSimple to DNSimple

Switching the name servers to DNSimple will cause the domain to resolve using the DNS records configured in your DNSimple account.

<div class="section-steps" markdown="1">
##### Changing the name servers to DNSimple

1.  If you have more than one account, select the relevant one.
1.  On the header click the <label>Domain Names</label> tab, locate the relevant domain, and click on the name to access the domain page.

    ![Domain Page link](/files/domains-domain-link.png)

1.  Click <label>Registration</label> on the left sidebar.
1.  On the Domain delegation card, click <label>Edit delegation</label>.

    ![Domain Delegation card](/files/domain-delegation-card-2.png)

1. Click <label>Use DNSimple name servers</label> to replace the name servers in the form with [DNSimple name servers](/articles/dnsimple-nameservers/).

    ![Use DNSimple name servers](/files/use-dnsimple-name-servers.png)

1. Click <label>Use DNSimple name servers</label> in the following confirmation dialog:

    ![Use DNSimple name servers confirmation](/files/use-dnsimple-name-servers-confirmation.png)

1. Alternatively, the [DNSimple name servers](/articles/dnsimple-nameservers/) can be manually entered into the form.
  - ns1.dnsimple.com
  - ns2.dnsimple-edge.net
  - ns3.dnsimple.com
  - ns4.dnsimple-edge.org

    ![Enter name servers](/files/complete-name-server-change.png)

1. Click <label>Change name servers</label> to apply the delegation changes.

</div>

<note>
#### Name server propagation

It can take up to 24 hours for a name server change to propagate. The WHOIS response is normally a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues/).
</note>

## Have more questions?

If you have any questions or need assistance delegating your domains, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
