import service from '../service/otherService'

export function listarCategorias() {
    let lista = [];
    service.getCategorias()
        .then(response => {
            response.data.map(cat => {
                lista.push(cat)
            })
        }).catch(err => {
            console.log(err)
        })
    return lista;
}