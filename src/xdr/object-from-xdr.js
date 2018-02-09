const extrapolateFromXdr = require('./extrapolate-from-xdr')
const convertTree = require('./convert-tree')

/**
 *
 * @param {*} xdrDoc - base64 encoded binary XDR document as returned by Stellar
 * @param {*} xdrType - This should be one of the xdr.* types from stellar-sdk
 */
function objectFromXdr(xdrDoc, xdrType) {
  const tree = extrapolateFromXdr(xdrDoc, xdrType)
  return convertTree(tree[0].nodes)
}

module.exports = objectFromXdr
