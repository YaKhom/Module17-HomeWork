import { definePrime } from "./definePrime";

describe ('tests for definePrime', () => {
  it ('should operate corrently with simple number', () => {
    expect(definePrime(11)).toBe('Число 11 - простое число')
  }),
  it ('should operate corrently with complex number', () => {
    expect(definePrime(18)).toBe('Число 18 - составное число')
  })
  it ('should operate corrently with invalid number', () => {
    expect(definePrime(1003)).toBe('Данные неверны')
  })
})

describe ('tests for definePrime', () => {
  const simple = 11
  const complex = 18

  it ('should operate corrently with simple, complex and invalid number', () => {
    expect(definePrime(simple)).toBe(`Число ${simple} - простое число`)
    expect(definePrime(complex)).toBe(`Число ${complex} - составное число`)
    expect(definePrime(1003)).toBe('Данные неверны')
  })
})
