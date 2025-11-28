# Name Servers Category - Gaps and Future Articles

This document identifies gaps in the Name Servers category documentation and suggests articles that should be added in the future based on DNSimple's functionality related to name servers and domain delegation.

## Missing Articles for Name Servers Category

### Explanation Articles

1. **Understanding Name Server Propagation**
   - Explain how name server changes propagate through the DNS system
   - Cover TTL impact on propagation
   - Discuss regional differences in propagation times
   - Explain why propagation can take up to 48 hours

2. **Name Server Redundancy and High Availability**
   - Explain why multiple name servers are recommended
   - Discuss how DNSimple provides redundancy with four name servers
   - Cover failover mechanisms and load distribution
   - Explain anycast DNS and its benefits

3. **The Relationship Between Name Servers and DNS Records**
   - Explain how name server delegation affects DNS record resolution
   - Cover what happens when name servers change
   - Discuss the difference between registrar-level and zone-level NS records
   - Explain system NS records vs. manual NS records

### How-to Articles

1. **Migrating Name Servers Between Providers**
   - Step-by-step guide for moving from one DNS provider to another
   - Best practices for minimizing downtime
   - How to verify migration success
   - Handling DNS records during migration

2. **Configuring Name Servers for Multiple Domains**
   - How to efficiently manage name servers across many domains
   - Using name server sets for bulk operations
   - Best practices for enterprise customers

3. **Setting Up Name Servers for Subdomains**
   - More detailed guide on subdomain delegation scenarios
   - When to use subdomain delegation vs. CNAME records
   - Troubleshooting subdomain name server issues

### Reference Articles

1. **Name Server Best Practices**
   - Recommended number of name servers
   - Geographic distribution considerations
   - Naming conventions for name servers
   - Security considerations

2. **Name Server API Reference**
   - API endpoints for managing name servers
   - Programmatic delegation changes
   - Automation examples

## Missing Articles for Emails Category (Related to Name Servers)

Based on DNSimple's functionality related to name servers and domain delegation, the following email-related articles should be added to the Emails category:

### Explanation Articles

1. **Impact of Name Server Changes on Email Delivery**
   - Explain how changing name servers affects MX record resolution
   - Cover propagation delays and email delivery during transitions
   - Discuss what happens to email when name servers are misconfigured
   - Explain the relationship between name server delegation and email routing

2. **Configuring Email with Vanity Name Servers**
   - How MX records work when using vanity name servers
   - Special considerations for email when using custom name servers
   - Glue record implications for email services

### How-to Articles

1. **Setting Up Email After Changing Name Servers**
   - Step-by-step guide to configuring MX records after delegation changes
   - Verifying email delivery after name server migration
   - Troubleshooting email issues post-delegation

2. **Migrating Email Services with Name Server Changes**
   - How to maintain email delivery during DNS provider migration
   - Coordinating MX record updates with name server changes
   - Best practices for zero-downtime email migration

3. **Troubleshooting Email Issues Related to Name Servers**
   - Diagnosing email delivery problems caused by name server misconfiguration
   - Common email errors related to name server delegation
   - How to verify MX records are resolving correctly after name server changes

### Reference Articles

1. **Email and Name Server Compatibility Matrix**
   - Which email providers work best with DNSimple name servers
   - Compatibility considerations for vanity name servers
   - Known issues and workarounds

2. **Email DNS Records Reference for Name Server Scenarios**
   - MX record configuration when using different name server setups
   - SPF, DKIM, and DMARC considerations with custom name servers
   - Best practices for email authentication records with vanity name servers

## Priority Recommendations

### High Priority (Should be created soon)

1. **Impact of Name Server Changes on Email Delivery** (Emails category)
   - Critical for users migrating domains
   - Prevents email delivery issues

2. **Troubleshooting Email Issues Related to Name Servers** (Emails category)
   - Common support issue
   - Helps users self-diagnose problems

3. **Understanding Name Server Propagation** (Name Servers category)
   - Fundamental concept users need to understand
   - Reduces support tickets about propagation delays

### Medium Priority (Should be created within next quarter)

1. **Migrating Name Servers Between Providers** (Name Servers category)
   - Useful for users switching DNS providers
   - Helps prevent downtime

2. **Setting Up Email After Changing Name Servers** (Emails category)
   - Important for email configuration workflows
   - Complements existing email documentation

### Low Priority (Nice to have)

1. **Name Server Redundancy and High Availability** (Name Servers category)
   - Educational content
   - Helps users understand DNSimple's infrastructure

2. **Email and Name Server Compatibility Matrix** (Emails category)
   - Reference material
   - Useful for advanced users

## Notes

- All new articles should follow the Diataxis framework structure
- Articles should match the voice and style of existing DNSSEC and DNS category articles
- Articles should follow APA Style guidelines as specified in AGENTS.md
- Consider creating video walkthroughs for complex procedures
- Include troubleshooting sections where appropriate

