var jogadores = [
    { nome: "Giba", posicao: "Goleiro" },
    { nome: "André (G)", posicao: "Goleiro" },
    { nome: "Mel", posicao: "Defensor" },
    { nome: "Sérgio", posicao: "Defensor" },
    { nome: "Gui", posicao: "Defensor" },
    { nome: "Luizão", posicao: "Defensor" },
    { nome: "Cléo", posicao: "Meia" },
    { nome: "Werner", posicao: "Meia" },
    { nome: "Dú", posicao: "Meia" },
    { nome: "João", posicao: "Meia" },
    { nome: "Gaúcho", posicao: "Meia" },
    { nome: "André (Babi)", posicao: "Meia" },
    { nome: "Guga", posicao: "Atacante" },
    { nome: "Ademar", posicao: "Atacante" },
    { nome: "Caio", posicao: "Atacante" },
    { nome: "Maycon", posicao: "Atacante" }
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
    jogadores.forEach(function (jogador) {
        var jogadorDiv = document.createElement("div");
        jogadorDiv.innerHTML = `
           <li>
                ${jogador.nome}
           </li>    
  
`;
        listaInicial.appendChild(jogadorDiv);

    });
}