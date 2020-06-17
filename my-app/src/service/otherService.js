const api = require("./apiService");

module.exports = {

    getServicosTodos: async () => {
        return await api.get("/servicos/todos")
    },

    meusServicos: async (id) => {
        return await api.get(`/servicos/meus-servicos/${id}`)
    },

    getCategorias: async () => {
        return await api.get("/categoria-servico")
    },

    filtrarServico: async (id) => {
        return await api.get(`/servicos/buscar-categoria/${id}`)
    },

    cadastrarSolicitacao: async (idPres, idSol, descricao) => {
        return await api.post(`/solicitacoes/nova_solicitacao/${idPres}/${idSol}`, { descricao })
    },

    pegarAvaliacao: async (id) => {
        return await api.get(`/avaliacoes/media/${id}`)
    },


}