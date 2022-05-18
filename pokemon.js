class Pokemon{
    constructor(name){
        this.name = name
    }

    sayHello(){
        return console.log(`Mi pokemon ${this.name} te saluda!!!\n`)
    }

    sayMessage(saludo){
        return console.log(`Mi pokemon ${this.name} dice: ${this.saludo}\n`)
    }
}