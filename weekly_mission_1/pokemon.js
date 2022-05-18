class Pokemon{
    constructor (name){
        this.name = name
    }

     sayHello(){
         console.log(`Mi pokemon ${this.name} te saluda!!!\n`)
    }

    sayMessage(saludo){
         console.log(`Mi pokemon ${this.name} dice: ${saludo}\n`)
    }
}

module.exports = Pokemon