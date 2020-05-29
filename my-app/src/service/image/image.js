import service from "./imageService";

export function getURL(image) {
    let data = new FormData();
    data.append("image", image[0]);

    service.uploadImagem(data)
        .then(response => {
            return response.data.data.link;
        }).catch(err => {
            console.log(err);
        })
}