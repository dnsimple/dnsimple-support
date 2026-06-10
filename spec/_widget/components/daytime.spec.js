import { sunTimes, isDaytime } from '../../../_widget/src/utils/daytime.js';

describe('sunTimes', () => {
  it('returns roughly 06:00/18:00 UTC at the equinox on the prime meridian', () => {
    const times = sunTimes(new Date(Date.UTC(2026, 2, 20, 12)), 35, 0);

    // Within 30 minutes of 06:00 and 18:00 UTC.
    expect(times.sunriseUtcMinutes).toBeGreaterThan(330);
    expect(times.sunriseUtcMinutes).toBeLessThan(390);
    expect(times.sunsetUtcMinutes).toBeGreaterThan(1050);
    expect(times.sunsetUtcMinutes).toBeLessThan(1110);
  });

  it('reports polar day in midsummer above the arctic circle', () => {
    expect(sunTimes(new Date(Date.UTC(2026, 5, 21, 12)), 78, 15).polarDay).toBe(true);
  });

  it('reports polar night in midwinter above the arctic circle', () => {
    expect(sunTimes(new Date(Date.UTC(2026, 11, 21, 12)), 78, 15).polarNight).toBe(true);
  });
});

describe('isDaytime', () => {
  const greenwich = { latitude: 35, longitude: 0 };
  const tokyo = { latitude: 35, longitude: 139.7 };

  it('is true at local noon', () => {
    expect(isDaytime(new Date(Date.UTC(2026, 2, 20, 12)), greenwich)).toBe(true);
  });

  it('is false at local midnight', () => {
    expect(isDaytime(new Date(Date.UTC(2026, 2, 20, 0)), greenwich)).toBe(false);
  });

  it('handles longitudes far from the prime meridian', () => {
    // Solar noon in Tokyo is around 03:00 UTC; local midnight around 15:00 UTC.
    expect(isDaytime(new Date(Date.UTC(2026, 2, 20, 3)), tokyo)).toBe(true);
    expect(isDaytime(new Date(Date.UTC(2026, 2, 20, 15)), tokyo)).toBe(false);
  });

  it('is always true during polar day', () => {
    expect(isDaytime(new Date(Date.UTC(2026, 5, 21, 0)), { latitude: 78, longitude: 15 })).toBe(true);
  });

  it('is never true during polar night', () => {
    expect(isDaytime(new Date(Date.UTC(2026, 11, 21, 12)), { latitude: 78, longitude: 15 })).toBe(false);
  });

  it('falls back to 6am-6pm local time when the sun math fails', () => {
    const invalid = { latitude: NaN, longitude: NaN };

    expect(isDaytime(new Date(2026, 2, 20, 12, 0), invalid)).toBe(true);
    expect(isDaytime(new Date(2026, 2, 20, 3, 0), invalid)).toBe(false);
  });
});
