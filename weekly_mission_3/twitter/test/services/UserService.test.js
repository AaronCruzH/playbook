const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "CruzAaronFco", "Aaron")
        expect(user.username).toBe("CruzAaronFco")
        expect(user.name).toBe("Aaron")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
      })
      test("2. Get all user data in a list", () => {
          const user = UserService.create(1, "CruzAaronFco", "Aaron")
          const userInfoInList = UserService.getInfo(user)
          expect(userInfoInList[0]).toBe(1)
          expect(userInfoInList[1]).toBe("CruzAaronFco")
          expect(userInfoInList[2]).toBe("Aaron")
          expect(userInfoInList[3]).toBe("Sin bio")
        })
    test("3. Update username", () => {
        const user = UserService.create(1, "CruzAaronFco", "Aaron")
        UserService.updateUserUsername(user, "Aaron")
        expect(user.username).toBe("Aaron")
        })
    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "CruzAaronFco1", "Aaron")
        const user2 = UserService.create(1, "CruzAaronFco2", "Aaron")
        const user3 = UserService.create(1, "CruzAaronFco3", "Aaron")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("CruzAaronFco1")
        expect(usernames).toContain("CruzAaronFco2")
        expect(usernames).toContain("CruzAaronFco3")
        })
})