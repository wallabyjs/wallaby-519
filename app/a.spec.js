import a from './a';
import {expect} from 'chai'

import * as all from 'd3-scale'
import {scaleBand, scalePoint} from 'd3-scale'

describe('a', () => {
  it('should be ok', () => {
    expect(a.b).to.be.undefined
    console.log(all);
    console.log(scaleBand);
  })
});
