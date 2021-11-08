// Export a User class with a constructor and methods
module.exports = class User {
  constructor (id, name, email, password, role) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.role = role
  }

  // Method to return a user object
  static getUser (id) {
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
      role: 'admin'
    }

    return user
  }
}
