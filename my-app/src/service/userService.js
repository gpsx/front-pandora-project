const api = require("./apiService")

module.exports = {
    
    registerProvider: async (provider) => {
        return await api.post("/users", provider)
    },

    registerRequester: async (requester) => {
        return await api.post("/users", requester)
    },

    login: async (credentials) => {
        return await api.post("/solicitante/login", credentials)
    },
}

