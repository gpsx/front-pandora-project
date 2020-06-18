const api = require('./apiService');
const uri = "/solicitacoes";

module.exports = {
    verArquivo: async (id) => {
        return await api.get(`${uri}/ver-arquivo/${id}`);
    },

    download: async (id) => {
        return `http://localhost:8080/${uri}/gerar-arquivo/${id}`;
    }
}