var jogadores = [
    { nome: "Giba", posicao: "Goleiro" },
    { nome: "Guapo", posicao: "Goleiro" },
    { nome: "Mel", posicao: "Defensor" },
    { nome: "Gaúcho", posicao: "Defensor" },
    { nome: "Gui", posicao: "Defensor" },
    { nome: "Luizão", posicao: "Defensor" },
    { nome: "Cléo", posicao: "Meia" },
    { nome: "Werner", posicao: "Meia" },
    { nome: "Guga", posicao: "Meia" },
    { nome: "Ademar", posicao: "Meia" },
    { nome: "João Henrique", posicao: "Atacante" },
    { nome: "André (Babi)", posicao: "Atacante" },
    { nome: "Manjinha", posicao: "Atacante" },
    { nome: "Maycon", posicao: "Atacante" },
    { nome: "Horácio", posicao: "Atacante" },
    { nome: "Xhande", posicao: "Atacante" }
];

//XXXXXXX CONFIRMAÇÃO PARA O JOGO XXXXXXXX
function exibirJogadores() {
    var listaInicial = document.getElementById("lista-jogadores");

    // Limpa o conteúdo atual
    listaInicial.innerHTML = "";

    // Adiciona o título da lista
    var titulo = document.createElement("h2");
    titulo.innerText = "Lista de Mensalistas";
    listaInicial.appendChild(titulo);

    // Adiciona cada jogador ao listaInicial
    jogadores.forEach(function (jogador, index) {
        setTimeout(function () {
            var jogadorDiv = document.createElement("div");
            jogadorDiv.innerHTML = `
               <li>
                    ${jogador.nome}
               </li>    
    `;
            listaInicial.appendChild(jogadorDiv);
        }, 500 * index)
    });
}
