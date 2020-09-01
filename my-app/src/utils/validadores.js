
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

    if (!usuario.cep) {
        msgs.push("O campo cep é obrigatório")
    }

    if (!usuario.senha || !usuario.senhaRepeticao) {
        msgs.push("Digite a senha duas vezes!")
    } else if (usuario.senha !== usuario.senhaRepeticao) {
        msgs.push("As senhas não coincidem")
    }

    return msgs;
}

export function montarUsuario(key, value, changeUser) {
    if (key === "nome") {
        changeUser.nome = value
    }
    if (key === "email") {
        changeUser.email = value
    }
    if (key === "cnpj") {
        changeUser.cnpj = value.replace(/[^\d]+/g,'')
    }
    if (key === "cpf") {
        changeUser.cpf = value.replace(/[^\d]+/g,'')
    }
    if (key === "cep") {
        changeUser.cep = value.replace(/[^\d]+/g,'')
    }
    if (key === "telefone") {
        changeUser.telefone = value
    }
    if (key === "senha") {
        changeUser.senha = value
    }
    if (key === "senhaRepeticao") {
        changeUser.senhaRepeticao = value
    }
    return changeUser;
}