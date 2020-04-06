const CryptoJS = require("crypto-js")

module.exports = {
    encrypt : (string) => {
        var hash = CryptoJS.SHA256(string);
        return hash.toString(CryptoJS.enc.Hex)
    }
}