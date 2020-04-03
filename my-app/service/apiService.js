const axios = require('axios')
const baseUrl = "http://localhost:3000"
module.exports = {
    get: async (uri) => {
        res = await axios.get(baseUrl+uri)
        return res.data
    },
    post: async (uri, params) => {
        let res = await axios.post(baseUrl+uri, params);
        return { 
            data : res.data, 
            status: res.status 
        } 
    },
    delete: async (uri) => {
        res = await axios.delete(baseUrl+uri)
        return res.status
    }
}