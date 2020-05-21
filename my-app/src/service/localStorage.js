export default class LocalStorageService{
    static addItem(chave, valor){
        localStorage.setItem(chave, JSON.stringify(valor));
    }

    static logOff() {
        localStorage.removeItem("_usuario_logado");
    }

    static obterItem(chave){
        const item =  localStorage.getItem(chave);
        return JSON.parse(item);
    }

    static obterIdUsuario(){
        const usuario = this.obterItem("_usuario_logado");
        return usuario.id
    }

    static getUserType(){
        const usuario = this.obterItem("_usuario_logado");
        return usuario.solicitante ? "solicitante" : "prestador"
    }
}

