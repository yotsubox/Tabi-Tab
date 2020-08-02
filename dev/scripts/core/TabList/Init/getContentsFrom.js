export function getContentsFrom(items) {
  const urls = [];

  for (const item of items) {
    const url = item.getContent();
    if (url) urls.push(url);
  }
  return urls;
}
