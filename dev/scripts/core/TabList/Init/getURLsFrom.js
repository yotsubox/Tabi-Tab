export function getURLsFrom(items) {
  const urls = [];

  for (const item of items) {
    const url = item.getURL();
    if (url) urls.push(url);
  }
  return urls;
}
