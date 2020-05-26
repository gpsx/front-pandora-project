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

export function getServico() {
    let lista = [];
    servicesService.getServicoById(1)
        .then(response => {
            lista.push(response.data[0])
        }).catch(err => {
            console.log(err)
        })
    return lista;
}