// Convert arrayBuffer to string encoded in base64
export function arrayBufferToBase64(arrayBuffer) {
  return Buffer.from(arrayBuffer, 'binary').toString('base64');
}
