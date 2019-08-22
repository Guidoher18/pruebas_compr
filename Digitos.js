$(document).ready(function(){
    var audio = document.getElementById("audio");
    //CHEQUEAR VARIABLES ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
    
    //Variables Generales para el Test de las Series ppdd
    var Respuesta = '';      //Almacena la respuesta del Sujeto
    
    var Modalidad = '';      //'directo' | 'letra' 

    var Habilitar_Respuesta = 0;  //Permite habilitar el #Response y el button

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

    //Permite mostrar la tecla presionada, sumado a las ya presionadas
    function muestro_tecla (tecla){ 
        var a = $('#Response>p').html() + tecla;
        $('#Response>p').html(a);
        Conteo_de_Tecleo += 1;
    }
    
    //Simula la animación que se obtiene con el ::hover a partir del Enter
    function clic_boton(){
        $('button').css('background-color', '#28a745');
        $('button').css('color', '#fff');
        setTimeout(function(){
            $('button').css('background-color', 'transparent');
            $('button').css('color', '#28a745');
            $('button').click();
        }, 300);
    }

    //BORRAR DESPUÉS
    /*$('button').on('click', function(){
        alert('hola');
    });*/

    //Convierte número en letra. Por ej.: 4 en "cuatro" 
    function convertir_a_letra(a){ 
        switch(a){
            case 2: return "dos";
            break;
            case 3: return "tres";
            break;
            case 4: return "cuatro";
            break;
            case 5: return "dos";
            break;
            case 6: return "seis";
            break;
            case 7: return "siete";
            break;
            case 8: return "ocho";
            break;
            case 9: return "nueve";
            break;
        }
    }

    //Función que escribe en el div sólo los números que se teclean cuando está habilitada la respuesta. En tal caso y si presiona Enter verifica si tecleo todas las cifras esperadas (= a la serie) 
    $(document).keypress(function(e){
        if (Conteo_de_Tecleo < Serie && Habilitar_Respuesta == 1){
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
                case 13:
                    clic_boton();
                    $('#alert').html('El presente ejercicio corresponde a la serie de ' + convertir_a_letra(Serie) + ' números.');
                    $('#alert').show();
                break;
                default:break;                  
            };
        }
    })


    var Consigna_Boton = function(Consigna, a, b, c){ 
        //a: elementos de html con consigna 
        //b: función a la que redirige el boton
        
        $('#Test').css('font-size', '2em');
        $('#Test').html('<p>'+ Consigna + '</p>');
        $('button').html('Entendido');
        $('button').attr('id', 'Entendido');
        
        $('#Entendido').on('click', function(){
            if (Modalidad == 'directo' && Numero_de_Tarea == 6)
            {
                TRa = new moment();
            }
            if( Modalidad == 'letra' && Numero_de_Tarea == 6)
            {
                TRc = new moment();
            }
            $('#Entendido').css('display','none');
            Consigna_Secuencia(a, b, c);
        });
        
        (this).addEventListener('keyup', function (e) {
            if (e.keyCode === 13) {
                clic_boton();
            }});
    };

    var Consigna_Secuencia = function(Consigna, Consigna_2, Serie_de_Cifras){
        $('#Test>p').remove();
        $('#Test').css('font-size', '2em');
        $('#Test').html('<p>'+ Consigna + '</p>');
        setTimeout(function(){
            $('#Test>p').html(Consigna_2);
            setTimeout(function(){
                $('#Test>p').html("");
                $('#Test').css('font-size', '30vh');
                Secuencia(Serie_de_Cifras);
            }, 10000);
        },4000);
    };

    var Consigna_Respuesta = function(Consigna, Secuencia_de_Bloques){
        Habilitar_Clic = 0;
        $('div[class="bloques"]').css('display', 'none');
        $('#Instructivo').html('<p>'+ Consigna + '</p>');
        $('#Instructivo').css('display', 'block');
            setTimeout(function () {
                $('#Instructivo').css('display', 'none');
                var Parametros = Obtener_Parametros(Secuencia_de_Bloques);
                
                for (i = 0; i<Parametros.length; i++){
                    $(Parametros[i]).html('<p>'+ (i+1) +'</p>');
                }
                
                $('div[class="bloques"]').css('display', 'block');
            }, 4000);            
    };

    var Secuencia = function(y){                //Reproduce el Beep antes de f(x)Mostrar la secuencia
        Habilitar_Respuesta = 0;
        audio.play();
        setTimeout(function(){
            Mostrar(y);    
        },2500)};
    
    var Mostrar = function(k){                  //Parametros es la lista que contiene los números a mostrar
        var Parametros = [];                      
        Parametros = k.toString().split(",");   //Toma los items y los separa en la lista 
           
        Serie = Parametros.length;              //Serie: Cantidad de items en la serie 
        
        //Dependiendo de la cant de items de la Serie, varían los parámetros que le paso a la Función A
        switch(Serie){
            case 2: A(Serie, Parametros[0], Parametros[1]);
            break;
                
            case 3: A(Serie, Parametros[0], Parametros[1], Parametros[2]);
            break;
                
            case 4: A(Serie, Parametros[0], Parametros[1], Parametros[2], Parametros[3]);
            break;
                
            case 5: A(Serie, Parametros[0], Parametros[1], Parametros[2], Parametros[3], Parametros[4]);
            break;
                
            case 6: A(Serie, Parametros[0], Parametros[1], Parametros[2], Parametros[3], Parametros[4], Parametros[5]);
            break;
                
            case 7: A(Serie, Parametros[0], Parametros[1], Parametros[2], Parametros[3], Parametros[4], Parametros[5], Parametros[6]);
            break;
                
            case 8: A(Serie, Parametros[0], Parametros[1], Parametros[2], Parametros[3], Parametros[4], Parametros[5], Parametros[6], Parametros[7]);
            break;
                
            case 9: A(Serie, Parametros[0], Parametros[1], Parametros[2], Parametros[3], Parametros[4], Parametros[5], Parametros[6], Parametros[7], Parametros[8]);
            break;
        };
    };
        
    //Funciones encadenadas que permiten mostrar la secuencia de hasta nueve números durando 2seg c/u y dejando un intervalo de 1seg entre números
    var A = function (Serie, a, b, c, d, e, f, g, h, i) {
        $('#Test>p').html(a);
        setTimeout(function () {
            $('#Test>p').html(" ");
            setTimeout(function(){
                switch(Serie){
                    case 1: 
                    break;
                    default: B(Serie, b, c, d, e, f, g, h, i);
                    break;
                }
            },1000);
        },2000);
    };
        
        var B = function (Serie, b, c, d, e, f, g, h, i) {
            $('#Test>p').html(b);
            setTimeout(function () {
                $('#Test>p').html(" ");
                setTimeout(function(){
                    switch(Serie){
                        case 2: Recuerdo();
                        break;
                        default: C(Serie, c, d, e, f, g, h, i);
                    }
                },1000);
            },2000);};
        
        var C = function (Serie, c, d, e, f, g, h, i) {
            $('#Test>p').html(c);
            setTimeout(function () {
                $('#Test>p').html(" ");
                setTimeout(function(){
                    switch(Serie){
                        case 3: Recuerdo();
                        break;
                        default: D(Serie, d, e, f, g, h, i);
                    }
                },1000);
            }, 2000);};
        
        var D = function (Serie, d, e, f, g, h, i) {
            $('#Test>p').html(d);
            setTimeout(function () {
                $('#Test>p').html(" ");
                switch(Serie){
                    case 4: Recuerdo();
                    break;
                    default: E(Serie, e, f, g, h, i);
                }
            }, 1000);};
        
        var E = function (Serie, e, f, g, h, i) {
            $('#Test>p').html(e);
            setTimeout(function () {
                $('#Test>p').html(" ");
                switch(Serie){
                    case 5: Recuerdo();
                    break;
                    default: F(Serie, f, g, h, i);
                }
            }, 1000);};
        
        var F = function (Serie, f, g, h, i) {
            $('#Test>p').html(f);
            setTimeout(function () {
                $('#Test>p').html(" ");
                switch(Serie){
                    case 6: Recuerdo();
                    break;
                    default: G(Serie, g, h, i);
                }
            }, 1000);};
        
        var G = function (Serie, g, h, i) {
            $('#Test>p').html(g);
            setTimeout(function () {
                $('#Test>p').html(" ");
                switch(Serie){
                    case 7: Recuerdo();
                    break;
                    default: H(Serie, h, i);
                }
            }, 1000);};
        
        var H = function (Serie, h, i) {
            $('#Test>p').html(h);
            setTimeout(function () {
                $('#Test>p').html(" ");
                switch(Serie){
                    case 8: Recuerdo();
                    break;
                    default: I(i);
                }
            }, 1000);};
        
        var I = function (i) {    
            $('#Test>p').html(i);
            setTimeout(function(){
                $('#Test>p').html(" ");
                switch(Serie){
                    case 9: Recuerdo();
                    break;
                }
             },1000);
        }
        
        var Recuerdo = function(){
            $('#Test>p').html('Recuerdo');
            setTimeout(function(){
                $('#Test>p').html('');
                $('#Test').css('display','none');
                
                $('#Response').css('display','flex');
                
                $('#Entendido').attr('id','Siguiente');
                $('#Siguiente').html('Siguiente');    
                $('#Siguiente').css('display','flex');
                Habilitar_Respuesta = 1;
            },2000);
        };


    var Itinerario_DD = function (a){
        Modalidad = 'directo';
        switch (a){
            case 1: Consigna_Boton('Te vamos a presentar una serie de números de a uno por vez. <br> Tu objetivo es intentar retener la serie de números. <br> Cuando aparezca la palabra "recuerdo", deberás escribir con tu teclado la serie de números que se te presentó, en el mismo orden en el que aparecieron.','Vamos a hacer unos ensayos de prueba.', 'Va a aparecer una serie de dos números y tendrás que recordarlos en el mismo orden en que aparecieron. <br> Cuando veas la palabra recuerdo deberás escribir la serie de números','1,4');
            Numero_de_Tarea +=1;
            break;
            
            case 2:Consigna_Respuesta('El orden en el que aparecieron los cuadrados rojos fue el siguiente:', '8,9');
            Numero_de_Tarea +=1;
            setTimeout(function(){
                $('div[class="bloques"]>p').remove();
                Itinerario_CS(Numero_de_Tarea);
            },8000);
            break;
        }
    }

Itinerario_DD(1);












});


/* 

Cuando Muestro el Test Habilitar_Respuesta = 0

Cuando habilito la respuesta =1
Serie tiene que tomar la serie

muestro el cuadro y el boton +     display:flex!important; 

Habilitar_Respuesta = 1;
$('#Response'.css('display', 'flex!important')
$('button'.css('display', 'flex!important')

*/









//var x = [1,3,5];
//Mostrar(x);










