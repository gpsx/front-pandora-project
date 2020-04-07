const api = require("../apiservice")
const utils = require("./../../utils/index")

module.exports = {

    registerProvider: async (provider) => {
        return await api.post("/users", provider)
    },

    registerRequester: async (requester) => {
        return await api.post("/users", requester)
    },

    login: async (email, senha) => {

        let credentials = {
            email,
            password: utils.encrypt(senha)
        }

        const users = await api.get("/users")
        return await verifyUser(users, credentials)
        

        //return await api.get("/solicitante/login", credentials)
    }
}

function verifyUser(users, credentials) {
    for (const user of users) {
        if (user.email === credentials.email && user.senha === credentials.password) {
            user.status = 200
            return user
        }
    }
    return {
        status: 404,
        Message: "Não encontrado"
    }
}

