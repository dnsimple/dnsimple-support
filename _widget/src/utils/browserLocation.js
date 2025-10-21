// We cannot longer mock the window.location behavior.
// See: https://github.com/dnsimple/dnsimple-app/pull/30841#issuecomment-2980551906

export const browserLocation = {
  getHref: () => window.location.href,
  setHref: (url) => { window.location.href = url; },
  assign: (url) => window.location.assign(url),
  reload: () => window.location.reload(),
  getSearch: () => window.location.search,
  setSearch: (search) => { window.location.search = search; },
};
