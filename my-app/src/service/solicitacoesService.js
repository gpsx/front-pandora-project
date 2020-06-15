// import localStorage from './localStorage'
const api = require('./apiService');
const url = "/solicitacoes";

module.exports = {

    getAprovados: async (id, tipo) => {
        return await api.get(`${url}/${tipo}/buscar/${id}?status=aprovado`);
    },

    getSolicitados: async (id, tipo) => {
        return await api.get(`${url}/${tipo}/buscar/${id}?status=solicitado`);
    },

    getExecucao: async (id, tipo) => {
        return await api.get(`${url}/${tipo}/buscar/${id}?status=execucao`);
    },

    getFinalizados: async (id, tipo) => {
        return await api.get(`${url}/${tipo}/buscar/${id}?status=fechado`);
    },

    getCancelados: async (id, tipo) => {
        return await api.get(`${url}/${tipo}/buscar/${id}?status=cancelado`);
    },

    aprovarSolicitacao: async (id) => {
        return await api.put(`${url}/atualizar_solicitacao/${id}`, { "status": "aprovado" });
    },

    executarSolicitacao: async (id, status) => {
        return await api.put(`${url}/atualizar_solicitacao/${id}`, { "status": "EXECUCAO" });
    },

    cancelarSolicitacao: async (id) => {
        return await api.put(`${url}/atualizar_solicitacao/${id}`, { "status": "cancelado" });
    },

    finalizarSolicitacao: async (id) => {
        return await api.put(`${url}/atualizar_solicitacao/${id}`, { "status": "FECHADO" });
    },

}