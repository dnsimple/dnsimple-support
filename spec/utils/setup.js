// jsdom does not implement scrollIntoView. The widget calls it to bring the
// selected article into view; in a real browser it works, in jsdom it is a
// no-op stub so the code under test can run. This file runs for every spec
// via setupFilesAfterEnv, including ones that opt into the node environment
// (e.g. `@jest-environment node`), where Element does not exist.
if (typeof Element !== 'undefined' && !Element.prototype.scrollIntoView)
  Element.prototype.scrollIntoView = () => {};
