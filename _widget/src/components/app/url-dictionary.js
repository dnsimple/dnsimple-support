const DICTIONARY = {
  // Keys are the search terms
  // Show 1 article with URL path
  // Show a category with "cat:Name"

  "Let's Encrypt": /letsencrypt/,
  'Standard SSL Certificate': /standard/,
  'Reverse Zones': /zones/,
  'share management': /memberships/,
  Automation: /automation/,
  'User Settings': /user/,
  DNSSEC: /dnssec/,
  'Renew Domain': /renewal/,
  'Two-Factor Authentication': /twofa/,

  '/articles/account-users/': /members/,
  '/articles/a-record/': /record_type=a/,
  '/articles/aaaa-record/': /record_type=aaaa/,
  '/articles/alias-record/': /record_type=alias/,
  '/articles/caa-record/': /record_type=caa/,
  '/articles/cname-record/': /record_type=cname/,
  '/articles/heroku-connector/': /connections|connector/,
  // "": /record_type=hinfo/,
  '/articles/mx-record/': /record_type=mx/,
  // "": /record_type=naptr/,
  '/articles/ns-record/': /record_type=ns/,
  '/articles/pool-record/': /record_type=pool/,
  // "": /record_type=ptr/,
  '/articles/spf-record/': /record_type=spf/,
  '/articles/srv-record/': /record_type=srv/,
  // "": /record_type=sshfp/,
  // "": /record_type=txt/,
  '/articles/url-record/': /record_type=url/,
  // "/articles/dkim-record/": /dkim/,
  // "/articles/soa-record/": /soa/,
  '/articles/differences-between-a-cname-alias-url/': /records/,

  'cat:CloudFlare and DNSimple': /cloudflare/,
  'cat:Heroku and DNSimple': /heroku/,
  'cat:Name Servers': /name-servers/,
  'cat:SSL Certificates': /ssl|certificate/,
  'cat:Domain Transfers': /transfer|push/,
  'cat:Services': /services/,
  'cat:Templates': /templates/,
  'cat:Contacts': /contacts/,
  'cat:Secondary DNS': /secondary/,
  'cat:Integrations': /integrations/,
  'cat:Whois Privacy': /whois/,
  'cat:Emails': /email/,
  'cat:API': /api/,
  invoice: /\/account/
  // "cat:Account": /account/,
  // "cat:DNS": /dns|records/,
  // "cat:Domains": /domains/,
  // "cat:DNSimple": /dnsimple/,
};

function urlMatchingDictionary (url) {
  for (const key in DICTIONARY)
    if (DICTIONARY[key].test(url))
      return key;
}

export { urlMatchingDictionary };
