const formulario = document.querySelector('[data-formulario]');



function criarVideo(evento){

    evento.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = matchfloor(Math.random()*10).tosString() ;
    const imagem = document.querySelector('[data-imagem]').value;
    
}

formulario.addEventListener('submit',evento=>criarVideo(evento));


