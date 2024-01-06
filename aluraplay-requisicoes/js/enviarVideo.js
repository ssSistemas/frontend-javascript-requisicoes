import { conexaoAPI } from "./conectAPI.js";


const formulario = document.querySelector('[data-formulario]');



async function criarVideo(evento){

    try{
        evento.preventDefault();

        const url = document.querySelector('[data-url]').value;
        const titulo = document.querySelector('[data-titulo]').value;
        const descricao = Math.floor(Math.random() * 10).toString();
        const imagem = document.querySelector('[data-imagem]').value;
        
        await conexaoAPI.addVideos(titulo,descricao,url,imagem);

        window.location.href = "../pages/envio-concluido.html";
    }catch(error){
        alert(`Não foi possível adicionar video. Tente novamente mais tarde.`);   
    }



    
}

formulario.addEventListener('submit',evento=>criarVideo(evento));


