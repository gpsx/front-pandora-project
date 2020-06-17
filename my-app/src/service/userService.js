const api = require("./apiService")

module.exports = {

    registerProvider: async (provider) => {
        return await api.post("/users", provider)
    },

    registerRequester: async (requester) => {
        return await api.post("/users", requester)
    },

    login: async (credentials) => {
        return await api.post("/user/logar", credentials)
    },

    registerSolicitante: async (informacoes) => {
        return await api.post("/solicitantes/cadastrar", informacoes)
    },

    registerEndereco: async (informacoes) => {
        return await api.post("/enderecos/cadastrar", informacoes)
    },

    registerPrestador: async (prestador) => {
        return await api.post("/prestadores/cadastrar", prestador)
    },

}

