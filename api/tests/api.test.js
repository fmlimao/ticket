const UserClass = require('./user')

describe('Testando API', () => {
  test('Testando construct', () => {
    const user = new UserClass(1, 'John Doe', 'john@doe.com', '123456', 'admin')
    expect(user.name).toBe('John Doe')
  })

  test('Testando metodo getUser', () => {
    expect(UserClass.getUser(1).name).toBe('John Doe')
  })
})
