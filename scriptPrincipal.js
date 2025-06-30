var jogadores = [
    { nome: "Guapo", posicao: "Goleiro", mensalista: "sim" },
    { nome: "Giba", posicao: "Goleiro", mensalista: "sim" },
    { nome: "Luizão", posicao: "Defensor", mensalista: "sim" },
    { nome: "Gui", posicao: "Defensor", mensalista: "sim" },
    { nome: "Horácio", posicao: "Defensor", mensalista: "sim" },
    { nome: "Gaúcho", posicao: "Defensor", mensalista: "sim" },
    { nome: "Mel", posicao: "Meia", mensalista: "sim" },
    { nome: "Xhande", posicao: "Meia", mensalista: "sim" },
    { nome: "André", posicao: "Meia", mensalista: "sim" },
    { nome: "Manjinha", posicao: "Meia", mensalista: "sim" },
    { nome: "Cléo", posicao: "Meia", mensalista: "sim" },
    { nome: "Maycon", posicao: "Meia", mensalista: "sim" },
    { nome: "João H", posicao: "Atacante", mensalista: "sim" },
    { nome: "Ademar", posicao: "Atacante", mensalista: "sim" },
    { nome: "Guga", posicao: "Atacante", mensalista: "sim" },
    { nome: "Werner", posicao: "Atacante", mensalista: "sim" },
    { nome: "Sérgio", posicao: "Defensor", mensalista: "não" },
    { nome: "Du", posicao: "Meia", mensalista: "não" },
    { nome: "Fatiada", posicao: "Meia", mensalista: "não" },
    { nome: "Caio", posicao: "Atacante", mensalista: "não" },
    { nome: "João Baron", posicao: "Atacante", mensalista: "não" },
    { nome: "Pedro", posicao: "Atacante", mensalista: "não" },
    { nome: "Fatiada", posicao: "Meia", mensalista: "não" },
    { nome: "Rô", posicao: "Goleiro", mensalista: "não" },
    { nome: "Giovane", posicao: "Defensor", mensalista: "não" },
    { nome: "Lucas", posicao: "Meia", mensalista: "não" },
];

//função para criar a lista de jogadores para o sorteio
function criarTabela() {
    var tabelaJogadores = document.getElementById("tabelaJogadores");

    for (var i = 0; i < jogadores.length; i++) {
        if (jogadores[i].mensalista === "sim") {
            var tr = document.createElement("tr");
            var tdNome = document.createElement("td");
            tdNome.textContent = jogadores[i].nome;
            tdNome.className = "centralizarTd";
            tr.appendChild(tdNome);

            var tdCheckbox = document.createElement("td");
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = false;
            tdCheckbox.textContent = "não  ";
            tdCheckbox.className = "centralizarTd";
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
}
criarTabela();

console.log("cria tabela");

var selecaoJogadores = [];
function confirmarPresenca() {
    var listaConfirmada = document.getElementById("listaConfirmada");
    listaConfirmada.innerHTML = "<h2>Lista de confirmação</h2><ul>";

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    var linhas = tabelaJogadores.getElementsByTagName("tr");

    for (var i = 0; i < linhas.length; i++) {
        var checkbox = linhas[i].getElementsByTagName("input")[0];
        var input = linhas[i].getElementsByTagName("input")[1];
        var nomeJogador = linhas[i].getElementsByTagName("td")[0].textContent;
        
        if (checkbox.checked) {
            var nomePersonalizado = input.value.trim();
            nomePersonalizado = nomePersonalizado !== "" ? nomePersonalizado : nomeJogador;
            listaConfirmada.innerHTML += "<li>" + nomePersonalizado + "</li>";
            selecaoJogadores.push({ nome: nomePersonalizado, confirmado: false });
        } else {
            listaConfirmada.innerHTML += "<li>" + nomeJogador + "</li>";
            selecaoJogadores.push({ nome: nomeJogador, confirmado: true });
        }
    }
    listaConfirmada.innerHTML += "</ul>";
    document.getElementById("botaoConfirmar").disabled = true;
    console.log("Nova seleção de jogadores:", selecaoJogadores);
    return selecaoJogadores;
 
}

function sortearTimes() {
    
    // embaralhamento dos jogadores
    var goleiros = shuffle(selecaoJogadores.slice(0, 2));
    var jogadoresLinha = shuffle(shuffle(selecaoJogadores.slice(2)));
    console.log(goleiros);
    console.log(jogadoresLinha);
    
    var jogadoresLaranja = [...jogadoresLinha.slice(0, 7)]
    var jogadoresPreto = [...jogadoresLinha.slice(7)]
    
    var timeLaranja = [goleiros[0], ...shuffle(jogadoresLaranja)];
    var timePreto = [goleiros[1], ...shuffle(jogadoresPreto)];
    
    console.log(timeLaranja);
    console.log(timePreto);
    
    // Criar Times em tela
    
    var listaTimeLaranja = document.getElementById('jogadoresLaranja');
    listaTimeLaranja.innerHTML = "";
    
    timeLaranja.forEach(function (jogador, index) {
        console.log(jogador.nome);
        setTimeout(function(){
            var jogadorDiv = document.createElement('div');
            jogadorDiv.innerHTML = `
            <p>${index == 0 ? 'G': index} - ${jogador.nome}</p>
            `;
            listaTimeLaranja.appendChild(jogadorDiv);
        }, 500 * index)
    })
    
    var listaTimePreto = document.getElementById('jogadoresPreto');
    listaTimePreto.innerHTML = "";
    
    timePreto.forEach(function (jogador, index) {
        console.log(jogador.nome);
        setTimeout(function() {
            var jogadorDiv = document.createElement('div');
            jogadorDiv.innerHTML = `
            <p>${index == 0 ? 'G': index} - ${jogador.nome}</p>
            `;
            listaTimePreto.appendChild(jogadorDiv);
        }, 500 * index)
    })
    updateDateTime();
}

// Função para embaralhar os jogadores
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function updateDateTime() {
    const currentDateTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDateTime = currentDateTime.toLocaleDateString('pt-BR', options);
    document.getElementById('currentDateTime').textContent = formattedDateTime;
}

function retornarParaIndex() {
    // Lógica para redirecionar para index.html
    window.location.href = "index.html";
}
