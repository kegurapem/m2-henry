

const urlApi = 'https://jsonplaceholder.typicode.com/users'
const responseHandler = (response) => {
    console.log(response)
    // const usersList = $('#usersList')[0]
    const [usersList] = $('#usersList') // destructuring
    console.log(usersList)

    response.forEach((user) => {
        const newLi = document.createElement('li')
        newLi.innerText = user.name
        usersList.appendChild(newLi)
    })
}

const [loadUsers] = $('#loadUsers')

const fetchUsers = () => {
    $.get(urlApi, responseHandler)
}


loadUsers.addEventListener("click", fetchUsers)

