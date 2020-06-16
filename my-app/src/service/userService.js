const api = require("./apiService")
import { socketServer } from "./../../utils/index"
const socket = socketServer;

module.exports = {

    registerProvider: async (provider) => {
        return await api.post("/users", provider)
    },

    registerRequester: async (requester) => {
        return await api.post("/users", requester)
    },

    login: async (credentials) => {
        let user = await api.post("/user/logar", credentials)
        socket.emit("userConnect", user.cpf);
        return user;
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

    logoff: async (cpf) => {
        socket.emit("userDisconnect", cpf)
        return await api.get("/user");
    },

}

