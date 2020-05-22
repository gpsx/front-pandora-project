const api = require("./apiService");

module.exports = {

    deleteService: async (id) => {
        return await api.delete(`/servicos/delete-id/${id}`)
    },

    
    getServicoById: async (id) => {
        return await api.get(`/servicos/por-id/${id}`)
    },



}