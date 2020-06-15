const CryptoJS = require("crypto-js")
const io =  require("socket.io-client");

module.exports = {
    encrypt : (string) => {
        var hash = CryptoJS.SHA256(string);
        return hash.toString(CryptoJS.enc.Hex)
    },
    socketServer: io("http://localhost:4001")
}