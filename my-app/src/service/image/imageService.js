const api = require('../apiService');

const headers = {
    headers: {
        Authorization: "Client-ID 966db375086fadc"
    }
};

const imgURL = "https://api.imgur.com/3/image"

module.exports = {

    uploadImagem: async (params) => {
        return await api.postImg(imgURL, params, headers);
    },

    upload: async (params) => {
        return await api.postImg(imgURL, params, headers);
    },

}