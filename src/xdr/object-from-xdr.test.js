const { result_meta_xdr } = require('./fixtures/create-offer-response')

const objectFromXdr = require('./object-from-xdr')

describe('objectFromXdr', () => {
  let transactionMeta
  beforeAll(() => {
    transactionMeta = objectFromXdr(result_meta_xdr, 'TransactionMeta')
    transactionMeta = transactionMeta
  })

  test('operations', () => {
    expect(transactionMeta.operations).toHaveLength(1)
  })

  test('changes', () => {
    expect(transactionMeta.operations[0].changes).toHaveLength(3)
  })

  describe('create operation', () => {
    test('change', () => {
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

  describe('state operation', () => {
    let state
    beforeAll(() => {
      state = transactionMeta.operations[0].changes[1].state
    })

    test('change', () => {
      expect(state.lastModifiedLedgerSeq).toBe('7239201')
      expect(state.data)
      expect(state.data.account)
    })

    // THE ALL IMPORTANT!
    test('signers is an array', () => {
      expect(state.data.account.signers).toBeInstanceOf(Array)
      // const created = transactionMeta.operations[0].changes[1].state
    })
  })
})
