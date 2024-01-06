import { conexaoAPI } from "./conectAPI.js";



function constroiCard(titulo,descricao,url,imagem){
    const video = document.createElement("li");
    video.className="videos__item";
    video.innerHTML=
    `<iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="${descricao}">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `;
    return video;
};



async function listaVideo(){
    const listaApi = await conexaoAPI.listaVideos();
    listaApi.forEach(element => lista.appendChild(
        constroiCard(element.titulo,element.descricao,element.url,element.imagem)));
}

function apagarVideos(){
    const listaVideosVisiveis = document.querySelectorAll(".videos__item");
    listaVideosVisiveis.forEach(element=>element.remove());

};


const lista = document.querySelector("[data-lista]");
listaVideo();

export const mostrarVideos = {
    constroiCard,listaVideo,apagarVideos
}