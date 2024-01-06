import { conexaoAPI } from "./conectAPI.js";
import { mostrarVideos } from "./mastarvideos.js";


const botaoPesquisa = document.querySelector('[data-buscarVideo]');
const lista = document.querySelector("[data-lista]");
const inputTexto = document.querySelector('[data-inputPesquisa]');


inputTexto.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        botaoPesquisa.click();
    }
});


inputTexto.addEventListener('input', () => {
    if (!inputTexto.value.trim()) {
        mostrarVideos.apagarVideos();
        mostrarVideos.listaVideo();
    }
});




botaoPesquisa.addEventListener('click', async evento => {

    const input = inputTexto.value;


    if (input === "" || input == null) {
        mostrarVideos.apagarVideos();
        await mostrarVideos.listaVideo();
        return;
    }

    const listaJson = await conexaoAPI.buscarVideo(input);

    if (listaJson.length === 0) {

        mostrarVideos.apagarVideos();
    } else {
        mostrarVideos.apagarVideos();



        listaJson.forEach(element => lista.appendChild(
            mostrarVideos.constroiCard(element.titulo, element.descricao, element.url, element.imagem)));
    }




})
    ;



