// We cannot longer mock the window.location behavior.
// See: https://github.com/dnsimple/dnsimple-app/pull/30841#issuecomment-2980551906

let currentHref = 'https://support.dnsimple.com/articles/example-article';
let currentSearch = '?hello=world';

export const browserLocation = {
  getHref: jest.fn(() => currentHref),
  setHref: jest.fn((url) => { currentHref = url; }),
  assign: jest.fn(),
  reload: jest.fn(),
  getSearch: jest.fn(() => currentSearch),
  setSearch: jest.fn((search) => { currentSearch = search; }),
};
