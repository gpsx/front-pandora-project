const api = require("./apiService");

module.exports = {

    getEndereco: async (id) => {
        return await api.get(`/enderecos/buscar-solicitante/${id}`)
    },

    changeAdress: async (enderecoNovo, id) => {
        return await api.put(`/enderecos/alterar-endereco/${id}`, enderecoNovo)
    },
}