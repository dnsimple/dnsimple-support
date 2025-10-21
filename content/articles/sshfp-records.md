---
title: What Are SSHFP Records?
excerpt: SSHFP records securely publish SSH host key fingerprints in DNS.
meta: Learn how SSHFP records enhance the security and user experience of SSH connections.
categories:
- DNS
---

# What are SSHFP Records?

An SSHFP (SSH FingerPrint, record type 44) record is a type of DNS resource record that is used to securely publish SSH host key fingerprints in the [Domain Name System (DNS)](/articles/what-is-dns/). The primary purpose of an SSHFP record is to provide a way for SSH clients to automatically and securely verify the authenticity of an SSH server's public key, helping to protect against man-in-the-middle (MITM) attacks during SSH connections.

This is like a digital passport stamp for an SSH server's key, stored in a secure, publicly accessible ledger (DNS). When your SSH client tries to connect to a server, it can check this "stamp" to ensure it's talking to the legitimate server and not an impostor.

## What information does an SSHFP record contain?
An SSHFP record contains three mandatory fields:
- **Algorithm (8-bit integer)**: Specifies the cryptographic algorithm of the SSH host key. Common values include:
    - `1`: RSA (often `ssh-rsa`)
    - `2`: DSA (often `ssh-dss`)
    - `3`: ECDSA (often `ecdsa-sha2-nistp256`, `nistp384`, `nistp521`)
    - `4`: Ed25519 (often `ssh-ed25519`)
- **Fingerprint type (8-bit integer)**: Specifies the algorithm used to hash the public key. Common values include:
    - `1`: SHA-1
    - `2`: SHA-256
**Fingerprint (character string)**: The actual hash (fingerprint) of the SSH public host key, represented as a hexadecimal string. This is what the client will compare against.

**Example**
An SSHFP record for a server named `ssh.example.com` might look like this in a DNS zone file:
```
ssh.example.com. IN SSHFP 2 1 1234567890abcdef1234567890abcdef12345678
ssh.example.com. IN SSHFP 4 2 fe20c3a2b1d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0
```
- The first record is for a DSA key (`Algorithm 2`) with a SHA-1 fingerprint (`Fingerprint Type 1`).
- The second record is for an Ed25519 key (`Algorithm 4`) with a SHA-256 fingerprint (`Fingerprint Type 2`).

## How SSHFP records work (and why DNSSEC is needed)
The process of using SSHFP records to verify an SSH connection involves these steps:
1. **Client initiates connection**: An SSH client (like OpenSSH) attempts to connect to an SSH server (e.g., `ssh.example.com`).
1. **Client queries DNS**: Before accepting the server's public key, the client performs a DNS query for SSHFP records associated with `ssh.example.com`.
1. **DNSSEC validation**: this step is critical. For SSHFP records to be trustworthy, the DNS responses must be cryptographically signed and validated using [DNSSEC (DNS Security Extensions)](/articles/what-is-dnssec/). Without DNSSEC, a malicious actor could intercept your DNS query and return a fake SSHFP record, defeating the purpose of the security check.
1. **Client compares fingerprints**: The client receives the SSHFP records (assuming DNSSEC validation passes). It then compares the fingerprint it received from DNS with the actual fingerprint of the public key presented by the SSH server.
1. **Connection outcome**:
    - If a matching SSHFP record is found and DNSSEC validated, the client can automatically trust the host key. This bypasses the typical "The authenticity of host 'hostname' can't be established" prompt and the need to manually verify the fingerprint.
    - If no matching SSHFP record is found, or if DNSSEC validation fails, the client will fall back to its usual warning and prompt the user for manual verification.
    - If a mismatch occurs (e.g., the DNS-provided fingerprint doesn't match the server's key), the client will issue a severe warning and typically refuse to connect, indicating a potential MITM attack.

## Why are SSHFP records used?
SSHFP records are used to enhance the security and user experience of SSH connections.

### Mitigation of MITM attacks
The primary benefit. SSHFP records verify host keys through DNSSEC-protected DNS, making it much harder for attackers to impersonate a legitimate SSH server and intercept communications.

### Automated host key verification
For users connecting to new hosts, SSHFP records can automate the process of trusting the server's key, eliminating the need for manual fingerprint comparisons and the "Are you sure you want to continue connecting?" prompt. This is particularly useful in automated scripts or large deployments.

### Improved user experience 
Removes a common security friction point, encouraging users to connect without being desensitized to security warnings.

### Centralized key management (for some)
Publishing SSHFP records can serve as a centralized way for organizations to distribute and manage trusted host keys, especially when clients might connect to many different servers.

## Prerequisites for using SSHFP records
For SSHFP records to provide their intended security benefits, **DNSSEC must be fully deployed and validated** for the domain where the SSHFP records are published. Without DNSSEC, the records are not trustworthy, as they could be spoofed.

This means:
- Your domain's registrar must support DNSSEC.
- Your authoritative DNS servers (like DNSimple) must support and be configured for DNSSEC.
- The client's resolver must be configured to perform DNSSEC validation.

SSHFP (Type 44) records offer a robust mechanism to enhance the security and usability of SSH connections by enabling cryptographic verification of host keys via the DNS. When deployed correctly with DNSSEC, they provide a powerful defense against MITM attacks, allowing SSH clients to automatically and securely establish trust with remote servers. For anyone managing SSH access, especially in environments where security is paramount, implementing SSHFP records is a highly recommended best practice.

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
