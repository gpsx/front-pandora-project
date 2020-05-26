const api = require("./apiService");
const url = "/servicos";

module.exports = {

    cadastrar: async (servico) => {
        return await api.post(`${url}/cadastrar`, servico)
    },

    deleteService: async (id) => {
        return await api.delete(`/servicos/delete-id/${id}`)
    },


    getServicoById: async (id) => {
        return await api.get(`/servicos/por-id/${id}`)
    },

    update: async (id, servico) => {
        return await api.put(`/servicos/alterar-servico/${id}`, servico)
    },


}