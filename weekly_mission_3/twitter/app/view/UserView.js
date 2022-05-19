const UserService = require('./../services/UserService')

class UserView{

  static createUser(payload){
    if(payload === null){
      console.log("Error es null")
      return {error: "El payload no existe."}
    }else{
        return {error: "Error, las propiedades del payload necesitan tener un valor válido"}
      }
}
}

module.exports = UserView