const api = require("./apiService")
const utils = require("../src/utils/index") 

module.exports = {
    registerProvider: async (provider) => {
        return await api.post("/users", provider)
    },
    registerRequester: async (requester) => {
        return await api.post("/users", requester)
    },
    login: async (email, password) => {
        credentials = {
            email, 
            password = utils.encrypt(password)
        }

        users = await api.post("/users", requester)
        return verifyUser(users, credentials)
        
        //return await api.post("/login", credentials)
    },
}

verifyUser = (users, credentials) => {
    for (const user of users) {
        if (user.email == credentials.email && user.senha == credentials.password) {
            user.status = 200
            return user
        }
    }
    return {
        status: 404,
        Message: "Não encontrado"
    }
}

