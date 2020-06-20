export default class LocalStorageService {

    static addItem(chave, valor) {
        localStorage.setItem(chave, JSON.stringify(valor));
    }

    static removeItem(chave) {
        localStorage.removeItem(chave);
    }

    static obterItem(chave) {
        const item = localStorage.getItem(chave);
        return JSON.parse(item);
    }

    static obterIdUsuario() {
        const usuario = this.obterItem("_usuario_logado");
        if (usuario == null) {
            return null;
        }
        return usuario.id
    }

    static obterUsuario() {
        const usuario = this.obterItem("_usuario_logado");
        return usuario
    }

    static obterCpf() {
        const usuario = this.obterUsuario();
        return usuario.cpf;
    }

    static getUserType() {
        const usuario = this.obterItem("_usuario_logado");
        if (usuario === null) {
            return null;
        } else {
            return usuario.solicitante ? "solicitante" : "prestador"
        }
    }
}

