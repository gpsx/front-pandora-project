const api = require("./../apiService")
const utils = require("./../../utils/index")

module.exports = {

    registerProvider: async (provider) => {
        return await api.post("/users", provider)
    },

    registerRequester: async (requester) => {
        return await api.post("/users", requester)
    },

    login: async (email, password) => {
        let credentials = {
            email,
            password: utils.encrypt(password)
        }

        const users = await api.post("/users")
        return verifyUser(users, credentials)

        //return await api.post("/login", credentials)
    },
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

