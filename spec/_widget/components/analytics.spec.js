import { trackSearch } from '../../../_widget/src/components/app/analytics.js';

jest.useFakeTimers();

beforeEach(() => {
  jest.clearAllTimers();
  jest.clearAllMocks();
});

describe('Analytics', () => {
  describe('trackSearch', () => {
    beforeEach(() => {
      global.window.posthog = { capture: jest.fn() };
    });

    it('debounces the tracking event', () => {
      trackSearch('query1', ['result1']);
      trackSearch('query2', ['result2']);
      trackSearch('query3', ['result3']);

      // Fast-forward time but not enough for debounce to trigger
      jest.advanceTimersByTime(800);
      expect(window.posthog.capture).not.toHaveBeenCalled();

      // Advance past debounce threshold
      jest.advanceTimersByTime(100);
      expect(window.posthog.capture).toHaveBeenCalledTimes(1);
      expect(window.posthog.capture).toHaveBeenCalledWith('support-search', { query: 'query3', results: ['result3'] });
    });
  });

  it('should not throw an error if posthog is undefined', () => {
    delete global.window.posthog;

    expect(() => {
      trackSearch('test query', ['result1']);
      jest.advanceTimersByTime(900);
    }).not.toThrow();
  });
});
