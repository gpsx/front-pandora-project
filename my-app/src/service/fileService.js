const api = require('./apiService');
const uri = "/solicitacoes";

module.exports = {
    verArquivo: async (id) => {
        return await api.get(`${uri}/visualizar-arquivo/${id}`);
    },

    download: async (id) => {
        return `http://ec2-52-20-131-9.compute-1.amazonaws.com:8080/${uri}/gerar-arquivo/${id}`;
    }
}