const axios = require('axios')
const baseUrl = "http://localhost:4000"

module.exports = {

    get: async (uri) => {
        let res = await axios.get(baseUrl + uri)
        return res.data
    },

    post: async (uri, params) => {
        return await axios.post(baseUrl + uri, params);
    },

    delete: async (uri) => {
        let res = await axios.delete(baseUrl + uri)
        return res.status
    }
}