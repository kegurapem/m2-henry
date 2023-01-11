const persona = {
    nombre: 'kevin',
    edad: 29,
    ciudad: 'cusco'
}

// const nombre = persona.nombre
// const edad = persona.edad
// const ciudad = persona.ciudad

const {nombre, edad, ciudad} = persona

console.log(nombre);
console.log(edad);
console.log(ciudad);


//******************************************/

const myArray = ['Kevin', 29, false]

const [alias, edad2, activo] = myArray

console.log(alias, edad2, activo)