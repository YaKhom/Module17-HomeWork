import { reverseString } from "./reverse";

describe ('Test for reverseString function',() => {
  const family = 'Soprano'
  it (`Test the word ${family}`, () => {
    const result = reverseString(family)
    expect(result).toBe('onarpoS')
  }) 
})