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
})