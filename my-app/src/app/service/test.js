const api = require("../apiService")
const utils = require("../../utils")
async function showUsers() {
    const users = await api.get("/users")
    console.log(users);
}
async function newUser() {
    user = await api.get("/users")
    //user = await api.get("/users")
    params = {
        id: user[user.length - 1].id + 1,
        "nome": "Massaru",
        "senha": utils.encrypt("senha123"),
        "email": "outroemail@gmail.com",
        "cpf": "111111",
        "telefone": "40028922",
        "cnpj": "333333333",
        "endereco": {
            "bairro": "Jardim Bela Vista",
            "cep": "09041370",
            "complemento": "ap172 b1",
            "numero": "161",
            "rua": "são josé operario"
        }
    }
    const users = await api.post("/users", params)
    console.log(users);
}

async function deleteUser() {
    user = await api.get("/users")
    const deleted = await api.delete(`/users/${user[user.length - 1].id}`)
    console.log(deleted);
}

newUser()
