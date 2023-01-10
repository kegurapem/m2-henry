// DEFAULT
const sumar = (num1, num2 = 10) => {
    return num1 + num2
}


console.log(sumar(5))


// REST
function myFunction(x, ...y) {
    return x * y.length
} 

console.log(myFunction(5, 15, 20, 60, 'Hello'));



// SPREAD
const myArray = [1, 8, 9, 4, 3, 5, 7]

// copia de un array. "NO ES POR REFERENCIA"
const arrayCopy = [...myArray]

myArray.push(1000)

console.log(myArray)
console.log(arrayCopy)

//***********************************************

const persona = {
    nombre: 'kevin',
    edad: 29
}

const copyObject = {
    ...persona,
    activo: 'true',
    estudiando: true
}

console.log(persona)
console.log(copyObject)