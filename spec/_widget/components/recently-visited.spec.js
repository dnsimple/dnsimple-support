import storeRecentlyVisited from '../../../_widget/src/recently-visited.js';

describe('storeRecentlyVisited', () => {
  let widget;

  beforeEach(() => {
    widget = { storeRecentlyVisited: jest.fn() };
  });

  it('delegates to the widget if visiting a support article', () => {
    const location = {
      origin: 'https://support.dnsimple.com',
      pathname: '/articles/example-article',
      href: 'https://support.dnsimple.com/articles/example-article'
    };
    Object.defineProperty(window, "location", { value: location });

    storeRecentlyVisited(widget);

    expect(widget.storeRecentlyVisited).toHaveBeenCalledWith(location.href);
  });

  it('delegates to the widget if visiting a developer article', () => {
    const location = {
      origin: 'https://developer.dnsimple.com',
      pathname: '/articles/example-article',
      href: 'https://developer.dnsimple.com/articles/example-article'
    };
    Object.defineProperty(window, "location", { value: location });

    storeRecentlyVisited(widget);

    expect(widget.storeRecentlyVisited).toHaveBeenCalledWith(location.href);
  });

  it('does not delegate to the widget if not in the support or developer site', () => {
    const location = {
      origin: 'https://other.dnsimple.com',
    };
    Object.defineProperty(window, "location", { value: location });

    storeRecentlyVisited(widget);

    expect(widget.storeRecentlyVisited).not.toHaveBeenCalled();
  });

  it('does not delegate to the widget if not visiting a support article', () => {
    const location = {
      origin: 'https://support.dnsimple.com',
      pathname: '/categories/example-category',
    };
    Object.defineProperty(window, "location", { value: location });

    storeRecentlyVisited(widget);

    expect(widget.storeRecentlyVisited).not.toHaveBeenCalled();
  });
});
