const api = require("./apiService");
const url = "/servicos";

module.exports = {

    cadastrar: async (servico) => {
        return await api.post(`${url}/cadastrar`, servico)
    },

    deleteService: async (id) => {
        return await api.delete(`${url}/delete-id/${id}`)
    },

    getServicoById: async (id) => {
        return await api.get(`${url}/por-id/${id}`)
    },

    update: async (id, servico) => {
        return await api.put(`${url}/alterar-servico/${id}`, servico)
    },

    filtrarPorPalavra: async (palavra) => {
        return await api.get(`${url}/busca-palavra?filtro=${palavra}`);
    },

    filtrarPorNota: async (nota) => {
        return await api.get(`${url}/por-nota/${nota}`)
    },


}