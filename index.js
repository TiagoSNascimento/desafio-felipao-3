class heroiDeAventura{
    constructor(name, age, tipo){
        this.name = name
        this.age = age
        this.tipo = tipo
    }
    atacar(){
        let ataque
        if (this.tipo == "Mago"){
            ataque = "magia"
        } else if (this.tipo == "Guerreiro"){
            ataque = "espada"
        } else if (this.tipo == "Monge"){
            ataque = "artes marciais"
        } else if (this.tipo == "Ninja"){
            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let guerreiro = new heroiDeAventura("Davi", 16, "Guerreiro")
let mago = new heroiDeAventura("Saul", 19, "Mago")
let monge = new heroiDeAventura("Absalão", 20, "Monge")
let ninja = new heroiDeAventura("Salomão", 17, "Ninja")

guerreiro.atacar()
mago.atacar()
monge.atacar()
ninja.atacar()
