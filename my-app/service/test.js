const api = require("./apiService")

async function showUsers(){
    const users = await api.get("/users")
    console.log(users);
}
async function newUser(){
    user = await api.get("/users")
    params = {
        id: user[user.length-1].id+1,
        first_name: 'Freda',
        last_name: 'Blaira',
        email: 'freddyb34@gmail.coma'
    }
    const users = await api.post("/users/", params)
    console.log(users);
}

async function deleteUser(){
    user = await api.get("/users")
    const deleted = await api.delete(`/users/${user[user.length-1].id}`)
    console.log(deleted);
}

deleteUser()
