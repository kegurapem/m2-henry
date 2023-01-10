// ANTES
function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}

const kevin = new Persona('Kevin', 29)
console.log(kevin)

// NOW
class Persona2 {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}

const kegura = new Persona2('Kegura', 29)
console.log(kegura)


class Jugador extends Persona2{
    constructor(nombre, edad, numero, posicion) {
        super(nombre, edad)
        this.numero = numero
        this.posicion = posicion
    }
}

const wendy = new Jugador('Wendy', 34, 100, 'Defense')
console.log(wendy)