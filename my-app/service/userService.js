const api = require("./apiService")
const CryptoJS = require("crypto-js") 

encrypt = (string) => {
    var hash = CryptoJS.SHA256(string);
    return hash.toString(CryptoJS.enc.Hex)
}
module.exports = {
    registerProvider: async (provider) => {
        return await api.post("/registerProvider", provider)
    },
    registerRequester: async (requester) => {
        return await api.post("/registerRequester", requester)
    },
    login: async (user, password) => {
        credentials = {
            user, 
            password = encrypt(password)
        }
        return await api.post("/login", credentials)
    },
}

