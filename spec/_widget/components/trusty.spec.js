// Mock the browserLocation and daytime modules first
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

const mockIsDaytime = jest.fn();

jest.mock('../../../_widget/src/utils/daytime.js', () => ({
  isDaytime: mockIsDaytime
}));

// Import after mocking
const { getTrustyIcon } = require('../../../_widget/src/assets/trusty.js');
const { trustyIcon } = require('../../../_widget/src/assets/svgs.js');

describe('getTrustyIcon', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockBrowserLocation.getSearch.mockReturnValue('');
    delete window.matchMedia;
  });

  it('returns the plain icon at night', () => {
    mockIsDaytime.mockReturnValue(false);

    expect(getTrustyIcon()).toBe(trustyIcon);
  });

  it('adds mirrorshades during the day', () => {
    mockIsDaytime.mockReturnValue(true);

    const icon = getTrustyIcon();

    expect(icon).toContain('class="trusty-shades"');
    expect(icon.endsWith('</g></g></svg>')).toBe(true);
  });

  it('animates the flash on a 69 second cycle', () => {
    mockIsDaytime.mockReturnValue(true);

    const icon = getTrustyIcon();

    expect(icon).toContain('animateTransform');
    expect(icon).toContain('dur="69s"');
    expect(icon).toContain('keyTimes="0; 0.02; 1"');
  });

  it('omits the flash animation when the user prefers reduced motion', () => {
    mockIsDaytime.mockReturnValue(true);
    window.matchMedia = jest.fn(() => ({ matches: true }));

    const icon = getTrustyIcon();

    expect(icon).toContain('class="trusty-shades"');
    expect(icon).not.toContain('animateTransform');
  });

  it('honors the ?trusty=day override', () => {
    mockIsDaytime.mockReturnValue(false);
    mockBrowserLocation.getSearch.mockReturnValue('?trusty=day');

    expect(getTrustyIcon()).toContain('class="trusty-shades"');
  });

  it('honors the ?trusty=night override', () => {
    mockIsDaytime.mockReturnValue(true);
    mockBrowserLocation.getSearch.mockReturnValue('?trusty=night');

    expect(getTrustyIcon()).toBe(trustyIcon);
  });
});
