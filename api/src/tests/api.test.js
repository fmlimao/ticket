const User = require('./user')

const user = new User('John', 30)

describe('Testando Usuario', () => {
  test('Testando nome', () => {
    expect(user.getName()).toBe('John')
  })

  test('Testando idade', () => {
    expect(user.getAge()).toBe(30)
  })
})
