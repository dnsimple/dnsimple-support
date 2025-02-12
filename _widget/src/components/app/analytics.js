export const trackSearch = (() => {
  let timeout;
  return (query, results) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (window.posthog)
        window.posthog.capture('support-search', { query, results });
    }, 900);
  };
})();
