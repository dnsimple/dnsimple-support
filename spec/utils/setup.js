// jsdom does not implement scrollIntoView. The widget calls it to bring the
// selected article into view; in a real browser it works, in jsdom it is a
// no-op stub so the code under test can run.
if (!Element.prototype.scrollIntoView)
  Element.prototype.scrollIntoView = () => {};
