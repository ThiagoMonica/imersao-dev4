var numeroSecreto = Math.floor(Math.random() * 11);
var tentativas = 3;

function Chutar() {
	var chute = document.getElementById("valor").value;
	var resposta;

	if (chute < 0 || chute > 10) {
		resposta = "O valor precisa estar entre 0 e 10";
	} else if (chute < numeroSecreto) {
		tentativas = --tentativas;
		resposta =
			"O valor correto é maior que " +
			chute +
			".<br/>Você tem mais " +
			tentativas +
			" tentativa(s)";
	} else if (chute > numeroSecreto) {
		tentativas = --tentativas;
		resposta =
			"O valor correto é menor que " +
			chute +
			".<br/>Você tem mais " +
			tentativas +
			" tentativa(s)";
	} else if (chute == numeroSecreto) {
		resposta =
			"Acertou!!! Parabéns :)<br/>Um novo número foi sorteado. Tente acertar novamente!";
		numeroSecreto = Math.floor(Math.random() * 11);
		tentativas = 3;
	}

	if (tentativas == 0) {
		resposta =
			"Acabaram suas tentativas :(<br/>O número certo era " +
			numeroSecreto +
			".<br/>Um novo número foi sorteado. Tente acertar novamente!";
		numeroSecreto = Math.floor(Math.random() * 11);
		tentativas = 3;
	}
	var elementoChute = document.getElementById("resultado");
	elementoChute.innerHTML = resposta;
}
