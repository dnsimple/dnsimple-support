---
title: Monitoring Email Deliverability
excerpt: Learn how to monitor email deliverability using tools and techniques to track inbox placement and identify issues.
meta: Guide to monitoring email deliverability with tools, metrics, and techniques to ensure your emails reach recipients' inboxes.
categories:
- Emails
---

# Monitoring Email Deliverability

### Table of Contents {#toc}

* TOC
{:toc}

---

Regular monitoring of email deliverability is essential for maintaining good sender reputation and ensuring your emails reach recipients' inboxes. This guide covers tools, metrics, and techniques for monitoring email deliverability.

## Why monitor email deliverability?

Monitoring email deliverability helps you:

- **Identify issues early:** Catch problems before they significantly impact deliverability
- **Maintain reputation:** Track sender reputation and address issues promptly
- **Optimize performance:** Use data to improve email campaigns
- **Prevent problems:** Avoid blacklisting and reputation damage
- **Measure success:** Track improvements and ROI

## Key metrics to monitor

### Delivery rate

The percentage of emails that successfully reach the recipient's mail server.

**How to measure:**
- Track bounces (hard and soft)
- Calculate: (Total sent - Bounces) / Total sent × 100

**Target:** 95% or higher

**What to watch for:**
- Sudden drops in delivery rate
- High hard bounce rates (invalid addresses)
- High soft bounce rates (temporary issues)

### Inbox placement rate

The percentage of delivered emails that reach the inbox (not spam folder).

**How to measure:**
- Use seed lists or monitoring services
- Track spam folder placement
- Calculate: Inbox placements / Total delivered × 100

**Target:** 85% or higher

**What to watch for:**
- Emails going to spam folders
- Declining inbox placement over time
- Differences across email providers

### Bounce rate

