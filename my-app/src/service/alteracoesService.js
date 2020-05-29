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

    senhaPrestador: async (senha, id) => {
        return await api.put(`/prestadores/alterar_senha/${id}`, senha)
    },

    senhaSolicitante: async (senha, id) => {
        return await api.put(`/solicitantes/alterar_senha/${id}`, senha)
    },

    telefonePrestador: async (telefone, id) => {
        return await api.put(`/prestadores/alterar_telefone/${id}`, telefone)
    },

    telefoneSolicitante: async (telefone, id) => {
        return await api.put(`/solicitantes/alterar_telefone/${id}`, telefone)
    },

    imgPrestador: async (imagem, id) => {
        return await api.put(`/prestadores/alterar_imagem/${id}`, imagem)
    },

    imgSolicitante: async (imagem, id) => {
        return await api.put(`/solicitantes/alterar_imagem/${id}`, imagem)
    },

}