const api = require('./apiService');
const url = "/solicitacoes";

module.exports = {

    getAprovados: async (id) => {
        return await api.get(`${url}/prestador/buscar/${id}?status=aprovado`);
    },

    getSolicitados: async (id) => {
        return await api.get(`${url}/prestador/buscar/${id}?status=solicitado`);
    },

    getExecucao: async (id) => {
        return await api.get(`${url}/prestador/buscar/${id}?status=execucao`);
    },

    getFinalizados: async (id) => {
        return await api.get(`${url}/prestador/buscar/${id}?status=finalizado`);
    },

    aprovarSolicitacao: async (id) => {
        return await api.put(`${url}/atualizar_solicitacao/${id}`, { "status": "aprovado" })
    },

    executarSolicitacao: async (id) => {
        return await api.put(`${url}/atualizar_solicitacao/${id}`, { "status": "execucao" })
    },

    cancelarSolicitacao: async (id) => {
        return await api.put(`${url}/atualizar_solicitacao/${id}`, { "status": "cancelado" })
    },

    finalizarSolicitacao: async (id) => {
        return await api.put(`${url}/atualizar_solicitacao/${id}`, { "status": "finalizado" })
    },

}