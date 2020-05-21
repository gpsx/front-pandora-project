const api = require("./apiService");

module.exports = {

    getEndereco: async (id) => {
        return await api.get(`/enderecos/buscar-solicitante/${id}`)
    },

    changeAdress: async (enderecoNovo, id) => {
        return await api.put(`/enderecos/alterar-endereco/${id}`, enderecoNovo)
    },

    emailPrestador: async (email, id) => {
        return await api.put(`/prestadores/alterar_email/${id}`, email)
    },

    emailSolicitante: async (email, id) => {
        return await api.put(`/solicitantes/alterar_email/${id}`, email)
    },
}