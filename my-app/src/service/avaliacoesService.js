const api = require('./apiService');
const url = "/avaliacoes"

module.exports = {

    avaliar: async (avaliacao) => {
        return await api.post(`${url}`, avaliacao)
    },
}