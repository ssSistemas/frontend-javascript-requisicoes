import { conexaoAPI } from "./conectAPI.js";


const formulario = document.querySelector('[data-formulario]');



async function criarVideo(evento){

    evento.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = 5;
    const imagem = document.querySelector('[data-imagem]').value;
    
    await conexaoAPI.addVideos(titulo,descricao,url,imagem);

    window.location.href = "../pages/envio-concluido.html";
    



    
}

formulario.addEventListener('submit',evento=>criarVideo(evento));


