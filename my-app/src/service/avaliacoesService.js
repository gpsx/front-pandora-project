const api = require('./apiService');
const url = "/avaliacoes"

module.exports = {

    avaliar: async (avaliacao) => {
        return await api.post(`${url}/novo`, avaliacao)
    },

    byId: async (id) => {
        return await api.get(`${url}/minhas_avaliacoes/${id}`)
    },

}