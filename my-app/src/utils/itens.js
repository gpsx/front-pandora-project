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

export function getServico(id) {
    if (id != null) {
        servicesService.getServicoById(id)
            .then(response => {
                let servico = response.data[0]
                return servico;
            }).catch(err => {
                return null;
            })
    } else {
        return null
    }
}