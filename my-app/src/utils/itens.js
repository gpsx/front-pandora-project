import service from '../service/otherService'
import servicesService from '../service/servicesService'

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