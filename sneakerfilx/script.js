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

document.write("<div class='vitrine'>");
for (var i = 0; i < listaSnkrs.length; i++) {
  console.log(listaSnkrs[i].storeUrl);
  document.write("<a href='" + listaSnkrs[i].storeUrl + "' target='_blank'>");
  document.write("<img src='" + listaSnkrs[i].imgUrl + "' class='snkr-img'>");
  document.write("</a>");
}
document.write("</div>");
document.write("</body>");
document.write("</html>");
