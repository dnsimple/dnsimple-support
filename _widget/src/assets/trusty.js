import { trustyIcon } from './svgs';
import { isDaytime } from '../utils/daytime';
import { browserLocation } from '../utils/browserLocation';

const prefersReducedMotion = () => typeof window.matchMedia === 'function'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// One quick sweep across the lenses (the first 2% of the cycle ≈ 1.4s),
// then the flash parks off-screen until the next 69-second cycle.
const flashAnimation = '<animateTransform attributeName="transform" type="translate" values="0 0; 560 0; 560 0" keyTimes="0; 0.02; 1" dur="69s" repeatCount="indefinite"/>';

// Trusty already wears aviator glasses: the orange ovals in trustyIcon are
// tinted lenses inside black frames. The lens and rim path data below are
// copied verbatim from trustyIcon so the mirror fill and flash clip match the
// existing geometry exactly; the rims are re-drawn on top so the frame edges
// stay crisp over the gradient.
// If two Trusties are ever in the DOM at once the trusty-shades-* ids
// duplicate, but the defs are identical so url(#...) still renders correctly.
const leftLens = 'M121.172 205.783c38.986.19 111.307-6.162 111.051 37.294-.36 61.092-72.064 120.181-111.051 120.181-38.986 0-70.638-35.281-70.638-78.738 0-43.456 4.882-79.057 70.638-78.737z';
const rightLens = 'M358.92 205.783c-38.986.19-111.306-6.162-111.05 37.294.36 61.092 72.064 120.181 111.05 120.181 38.986 0 70.638-35.281 70.638-78.738 0-43.456-4.881-79.057-70.638-78.737z';
const leftRim = 'M151.572 205.56c18.583.064 37.463.369 54.979 6.347 9.89 3.375 19.484 9.406 23.455 19.016 2.737 6.624 2.482 14.073 1.666 21.082-2.838 24.362-15.731 46.838-32.426 65.608-16.878 18.975-37.81 35.387-61.589 42.821-19.113 5.976-40.704 1.335-57.018-11.438-20.018-15.672-30.253-41.554-30.096-67.518.142-23.49.637-49.152 21.591-64.058 17.167-12.212 40.207-11.484 58.736-11.685 6.897-.082 13.813-.185 20.702-.175zm-2.257 12.617c-20.372.043-41.217-1.572-58.521 4.021-7.55 2.441-14.64 6.717-19.15 13.613-6.839 10.456-7.785 23.517-8.273 35.757-.132 3.327-.19 6.657-.21 9.987-.163 26.921 12.507 54.32 38.015 65.037 10.517 4.419 22.218 5.206 33.395 1.583 13.371-4.335 25.499-12.112 36.52-21.055 18.017-14.619 33.368-32.966 42.137-54.368 3.967-9.68 6.654-20.023 6.368-30.592-.272-10.031-10.221-16.671-21.799-19.714-15.624-4.105-32.096-4.275-48.482-4.269z';
const rightRim = 'M330.794 205.559c29.109.062 59.39-3.325 80.022 14.074 12.234 10.318 16.73 27.805 18.025 43.319 1.378 16.505 1.494 33.071-3.498 48.403-7.775 23.879-26.936 44.443-51.979 50.252-25.527 5.922-52.329-8.178-73.442-25.613-18.847-15.563-34.871-35.022-44.309-57.435-4.875-11.576-8.077-23.933-7.73-36.741.191-7.065 2.767-14.081 7.638-19.228 10.75-11.361 28.28-14.277 44.211-15.829 10.313-1.004 20.712-1.207 31.062-1.202zm-2.243 12.619c-17.869.062-36.317.049-52.801 6.345-5.778 2.206-11.557 5.553-13.913 11.011-1.555 3.6-1.466 7.687-1.191 11.684 1.629 23.715 14.599 45.581 31.037 63.57 14.983 16.397 33.259 30.715 53.839 37.387 16.902 5.48 36.056.433 49.776-12.192 14.31-13.168 21.677-32.915 21.641-52.456-.001-.658-.004-1.315-.008-1.972-.068-11.207-.29-22.473-3.226-33.431-2.024-7.557-5.749-14.864-12.194-19.783-13.253-10.117-31.631-9.894-46.391-9.939-8.866-.044-17.733-.236-26.569-.224z';

// The static skewX on the wrapper keeps the animated translate horizontal on
// screen, and a single flash bar crosses both lenses via the shared clipPath.
const shades = (animated) => '<g class="trusty-shades">'
  + '<defs>'
  + '<linearGradient id="trusty-shades-grad" x1="0" y1="0" x2="0.35" y2="1">'
  + '<stop offset="0" stop-color="#e8f1f8"/>'
  + '<stop offset="0.45" stop-color="#9fc1dd"/>'
  + '<stop offset="0.75" stop-color="#5e7fa6"/>'
  + '<stop offset="1" stop-color="#cfe0ef"/>'
  + '</linearGradient>'
  + '<clipPath id="trusty-shades-clip">'
  + `<path d="${leftLens}"/>`
  + `<path d="${rightLens}"/>`
  + '</clipPath>'
  + '</defs>'
  + `<path d="${leftLens}" fill="url(#trusty-shades-grad)"/>`
  + `<path d="${rightLens}" fill="url(#trusty-shades-grad)"/>`
  + '<g clip-path="url(#trusty-shades-clip)">'
  + '<g transform="skewX(-18)">'
  + `<rect x="40" y="195" width="30" height="140" fill="#fff" opacity="0.8">${animated ? flashAnimation : ''}</rect>`
  + '</g>'
  + '</g>'
  + `<path d="${leftRim}" fill="#080605" fill-rule="nonzero"/>`
  + `<path d="${rightRim}" fill="#080605" fill-rule="nonzero"/>`
  + '</g>';

export const getTrustyIcon = () => {
  // ?trusty=day|night forces the look for development and testing.
  const override = new URLSearchParams(browserLocation.getSearch()).get('trusty');
  const wearShades = override ? override === 'day' : isDaytime();
  if (!wearShades) return trustyIcon;

  return trustyIcon.replace('</g></g></svg>', `${shades(!prefersReducedMotion())}</g></g></svg>`);
};
