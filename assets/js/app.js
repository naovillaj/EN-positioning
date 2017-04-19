
/*var arrayDiv = [];
    for(var i=1; i <= 6; i++){

      console.log(i);
        arrayDiv[i] = document.createElement('div');

  document.body.appendChild(arrayDiv[1].appendChild(arrayDiv[2].appendChild(arrayDiv[3])));
  document.body.appendChild(arrayDiv[4].appendChild(arrayDiv[5].appendChild(arrayDiv[6])));

  arrayDiv[1].setAttribute("id", "rojo");
  arrayDiv[2].setAttribute("id", "morado");
  arrayDiv[3].setAttribute("id", "amarillo");
  arrayDiv[4].setAttribute("id", "azul");
  arrayDiv[5].setAttribute("id", "verde");
  arrayDiv[6].setAttribute("id", "negro");

    }*/


  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var div4 = document.createElement("div");
  var div5 = document.createElement("div");
  var div6 = document.createElement("div");

  document.body.appendChild(div1);
  div1.appendChild(div2);
  div2.appendChild(div3);

  document.body.appendChild(div4);
  div4.appendChild(div5);
  div4.appendChild(div6);

  div1.setAttribute("id", "rojo");
  div2.setAttribute("id", "morado");
  div3.setAttribute("id", "amarillo");
  div4.setAttribute("id", "azul");
  div5.setAttribute("id", "verde");
  div6.setAttribute("id", "negro");
