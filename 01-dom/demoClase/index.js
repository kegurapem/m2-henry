const agregar = document.querySelector('#agregar')

// function clickHandler(event){
//     console.log(event.target)
// }
function cambiarColor(event) {
    const elemento = event.target
    
    if(elemento.className === 'recuadro') {
        elemento.className = 'recuadroRojo'
    } else {
        elemento.className = 'recuadro'
    }
}

function clickHandler(){
    const contenedor = document.querySelector('#contenedor')
    
    const newDiv = document.createElement('div')
    newDiv.innerText = 'Kevin'
    newDiv.className = 'recuadro'
    newDiv.addEventListener('click', cambiarColor)


    contenedor.appendChild(newDiv)
}
agregar.addEventListener('click', clickHandler)
