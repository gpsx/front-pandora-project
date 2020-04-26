
export function validarUsuario(usuario) {
    const msgs = []

    if (!usuario.nome) {
        msgs.push("O campo nome é obrigatório!")
    }

    if (!usuario.email) {
        msgs.push("O email é obrigatório!")
    } else if (!usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
        msgs.push("Informe um e-mail válido")
    }

    if (!usuario.senha) {
        msgs.push("O campo senha é obrigatório")
    }

    if (!usuario.senha || !usuario.senhaRepeticao) {
        msgs.push("Digite a senha duas vezes!")
    } else if (this.state.senha !== this.state.senhaRepeticao) {
        msgs.push("As senhas não coincidem")
    }

    return msgs;
}