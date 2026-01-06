const joinUrl = (baseUrl, path) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (!baseUrl || baseUrl === '/') return normalizedPath;

  const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  return `${normalizedBase}${normalizedPath}`;
};

const stripOrigin = (url) => {
  if (!/^https?:\/\//i.test(url)) return url;

  try {
    const parsed = new URL(url);
    return `${parsed.pathname}${parsed.hash}`;
  } catch (error) {
    return url;
  }
};

export { joinUrl, stripOrigin };
