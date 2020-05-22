const api = require("./apiService");

module.exports = {

    cadastrarServico: async (servico) => {
        return await api.post("/servicos/cadastrar", servico)
    },

    getServicosTodos: async () => {
        return await api.get("/servicos/todos")
    },

    meusServicos: async (id) => {
        return await api.get(`/servicos/meus-servicos/${id}`)
    },

    updateServico: async (id, update) => {
        return await api.put(`/servicos/alterar-servico/${id}`, update)
    },

    getCategorias: async () => {
        return await api.get("/categoria-servico")
    },

    filtrarServico: async (id) => {
        return await api.get(`/servicos/buscar-categoria/${id}`)
    },

    cadastrarSolicitacao: async (id, descricao) => {
        return await api.post(`/solicitacoes/nova_solicitacao/${id}`, { descricao })
    },


}