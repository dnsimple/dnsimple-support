// Mock the browserLocation module first
const mockBrowserLocation = {
  getHref: jest.fn(),
  setHref: jest.fn(),
  assign: jest.fn(),
  reload: jest.fn(),
  getSearch: jest.fn(() => ''),
  setSearch: jest.fn(),
};

jest.mock('../../../_widget/src/utils/browserLocation.js', () => ({
  browserLocation: mockBrowserLocation
}));

// Import after mocking
const storeRecentlyVisited = require('../../../_widget/src/recently-visited.js').default;

describe('storeRecentlyVisited', () => {
  let widget;

  beforeEach(() => {
    widget = { storeRecentlyVisited: jest.fn() };
    mockBrowserLocation.getHref.mockReturnValue('https://support.dnsimple.com/articles/example-article');
  });

  it('delegates to the widget if visiting a support article', () => {
    mockBrowserLocation.getHref.mockReturnValue('https://support.dnsimple.com/articles/example-article');

    storeRecentlyVisited(widget);

    expect(widget.storeRecentlyVisited).toHaveBeenCalledWith('https://support.dnsimple.com/articles/example-article');
  });

  it('delegates to the widget if visiting a developer article', () => {
    mockBrowserLocation.getHref.mockReturnValue('https://developer.dnsimple.com/articles/example-article');

    storeRecentlyVisited(widget);

    expect(widget.storeRecentlyVisited).toHaveBeenCalledWith('https://developer.dnsimple.com/articles/example-article');
  });

  it('does not delegate to the widget if not in the support or developer site', () => {
    mockBrowserLocation.getHref.mockReturnValue('https://other.dnsimple.com/articles/example-article');

    storeRecentlyVisited(widget);

    expect(widget.storeRecentlyVisited).not.toHaveBeenCalled();
  });

  it('does not delegate to the widget if not visiting a support article', () => {
    mockBrowserLocation.getHref.mockReturnValue('https://support.dnsimple.com/categories/example-category');

    storeRecentlyVisited(widget);

    expect(widget.storeRecentlyVisited).not.toHaveBeenCalled();
  });
});
