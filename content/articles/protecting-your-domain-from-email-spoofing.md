---
title: Email Spoofing Protection
excerpt: What email spoofing is, how attackers exploit it, and how SPF, DKIM, and DMARC work together to stop it.
meta: How email spoofing works, what damage it causes, and how to protect your domain using SPF, DKIM, and DMARC authentication records in DNS.
categories:
- Emails
---

# Email Spoofing Protection

### Table of Contents {#toc}

* TOC
{:toc}

---

Email spoofing is when someone sends email that appears to come from your domain without your authorization. It is possible because the SMTP protocol does not verify sender identity by default - any mail server can claim to be sending on behalf of any domain. DNS-based authentication protocols close this gap.

## Why spoofing matters {#why}

Spoofed emails cause problems for the domain owner, not just the recipients:

- **Phishing** - Attackers impersonate your domain to trick recipients into revealing credentials or clicking malicious links. Your customers or partners may be targeted.
- **Reputation damage** - Mailbox providers track spam complaints and authentication failures against your domain. Spoofed messages you did not send still count against you.
- **Blacklisting** - Sustained spoofing can get your domain or associated IPs placed on blacklists, affecting the deliverability of your legitimate email.
- **Loss of trust** - Recipients who receive spoofed email from your domain may stop trusting your real messages.

Even domains that do not send email should be protected. Attackers specifically target domains without authentication records because nothing blocks their spoofed messages.

## How authentication stops spoofing {#how-auth-works}

Three DNS-based protocols work together to let receiving mail servers verify that an email genuinely came from your domain:

### SPF: who is allowed to send {#spf}

An [SPF record](/articles/spf-record/) is a TXT record that lists every server and service authorized to send email for your domain. When a receiving server gets a message claiming to be from `yourdomain.com`, it checks the sending IP against this list. If the IP is not authorized, SPF fails.

SPF alone does not stop spoofing. Attackers can pass SPF by sending from their own domain while displaying your domain in the "From" header (which SPF does not check). That is where DKIM and DMARC come in.

### DKIM: proving the message is authentic {#dkim}

A [DKIM record](/articles/dkim-record/) publishes a public key as a TXT record. Your email provider signs every outgoing message with the corresponding private key. The receiving server retrieves the public key from DNS and verifies the signature. If the message was altered in transit, or if the sender does not have the private key, DKIM fails.

DKIM is harder to forge than SPF because the attacker would need your private key to produce a valid signature.

### DMARC: enforcing the rules {#dmarc}

A [DMARC record](/articles/dmarc-record/) ties SPF and DKIM together with a policy. It tells receiving servers:

- **What to do** when neither SPF nor DKIM passes with [alignment](/articles/understanding-spf-dkim-dmarc-alignment/) - `p=none` (do nothing), `p=quarantine` (send to spam), or `p=reject` (block entirely).
- **Where to send reports** - Aggregate reports (`rua=`) show you who is sending email using your domain and whether messages pass or fail authentication.

A `p=reject` policy is the strongest protection against spoofing. It tells receiving servers to refuse any message that fails both SPF and DKIM alignment.

## Setting up protection {#setup}

Configuring all three protocols requires adding TXT records in DNS. [How to Set Up Email Authentication for Your Domain](/articles/email-authentication/) walks through the full process. The dedicated setup guides cover each protocol individually:

1. **SPF** - [Set Up SPF Records](/articles/setting-up-spf/) covers listing all authorized senders and staying under the 10-lookup limit.
2. **DKIM** - [Set Up DKIM](/articles/set-up-dkim/) covers adding the public key for each email service. If you use multiple services, see [Manage Multiple DKIM Selectors](/articles/managing-multiple-dkim-selectors/).
3. **DMARC** - [Set Up DMARC](/articles/set-up-dmarc/) covers publishing a policy and setting up reporting. Start with `p=none` and tighten gradually - see [Implement a Gradual DMARC Policy](/articles/implementing-a-gradual-dmarc-policy/).

> [!WARNING]
> Do not jump straight to `p=reject` without monitoring first. A misconfigured SPF or missing DKIM selector can cause your own legitimate email to be blocked. Start with `p=none`, review DMARC reports for several weeks, fix any issues, then move to `p=quarantine` and finally `p=reject`.

## Protecting domains that do not send email {#no-email}

If you own a domain that should never send email, publish records that explicitly say so. This prevents attackers from spoofing it:

- **SPF**: `v=spf1 -all` (no servers are authorized)
- **DMARC**: `v=DMARC1; p=reject; rua=mailto:dmarc@yourdomain.com` (reject everything, send reports)
- **Null MX**: A [null MX record](/articles/what-are-null-mx-records/) signals that the domain does not accept inbound email either.

## If your domain is being spoofed {#incident-response}

If you discover someone is sending spoofed email using your domain:

1. **Check your DMARC reports.** Look for source IPs you do not recognize. If you do not have DMARC reporting set up, add a `rua=` tag to your DMARC record now.
2. **Verify your authentication records are correct.** Confirm SPF includes all legitimate senders, DKIM is configured for each service, and DMARC alignment is working. See [Verify SPF](/articles/verifying-spf/), [Verify DKIM](/articles/verify-dkim/), and [Verify DMARC](/articles/verifying-dmarc/).
3. **Tighten your DMARC policy.** If you are still on `p=none` or `p=quarantine`, move toward `p=reject` to block spoofed messages at the receiving server.
4. **Check blacklists.** Spoofing campaigns can get your domain listed. Use [MXToolbox](https://mxtoolbox.com/blacklists.aspx) to check and follow the delisting process if needed.
5. **Monitor closely** for the following weeks. Spoofing campaigns often come in waves.

> [!NOTE]
> You cannot stop attackers from attempting to spoof your domain. What you can control is whether receiving servers accept those messages. A properly configured `p=reject` DMARC policy means spoofed messages are blocked before reaching recipients.

## Have more questions?

If you have additional questions or need assistance with protecting your domain from email spoofing, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
