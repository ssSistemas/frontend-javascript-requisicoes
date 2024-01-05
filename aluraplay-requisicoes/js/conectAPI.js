

async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoJson=await conexao.json();
    return conexaoJson;
}

async function addVideos(titulo, descricao, url, imagem) {
    try {
        const conexao = await fetch("http://localhost:3000/videos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                titulo: titulo,
                descricao: `${descricao} mil visualizações`,
                url: url,
                imagem: imagem,
            }),
        });

        if (!conexao.ok) {
            throw new Error(`Erro na requisição: ${conexao.statusText}`);
        }

        console.log("Requisição POST bem-sucedida!");
        const conexaoJson = await conexao.json();
    

        return conexaoJson;
    } catch (error) {
        console.error(`Erro na função addVideos: ${error.message}`);
        throw error;
    }
}



export const conexaoAPI = {
    listaVideos,addVideos
}

