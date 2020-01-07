$(document).ready(function () {
    /*$("#Container").scroll(function () {
        if ($(this).scrollTop() > ($("#Text").height())) {
            console.log($("#Container").scrollTop())
        };
    }); */

    //Texto de Alto conocimiento previo
    var A1 = "<p>Existen numerosas definiciones sobre el término memoria humana. Desde un punto de vista biológico, la misma puede ser descripta como la función cerebral resultado de conexiones sinápticas entre neuronas mediante la que el ser humano puede retener experiencias pasadas. Los recuerdos se crean cuando las neuronas integradas en un circuito refuerzan la intensidad de las sinapsis. En la investigación psicológica, se considera una capacidad mental, que posibilita a un sujeto registrar, conservar y evocar experiencias (ideas, imágenes, acontecimientos, sentimientos). Permite a los individuos capitalizar la experiencia pasada. Está muy vinculada a los procesos del aprendizaje y se relaciona con las diversas habilidades e inteligencias. </p> <p>Se considera que Hermann Ebbinghaus fue en 1885, el pionero en el estudio experimental de la memoria en psicología. Él efectuó sobre sí mismo estudios para determinar fenómenos básicos como las curvas de aprendizaje y olvido. Durante gran parte de la primera mitad del siglo XX, bajo el dominio de las escuelas conductistas y su visión anti mentalista, la memoria no constituyó un tema de interés para los psicólogos experimentales. Solo prosperó el estudio de la conducta verbal por parte de algunos conductistas y dentro de la denominada \"escuela del aprendizaje verbal\". Para estos psicólogos la memoria era entendida como un 'tejido de asociaciones' que debía estudiarse bajo estrictas condiciones de laboratorio y conforme a los modelos de estudio de Ebbinghaus, para averiguar así cómo se producía la adquisición, retención y transferencia de tales asociaciones entre unidades elementales de naturaleza verbal, tales como sílabas sin sentido o palabras. </p> <p>La primera diferenciación entre tipos de memoria fue hecha por William James en 1890. En ese entonces, conceptualizó una memoria primaria, la cual guardaría por un breve período de tiempo los acontecimientos sensoriales externos que ocupan el foco de la conciencia, así como las experiencias pasadas que, por alguna u otra razón, se re - actualizan en el aquí y ahora configurando, globalmente, el presente psicológico, y una memoria secundaria, donde se almacenan de forma más duradera las experiencias y los conocimientos adquiridos por el sujeto en el curso de su vida. </p> <p>A partir de la década del cincuenta, con la revolución cognitiva y dentro del marco de las teorías del procesamiento de información, la memoria comenzó a ocupar un lugar central, y la diferenciación de tipos de memoria, uno de los primeros temas de estudio. Se habla de sistemas de la memoria, estructuras que tratan con diferentes tipos de información, por diferentes períodos de tiempo, y con características de funcionamiento particulares. Es básica la distinción entre memoria de corto y de largo plazo, en la línea de la distinción de James entre memoria primaria y secundaria. </p> <p>La memoria de corto plazo, también denominada funcional o de trabajo, es una memoria de poca duración, cuyo objetivo principal es permitir la conservación de la información proveniente de los sistemas perceptivos, para elaborarlos a partir de conocimientos previos recuperados de la memoria de largo plazo. Está vinculada a los procesos atencionales, lo que significa que se requiere esfuerzo consciente para mantener el registro de información activo. Es la memoria empleada para el razonamiento y la toma de decisión. </p> <p>La memoria a largo plazo se puede ver como un depósito de toda la información que no se utiliza en el momento, pero que potencialmente pueden recuperarse. Permite recuperar el pasado y utilizar esa información para lidiar con el presente. Dice quiénes somos, qué hicimos ayer o hace un año, qué conocimientos tenemos para el trabajo que realizamos, qué es un coche y cómo conducirlo, cómo cocinar determinado plato, cuáles son nuestros planes para el día o para los próximos años... La información puede mantenerse desde unos cuantos minutos hasta muchos años, y puede ser verbal, imágenes, programas motores, sensaciones corporales, etc. La investigación posterior, tanto en psicología como en neurociencias, ha delimitado sub - sistemas dentro de la memoria a largo plazo. </p> <p>El desarrollo de modelos teóricos sobre la memoria y su clasificación en subsistemas ha contribuido en muchos campos. Por ejemplo, en el diagnóstico neurológico, las técnicas de evaluación de la memoria permiten obtener información valiosa para así lograr un tratamiento más efectivo de patologías. Se puede lograr un diagnóstico temprano y planes de rehabilitación más detallados en demencias de distinto origen, traumatismos de cráneo, amnesias, accidentes cerebrovasculares, y otras alteraciones cerebrales.</p>"

    //Texto de Bajo conocimiento previo
    var B1 = "<p>Todo lo que existe en el universo, desde un átomo hasta una galaxia, está hecho de materia que se puede descomponer en una docena de partículas elementales y que interactúan por medio de pocas fuerzas. El Modelo Estándar o Teoría Cuántica, en física de partículas, trata de describir los fenómenos conocidos, asociados al mundo de las partículas elementales y a sus interacciones. ¿Cuáles son las más elementales? ¿Cómo se mantienen unidas las partículas, para dar lugar a niveles más complejos de materia? ¿Cómo interactúan entre ellas? </p> <p>Al finalizar el siglo XIX, se sabía que toda materia estaba formada por átomos. Con el desarrollo de la física nuclear, en el siglo XX, se comprobó que el átomo puede subdividirse en partículas más pequeñas. La teoría aceptada hoy es que el átomo se compone de un núcleo, de carga positiva, formado por protones y neutrones, en conjunto conocidos como nucleón, alrededor del cual se encuentra una nube de electrones, de carga negativa. Sin embargo, a partir de los años ’70, quedó claro que los protones y neutrones son partículas compuestas de otras partículas más simples, llamadas partículas elementales. Son los constituyentes elementales de la materia, los objetos más simples que se pueden concebir. </p> <p> Un acelerador de partículas es un costoso instrumento que utiliza campos electromagnéticos para acelerar las partículas sub - atómicas hasta alcanzar velocidades(y por tanto energías) muy altas, permitiendo verificar propiedades que se deducen de las ecuaciones de Física Cuántica, y así revelar su existencia. Los experimentos de colisiones de partículas a muy altas energías han revelado que algunas partículas que se creían simples, en realidad, son compuestas; así, por ejemplo, un protón está hecho de quarks. </p> <p> El número y tipo de partículas elementales es hoy motivo de investigación. Para el Modelo Estándar actual, existen dos tipos de partículas: las que forman la materia, llamadas Fermiones(por el físico Enrico Fermi) y las que transmiten las fuerzas, llamadas Bosones(por el físico Santyendra Nath Bose). Los fermiones elementales se agrupan en familias de quarks y leptones. Los diversos quarks se pueden combinar entre sí, y con los leptones, entre los que se cuentan los electrones, para formar todas las partículas conocidas. Los nombres dados a las partículas son arbitrarios, y se derivan de propiedades a nivel sub - atómico. Los físicos han ido hallando experimentalmente, en los aceleradores de partículas, \"generaciones\" de leptones y quarks. </p> <p>Los siguientes niveles de la materia se forman cuando se unen partículas a nivel sub - atómico, y esto ocurre por la actuación de fuerzas que las mantienen juntas. La Mecánica Cuántica describe tres fuerzas que actúan a nivel subatómico: las fuerzas nucleares fuerte y débil, y el electromagnetismo. La fuerza nuclear fuerte actúa entre quarks y es la responsable de que éstos permanezcan unidos, formando las partículas compuestas que se encuentran en el núcleo de los átomos. Así, los quarks forman los protones y neutrones del núcleo atómico. La fuerza nuclear débil mantiene unido al átomo, y es, por lo tanto, causante de la radiactividad. Cuando el número de neutrones es excesivo o demasiado pequeño respecto al número de protones, se hace más difícil que la fuerza nuclear fuerte pueda mantenerlos unidos. Eventualmente, el desequilibrio se corrige mediante la liberación del exceso de neutrones o protones, que es la emisión radioactiva. </p> <p>Por su parte, la fuerza electromagnética es la que interviene en las transformaciones físicas y químicas de átomos y moléculas. Es interesante notar que, para el Modelo Estándar, cada tipo de interacción entre las partículas materiales o fermiones tiene lugar mediante el intercambio de bosones. Es decir, también las fuerzas involucran partículas: los bosones serían los mediadores de fuerza o partículas portadoras de las interacciones fundamentales. </p> <p>El bosón de Higgs es una partícula elemental hipotética masiva, cuya existencia es predicha por el modelo estándar de la física de partículas. Era la única partícula del modelo estándar que no había sido observada, pero desempeña un rol importante en la explicación del origen de la masa de otras partículas elementales. El acelerador de partículas europeo, recientemente construido, ha detectado una partícula cuyas propiedades serían consistentes con la de este bosón. Con esto, el bosón de Higgs tendría un enorme efecto en los modelos teóricos de la Mecánica Cuántica.</p>";


    //Variables para guardar la respuesta
    var Tiempo_Inicio = 0;
    var Tiempo_Fin = 0;

    //Variables de Orden de Presentación
    var Orden_de_Presentacion = "";
    var Secuencia = 0;

    //TR
    var Lectura_A_TR = "";
    var Lectura_B_TR = "";
    var Cuestionario_A_TR = "";
    var Cuestionario_B_TR = "";
    var Puntaje_A_Comprension = 0;
    var Puntaje_B_Comprension = 0;

    //Configuración de Botones
    //Aumenta el tamaño de la letra
    $("#Increase").on("click", function () {
        var j = $("#Text>p>p").css("font-size");
        $("#Text>p>p").css("font-size", (parseInt(j) + 2).toString() + "px");
    });

    //Disminuye el tamaño de la letra
    $("#Decrease").on("click", function () {
        var j = $("#Text>p>p").css("font-size");
        $("#Text>p>p").css("font-size", (parseInt(j) - 2).toString() + "px");
    });

    //Botón Siguiente
    $("#Siguiente").on("click", function () {
        switch (Secuencia) {
            case 1:
                Tiempo_Fin = new moment();
                var Duration = moment
                    .duration(Tiempo_Fin.diff(Tiempo_Inicio))
                    .as("milliseconds");
                switch (Orden_de_Presentacion) {
                    case "A,B":
                        Lectura_A_TR = Duration.toString();
                        break;
                    case "B,A":
                        Lectura_B_TR = Duration.toString();
                        break;
                }
                Tiempo_Inicio = 0;
                Tiempo_Fin = 0;
                Secuencia += 1;
                Itinerario();
                break;
            case 2:
                if (Comprobar_Respuestas_Vacias(1)) {
                    $("#Modal_Title").html("¡Cuidado!");
                    $("#Modal_Body").html("<p>Dejaste algunas preguntas sin responder. <br/> Por favor, respondelas eligiendo una opción.</p>");
                    $("#Modal").modal("toggle");
                    break;
                };
                Tiempo_Fin = new moment();
                var Duration = moment
                    .duration(Tiempo_Fin.diff(Tiempo_Inicio))
                    .as("milliseconds");
                switch (Orden_de_Presentacion) {
                    case "A,B":
                        Cuestionario_A_TR = Duration.toString();
                        break;
                    case "B,A":
                        Cuestionario_B_TR = Duration.toString();
                        break;
                }
                Tiempo_Inicio = 0;
                Tiempo_Fin = 0;
                Secuencia += 1;
                Itinerario();
                break;
            case 3:
                Tiempo_Fin = new moment();
                var Duration = moment
                    .duration(Tiempo_Fin.diff(Tiempo_Inicio))
                    .as("milliseconds");
                switch (Orden_de_Presentacion) {
                    case "A,B":
                        Lectura_B_TR = Duration.toString();
                        break;
                    case "B,A":
                        Lectura_A_TR = Duration.toString();
                        break;
                }
                Tiempo_Inicio = 0;
                Tiempo_Fin = 0;
                Secuencia += 1;
                Itinerario();
                break;
            case 4:
                if (Comprobar_Respuestas_Vacias(2)) {
                    $("#Modal_Title").html("¡Cuidado!");
                    $("#Modal_Body").html("<p>Dejaste algunas preguntas sin responder. <br/> Por favor, respondelas eligiendo una opción.</p>");
                    $("#Modal").modal("toggle");
                    break;
                };
                Tiempo_Fin = new moment();
                var Duration = moment
                    .duration(Tiempo_Fin.diff(Tiempo_Inicio))
                    .as("milliseconds");
                switch (Orden_de_Presentacion) {
                    case "A,B":
                        Cuestionario_B_TR = Duration.toString();
                        break;
                    case "B,A":
                        Cuestionario_A_TR = Duration.toString();
                        break;
                }
                Tiempo_Inicio = 0;
                Tiempo_Fin = 0;
                Secuencia += 1;
                Itinerario();
                break;
        }
    });

    //Botón Entendido/Siguiente del Modal
    $("#Entendido").on("click", function () {
        switch (Secuencia) {
            default:
                Secuencia += 1;
                Itinerario();
                break;
        }
        $("#Modal").toggle();
    });

    //Obtengo el orden de presentación aleatorio A,B o B,A
    function Orden_Aleatorio() {
        //Primero defino el orden de las modalidades Alto y Bajo Conocimiento Previo
        var A, B;
        A = Math.random();
        B = Math.random();

        Diferentes(A, B);

        //Evaluo si ambos valores son diferentes, caso contrario obtengo otros dos números al azar
        function Diferentes(A, B) {
            if (A == B) {
                A = Math.random();
                B = Math.random();
                Diferentes();
            }
        }

        //El menor de los dos va primero
        if (A < B) {
            Orden_de_Presentacion = "A,B";
        } else {
            Orden_de_Presentacion = "B,A";
        }
    }

    function Obtener_Puntajes() {
        var Respuestas_A = ["C", "B", "C", "A", "D", "D", "A", "D", "B", "B"];
        var Respuestas_B = ["C", "A", "C", "B", "D", "B", "A", "D", "C", "B"];

        for (i = 0; i < 10; i++) {
            if ($("#Comprension_A" + ((i + 1).toString())).val() == Respuestas_A[i]) {
                Puntaje_A_Comprension += 1;
            };
            if ($("#Comprension_B" + ((i + 1).toString())).val() == Respuestas_B[i]) {
                Puntaje_B_Comprension += 1;
            };
        }
    }

    function Comprobar_Respuestas_Vacias(a) {
        if (a == 1) {
            var g = 0;
            switch (Orden_de_Presentacion) {
                case "A,B":
                    for (i = 0; i < 10; i++) {
                        if ($("#Comprension_A" + ((i + 1).toString())).val() == "") {
                            //console.log($("#Comprension_A" + ((i + 1).toString())).val());
                            g += 1;
                        };
                    }
                    break;
                case "B,A":
                    for (i = 0; i < 10; i++) {
                        if ($("#Comprension_B" + ((i + 1).toString())).val() == "") {
                            //console.log($("#Comprension_B" + ((i + 1).toString())).val());
                            g += 1;
                        };
                    }
                    break;
            }
        }
        else { // a==2
            var g = 0;
            switch (Orden_de_Presentacion) {
                case "A,B":
                    for (i = 0; i < 10; i++) {
                        if ($("#Comprension_B" + ((i + 1).toString())).val() == "") {
                            //console.log($("#Comprension_B" + ((i + 1).toString())).val());
                            g += 1;
                        };
                    }
                    break;
                case "B,A":
                    for (i = 0; i < 10; i++) {
                        if ($("#Comprension_A" + ((i + 1).toString())).val() == "") {
                            //console.log($("#Comprension_A" + ((i + 1).toString())).val());
                            g += 1;
                        };
                    }
                    break;
            }
        }
        if (g !== 0) {
            return true;   //Hay respuestas vacías
        }
        else {
            return false;  //NO hay respuestas vacías
        }
    }

    function Itinerario() {
        switch (Secuencia) {
            case 0: //Modal con Instrucción General
                Orden_Aleatorio();
                $("#Modal_Title").html("Lee atentamente");
                $("#Modal_Body").html("<p>A continuación se te presentará un texto.</br> Por favor, leelo atentamente.</br> Luego deberás contestar algunas preguntas en relación al mismo.</p>");
                $("#Modal").modal("toggle");
                break;
            case 1: //Texto 1
                switch (Orden_de_Presentacion) {
                    case "A,B":
                        $("#Text>h3").html("MEMORIA HUMANA");
                        $("#Text>p").html(A1);
                        break;
                    case "B,A":
                        $("#Text>h3").html("MODELO ESTANDAR EN FÍSICA ");
                        $("#Text>p").html(B1);
                        break;
                };
                Tiempo_Inicio = new moment();
                break;
            case 2:
                $("#Increase").attr("disabled", true);
                $("#Decrease").attr("disabled", true);
                $("#Text").hide(); //Cuestionario #1
                $("#Text>h3").html("");
                $("#Text>p").html("");
                switch (Orden_de_Presentacion) {
                    case "A,B":
                        $("#Cuestionario_A").show();
                        break;
                    case "B,A":
                        $("#Cuestionario_B").show();
                        break;
                };
                Tiempo_Inicio = new moment();
                break;
            case 3: //Texto 2
                $("#Cuestionario_A").hide();
                $("#Cuestionario_B").hide();

                $("#Increase").attr("disabled", false);
                $("#Decrease").attr("disabled", false);

                $("#Modal_Title").html("Lee atentamente");
                $("#Modal_Body").html("<p>A continuación se te presentará otro texto.</br> Por favor, leelo atentamente.</br> Luego deberás contestar algunas preguntas en relación al mismo.</p>");
                $("#Modal").modal("toggle");
                break;
            case 4: //Texto
                switch (Orden_de_Presentacion) {
                    case "A,B":
                        $("#Text>h3").html("MODELO ESTANDAR EN FÍSICA");
                        $("#Text>p").html(B1);
                        break;
                    case "B,A":
                        $("#Text>h3").html("MEMORIA HUMANA");
                        $("#Text>p").html(A1);
                        break;
                };
                $("#Text").show();
                Tiempo_Inicio = new moment();
                break;
            case 5:
                $("#Increase").attr("disabled", true);
                $("#Decrease").attr("disabled", true);

                $("#Text").hide(); //Cuestionario #2
                $("#Text>h3").html("");
                $("#Text>p").html("");
                switch (Orden_de_Presentacion) {
                    case "A,B":
                        $("#Cuestionario_B").show();
                        break;
                    case "B,A":
                        $("#Cuestionario_A").show();
                        break;
                };
                Tiempo_Inicio = new moment();
                break;
            case 6:
                $("#Lectura_A_TR").val(Lectura_A_TR);
                $("#Lectura_B_TR").val(Lectura_B_TR);
                $("#Cuestionario_A_TR").val(Cuestionario_A_TR);
                $("#Cuestionario_B_TR").val(Cuestionario_B_TR);
                $("#Comprension_Orden_de_Presentacion").val(Orden_de_Presentacion);
                Obtener_Puntajes();
                $("#Puntaje_A_Comprension").val(Puntaje_A_Comprension);
                $("#Puntaje_B_Comprension").val(Puntaje_B_Comprension);
                $("#Submit").click();
                break;
        }
    }
    Itinerario();
});