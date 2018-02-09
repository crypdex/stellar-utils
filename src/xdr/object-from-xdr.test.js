const { result_meta_xdr } = require('./fixtures/create-offer-response')

const objectFromXdr = require('./object-from-xdr')

describe('objectFromXdr', () => {
  let transactionMeta
  beforeAll(() => {
    transactionMeta = objectFromXdr(result_meta_xdr, 'TransactionMeta')
  })

  test('operations', () => {
    expect(transactionMeta.operations).toHaveLength(1)
  })

  test('changes', () => {
    expect(transactionMeta.operations[0].changes).toHaveLength(3)
  })

  test('created change', () => {
    const created = transactionMeta.operations[0].changes[0].created

    expect(created.lastModifiedLedgerSeq).toBe('7239201')
    expect(created.data)
    expect(created.data.offer)
  })

  test('created change', () => {
    const created = transactionMeta.operations[0].changes[0].created

    expect(created.lastModifiedLedgerSeq).toBe('7239201')
    expect(created.data)
    expect(created.data.offer)
  })

  // THE ALL IMPORTANT!
  test('offer id', () => {
    const created = transactionMeta.operations[0].changes[0].created
    const offer = created.data.offer
    expect(offer.offerId).toBe('100171')
  })
})
