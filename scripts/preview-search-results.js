import Search from "../_widget/src/components/app/search.js";
import fs from "fs";

global.window = {};
const ARTICLES = JSON.parse(fs.readFileSync("./output/search.json"));

const searchTerms = [ "what's a cname record", 'a record', 'manage account', 'enable dnssec', 'creating alias record', 'alias record', 'request ssl certificate', 'auto-renew certificate', 'delegate name servers to another provider', 'create a record', 'retry payment', 'hosting', 'add user', 'access', 'dashboard', 'mx', 'ddns', 'transfer', 'certificates', 'metrics', 'stats', 'observability', 'queries', 'analytics', 'comment', 'expiry', 'axfr', 'domain validation', 'password reset', 'password recovery', 'email not working', 'domain registration', 'domain name search', 'dns records', '2fa', 'domain parking', 'dns propagation', 'dnsimple pricing', 'change nameservers', 'domain expiration', 'ipv6 dns', 'email settings', 'domain owner', 'login' ];


const subject = new Search();
subject.addArticles(ARTICLES, "https://support.dnsimple.com");

searchTerms.forEach(term => {
  console.log({
    [term]: subject.query(term).map(result => result.id.replace("/articles/", ""))
  });
});
