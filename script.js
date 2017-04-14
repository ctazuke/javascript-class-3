// document.write("Hello");

// for (var i = 0; i < 10; i++) {
//   document.write("<br>");
//   document.write(i);
// }

// var j = 0;
// do {
//   document.write("<br>");
//   document.write(j);
//   j++;
// } while(j < 10);

// var k = 0;
// while (k < 10) {
//   document.write("<br>");
//   document.write(k);
//   k++;  
// }




var colorOfCellphone = document.createElement("h2");
colorOfCellphone.innerText = "Silver";
colorOfCellphone.style.color = "gray";
document.body.appendChild(colorOfCellphone);

var glassOrContactLens = document.createElement("h3");
glassOrContactLens.innerText = "Contact Lenses";
document.body.appendChild(glassOrContactLens);

var favFruit = document.createElement("p");
favFruit.innerText = "peach";
favFruit.style.color = "pink";
document.body.appendChild(favFruit);

function addH1Element() {
  var h1Element = document.createElement("h1");
  h1Element.innerText = "Chieko Tazuke";
  document.body.appendChild(h1Element);
}
addH1Element();

function addASingleDevYo() {
  var aSingleDivYo = document.createElement("div");
  aSingleDivYo.className = "whatever";
  document.body.appendChild(aSingleDivYo);  
}

// for (var t = 0; t < 4; t++) {
//   addASingleDevYo();
// }

// var t = 0;
// do {
//   addASingleDevYo();
//   t++;
// } while (t < 4);

var t = 0;
while (t < 4) {
  addASingleDevYo();
  t++;
}