The percentage of emails that bounce (couldn't be delivered).

**Types of bounces:**
- **Hard bounces:** Permanent failures (invalid addresses, domain doesn't exist)
- **Soft bounces:** Temporary failures (mailbox full, server issues)

**Target:** Less than 2% total, with hard bounces below 0.5%

**What to watch for:**
- High hard bounce rates (list quality issue)
- High soft bounce rates (server or recipient issues)
- Sudden increases in bounce rates

### Spam complaint rate

The percentage of recipients who mark emails as spam.

**How to measure:**
- Track spam complaints from ISPs
- Monitor feedback loops
- Calculate: Spam complaints / Total delivered × 100

**Target:** Less than 0.1% (0.1 complaints per 1000 emails)

**What to watch for:**
- Increasing complaint rates
- Complaints from specific segments
- Correlation with specific campaigns

### Engagement metrics

**Open rate:** Percentage of recipients who open emails

**Click rate:** Percentage of recipients who click links

**Unsubscribe rate:** Percentage of recipients who unsubscribe

**What to watch for:**
- Declining engagement over time
- Low engagement indicating deliverability issues
- Engagement differences across segments

## Monitoring tools

### Email service provider analytics

Most email service providers offer built-in analytics:

**What to monitor:**
- Delivery rates
- Bounce rates
- Open and click rates
- Spam complaints
- Unsubscribe rates

**How to use:**
- Review analytics dashboard regularly
- Set up alerts for significant changes
- Export data for deeper analysis
- Compare metrics over time

### Sender reputation tools

**[Sender Score](https://www.senderscore.org/):**
- Free reputation score (0-100)
- Shows reputation trends
- Identifies potential issues

**How to use:**
- Check your score regularly
- Monitor trends over time
- Address issues that affect score

**[Google Postmaster Tools](https://postmaster.google.com/):**
- Gmail-specific deliverability data
- Spam rate, reputation, and authentication data
- Requires domain verification

**How to use:**
- Verify your domain
- Monitor Gmail-specific metrics
- Address Gmail-specific issues

**[Microsoft SNDS](https://sendersupport.olc.protection.outlook.com/snds/) (Smart Network Data Services):**
- Outlook/Hotmail-specific data
- IP reputation and complaint data
- Requires registration

**How to use:**
- Register your sending IPs
- Monitor Outlook-specific metrics
- Address issues identified

### Blacklist monitoring

**[MXToolbox](https://mxtoolbox.com/blacklists.aspx):**
- Check multiple blacklists
- Monitor blacklist status
- Get alerts if blacklisted

**How to use:**
- Regularly check blacklist status
- Set up monitoring for your IPs and domains
- Address blacklist issues immediately

**Other tools:**
- [Spamhaus](https://www.spamhaus.org/lookup/) - Email blacklist and reputation service
- [BarracudaCentral](https://www.barracudacentral.org/) - Email reputation and blacklist monitoring
- [SURBL](https://www.surbl.org/) - URI reputation service

### Email testing tools

**[Mail-Tester](https://www.mail-tester.com/):**
- Tests email for spam triggers
- Provides spam score
- Shows authentication results

**How to use:**
- Send test emails before campaigns
- Review spam score and issues
- Fix identified problems

**[Litmus](https://www.litmus.com/) or [Email on Acid](https://www.emailonacid.com/):**
- Tests email rendering
- Checks spam filters
- Tests across email clients

**How to use:**
- Test emails before sending
- Ensure proper rendering
- Check spam filter results

### DMARC reporting tools

**DMARC reports:**
- Aggregate reports (RUA) show overall authentication
- Forensic reports (RUF) show individual failures
- Help identify authentication issues

**How to use:**
- Set up DMARC with reporting
- Regularly review DMARC reports
- Identify and fix authentication failures
- Use tools like [dmarcian](https://dmarcian.com/) or [Postmark](https://postmarkapp.com/dmarc) to parse reports

## Monitoring techniques

### Regular reviews

**Daily:**
- Check bounce rates
- Monitor spam complaints
- Review any alerts or notifications

**Weekly:**
- Review delivery and inbox placement rates
- Analyze engagement metrics
- Check sender reputation scores

**Monthly:**
- Comprehensive deliverability review
- Compare metrics to previous months
- Identify trends and patterns
- Plan improvements

### Setting up alerts

**Key alerts to set up:**
- Bounce rate above threshold
- Spam complaint rate above threshold
- Blacklist notifications
- Significant drops in delivery rates
- Authentication failures

**How to set up:**
- Use your email service provider's alert features
- Set up monitoring with third-party tools
- Configure email notifications for critical issues

### Seed list monitoring

**What is a seed list:**
- A list of test email addresses at various providers
- Used to monitor inbox placement
- Helps identify deliverability issues

**How to use:**
- Create seed addresses at major providers (Gmail, Outlook, Yahoo, etc.)
- Add seed addresses to your email list
- Monitor where seed emails land (inbox vs. spam)
- Track inbox placement rates

**Providers to include:**
- Gmail
- Outlook/Hotmail
- Yahoo Mail
- Apple Mail/iCloud
- Other providers relevant to your audience

### A/B testing

**What to test:**
- Subject lines
- Email content
- Sending times
- Sender names
- Content formatting

**How to use:**
- Test one variable at a time
- Send to small test groups
- Measure deliverability and engagement
- Apply winning variations to full campaigns

## Creating a monitoring dashboard

### Key metrics to include

1. **Delivery metrics:**
   - Delivery rate
   - Bounce rate (hard and soft)
   - Inbox placement rate

2. **Reputation metrics:**
   - Sender Score
   - Blacklist status
   - Authentication pass rates

3. **Engagement metrics:**
   - Open rate
   - Click rate
   - Spam complaint rate
   - Unsubscribe rate

4. **Trends:**
   - Metrics over time
   - Comparisons to previous periods
   - Goal progress

### Tools for dashboards

- **Email service provider dashboards:** Use built-in analytics
- **[Google Analytics](https://analytics.google.com/):** Track email campaign performance
- **Custom dashboards:** Use tools like [Google Data Studio](https://datastudio.google.com/) or [Tableau](https://www.tableau.com/) to create custom dashboards
- **Spreadsheets:** Create custom tracking spreadsheets

## Interpreting monitoring data

### Red flags

**Immediate action needed:**
- Blacklist status
- Spam complaint rate above 0.1%
- Hard bounce rate above 1%
- Significant drop in delivery rate

**Investigation needed:**
- Gradual decline in inbox placement
- Increasing bounce rates
- Declining engagement
- Authentication failures

### Positive indicators

**Good performance:**
- Delivery rate above 95%
- Inbox placement above 85%
- Bounce rate below 2%
- Spam complaint rate below 0.1%
- Consistent or improving metrics

## Taking action on monitoring data

### When issues are detected

1. **Immediate actions:**
   - Address blacklist issues
   - Fix authentication problems
   - Remove hard bounces from list
   - Investigate spam complaints

2. **Short-term actions:**
   - Clean email list
   - Review and improve content
   - Adjust sending practices
   - Monitor closely

3. **Long-term actions:**
   - Improve list quality
   - Enhance email content
   - Optimize sending practices
   - Build better reputation

### Continuous improvement

1. **Regular analysis:**
   - Review metrics regularly
   - Identify trends
   - Compare to benchmarks

2. **Testing:**
   - Test improvements
   - Measure results
   - Iterate based on data

3. **Optimization:**
   - Continuously improve based on data
   - Stay updated on best practices
   - Adapt to changes in email landscape

## Best practices

- ✅ Monitor key metrics regularly
- ✅ Set up alerts for critical issues
- ✅ Use multiple monitoring tools
- ✅ Track trends over time
- ✅ Take action on issues promptly
- ✅ Test before major campaigns
- ✅ Document findings and actions
- ✅ Continuously improve based on data

## Related topics

- [Understanding Email Deliverability](/articles/understanding-email-deliverability/) - Overview of email deliverability
- [Improving Email Deliverability](/articles/improving-email-deliverability/) - Steps to improve deliverability
- [Troubleshooting Email Authentication](/articles/troubleshooting-email-authentication/) - Authentication troubleshooting
- [Setting Up DMARC](/articles/set-up-dmarc/) - DMARC setup for reporting

## Have more questions?

If you have additional questions or need any assistance with monitoring email deliverability, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
