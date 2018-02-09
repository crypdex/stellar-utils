# Stellar Utils
A collection of functions useful for hacking Stellar.

These functions are written for Node 8.x. Contributions for transpilation are welcome.

## Basic Usage

```javascript
const { objectFromXdr } = require('@crypdex/stellar-utils')

// 1. Make some request and get the tx response (or any other base64 encoded XDR doc)
const { result_meta_xdr } = txResponse

transactionMeta = objectFromXdr(result_meta_xdr, 'TransactionMeta')

// This is the object you are looking for.
// => transactionMeta

```



## Development

* `yarn`

The code is formatted using Prettier to avoid formatting contention. Eslint is also in effect.

## Testing

Run the tests to make sure the libs work

`yarn test`
