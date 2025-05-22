export default (widget) => {
  const { origin, pathname, href } = window.location;

  if (!['https://support.dnsimple.com', 'https://developer.dnsimple.com'].includes(origin)) return;

  const pattern = /^\/(articles|v2)\/.+/; // Matches "/articles/anything" or "/v2/anything"
  if (pattern.test(pathname))
    widget.storeRecentlyVisited(href);
};
