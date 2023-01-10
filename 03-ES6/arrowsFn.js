// const sumar = function (num1, num2) {
//     const resultado = num1 + num2
//     return resultado
// }

// console.log(sumar(5, 8 ));

const sumar = (num1, num2) => {
    const resultado = num1 + num2
    return resultado 
}

console.log(sumar(5, 8 ));



// FILTER
const nums = [1,5,8,9,7,4]

const pares = nums.filter((num) => num % 2 === 0)

console.log(pares);

// FORE EACH: recorrer un array y ejecutar una functión en cada caso. La función recibe el elemento que recorremos. No retorna nada.

// FILTER: recorre un array y retorna por cada elemento una condición a evaluar. Retorna un array nuevo.

// MAP: Transforma los elementos de un array. Retorna un array nuevo.

const bob = {
    name: 'Kevin',
    friends: ['marvin', 'kegura','wendy'],
    printFriends(){
        this.friends.forEach((f) => {
            console.log(`${this.name} knows ${f}`)
        })
    }
}

console.log(bob.printFriends());
