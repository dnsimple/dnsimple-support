---
title: Writing Guidelines
excerpt: Guidelines & best practices for writing support docs.
categories:
- DNSimple
---

# Support Writing Guidelines

## Tone

* Straightforward and friendly. 
* Be professional and convey knowledge without alienating new users or those who aren't 100% familiar with the terms. If you use an acronym, provide the full term in a paranthetical next to it after the first use. 
  * Example: 
    * We have over 300 TLDs (top-level domains) to choose from. New TLDs are added as they become available.  

## Use gender-neutral language

* Always opt for they/them/you language over she/him.
* They and their can be used as singular pronouns.  
* Don't default to masculine pronouns. 

## Tense

* Always use present tense when applicable. It's stronger.
  * Examples: 
    * *do* Each plan provides a different level of service.
    * *don't* Each plan will provide a different level of service. 
* Every sub-header (when possible) should use the present continuous form. 
   * Examples: 
      * Using 2FA 
      * Verifying NS Records 
* Using "will" makes it sound like it'll happen in the future. If you're doing things now, say it.
* Don't use time-sensitive language.
    * Examples: 'for now', 'currently', or 'for the time being'. 
    * The site is written in present tense and reflects what you're doing now, so this language is redundant and unnecessary. 

## Standardize capitalization

* Main titles should have all words capitalized.
* Descriptions should have the first word capitalized, and end with a trailing dot.
* Subheaders (H2, H3) should have the first word capitalized. 

## Punctuation

* There should be a period at the end of every sentence line in a bulleted list. You don't need periods with lists made of one/two-word items. 
   * Example 1 (period needed): 
       * 1. Log in to DNSimple. 
       * 2. Go to the Domain page. 
   * Example 2 (no punctuation required): 
       * 1. DNS hosting
       * 2. DDoS Defense 
       * 3. One-click services
* Use Oxford commas. 
* If you're not sure about that semi-colon, avoid it. It's just as easy to write two separate sentences, so semi-colons are often unnecessary. 
* Exclamation points are super fun... sparingly. Use them with discretion, and if you're not sure, don't use them at all. Support docs won't have much call for exclamation points. 

## Markers

* We often use Info, Tips, Notes, and Warnings in support docs. While we don't want to over-use these, they're helpful in many situations. 
  * **Info**
    * Use Info when you're adding extra information that's important for the reader to notice, but non-critical. Example: https://support.dnsimple.com/articles/expiring-product-email-notifications/
  * **Tips**
    * Use Tips to add recommendations to the article. These should be useful, but non-critical. Tips are things that make users' work easier. Example: https://support.dnsimple.com/articles/api-access-token/
  * **Notes** 
    * Notes are things the user must be aware of, actionable or not, but that won't damage, delete, or otherwise compromise their account. Example: https://support.dnsimple.com/articles/delegating-dnsimple-hosted/
  * **Warnings** 
    * Warnings are reserved for the most critical information. Use a warning widget if a user could do something damaging or permanent to their account. Example: https://support.dnsimple.com/articles/transferring-domain-away/

## Adverbs

* Adverbs add length without contributing depth. 
* 99% of the time you won't need that adverb. "Interestingly, "usually, "generally", "typically" are used often, and most of the time they don't need to be there. 
* Very, really, a lot - these are unnecessary filler words. Try to avoid them in support writing. We want to keep things as clean and concise as possible. 

## Avoid negative language

* Avoid words like "pain points" and "hassle".
    * These words create visceral reactions in readers, and we don't want anyone associating DNSimple with pain or hassle, even if that's not what you're trying to say. 
* Avoid saying things like 'We do all this for you'. This places a burden of gratitude on the client. There's no need to point that out. 

## Don't use idioms 

* Using idioms makes things difficult to translate. To make your writing as easy-to-understand and translation-friendly as possible, avoid using idioms in any support documents. 

## Formatting

* Use [header formatting](https://www.markdownguide.org/basic-syntax/) to represent section headers. Don't use equivalent font formatting such as "bold" text to represent a header.
* Separate the header from the text with one line. Some markdown parsers may otherwise not interpret the header correctly.

  **Correct:**

  ```markdown
  ## This is a header
  
  This is the text after the header.
  ```

  **Incorrect:**

  ```markdown
  ## This is a header
  This is the text after the header.
  ```
## Links

* Use hyperlinks rather than raw links.

  **Correct:**

  ```
  Check out [this article](https://support.dnsimple.com/articles/changing-plans/) for instructions to change your plan.
  ```

  **Incorrect:**

  ```markdown
  Check out this article for instructions to change your plan: https://support.dnsimple.com/articles/changing-plans/.
  ```
