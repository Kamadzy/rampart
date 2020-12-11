// Convert arrayBuffer to string encoded in base64
export function arrayBufferToBase64(arrayBuffer) {
  return Buffer.from(arrayBuffer, 'binary').toString('base64');
}

/**
 * Scan the dir by provided path, generate and return array of strings
 *
 * @param path - relative path to dir with images
 * @return array of strings (relative paths)
 */
export function getImageUrls(path = './images/') {
  const context = require.context(path, false, /\.(png|jp?eg)$/);

  return context.keys().map(context);
}