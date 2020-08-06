export function getContentsFrom(items) {
  const itemContents = [];

  for (const item of items) {
    const itemContent = item.getContent();
    if (itemContent) itemContents.push(itemContent);
  }
  return itemContents;
}
