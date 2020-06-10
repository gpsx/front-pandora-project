const api = require('./apiService')

module.exports = {
    buscarCep: async (cep) => {
        return await api.get(`/consultas/cep/${cep}`);
    }
}