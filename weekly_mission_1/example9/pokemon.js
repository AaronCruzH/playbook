export default class Pokemon{
    constructor(name){
        this.name = name
    }

    sayHello(){
         console.log(`Mi pokemon ${this.name} te saluda!!!\n`)
    }

    sayMessage(saludo){
         console.log(`Mi pokemon ${this.name} dice: ${this.saludo}\n`)
    }
}