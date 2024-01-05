import { conexaoAPI } from "./conectAPI.js";
import { mostrarVideos } from "./mastarvideos.js";


const botaoPesquisa = document.querySelector('[data-buscarVideo]');
const lista = document.querySelector("[data-lista]");





botaoPesquisa.addEventListener('click',async evento=>{

    const input = document.querySelector('[data-inputPesquisa]').value;

    console.log(input);

    if (input===""){
        apagarVideos();
        listaVideo();
        return;
    }
    
    const listaJson = await conexaoAPI.buscarVideo(input);
    
    if(listaJson.length===0){
        
        apagarVideos();
    }else{
        apagarVideos();



        listaJson.forEach(element => lista.appendChild(
            mostrarVideos.constroiCard(element.titulo,element.descricao,element.url,element.imagem)));
    }
        
    

    
})
;


function apagarVideos(){
    const listaVideosVisiveis = document.querySelectorAll(".videos__item");
    listaVideosVisiveis.forEach(element=>element.remove());

};

