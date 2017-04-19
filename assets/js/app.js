
var arrayDiv = [];
    for(var i=1; i <= 6; i++){

      arrayDiv[i] = document.createElement('div');

}

document.body.appendChild(arrayDiv[1]);
arrayDiv[1].appendChild(arrayDiv[2]);
arrayDiv[2].appendChild(arrayDiv[3]);

document.body.appendChild(arrayDiv[4]);
arrayDiv[4].appendChild(arrayDiv[5]);
arrayDiv[5].appendChild(arrayDiv[6]);

arrayDiv[1].setAttribute("id", "rojo");
arrayDiv[2].setAttribute("id", "morado");
arrayDiv[3].setAttribute("id", "amarillo");
arrayDiv[4].setAttribute("id", "azul");
arrayDiv[5].setAttribute("id", "verde");
arrayDiv[6].setAttribute("id", "negro");


