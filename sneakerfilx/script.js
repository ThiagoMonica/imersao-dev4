var listaSnkrs = [
  {
    imgUrl:
      "../imgs/aj-chicago.webp",
    storeUrl: "https://stockx.com/jordan-1-og-chicago-1985"
  },
  {
    imgUrl:
      "../imgs/aj1-travis.jpeg",
    storeUrl: "https://stockx.com/air-jordan-1-retro-high-travis-scott"
  },
  {
    imgUrl:
      "../imgs/aj4-travis.jpg",
    storeUrl:
      "https://stockx.com/air-jordan-4-retro-travis-scott-cactus-jack-friends-and-family"
  },
  {
    imgUrl: "../imgs/aj3-unc.jpg",
    storeUrl: "https://stockx.com/air-jordan-3-retro-unc-2020"
  },
  {
    imgUrl: "../imgs/aj32.jpg",
    storeUrl: "https://stockx.com/air-jordan-xxxii-mj-day"
  }
];

function mostraSnkrInput(){
  var elementoVitrine = document.getElementById("vitrine");
  var index = (listaSnkrs.length) - 1;

  var elementoStoreUrl = "<a href='" + listaSnkrs[index].storeUrl + "' target='_blank'>";
  var elementoImgUrl = "<img src='" + listaSnkrs[index].imgUrl + "' class='snkr-img'>";

  elementoVitrine.innerHTML = elementoVitrine.innerHTML + elementoStoreUrl + elementoImgUrl;
  
}

function mostraSnkrFirst(){
  var elementoVitrine = document.getElementById("vitrine");

  for (var i = 0; i < listaSnkrs.length; i++) {
    var elementoStoreUrl = "<a href='" + listaSnkrs[i].storeUrl + "' target='_blank'>";
    var elementoImgUrl = "<img src='" + listaSnkrs[i].imgUrl + "' class='snkr-img'>";

    elementoVitrine.innerHTML = elementoVitrine.innerHTML + elementoStoreUrl + elementoImgUrl;
  }
}

mostraSnkrFirst();


function adicionarSnkr(){
  var imgUrl = document.getElementById("imgUrl").value;
  var buyUrl = document.getElementById("buyUrl").value;
  var dict = {"imgUrl":imgUrl, "storeUrl":buyUrl}

  if(validateInput(imgUrl, buyUrl)){
    listaSnkrs.push(dict);
    mostraSnkrInput();
  }else{
    console.error("Oops! Algo deu errado.");
  }
  
}

function validateInput(imgUrl, buyUrl){
  if(imgUrl == null || imgUrl == "", buyUrl == null || buyUrl == ""){
    alert("Campos não podem estar em branco");
  } else if(!imgUrl.endsWith(".jpg")){
    alert("A imagem tem que estar no formato jpg");
  } else{
    return true;
  }

  return false;
}
