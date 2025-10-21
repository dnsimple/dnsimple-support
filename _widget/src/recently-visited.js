import { browserLocation } from './utils/browserLocation.js';

export default (widget) => {
  const href = browserLocation.getHref();
  const url = new URL(href);
  const { origin, pathname } = url;

  if (!['https://support.dnsimple.com', 'https://developer.dnsimple.com'].includes(origin)) return;

  const pattern = /^\/(articles|v2)\/.+/; // Matches "/articles/anything" or "/v2/anything"
  if (pattern.test(pathname))
    widget.storeRecentlyVisited(href);
};
