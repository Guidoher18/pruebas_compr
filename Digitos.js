$(document).ready(function(){
    var audio = document.getElementById("audio");
    //CHEQUEAR VARIABLES ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
    
    //Variables Generales para el Test de las Series ppdd
    var Respuesta = '';      //Almacena la respuesta del Sujeto
    
    var Modalidad = '';      //'rojo', Corsi Simple | 'azul', Corsi con Interferencia

    var Habilitar_Clic = 0;  //Permite habilitar el $('div[class="bloques"]').on('click'... sólo cuando responde el sujeto

    var Numero_de_Tarea = 0; //Permite seguir el Itinerario
    var Serie = 0;
    
    var Conteo_de_Clic_en_Bloque = 0;
    
    var Errores = 0;
    var Respuesta1 = "";
    var Respuesta2 = "";
    var Respuesta3 = "";
    
    var Puntaje = 0;
    var Datos_Brutos = "";

    //Variables para los Tiempos de Reacción
    var TRa = '';
    var TRb = '';
    var TRc = '';
    var TRd = '';

    

});