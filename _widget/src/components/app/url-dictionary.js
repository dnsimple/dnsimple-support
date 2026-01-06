const DICTIONARY = {
  // Keys are the search terms
  // Show 1 article with URL path
  // Show a category with "cat:Name"

  "Let's Encrypt": /letsencrypt/,
  'Standard SSL Certificate': /standard/,
  'Reverse Zones': /zones/,
  'Automation': /automation/,
  'User Settings': /user/,
  'DNSSEC': /dnssec/,
  'Renew Domain': /renewal/,
  'mfa': /mfa/,
  'members': /members/,
  'name server sets': /sets/,
  'integrated': /integrated/,
  'webhooks': /webhooks/,
  'oauth': /oauth/,
  'api token': /api_tokens/,
  'domain_names': /registration/,
  'connector': /connection|connector/,
  'record editor': /dns/,
  'invoice': /\/account/,

  '/articles/a-record/': /record_type=a/,
  '/articles/aaaa-record/': /record_type=aaaa/,
  '/articles/alias-record/': /record_type=alias/,
  '/articles/caa-record/': /record_type=caa/,
  '/articles/cname-record/': /record_type=cname/,
  '/articles/mx-record/': /record_type=mx/,
  '/articles/ns-record/': /record_type=ns/,
  '/articles/pool-record/': /record_type=pool/,
  '/articles/spf-record/': /record_type=spf/,
  '/articles/srv-record/': /record_type=srv/,
  '/articles/url-record/': /record_type=url/,

  'cat:CloudFlare and DNSimple': /cloudflare/,
  'cat:Heroku and DNSimple': /heroku/,
  'cat:Name Servers': /name-servers/,
  'cat:SSL Certificates': /ssl|certificate/,
  'cat:Domain Transfers': /transfer|push/,
  'cat:Services': /service/,
  'cat:Templates': /template/,
  'cat:Contacts': /contact/,
  'cat:Secondary DNS': /secondary/,
  'cat:Integrations': /integration/,
  'cat:Whois Privacy': /whois/,
  'cat:Emails': /email/,
  'cat:API': /api/,
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
