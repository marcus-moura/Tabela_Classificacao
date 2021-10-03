
function calculaPontos(jogador){
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;

}

var jogadores = [];



function addJogadores(){
    var player = document.getElementById("player").value;
    if(player == ""){
        alert("Preencha com o nome do Jogador!");
        document.getElementById("player").focus()
    }else{
        var player = {nome: player, vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
        jogadores.push(player);
        player.pontos = calculaPontos(player);
        exibirJogadores(jogadores);

    }
    document.getElementById("player").value = "";
}


 function exibirJogadores(jogadores){
    var elemento = "";
    for(var i = 0; i < jogadores.length; i++){
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button class='vitoria' onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elemento += "<td><button class='empate' onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td><button class='derrota' onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += "<td><button class='zerar' onClick='zeraTudo("+ i +")'>Zerar</button></td>"
        elemento += "</tr>"
    
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores") ;
    tabelaJogadores.innerHTML = elemento;
}

exibirJogadores(jogadores);

function adicionarVitoria(i){
    
        var jogador = jogadores[i];
        jogador.vitorias ++;
        jogador.pontos = calculaPontos(jogador);
        exibirJogadores(jogadores);

}

function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.empates ++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores);

}
function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas ++;
    exibirJogadores(jogadores);
}

function zeraTudo(i){
    var jogador = jogadores[i];
    jogador.vitorias = 0;
    jogador.derrotas = 0;
    jogador.empates = 0;
    jogador.pontos = 0;
    exibirJogadores(jogadores);
}

