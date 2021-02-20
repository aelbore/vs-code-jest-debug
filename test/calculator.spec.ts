import { expect, test } from '@jest/globals'

import { add } from '../src/calculator'

test('should add value', () => {
  const result = add(1, 2)
  expect(result).toEqual(3)
})