import LocalStorageService from './localStorage';

export const USUARIO_LOGADO = '_usuario_logado';

export default class AuthService {

    static logar(usuario) {
        LocalStorageService.addItem(USUARIO_LOGADO, usuario);
    }

    static isUsuarioAutenticado() {
        const usuario = LocalStorageService.obterItem(USUARIO_LOGADO);
        return usuario && usuario.id;
    }

    static obterUsuarioAutenticado() {
        return LocalStorageService.obterItem(USUARIO_LOGADO);
    }

    static obterTipo() {
        return LocalStorageService.getUserType();
    }

    static removerUsuarioAutenticado() {
        LocalStorageService.removeItem(USUARIO_LOGADO)
    }

    static tipoUsuario(){
        let user = this.obterUsuarioAutenticado();
        return user.solicitante ? "solicitante" : "prestador"
    }

}