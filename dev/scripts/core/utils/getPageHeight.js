//stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
export function getPageHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
}
