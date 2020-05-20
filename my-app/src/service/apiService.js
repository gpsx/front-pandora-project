const axios = require('axios')
const baseUrl = "http://localhost:8080"

module.exports = {
    get: async (uri) => {
        let res = await axios.get(baseUrl + uri)
        return {
            data: res.data,
            status: res.status
        }
    },

    post: async (uri, params) => {
        let res = await axios.post(baseUrl + uri, params);
        return {
            data: res.data,
            status: res.status
        }
    },

    put: async (uri, params) => {
        let res = await axios.put(baseUrl + uri, params);
        return {
            data: res.data,
            status: res.status
        }
    },

    delete: async (uri) => {
        let res = await axios.delete(baseUrl + uri)
        return res.status
    },



    postImg: async (url, params, headers) => {
        let res = await axios.post(url, params, headers);
        return {
            data: res.data,
            status: res.status
        }
    }

}