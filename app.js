function pesquisar() {
    // Busca o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    //se o campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo.</p>"
        return    
    }
// para pesquisas em letras minúsculas
    campoPesquisa = campoPesquisa .toLowerCase()

    console.log(campoPesquisa)

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado e adiciona um item de resultado à string
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes o campoPesquisa então será executado todo o bloco de código
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado"> 
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao} </p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
            </div>   
        `;
        }
        
    }

    if (!resultados ) {
        resultados = "<p>Nada foi encontrado</p>"

    }
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}

 

