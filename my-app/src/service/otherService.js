const api = require("./apiService");

module.exports = {

    getCategorias: async () => {
        return await api.get("/categoria-servico")
    },

    cadastrarServico: async (servico) => {
        return await api.post("/servicos/cadastrar", servico)
    },

}