function pesquisar() {
    // Função responsável por realizar a pesquisa e exibir os resultados na página.

    console.log("pesquisando..."); // Mensagem para indicar que a pesquisa iniciou.

    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for string sem nada, não aparecerá resultado...
    if (!campoPesquisa) {
        section.innerHTML = " <p>'Escreva algo para buscar e tente novamente...'</p>"
        return 
    }

     

    if (campoPesquisa == " ") {
        section.innerHTML = " <p>'Não encontamos resultados para sua pesquisa... Tente novamente!'</p>"
        return 
    }

    console.log(campoPesquisa);

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descrição = "";


    // Itera sobre cada elemento do array 'bandasDeRock'.
    for (let dado of bandasDeRock) {
        titulo = dado.titulo.toLocaleLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()


        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa)
        || descrição.includes(campoPesquisa)
        || tags.includes(campoPesquisa)){

        // Para cada dado, cria uma nova div com as informações da banda.

        //Cria novo elemento
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descrição}</p>
                <a href=${dado.link} target="_blank">Mais informações...</a>
            </div>
        `;
        }
        
    }

    if (!resultados)  {
        resultados = "<p>'Não encontamos resultados para sua pesquisa... Tente novamente com uma palavra válida!'</p>"
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados;
}