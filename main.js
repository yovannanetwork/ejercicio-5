function calcular()
{
    var puntosSquad = document.getElementById("punto_squad").value;
    var maxPuntos = document.getElementById("max_punto").value;
    // (100* punto_squad)/maxPuntos
    var porcentajeSquad = (100*puntosSquad)/maxPuntos;
    
    if (porcentajeSquad >= 80)
    {
        document.getElementById("salida").innerHTML = "Muy bien squad!";
    }
    else{
        document.getElementById("salida").innerHTML = "Pueden hacerlo mejor.";
    }
   
}

