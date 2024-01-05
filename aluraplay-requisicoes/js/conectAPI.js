

async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoJson=await conexao.json();
    return conexaoJson;
}

async function addVideos() {
    const conexao = await fetch("http://localhost:3000/videos",{
          headers:{
                "Content-Type":"application/json"
            },
            method:"POST",
            body:JSON.stringify({
                titulo:titulo,
                descricao:`${descricao} mil visuzalizações`,
                url:url,
                imagem:imagem
            })    

}    
    );
    const conexaoJson=await conexao.json();
    return conexaoJson;
}

export const conexaoAPI = {
    listaVideos,addVideos
}

