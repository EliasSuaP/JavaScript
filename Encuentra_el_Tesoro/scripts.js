//Encontrar un número al azar entre 0 y 1
let numeroAzar = (valor) => {
    return Math.floor(Math.random()*valor);
};

//Calcular la distancia entre el click event y el tesoro   
let traeDistancia = (event, tesoro) => {
    let diffX = event.offsetX - tesoro.x;
    let diffY = event.offsetY - tesoro.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

//Genere un string representando la diferencia
let traeAyuda = (distancia) => {
    if (distancia < 20) {
        return "Quemando!";
    }else if(distancia < 20){
        return "Muy caliente";
    }else if(distancia < 40){
        return "Caliente";
    }else if(distancia < 80){
        return "Tibio";
    }else if(distancia < 160){
        return "Frio";
    }else if(distancia < 320){
        return "Muy frio!"
    }else {
        return "Congelado!"
    }
}

//Creamos las variables

let ancho = 400;
let largo = 400;
let clicks = 0;

//Crea la ubicación del tesoro
let tesoro = {
    x: numeroAzar(ancho),
    y: numeroAzar(largo)
};

let coordenada = 0;

coordenada.addEventListener('click', () => {
    x = offsetX;
    y = offsetY;
})

//Agrega el manejo de clicks
$("#mapa").click(function(event){
    clicks++;

    //Calcula distancia entre click y el tesoro
    let distancia = traeDistancia(event, tesoro);
    //Convierte la distancia en ayuda
    let ayuda = traeAyuda(distancia);

    //Actualizar el elemento #distancia
    $("#distancia").text(ayuda);

    //Si está muy cerca dile que ganó, encontró el tesoro!
    if(distancia < 15 ){
        alert("encontraste el tesoro en " + clicks + "clicks!");
        document.getElementById('coordenadas').textContent = coordenada
    }
})