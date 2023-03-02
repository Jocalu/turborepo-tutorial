import { capitalizeString } from './capitalizeString'

describe('capitalizeString function', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalizeString('hello')).toBe('Hello')
  })

  test('does not change an already capitalized string', () => {
    expect(capitalizeString('World')).toBe('World')
  })

  test('works with an empty string', () => {
    expect(capitalizeString('')).toBe('')
  })
})
