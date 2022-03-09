function CalculaMedia() {
  var pontosJogoUm = TrataNumero("jogo-um");
  var pontosJogoDois = TrataNumero("jogo-dois");
  var pontosJogoTres = TrataNumero("jogo-tres");
  var pontosJogoQuatro = TrataNumero("jogo-quatro");

  var media = (pontosJogoUm + pontosJogoDois + pontosJogoTres + pontosJogoQuatro) / 4;

  var elementoValorMedia = document.getElementById("valorMedia");
  var valorMedia = "Sua média de pontos por jogo é " + media;
  elementoValorMedia.innerHTML = valorMedia;
}

function TrataNumero(id) {
  var pontos = document.getElementById(id).value;
  var pontosFixed = +parseFloat(pontos.replace(",", ".")).toFixed(2);

  return pontosFixed;
}
