const api = require("./apiService")

module.exports = {
    validarEmail: async (email) => {
        return await api.post(`/consultas/email`, email)
    },
    recuperarSenha: async(email) =>{
        return await api.post(`/email/senha`, email)
    }
}