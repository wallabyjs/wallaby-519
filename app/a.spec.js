import a from './a';
import { expect } from 'chai'

describe('a', () => {
  it('should be ok', () => {
    expect(a.b).to.be.undefined
  })
});
