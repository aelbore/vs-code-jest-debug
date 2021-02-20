import { expect, jest, test } from '@jest/globals'

import { add } from '../src/calculator'

jest.mock('../src/calculator', () => {
  return { 
    add(x: number, y: number) {
      return (x + 2) + y
    }
  }
})

test('should add value', () => {
  const result = add(1, 2)
  expect(result).toEqual(5)
})