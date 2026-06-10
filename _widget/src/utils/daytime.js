// Daytime detection based on the NOAA sunrise equation.
//
// Location is estimated without ever prompting the user: longitude is derived
// from the timezone offset and latitude assumed mid-latitude. If geolocation
// permission was already granted elsewhere, real coordinates are cached
// silently — we never trigger a permission prompt.

const DEGREES = Math.PI / 180;

let grantedCoordinates = null;

export const estimatedCoordinates = () => grantedCoordinates || {
  latitude: 35,
  longitude: -new Date().getTimezoneOffset() / 4,
};

export const sunTimes = (date, latitude, longitude) => {
  const startOfYear = Date.UTC(date.getUTCFullYear(), 0, 1);
  const dayOfYear = Math.floor((date.getTime() - startOfYear) / 86400000) + 1;
  const gamma = (2 * Math.PI / 365) * (dayOfYear - 1 + (date.getUTCHours() - 12) / 24);

  const equationOfTime = 229.18 * (0.000075
    + 0.001868 * Math.cos(gamma) - 0.032077 * Math.sin(gamma)
    - 0.014615 * Math.cos(2 * gamma) - 0.040849 * Math.sin(2 * gamma));
  const declination = 0.006918
    - 0.399912 * Math.cos(gamma) + 0.070257 * Math.sin(gamma)
    - 0.006758 * Math.cos(2 * gamma) + 0.000907 * Math.sin(2 * gamma)
    - 0.002697 * Math.cos(3 * gamma) + 0.00148 * Math.sin(3 * gamma);

  // Zenith of 90.833° accounts for atmospheric refraction and the sun's radius.
  const cosHourAngle = (Math.cos(90.833 * DEGREES) / (Math.cos(latitude * DEGREES) * Math.cos(declination)))
    - Math.tan(latitude * DEGREES) * Math.tan(declination);

  if (cosHourAngle < -1) return { polarDay: true };
  if (cosHourAngle > 1) return { polarNight: true };

  const hourAngle = Math.acos(cosHourAngle) / DEGREES;

  return {
    sunriseUtcMinutes: 720 - 4 * (longitude + hourAngle) - equationOfTime,
    sunsetUtcMinutes: 720 - 4 * (longitude - hourAngle) - equationOfTime,
  };
};

export const isDaytime = (date = new Date(), coordinates = estimatedCoordinates()) => {
  try {
    const times = sunTimes(date, coordinates.latitude, coordinates.longitude);
    if (times.polarDay) return true;
    if (times.polarNight) return false;

    const nowUtcMinutes = date.getUTCHours() * 60 + date.getUTCMinutes();
    const dayLength = times.sunsetUtcMinutes - times.sunriseUtcMinutes;
    const sinceSunrise = ((nowUtcMinutes - times.sunriseUtcMinutes) % 1440 + 1440) % 1440;

    if (Number.isNaN(sinceSunrise) || Number.isNaN(dayLength)) throw new Error('sun math failed');
    return sinceSunrise < dayLength;
  } catch {
    const hour = date.getHours();
    return hour >= 6 && hour < 18;
  }
};

const refineCoordinates = () => {
  try {
    if (!navigator.permissions || !navigator.geolocation) return;
    navigator.permissions.query({ name: 'geolocation' }).then((status) => {
      if (status.state !== 'granted') return;
      navigator.geolocation.getCurrentPosition((position) => {
        grantedCoordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      }, () => {});
    }).catch(() => {});
  } catch {
    // Location refinement must never break the widget.
  }
};

refineCoordinates();
