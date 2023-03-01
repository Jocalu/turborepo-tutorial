import { capitalizeString } from './capitalizeString'

describe('capitalizeString function', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalizeString('hello')).toBe('Hello')
  })

  test('does not change an already capitalized string', () => {
    expect(capitalizeString('Er')).toBe('Er')
  })

  test('works with an empty string', () => {
    expect(capitalizeString('')).toBe('')
  })
})
