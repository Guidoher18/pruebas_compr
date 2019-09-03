$(document).ready(function () {
    var audio = document.getElementById("audio");

    //Variables Generales para el Test de las Series ppdd
    var Respuesta = '';                 //Almacena la respuesta del Sujeto

    var Modalidad = '';                 //'Directo' | 'Letra' 

    var Demostracion_Correcta = 0;      //Se utiliza para cuando se muestra el ejemplo

    var Habilitar_Respuesta = 0;        //Permite habilitar el #Response y el button

    var Numero_de_Tarea = 1;            //Permite seguir el Itinerario
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

    //Para que responda el sujeto...
    //Función que escribe en el div sólo los números que se teclean cuando está habilitada la respuesta. En tal caso y si presiona Enter verifica si tecleo todas las cifras esperadas (= a la serie) 
    $(document).keypress(function (e) {
        switch (Modalidad) {
            case 'Directo':
                switch (Habilitar_Respuesta) {
                    case 1: if (Conteo_de_Tecleo < Serie) {
                        switch (e.keyCode) {
                            case 48: muestro_tecla(e.key);
                                break;
                            case 49: muestro_tecla(e.key);
                                break;
                            case 50: muestro_tecla(e.key);
                                break;
                            case 51: muestro_tecla(e.key);
                                break;
                            case 52: muestro_tecla(e.key);
                                break;
                            case 53: muestro_tecla(e.key);
                                break;
                            case 54: muestro_tecla(e.key);
                                break;
                            case 55: muestro_tecla(e.key);
                                break;
                            case 56: muestro_tecla(e.key);
                                break;
                            case 57: muestro_tecla(e.key);
                                break;
                            case 13: $('#Alert').html('El presente ejercicio corresponde a la serie de ' + convertir_a_letra(Serie) + ' números.');
                                $('#Alert').show();
                                setTimeout(function () {
                                    $('#Alert').fadeOut('slow');
                                }
                                    , 4000);
                                break;
                            default: break;
                        };
                    }
                        break;
                    case 0: if (e.keyCode == 13 && $('button').css('display') == 'flex') {
                        clic_boton();
                    }
                        break;
                }
                break;
            case 'Letra':
                switch (Habilitar_Respuesta) {
                    case 1: if (Conteo_de_Tecleo < Serie) {
                        switch (e.keyCode) {               //KeyCode 48 a 57 = de 0 a 9
                            case 48: muestro_tecla(e.key);
                                break;
                            case 49: muestro_tecla(e.key);
                                break;
                            case 50: muestro_tecla(e.key);
                                break;
                            case 51: muestro_tecla(e.key);
                                break;
                            case 52: muestro_tecla(e.key);
                                break;
                            case 53: muestro_tecla(e.key);
                                break;
                            case 54: muestro_tecla(e.key);
                                break;
                            case 55: muestro_tecla(e.key);
                                break;
                            case 56: muestro_tecla(e.key);
                                break;
                            case 57: muestro_tecla(e.key);
                                break;
                            case 65: muestro_tecla(e.key); //KeyCode 65 a 90 = de A a Z
                                break;
                            case 66: muestro_tecla(e.key);
                                break;
                            case 67: muestro_tecla(e.key);
                                break;
                            case 68: muestro_tecla(e.key);
                                break;
                            case 69: muestro_tecla(e.key);
                                break;
                            case 70: muestro_tecla(e.key);
                                break;
                            case 71: muestro_tecla(e.key);
                                break;
                            case 72: muestro_tecla(e.key);
                                break;
                            case 73: muestro_tecla(e.key);
                                break;
                            case 74: muestro_tecla(e.key);
                                break;
                            case 75: muestro_tecla(e.key);
                                break;
                            case 76: muestro_tecla(e.key);
                                break;
                            case 77: muestro_tecla(e.key);
                                break;
                            case 78: muestro_tecla(e.key);
                                break;
                            case 79: muestro_tecla(e.key);
                                break;
                            case 80: muestro_tecla(e.key);
                                break;
                            case 81: muestro_tecla(e.key);
                                break;
                            case 82: muestro_tecla(e.key);
                                break;
                            case 83: muestro_tecla(e.key);
                                break;
                            case 84: muestro_tecla(e.key);
                                break;
                            case 85: muestro_tecla(e.key);
                                break;
                            case 86: muestro_tecla(e.key);
                                break;
                            case 87: muestro_tecla(e.key);
                                break;
                            case 88: muestro_tecla(e.key);
                                break;
                            case 89: muestro_tecla(e.key);
                                break;
                            case 90: muestro_tecla(e.key);
                                break;
                            case 97: muestro_tecla(e.key); //KeyCode 97 a 122 = "a" a "z"
                                break;
                            case 98: muestro_tecla(e.key);
                                break;
                            case 99: muestro_tecla(e.key);
                                break;
                            case 100: muestro_tecla(e.key);
                                break;
                            case 101: muestro_tecla(e.key);
                                break;
                            case 102: muestro_tecla(e.key);
                                break;
                            case 103: muestro_tecla(e.key);
                                break;
                            case 104: muestro_tecla(e.key);
                                break;
                            case 105: muestro_tecla(e.key);
                                break;
                            case 106: muestro_tecla(e.key);
                                break;
                            case 107: muestro_tecla(e.key);
                                break;
                            case 108: muestro_tecla(e.key);
                                break;
                            case 109: muestro_tecla(e.key);
                                break;
                            case 110: muestro_tecla(e.key);
                                break;
                            case 111: muestro_tecla(e.key);
                                break;
                            case 112: muestro_tecla(e.key);
                                break;
                            case 113: muestro_tecla(e.key);
                                break;
                            case 114: muestro_tecla(e.key);
                                break;
                            case 115: muestro_tecla(e.key);
                                break;
                            case 116: muestro_tecla(e.key);
                                break;
                            case 117: muestro_tecla(e.key);
                                break;
                            case 118: muestro_tecla(e.key);
                                break;
                            case 119: muestro_tecla(e.key);
                                break;
                            case 120: muestro_tecla(e.key);
                                break;
                            case 121: muestro_tecla(e.key);
                                break;
                            case 122: muestro_tecla(e.key);
                                break;
                            case 209: muestro_tecla(e.key); //KeyCode 209 = Ñ
                                break;
                            case 241: muestro_tecla(e.key); //KeyCode 241 = ñ
                                break;
                            //ENTER
                            case 13: $('#Alert').html('El presente ejercicio corresponde a la serie de ' + convertir_a_letra(Serie) + ' ítems.');
                                $('#Alert').show();
                                setTimeout(function () {
                                    $('#Alert').fadeOut('slow');
                                }
                                    , 4000);
                                break;
                            default: break;
                        };
                    }
                        break;
                    case 0: if (e.keyCode == 13 && $('button').css('display') == 'flex') {
                        clic_boton();
                    }
                        break;
                }
                break;
        }
    })

    //Convierte número en letra. Por ej.: 4 en "cuatro" 
    function convertir_a_letra(a) {
        switch (a) {
            case 2: return "dos";
                break;
            case 3: return "tres";
                break;
            case 4: return "cuatro";
                break;
            case 5: return "cinco";
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

    //Permite mostrar la tecla presionada, sumado a las ya presionadas. Si hace clic en "Siguiente" pasa a la próxima serie.
    function muestro_tecla(tecla) {
        var parametro = tecla;
        switch (Modalidad) {
            case 'Letra': parametro = parametro.toUpperCase();
            case 'Directo': var a = $('#Response>p').html() + parametro;
                $('#Response>p').html(a);
                Conteo_de_Tecleo = Conteo_de_Tecleo + 1;

                if (Conteo_de_Tecleo == Serie && Habilitar_Respuesta == 1) {
                    Habilitar_Respuesta = 0;
                    $('#Siguiente').css('display', 'flex');
                }
                break;
        }

    }

    function Siguiente_Tarea() {
        switch (Modalidad) {
            case "Directo": Itinerario_DD(Numero_de_Tarea);
                break;
            case "Letra": Itinerario_DL(Numero_de_Tarea);
                break;
        }
    }

    //Simula la animación que se obtiene con el ::hover a partir del Enter
    function clic_boton() {
        $('button').css('background-color', '#28a745');
        $('button').css('color', '#fff');
        $('button').css('transition', 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out');
        setTimeout(function () {
            $('button').css('background-color', 'transparent');
            $('button').css('color', '#28a745');
            $('button').click();
        }, 300);
    }

    var Con_2 = '';
    var Con_3 = '';
    var Ser_Cif = '';

    var Consigna_Boton = function (Consigna, Consigna_2, Consigna_3, Serie_de_Cifras) {
        //Consigna: La instrucción que se muestra
        //a: Segunda consigna
        //b: Tercera consigna
        //c: Serie de números

        $('button').show();
        $('#Test').css('font-size', '2.8125vw');
        $('#Test>p').html(Consigna);

        Con_2 = Consigna_2;
        Con_3 = Consigna_3;
        Ser_Cif = Serie_de_Cifras;
    };

    $('button').on('click', function () {
        switch ($('button').attr('id')) {

            case 'Siguiente': if ($('#Alert').css('display') != 'none') {
                $('#Alert').hide();
            }
                $('#Siguiente').css('display', 'none');
                Respuesta = $('#Response>p').html();
                Siguiente_Tarea();
                break;

            case 'Aceptar': if (Modalidad == 'Directo' && Numero_de_Tarea == 6) {
                TRa = new moment();
            }
                if (Modalidad == 'Letra' && Numero_de_Tarea == 6) {
                    TRc = new moment();
                }

                $('#Aceptar').css('display', 'none');
                Consigna_Secuencia(Con_2, Con_3, Ser_Cif);
                break;

        }
    });

    var Consigna_Secuencia = function (Consigna_2, Consigna_3, Serie_de_Cifras) {
        if (Consigna_3 == null) {
            Consigna_Simple(Consigna_2, Serie_de_Cifras);
        }
        else {
            $('#Test').css('font-size', '2.8125vw');
            $('#Test>p').html(Consigna_2);
            setTimeout(function () {
                Consigna_Simple(Consigna_3, Serie_de_Cifras);
            }, 4000);
        }
    };

    var Consigna_Simple = function (Consigna, Serie_de_Cifras) {
        var z = 0;
        switch (Modalidad) {
            case 'Directo': switch (Numero_de_Tarea) {
                case 2: z = 12000;
                    break;
                case 3: z = 8000;
                    break;
                default: z = 4000;
                    break;
            }
            case 'Letra': switch (Numero_de_Tarea) {
                case 2: z = 12000;
                    break;
                case 3: z = 12000;
                    break;
                default: z = 4000;
                    break;
            }
        }

        $('#Test').css('font-size', '2.8125vw');
        $('#Test>p').html(Consigna);
        setTimeout(function () {
            $('#Test>p').empty();
            $('#Test').css('font-size', '30vh');
            Secuencia(Serie_de_Cifras);
        }, z);
    }

    var Consigna_Respuesta = function (Consigna, Serie_de_Cifras) {
        Habilitar_Respuesta = 0;
        $('#Response').css('display', 'none');
        $('#Response>p').empty();
        $('#Test').css('font-size', '2.8125vw');
        $('#Test>p').html(Consigna);
        $('#Test').css('display', 'flex');
        setTimeout(function () {
            $('#Test').css('font-size', '30vh');
            Mostrar(Serie_de_Cifras);
        }, 5000);
    };

    var Secuencia = function (y) {                //Reproduce el Beep antes de f(x)Mostrar la secuencia
        Habilitar_Respuesta = 0;
        audio.play();
        setTimeout(function () {
            Mostrar(y);
        }, 2500)
    };

    var Mostrar = function (k) {                  //Parametros es la lista que contiene los números a mostrar
        var Parametros = [];
        Parametros = k.toString().split(",");     //Toma los items y los separa en la lista 

        Serie = Parametros.length;                //Serie: Cantidad de items en la serie 

        //Dependiendo de la cant de items de la Serie, varían los parámetros que le paso a la Función A
        switch (Serie) {
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
            $('#Test>p').empty();
            setTimeout(function () {
                switch (Serie) {
                    case 1:
                        break;
                    default: B(Serie, b, c, d, e, f, g, h, i);
                        break;
                }
            }, 1000);
        }, 2000);
    };

    var B = function (Serie, b, c, d, e, f, g, h, i) {
        $('#Test>p').html(b);
        setTimeout(function () {
            $('#Test>p').empty();
            setTimeout(function () {
                switch (Serie) {
                    case 2: Recuerdo();
                        break;
                    default: C(Serie, c, d, e, f, g, h, i);
                }
            }, 1000);
        }, 2000);
    };

    var C = function (Serie, c, d, e, f, g, h, i) {
        $('#Test>p').html(c);
        setTimeout(function () {
            $('#Test>p').empty();
            setTimeout(function () {
                switch (Serie) {
                    case 3: Recuerdo();
                        break;
                    default: D(Serie, d, e, f, g, h, i);
                }
            }, 1000);
        }, 2000);
    };

    var D = function (Serie, d, e, f, g, h, i) {
        $('#Test>p').html(d);
        setTimeout(function () {
            $('#Test>p').empty();
            setTimeout(function () {
                switch (Serie) {
                    case 4: Recuerdo();
                        break;
                    default: E(Serie, e, f, g, h, i);
                }
            }, 1000);
        }, 2000);
    };

    var E = function (Serie, e, f, g, h, i) {
        $('#Test>p').html(e);
        setTimeout(function () {
            $('#Test>p').empty();
            setTimeout(function () {
                switch (Serie) {
                    case 5: Recuerdo();
                        break;
                    default: F(Serie, f, g, h, i);
                }
            }, 1000);
        }, 2000);
    };

    var F = function (Serie, f, g, h, i) {
        $('#Test>p').html(f);
        setTimeout(function () {
            $('#Test>p').empty();
            setTimeout(function () {
                switch (Serie) {
                    case 6: Recuerdo();
                        break;
                    default: G(Serie, g, h, i);
                }
            }, 1000);
        }, 2000);
    };

    var G = function (Serie, g, h, i) {
        $('#Test>p').html(g);
        setTimeout(function () {
            $('#Test>p').empty();
            setTimeout(function () {
                switch (Serie) {
                    case 7: Recuerdo();
                        break;
                    default: H(Serie, h, i);
                }
            }, 1000);
        }, 2000);
    };

    var H = function (Serie, h, i) {
        $('#Test>p').html(h);
        setTimeout(function () {
            $('#Test>p').empty();
            setTimeout(function () {
                switch (Serie) {
                    case 8: Recuerdo();
                        break;
                    default: I(i);
                }
            }, 1000);
        }, 2000);
    };

    var I = function (i) {
        $('#Test>p').html(i);
        setTimeout(function () {
            $('#Test>p').empty();
            setTimeout(function () {
                switch (Serie) {
                    case 9: Recuerdo();
                        break;
                }
            }, 1000);
        }, 2000);
    }

    var Recuerdo = function () {
        Conteo_de_Tecleo = 0;
        switch (Demostracion_Correcta) {
            default: $('#Test>p').html('Recuerdo');
                setTimeout(function () {
                    $('#Test>p').empty();
                    $('#Test').css('display', 'none');
                    $('#Response>p').empty();
                    $('#Response').css('display', 'flex');

                    if (Numero_de_Tarea == 2 || Numero_de_Tarea == 6) {
                        $('button').removeAttr('id');
                        $('button').attr('id', 'Siguiente');
                        $('button').html('Siguiente');
                    }

                    Habilitar_Respuesta = 1;
                }, 2000);
                break;
            case 1: Siguiente_Tarea();
                break;
        }
    };

    function Ocultar_Response() {
        $('#Response').css('display', 'none');
        $('#Test').css('display', 'flex');
    }

    //Correccion_n: es la cifra con la que se corregira la respuesta obtenida. Por ej. '341'
    //Secuencia: es la nueva secuencia a mostrar. Por ej. '5,6,4'
    function Itinerario_Cifra1(Correccion_n, Secuencia_n) {
        Respuesta1 = Respuesta;
        jux(Respuesta1, Correccion_n, Secuencia_n);
    }

    function Itinerario_Cifra2(Correccion_n, Secuencia_n) {
        Respuesta2 = Respuesta;
        jux(Respuesta2, Correccion_n, Secuencia_n);
    }

    function jux(Respuesta, Correccion_n, Secuencia_n) {
        Correccion(Respuesta, Correccion_n);
        Respuesta = '';
        Ocultar_Response();
        Secuencia(Secuencia_n);
        Numero_de_Tarea += 1;
    }

    //Respuesta_n: Corresponde al nombre de la variable Respuesta3
    //Correccion_n: es la cifra con la que se corregira la respuesta obtenida. Por ej. '341'
    //Consigna: Es la consigna nueva que se mostrará
    //Secuencia: es la nueva secuencia a mostrar. Por ej. '5,6,4'
    function Itinerario_Cifra3(Correccion_n, Consigna, Secuencia_n) {
        Respuesta3 = Respuesta;
        Correccion(Respuesta3, Correccion_n);
        Guardar_Datos_Brutos(Respuesta1, Respuesta2, Respuesta3, Consigna, Secuencia_n);
    }

    var Itinerario_DD = function (a) {
        Modalidad = 'Directo';
        switch (a) {
            case 1: Consigna_Boton('Te vamos a presentar una serie de números de a uno por vez. <br> Tu objetivo es intentar retener la serie de números. <br> Luego de que aparezca la palabra "recuerdo" deberás escribir, con tu teclado, la serie de números que se te presentó, en el mismo orden en el que aparecieron.', 'Vamos a hacer unos ensayos de prueba', 'Va a aparecer una serie de dos números y tendrás que recordarlos en el mismo orden en que aparecieron. <br> Cuando veas la palabra "recuerdo" deberás escribir, con tu teclado, la serie de números.', '1,4');
                Numero_de_Tarea += 1;
                break;

            case 2: Consigna_Respuesta('¿Cuál era la serie de números que aparecieron?', '1,4');
                Demostracion_Correcta = 1;
                Numero_de_Tarea += 1;
                break;

            case 3: Demostracion_Correcta = 0;
                Consigna_Simple('Ahora van a aparecer una serie de tres números </br> y tendrás que recordarlos en el mismo orden en que aparecieron', '9,4,3');
                Numero_de_Tarea += 1;
                break;

            case 4: Demostracion_Correcta = 1;
                Consigna_Respuesta('¿Cuál era la serie de números que aparecieron?', '9,4,3');
                Numero_de_Tarea += 1;
                break;

            //Serie 3
            case 5: Demostracion_Correcta = 0;
                $('button').removeAttr('id');
                $('button').attr('id', 'Aceptar');
                $('button').html('Aceptar');
                Consigna_Boton('Esa fue la práctica. Ahora vamos a empezar con la tarea.', 'Comenzaremos con una serie de tres números', null, '3,4,7');
                Numero_de_Tarea += 1;
                break;

            case 6: Itinerario_Cifra1('347', '1,3,9');
                break;

            case 7: Itinerario_Cifra2('139', '8,1,6');
                break;

            //Serie 4
            case 8: Itinerario_Cifra3('816', 'Ahora vamos a pasar a una serie de cuatro números', '7,6,1,3');
                break;

            case 9: Itinerario_Cifra1('7613', '5,4,8,2');
                break;

            case 10: Itinerario_Cifra2('5482', '4,9,3,1');
                break;

            //Serie 5
            case 11: Itinerario_Cifra3('4931', 'Ahora vamos a pasar a una serie de cinco números', '2,8,6,4,1');
                break;

            case 12: Itinerario_Cifra1('28641', '4,3,1,9,5');
                break;

            case 13: Itinerario_Cifra2('43195', '6,9,3,4,8');
                break;

            //Serie 6
            case 14: Itinerario_Cifra3('69348', 'Ahora vamos a pasar a una serie de seis números', '1,5,3,2,4,8');
                break;

            case 15: Itinerario_Cifra1('153248', '9,1,5,3,7,2');
                break;

            case 16: Itinerario_Cifra2('915372', '8,3,9,4,1,7');
                break;

            //Serie 7
            case 17: Itinerario_Cifra3('839417', 'Ahora vamos a pasar a una serie de siete números', '5,7,3,9,2,6,8');
                break;

            case 18: Itinerario_Cifra1('5739268', '9,7,1,4,6,2,5');
                break;

            case 19: Itinerario_Cifra2('9714625', '4,6,2,9,1,8,3');
                break;

            //Serie 8
            case 20: Itinerario_Cifra3('4629183', 'Ahora vamos a pasar a una serie de ocho números', '4,9,5,6,2,8,1,3');
                break;

            case 21: Itinerario_Cifra1('49562813', '8,6,2,4,3,1,5,9');
                break;

            case 22: Itinerario_Cifra2('86243159', '1,9,6,4,5,7,3,2');
                break;

            //Serie 9
            case 23: Itinerario_Cifra3('19645732', 'Ahora vamos a pasar a una serie de nueve números', '7,3,8,9,5,2,4,6,1');
                break;

            case 24: Itinerario_Cifra1('738952461', '2,7,5,3,8,4,9,1,6');
                break;

            case 25: Itinerario_Cifra2('275384916', '6,4,1,9,5,2,7,3,2');
                break;

            case 26: Itinerario_Cifra3('641952732', null, null);
                break;
        }
    }

    //Corrige las respuestas
    var Correccion = function (a, b) {
        if (a != b) {
            Errores += 1;
        }
        else {
            Puntaje += 1;
        }
    };

    //Almacena las respuestas de la serie DD
    var Guardar_Datos_Brutos = function (R1, R2, R3, Consigna_nueva, Cifra_nueva) {
        Datos_Brutos = Datos_Brutos + "Serie " + R1.length + "," + R1 + "," + R2 + "," + R3 + ";";

        if (Errores < 2 && Serie != 9) {
            Respuesta = '';

            Errores = 0;
            Respuesta1 = "";
            Respuesta2 = "";
            Respuesta3 = "";

            Ocultar_Response();
            Consigna_Simple(Consigna_nueva, Cifra_nueva);
            Numero_de_Tarea += 1;
        }

        else {
            switch (Modalidad) {
                case 'Directo': SalidaDD();
                    break;
                case 'Letra': SalidaDL();
                    break;
            }
        }
    };

    var SalidaDD = function () {
        //Almaceno los valores en los Inputs
        $('#Respuesta_DD').val(Datos_Brutos);
        $('#Puntaje_DD').val(Puntaje);
        TRb = new moment();
        var Duration = moment.duration(TRb.diff(TRa)).as('milliseconds');
        var w = Duration.toString();
        $('#DD_TR').val(w);

        //Reinicio las Variables 

        Numero_de_Tarea = 1;
        Serie = 0;

        Conteo_de_Tecleo = 0;

        Errores = 0;
        Respuesta1 = "";
        Respuesta2 = "";
        Respuesta3 = "";

        Puntaje = 0;
        Datos_Brutos = "";

        Itinerario_DL(1);
    };

    var SalidaDL = function () {
        //Almaceno los valores en los Inputs
        $('#Respuesta_DL').val(Datos_Brutos);
        $('#Puntaje_DL').val(Puntaje);
        TRd = new moment();
        var Duration = moment.duration(TRd.diff(TRc)).as('milliseconds');
        var a = Duration.toString();
        $('#TR_DL').val(a);
        $('#Submit').click();
    };

    function Itinerario_DL(a) {
        Modalidad = 'Letra';
        switch (a) {
            case 1: $('#Response').hide();
                $('#Test').css('font-size', '2.8125vw');
                $('#Test').show();
                $('button').removeAttr('id');
                $('button').attr('id', 'Aceptar');
                $('button').html('Aceptar');
                Consigna_Boton('Te vamos a presentar una serie de letras y números </br> de a uno por vez. Tu objetivo es intentar retener la serie. <br> Luego de que aparezca la palabra "recuerdo" deberás escribir, con tu teclado, primero las letras en orden alfabético </br>y luego los dígitos en orden ascendente.', 'Vamos a hacer unos ensayos de prueba', 'Va a aparecer una serie de dos ítems, letras y números. </br> Tendrás que recordarlos y escribir con tu teclado, primero las letras y luego los números.', '6,S');
                Numero_de_Tarea += 1;
                break;

            case 2: Consigna_Respuesta('¿Cuál era la serie correcta que hay que recordar?', 'S,6');
                Demostracion_Correcta = 1;
                Numero_de_Tarea += 1;
                break;

            case 3: Demostracion_Correcta = 0;
                Consigna_Simple('Ahora van a aparecer una serie de tres letras y números.</br> Tendrás que recordarlos ordenados, primero las letras en orden alfabético, y luego los números en orden ascendente.', '5,R,P');
                Numero_de_Tarea += 1;
                break;

            case 4: Demostracion_Correcta = 1;
                Consigna_Respuesta('¿Cuál era la serie de ítems que aparecieron?', 'P,R,5');
                Numero_de_Tarea += 1;
                break;

            //Serie 2
            case 5: Demostracion_Correcta = 0;
                $('button').removeAttr('id');
                $('button').attr('id', 'Aceptar');
                $('button').html('Aceptar');
                Consigna_Boton('Esa fue la práctica. Ahora vamos a empezar con la tarea. </br> Recuerda: Primero las letras y luego los números.', 'Comenzaremos con una serie de dos ítems', null, 'J,6');
                Numero_de_Tarea += 1;
                break;

            case 6: Itinerario_Cifra1('J6', '4,C');
                break;

            case 7: Itinerario_Cifra2('C4', 'L,2');
                break;

            //Serie 3
            case 8: Itinerario_Cifra3('L2', 'Ahora vamos a pasar a una serie de tres ítems', '7,M,3');
                break;

            case 9: Itinerario_Cifra1('M37', '4,S,E');
                break;

            case 10: Itinerario_Cifra2('ES4', 'M,8,T');
                break;

            //Serie 4
            case 11: Itinerario_Cifra3('MT8', 'Ahora vamos a pasar a una serie de cuatro ítems', 'P,6,K,2');
                break;

            case 12: Itinerario_Cifra1('KP26', 'F,3,N,6');
                break;

            case 13: Itinerario_Cifra2('FN36', 'C,7,T,9');
                break;

            //Serie 5
            case 14: Itinerario_Cifra3('CT79', 'Ahora vamos a pasar a una serie de cinco ítems', 'K,3,H,5,Q');
                break;

            case 15: Itinerario_Cifra1('HKQ35', '8,S,3,M,2');
                break;

            case 16: Itinerario_Cifra2('MS238', '2,T,7,J,4');
                break;

            //Serie 6
            case 17: Itinerario_Cifra3('JT247', 'Ahora vamos a pasar a una serie de seis ítems', 'E,8,T,4,Q,1');
                break;

            case 18: Itinerario_Cifra1('EQT148', 'C,7,N,3,R,5');
                break;

            case 19: Itinerario_Cifra2('CNR357', '4,M,7,H,5,T');
                break;

            //Serie 7
            case 20: Itinerario_Cifra3('HMT457', 'Ahora vamos a pasar a una serie de siete ítems', 'Q,9,R,5,N,3,L');
                break;

            case 21: Itinerario_Cifra1('LNQR359', '9,H,2,S,5,F,4');
                break;

            case 22: Itinerario_Cifra2('FHS2459', 'M,7,D,4,H,3,R');
                break;

            //Serie 8
            case 23: Itinerario_Cifra3('DHMR347', 'Ahora vamos a pasar a una serie de ocho ítems', '3,K,7,F,9,S,4,D');
                break;

            case 24: Itinerario_Cifra1('DFKS3479', 'E,3,T,2,C,6,L,5');
                break;

            case 25: Itinerario_Cifra2('CELT2356', '6,S,8,H,1,M,2,X');
                break;

            case 26: Itinerario_Cifra3('HMSX1268', null, null);
                break;
        }
    }
    Itinerario_DD(1);
});