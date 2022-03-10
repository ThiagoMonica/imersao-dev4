function Converter() {
  var distancia = TrataNumero("valor");

  var anosLuz = distancia * 0.0000000000001057;

  var elementoDistancia = document.getElementById("valorConvertido");
  var valorDistancia = "A distância é de " + anosLuz + " anos-luz";
  elementoDistancia.innerHTML = valorDistancia;
}

function TrataNumero(id) {
  var distancia = document.getElementById(id).value;
  var distanciaFixed = parseFloat(distancia.replace(",", "."));

  return distanciaFixed;
}
