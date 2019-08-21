$(document).ready(function(){
    var audio = document.getElementById("audio");
    //CHEQUEAR VARIABLES ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
    
    //Variables Generales para el Test de las Series ppdd
    var Respuesta = '';      //Almacena la respuesta del Sujeto
    
    var Modalidad = '';      //'rojo', Corsi Simple | 'azul', Corsi con Interferencia

    var Habilitar_Clic = 0;  //Permite habilitar el $('div[class="bloques"]').on('click'... sólo cuando responde el sujeto

    var Numero_de_Tarea = 0; //Permite seguir el Itinerario
    var Serie = 0;
    
    var Conteo_de_Tecleo = 0;
    
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

    function muestro_tecla (tecla){ //Permite mostrar la tecla presionada, sumado a las ya presionadas
        var a = $('#Marco>p').html() + tecla;
        $('#Marco>p').html(a);
        Conteo_de_Tecleo += 1;
    }
    
        
    $(document).keypress(function(e){
        if (Conteo_de_Tecleo < 100 /* AGREGAR SERIE!!!!!!!!!!!!*/){
            switch(e.keyCode)
            {
                case 48: muestro_tecla(e.key)
                break;
                case 49: muestro_tecla(e.key)
                break;
                case 50: muestro_tecla(e.key)
                break;
                case 51: muestro_tecla(e.key)
                break;
                case 52: muestro_tecla(e.key)
                break;
                case 53: muestro_tecla(e.key)
                break;
                case 54: muestro_tecla(e.key)
                break;
                case 55: muestro_tecla(e.key)
                break;
                case 56: muestro_tecla(e.key)
                break;
                case 57: muestro_tecla(e.key)
                break;
                case 58: muestro_tecla(e.key)
                break;
                default:break;                  
            };
        }
    })

});