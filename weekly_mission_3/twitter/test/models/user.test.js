const User = require('./../../app/models/user')

describe("Unit Tests for User class", () => {

  test('1) Create an User object', () => {
    const user = new User(777,"CruzAaronFco","Aaron","Bio")
    expect(user.id).toBe(777)
    expect(user.username).toBe("CruzAaronFco")
    expect(user.name).toBe("Aaron")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).not.toBe()
    expect(user.lastUpdated).not.toBeUndefined()
  });

  test('3) Add getters', () => {
    const user = new User(1, "carlogilmar", "Carlo", "Bio")
		expect(user.getUsername).toBe("carlogilmar")
		expect(user.getBio).toBe("Bio")
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
	});
})  