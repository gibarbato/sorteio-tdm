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

var selecaoJogadores = [];

function criarTabela() {
    var tabelaJogadores = document.getElementById("tabelaJogadores");

    for (var i = 0; i < jogadores.length; i++) {
        var tr = document.createElement("tr");

        var tdNome = document.createElement("td");
        tdNome.textContent = jogadores[i].nome;
        tr.appendChild(tdNome);

        var tdPosicao = document.createElement("td");
        tdPosicao.textContent = jogadores[i].posicao;
        tr.appendChild(tdPosicao);

        var tdCheckbox = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        tdCheckbox.appendChild(checkbox);
        tr.appendChild(tdCheckbox);

        var tdInput = document.createElement("td");
        var input = document.createElement("input");
        input.type = "text";
        tdInput.appendChild(input);
        tr.appendChild(tdInput);

        tabelaJogadores.appendChild(tr);
    }
}


function confirmarSelecao() {
    var listaConfirmada = document.getElementById("listaConfirmada");
    listaConfirmada.innerHTML = "<h2>Lista Confirmada</h2><ul>";

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    var linhas = tabelaJogadores.getElementsByTagName("tr");

    for (var i = 0; i < linhas.length; i++) {
        var checkbox = linhas[i].getElementsByTagName("input")[0];
        var input = linhas[i].getElementsByTagName("input")[1];
        var nomeJogador = linhas[i].getElementsByTagName("td")[0].textContent;
        var posicaoJogador = linhas[i].getElementsByTagName("td")[1].textContent;

        if (checkbox.checked) {
            listaConfirmada.innerHTML += "<li>" + nomeJogador + " (" + posicaoJogador + ")</li>";
            selecaoJogadores.push({ nome: nomeJogador, posicao: posicaoJogador, confirmado: true });
        } else {
            var nomePersonalizado = input.value.trim();
            nomePersonalizado = nomePersonalizado !== "" ? nomePersonalizado : nomeJogador;
            listaConfirmada.innerHTML += "<li>" + nomePersonalizado + " (" + posicaoJogador + ")</li>";
            selecaoJogadores.push({ nome: nomePersonalizado, posicao: posicaoJogador, confirmado: false });
        }
    }

    listaConfirmada.innerHTML += "</ul>";

    console.log("Nova seleção de jogadores:", selecaoJogadores);

    var goleiros = shuffle(selecaoJogadores.slice(0, 2));
    var defensores = shuffle(selecaoJogadores.slice(2, 6));
    var meias = shuffle(selecaoJogadores.slice(6, 12));
    var atacantes = shuffle(selecaoJogadores.slice(12, 16));
    console.log(goleiros);
    console.log(defensores);
    console.log(meias);
    console.log(atacantes);

    var jogadoresLaranja = [...defensores.slice(0, 2), ...meias.slice(0, 3), ...atacantes.slice(0, 2)]
    var jogadoresPreto = [...defensores.slice(2), ...meias.slice(3), ...atacantes.slice(2)]

    var timeLaranja = [goleiros[0], ...shuffle(jogadoresLaranja)];
    var timePreto = [goleiros[1], ...shuffle(jogadoresPreto)];

    console.log(timeLaranja);
    console.log(timePreto);

    // Criar Times em tela

    var listaTimeLaranja = document.getElementById('jogadoresLaranja');
    listaTimeLaranja.innerHTML = "";

    timeLaranja.forEach(function (jogador, index) {
        console.log(jogador.nome);
        var jogadorDiv = document.createElement('div');
        jogadorDiv.innerHTML = `
            <p>${index+1} - ${jogador.nome}</p>
        `;

        listaTimeLaranja.appendChild(jogadorDiv);
    })


    var listaTimePreto = document.getElementById('jogadoresPreto');
    listaTimePreto.innerHTML = "";

    timePreto.forEach(function (jogador, index) {
        console.log(jogador.nome);
        var jogadorDiv = document.createElement('div');
        jogadorDiv.innerHTML = `
        <p>${index+1} - ${jogador.nome}</p>
        `;
        listaTimePreto.appendChild(jogadorDiv);
    })

    // for(i = 0; i < timePreto.length; i++){
    //     console.log(timePreto.nome);
    //     var jogadorDiv = document.createElement('div');
    //     jogadorDiv.innerHTML = `
    //     <p>${i} - ${timePreto.nome}</p>
    //     `;
    //     listaTimePreto.appendChild(jogadorDiv);
    // }

    // Desabilitar o botão após clicar
    listaConfirmada.innerHTML = "";

    // var tabelaJogadores = document.getElementById("tabelaJogadores");
    // tabelaJogadores.innerHTML = "";

    document.getElementById("botaoConfirmar").disabled = true;
}


window.onload = criarTabela;

// Embaralhar os jogadores
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
