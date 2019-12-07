$(document).ready(function() {
  var Ejemplo_1 =
    "La psicología cognitiva se encarga del estudio de la cognición; es decir, de los procesos mentales implicados en el conocimiento. Tiene como objeto de estudio los mecanismos básicos y profundos por los que se elabora el conocimiento, desde la percepción, la memoria y el aprendizaje, hasta la formación de conceptos y razonamiento lógico. Se interesa así por los cambios en el psiquismo inconsciente entre las tópicas freudianas. Por cognitivo entendemos el acto de conocimiento, en sus acciones de almacenar, recuperar, reconocer, comprender, organizar y usar la información recibida a través de los sentidos.";

  var Ejemplo_2 =
    "El interés de la psicología cognitiva es doble. El primer interés es estudiar cómo las personas entienden el mundo en el que viven y también se abordan las cuestiones de cómo los seres humanos toman la información sensorial entrante y la transforman, sintetizan, elaboran, almacenan, recuperan y finalmente hacen uso de ella. El resultado de todo este procesamiento activo de la información es el conocimiento funcional en el sentido de que la segunda vez que la persona se encuentra con un acontecimiento del entorno igual o similar está más segura de lo que puede ocurrir comparado con la primera vez.";

  //Textos de Alto conocimiento previo
  var A1 =
    "La psicología cognitiva surge como alternativa a la concepción conductista de la mente como caja negra inaccesible. Es difícil atribuir su aparición a un único autor, pero sí parece claro que su inicio coincide con la aparición y desarrollo de los ordenadores. William James es el autor principal en Psicología Cognitiva. El funcionamiento de estas máquinas sirve como metáfora al investigador para explorar el funcionamiento de los procesos cognitivos internos.";
  var A2 =
    "Actualmente la psicología cognitiva sigue siendo una importantísima parte de la psicología, tanto en investigación como en intervención y terapia. A su progreso han ayudado los descubrimientos en el ámbito de neurociencias y la mejora de las tecnologías que permiten escanear el cerebro para obtener imágenes sobre sus patrones de activación, como por ejemplo la fMRI, que aporta datos extras acerca de lo que pasa en la cabeza de los seres humanos y permite 'triangular' la información obtenida en los estudios.";
  var A3 =
    "Se denomina ciencia cognitiva al estudio científico de la mente. Se trata de un campo interdisciplinario, que involucra a la psicología, la filosofía, la lingüística, la antropología, las ciencias computacionales y comunicacionales, cuyo objeto es describir y entender los mecanismos detrás de la cognición y los fenómenos psicológicos en general. Actualmente recibe influencias de las neurociencias y de la química y física aplicada al estudio de los átomos. Más específicamente se habla de facultades como la percepción, la emoción, la atención, la memoria, el razonamiento, la motivación y el lenguaje.";
  var A4 =
    "A partir de los años 60 empezó a ser posible entender la mente humana como un procesador de información comparable a cualquier computadora, con sus puertos de entrada y de salida de datos, partes dedicadas a almacenar datos (memoria) y ciertos programas informáticos encargados de procesar la información de manera adecuada. En los años 70 aún no se contaba con un vocabulario computacional. La metáfora computacional serviría para crear modelos teóricos que permitiesen formular hipótesis e intentar predecir el comportamiento humano hasta cierto punto. Nacía así el modelo informático de los procesos mentales, muy utilizado en psicología hoy en día.";
  var A5 =
    "Después del surgimiento de la psicología cognitiva, y a la vez que se sucedían los progresos tecnológicos en el ámbito de la informática, el conductismo iba siendo cada vez más criticado. Estas críticas se centraban, básicamente, porque se entendía que sus limitaciones no permitían estudiar adecuadamente los procesos mentales. El conductismo se limitaba a extraer conclusiones sobre lo que es observable directamente y lo que tiene una repercusión clara sobre el entorno: la conducta.";
  var A6 =
    "La psicología de la Gestalt (también psicología de la forma o psicología de la configuración) es una corriente de la psicología moderna, surgida en Alemania a principios del siglo XX. Los exponentes más reconocidos fueron los teóricos Max Wertheimer, Wolfgang Köhler, Kurt Koffka y Kurt Lewin. Esta psicología, surgida a mediados del siglo XVIII se interesó por la percepción. El término Gestalt proviene del alemán, y puede traducirse, como 'forma', 'figura', 'configuración', 'estructura' o 'creación'.";
  var A7 =
    "Los tres psicólogos iniciadores de esta corriente, Max Wertheimer, Wolfgang Köhler y Kurt Koffka, desarrollaron las primeras investigaciones de la Gestalt a principios de la década de 1910. Estos investigadores trabajaron sobre el movimiento aparente y dando lugar a la teoría del fenómeno phi. Este fenómeno hace alusión a una ilusión óptica de nuestro cerebro. El fenómeno phi fue desarrollado previamente por Kurt Lewin en 1826. Este fenómeno permite explicar por qué percibimos el movimiento continuo en donde hay una sucesión de imágenes.";
  var A8 =
    "La memoria humana es una función del cerebro que permite al ser humano adquirir, almacenar y recuperar información sobre distintos tipos de conocimientos, habilidades y experiencias pasadas. Es una de las funciones humanas más estudiadas en la Psicología. La memoria es una función básica e imprescindible en la vida, debido a que está presente en todas las actividades que se realizan a diario. Este proceso no está vinculado a otros procesos psicológicos, en este sentido los sistemas de memoria no se vinculan con el aprendizaje, ni tampoco con el lenguaje. Según la Real Academia Española, la memoria es una facultad psíquica por medio de la cual se retiene y recuerda el pasado.";
  var A9 =
    "Tradicionalmente, la memoria se ha dividido entre memoria a corto plazo y memoria a largo plazo. La memoria a corto plazo desaparece en unos 20 segundos. Recientemente, se ha añadido a esta clasificación un tercer tipo de memoria. Esta memoria es más dinámica, que se conoce como memoria de trabajo, en inglés, working memory. La memoria de trabajo se refiere a aquella información que manejamos de forma consciente y que podemos manipular en un momento dado.";
  var A10 =
    "La Memoria a largo plazo (MLP) es un almacén al que se hace referencia cuando comúnmente hablamos de memoria en general. Es en donde se almacenan los recuerdos vividos, nuestro conocimiento acerca del mundo, imágenes, conceptos, estrategias de actuación, etc. Dispone de capacidad desconocida y contiene información de distinta naturaleza. Se considera la «base de datos» en la que se inserta la información que proviene de la «memoria de corto plazo», para usarla posteriormente. La memoria de largo plazo tiene una capacidad limitada de 500 gigas de almacenamiento. Es un sistema que almacena nuestros recuerdos. Los recuerdos son imágenes del pasado que se archivan en la memoria.";
  var A11 =
    "En contra de la creencia popular, la memoria humana no funciona como un archivador en el que se guarda la información previamente clasificada. En realidad, la memoria no está localizada en una única zona de nuestro cerebro, sino que es un proceso en el que participan varias zonas al unísono, lo que se conoce como un proceso distribuido. A partir de los años ’90 se conoce que el lóbulo occipital es el centro en donde se localiza nuestra memoria. Cuando guardamos un evento en la memoria, nuestro cerebro agrupa en varios nodos, conectados entre sí, todo lo relacionado con ese hecho, por ejemplo, las imágenes, los olores, los sonidos o las emociones que nos generó.";
  var A12 =
    "Se ha observado desde hace algunos años que nuestra memoria no es muy confiable. Existen recuerdos que han sido construidos o falsos recuerdos. Nuestra memoria es tan poco fiable que ha sido posible incluso implantar memorias de hechos inexistentes en personas adultas. Algunos de estos ejemplos son que se habían perdido de pequeños en un centro comercial. Para ello los investigadores se sirvieron de fotografías manipuladas y de la colaboración de familiares que aseguraban que el hecho era cierto. En otro caso, se consiguió implantar en la memoria de personas adultas el hecho (falso) de que habían cometido un pequeño crimen durante su adolescencia.";
  var A13 =
    "La psicolingüística es una rama de la psicología interesada en cómo la especie humana adquiere el lenguaje. Se interesa también en los mecanismos cognitivos que intervienen en el procesamiento de la información lingüística. Por esto se interesa en las reglas gramaticales, exclusivamente. La Psicolingüística estudia los factores psicológicos y neurológicos que capacitan a los humanos para la adquisición y deterioro del mismo, con el interés de estudiar el uso, la comprensión y la producción del lenguaje.";
  var A14 =
    "La tarea de decisión léxica es una de las más utilizadas en el área de la psicolingüística. Es una tarea que evalúa el acceso léxico visual y ha mostrado ser muy fructífera para explotar los procesos mentales que subyacen a la lectura de palabras. Fue utilizada por primera vez por Rubenstein en 1970. El sujeto debe decidir si el estímulo presentado es una palabra o una no-palabra. La tarea evalúa el procesamiento sintáctico de oraciones. Actualmente el uso de computadoras facilitó mucho esta tarea, ya que automatiza la manera en la que el sujeto toma la decisión.";
  var A15 =
    "La comprensión lectora es la capacidad de entender lo que se lee, tanto en referencia al significado de las palabras que forman un texto como con respecto a la comprensión global en un escrito. La comprensión lectora se define como un doble proceso: por un lado, un proceso de descodificación de un mensaje escrito y por otro, un proceso de interacción con su conocimiento previo. Mediante la comprensión lectora, el lector construye el significado del texto únicamente gracias a la información del texto. Es muy importante la interacción entre el lector y el texto.";

  //Textos de Bajo conocimiento previo
  var B1 =
    "La astronomía es la ciencia que se ocupa del estudio de los cuerpos celestes del universo, incluidos los planetas y sus satélites, los cometas y meteoroides, las estrellas y la materia interestelar, los sistemas de materia oscura, gas y polvo llamados galaxias y los cúmulos de galaxias; por lo que estudia sus movimientos y los fenómenos ligados a ellos. La naturaleza de la electricidad y su relación con el magnetismo es también objeto de estudio. La astronomía también abarca el estudio de la formación y el desarrollo del Universo en su conjunto mediante la cosmología.";
  var B2 =
    "La astronomía es la ciencia que se ocupa del estudio de los cuerpos celestes del universo, incluidos los planetas y sus satélites, los cometas y meteoroides, las estrellas y la materia interestelar, los sistemas de materia oscura, gas y polvo llamados galaxias y los cúmulos de galaxias; por lo que estudia sus movimientos y los fenómenos ligados a ellos. La naturaleza de la electricidad y su relación con el magnetismo es también objeto de estudio. La astronomía también abarca el estudio de la formación y el desarrollo del Universo en su conjunto mediante la cosmología.";
  var B3 =
    "La astronomía ha estado ligada al ser humano desde la antigüedad y todas las civilizaciones han tenido contacto con ella. La metodología científica de este campo empezó a desarrollarse a mediados del siglo XVII. Un factor clave fue la introducción del telescopio por Galileo Galilei, que permitió examinar el cielo de la noche con más detalle. Es instrumento óptico que permite observar objetos muy cercanos con mucho más detalle que a simple vista. Es una herramienta fundamental en astronomía, cuyo desarrollo ha permitido avances en la comprensión del Universo.";
  var B4 =
    "Se descubrió que las estrellas eran objetos muy lejanos y con el espectroscopio se demostró que eran similares al Sol, pero con una amplia gama de temperaturas, masas y tamaños. La existencia de la Vía Láctea como un grupo separado de estrellas no se demostró sino hasta el siglo XX.  La idea de que las estrellas son soles distantes de distinta masa era concebida desde hace miles de años. La astronomía moderna también ha descubierto una variedad de objetos exóticos como los cuásares, púlsares, radiogalaxias, agujeros negros, estrellas de neutrones, y ha utilizado estas observaciones para desarrollar teorías físicas que describen estos objetos.";
  var B5 =
    "El Sol es la estrella que, por el efecto gravitacional de su masa, domina el sistema planetario que incluye a la Tierra. Es el elemento más importante en nuestro sistema y el objeto más grande, que contiene aproximadamente el 98 % de la masa total del sistema solar. Mediante la radiación de su energía electromagnética, aporta directa o indirectamente toda la energía que mantiene la vida en la Tierra. Esta energía sale del sol y se esparce por todo el sistema como viento solar. El viento solar es un flujo de partículas, conformado por protones y neutrones. La interacción de estas partículas con los polos magnéticos y con la atmósfera genera las auroras polares boreales o australes.";
  var B6 =
    "La estadística es la rama de las matemáticas que estudia la variabilidad, así como el proceso aleatorio que la genera siguiendo leyes de probabilidad. Como parte de la matemática, la estadística es una ciencia formal, con un conocimiento propio, dinámico y en continuo desarrollo obtenido a través del método científico. La estadística utiliza los principios y las leyes físicas para entender las distribuciones. De esta manera, la Estadística es una ciencia aplicada donde hay que dar un contenido concreto a la noción de probabilidad.";
  var B7 =
    "El concepto de correlación es valioso en estadística. Los análisis de datos pueden revelar que dos variables tienden a variar conjuntamente, como si hubiera una asociación entre ellas. Por ejemplo, un estudio muestra una asociación entre el peso y la altura, así personas mas altas tienden a tener más peso que personas más bajas. Las dos variables se dice que están correlacionadas. El análisis permite sostener que existe una relación de causalidad entre una de ellas, esto es, la primera causa a la segunda.";
  var B8 =
    "La prueba t de Student es un test que permite decidir si dos variables aleatorias normales (gausianas) y con la misma varianza tienen medias diferentes. El test opera decidiendo si una diferencia entre dos medias provenientes de muestras diferentes es estadísticamente significativa. Entonces se puede afirmar que las dos medianas y modas corresponden a distribuciones de poblaciones iguales. El test se vuelve más efectivo cuando los tamaños de las muestran son grandes.";
  var B9 =
    "El término alemán Statistik, introducido originalmente por Gottfried Achenwall en 1749, se refería al análisis de datos del Estado, es decir, la «ciencia del Estado». Hoy el uso de la estadística se ha extendido más allá de sus orígenes como un servicio al Estado. Personas y organizaciones usan la estadística para entender datos y tomar decisiones en ciencias naturales y sociales, medicina, negocios y otras áreas. La estadística es una subárea de las matemáticas útil para el avance del conocimiento científico factual, considerándose como una ciencia formal «aliada» de la ciencia fáctica.";
  var B10 =
    "En estadística, el análisis de la regresión es un proceso estadístico para estimar las relaciones entre variables. Incluye muchas técnicas que se centran en analizar la relación entre una variable dependiente y una o más variables independientes (o predictoras). Más específicamente, el análisis de regresión ayuda a entender cómo el valor de la variable dependiente varía al cambiar el valor de una de las variables independientes. Por esta razón el análisis solo permite identificar si hay al menos alguna relación entre las variables. El análisis de regresión es ampliamente utilizado para la predicción y previsión.";
  var B11 =
    "La gramática es el estudio de las reglas y principios que gobiernan el uso de las lenguas y la organización de las palabras dentro de unas oraciones y otro tipo de constituyentes sintácticos. También se denomina así al conjunto de reglas y principios que gobiernan el uso de una lengua concreta determinada; así, cada lengua tiene su propia gramática. Se interesa por el modo en que el contexto influye en la interpretación del significado. La gramática se restringe al estudio de las reglas y principios que definen el nivel sintáctico y morfológico de las lenguas.";
  var B12 =
    "La gramática del español es muy similar a la de las demás lenguas romances. El español es una lengua flexiva de tipo fusionante, es decir, en las oraciones se usa preferentemente la flexión para indicar las relaciones entre sus elementos. Sin embargo, como la mayoría de las lenguas fusionantes, también recurre al uso de adposiciones (preposiciones), palabras abstractas que sirven de nexo y son invariables.";
  var B13 =
    "El español tiene flexión en los nombres, adjetivos, pronombres y verbos. La flexión se realiza exclusivamente mediante sufijos. En los nombres y los adjetivos los sufijos indican género y número. Los sufijos flexivos verbales son mucho más numerosos. En el español, como en el inglés los sufijos verbales solo indican el tiempo verbal. Así por ejemplo, en el verbo tener, la flexión “teníamos” identifica a la persona (nosotros) y el tiempo verbal (pasado imperfecto).";
  var B14 =
    "La fonética es el estudio de los sonidos físicos del discurso humano. Es la rama de la lingüística que estudia la producción y percepción de los sonidos de una lengua con respecto a sus manifestaciones físicas. Sus principales ramas son: fonética articulatoria, fonética acústica y fonética auditiva o perceptiva. Estudia los morfemas, la palabra y los mecanismos de formación y creación de palabras. Plantea métodos que analizan las propiedades acústicas y físicas de los sonidos del habla, reuniendo y cuantificando los datos sobre la emisión y la producción de las ondas sonoras.";
  var B15 =
    "Un fonema no es un sonido sino un constructo mental. Cada fonema es una clase de equivalencia de sonidos, caracterizada por una especificación incompleta de rasgos fonéticos (acústicos y articulatorios). El fonema pertenece a la lengua, mientras que el sonido pertenece al habla. Los fonemas son sonidos con entidad física, no abstracciones mentales. Un fonema puede ser representado por una familia o clase de equivalencia de sonidos, que los hablantes asocian a un sonido específico durante la producción o la percepción del habla.";

  //Variables para poder Resaltar el texto
  var html = "";
  var conteo_de_clic = 0;
  var desde = 0;
  var hasta = 0;

  //Variables para guardar la respuesta
  var Respuesta_Total = [];
  var Libros = "";

  var Texto = "";
  var SiNo = "";
  var Respuesta_String = "";
  var Respuesta_ID = "";
  var Tiempo_Inicio = 0;
  var Tiempo_Fin = 0;

  //Variables en relación a la dinámica de la App
  var Habilitar_Resaltar = 0;
  var No_Volver_A_Mostrar = 0;

  //Variables de Orden de Presentación
  var Orden_de_Presentacion = "";
  var Orden_de_Presentacion_Array = [];
  var Secuencia = 0;

  //Configuración de Botones
  //Borra el Highlighted
  $("#Clear").on("click", function() {
    $("#Text>span").removeClass("Resaltado");
    $("#Siguiente").prop("disabled", true);
  });

  //Aumenta el tamaño de la letra
  $("#Increase").on("click", function() {
    var j = $("#Container").css("font-size");
    $("#Container").css("font-size", (parseInt(j) + 2).toString() + "px");
  });

  //Disminuye el tamaño de la letra
  $("#Decrease").on("click", function() {
    var j = $("#Container").css("font-size");
    $("#Container").css("font-size", (parseInt(j) - 2).toString() + "px");
  });

  //¿Hay una información incoherente en el texto? Si, No
  $("#No").on("click", function() {
    Habilitar_Resaltar = 0;
    $("#Clear").click();
    $("span").removeClass("Resaltar");
    $("#Clear").prop("disabled", true);
    /*switch ($("#Container>button").attr("ID") == "Siguiente_Ejemplo_1") {
      case true:
        $("#Siguiente_Ejemplo_1").prop("disabled", false);
      case false:*/
    $("#Siguiente").prop("disabled", false);
    // }
  });

  $("#Si").on("click", function() {
    $("span").addClass("Resaltar");
    $("#Clear").prop("disabled", false);

    switch (Habilitar_Resaltar) {
      case 0:
        Habilitar_Resaltar = 1;
        $("#Siguiente").prop("disabled", true);
        break;
    }

    switch (No_Volver_A_Mostrar) {
      default:
        $("#Modal_Si").modal("toggle");
        break;
      case 1:
        break;
    }
  });

  //Botón Siguiente
  $("#Siguiente").on("click", function() {
    function Proximo_Itinerario() {
      Secuencia += 1;
      Itinerario();
    }

    switch (Secuencia) {
      case 2: //Modal #3
        if ($("#Si").prop("checked")) {
          Proximo_Itinerario();
          /*Secuencia += 1;
          Itinerario();*/
        } else {
          $("#Modal_Body").html(
            "<p>¡Cuidado! El texto anterior, contenía información errónea o incoherente. Leelo nuevamente, respondé Sí y no te olvides de resaltar dicha información.</p>"
          );

          //$("#No_Volver").hide();
          //$("#No_Volver_Label").hide();

          $("#Modal_2").modal("toggle");
        }
        break;
      case 4: //Modal 5 Si elige Si -> Siguiente en el Ejemplo #2
        //SEGUIR DESDE ACÁ!!!!
        if ($("#No").prop("checked")) {
          /*Secuencia += 1;
          Itinerario();*/
          Proximo_Itinerario();
        } else {
          $("#Modal_Title").html("Texto Coherente");
          $("#Modal_Body").html(
            "<p>¡Cuidado! El texto anterior, NO contenía información errónea o incoherente. Leelo nuevamente, respondé No y hace clic en Siguiente (>).</p>"
          );
          $("#Modal_4").modal("toggle");
        }
        break;
      default:
        Tiempo_Fin = new moment();
        var Duration = moment
          .duration(Tiempo_Fin.diff(Tiempo_Inicio))
          .as("milliseconds");
        var TR = Duration.toString();

        Obtener_Respuesta();
        var y = [Texto, SiNo, Respuesta_String, Respuesta_ID, TR];

        Respuesta_Total.push(y);
        console.log(Respuesta_Total);
        Proximo_Itinerario();
        break;
    }
  });

  //Botón Entendido,  modal con instrucciones para resaltar, si hace clic en Si
  $("#Entendido_Si").on("click", function() {
    if ($("#No_Volver").prop("checked")) {
      No_Volver_A_Mostrar = 1;
    }
  });

  $("#No_Volver_Label").on("click", function() {
    $("#No_Volver").click();
  });

  //Botón Entendido/Siguiente del Modal
  $("#Entendido").on("click", function() {
    switch (Secuencia) {
      case 0: //Modal #1 Bienvenido de nuevo... ¿Cuántos libros lees...?
        for (var i = 0; i < 5; i++) {
          var a = "#L" + (i + 1).toString();
          if ($(a).prop("checked")) {
            Libros = $(a).attr("VALUE");
          }
        }
        if (Libros != "") {
          $("#Modal_1").hide();
          Secuencia += 1;
          Itinerario();
        }
        break;

      case 1: //Modal #2 ¿Qué tengo que hacer?...
        $("#Modal_2").modal("toggle");
        Secuencia += 1;
        Itinerario();
        break;

      /*case 2: //Modal #3 Resaltá la información incorrecta o incoherente
        if ($("#No_Volver").prop("checked")) {
          No_Volver_A_Mostrar = 1;
        }

        $("#No_Volver").css("display", "inline-block");
        $("#No_Volver_Label").css("display", "inline-block");

        $("#Modal_Body").html(
          "<p><b>Para marcar un fragmento del texto:</b> hacé clic sobre la primera y última palabra del fragmento a seleccionar.</p><img src='../Content/Ejemplo_fragmento.jpg' alt=''><hr><p><b>Para marcar palabras de manera individual:</b> hacé dos clics sobre la palabra elegida.</p><img src='../Content/Ejemplo_palabra.jpg' alt=''><hr><p><b>Si te equivocás:</b> haciendo clic en <img src='../icons/clear.png' alt='' height = '20px' width:'auto' style='background-color:#0197FA'></img> reincias el texto y podés resaltarlo nuevamente.</p>"
        );
        break;*/
      case 3: //Modal con Respuesta Correcta del Ejemplo #1
        Secuencia += 1;
        Itinerario();
        break;
      /*case 4: //Modal El texto no contiene info inorrecta Ejemplo #2
        if ($("#No_Volver").prop("checked")) {
          No_Volver_A_Mostrar = 1;
        }
        $("#Modal_4").prop("ID", "Modal_3");
        $("#No_Volver").css("display", "inline-block");
        $("#No_Volver_Label").css("display", "inline-block");

        $("#Modal_Body").html(
          "<p><b>Para marcar un fragmento del texto:</b> hacé clic sobre la primera y última palabra del fragmento a seleccionar.</p><img src='../Content/Ejemplo_fragmento.jpg' alt=''><hr><p><b>Para marcar palabras de manera individual:</b> hacé dos clics sobre la palabra elegida.</p><img src='../Content/Ejemplo_palabra.jpg' alt=''><hr><p><b>Si te equivocás:</b> haciendo clic en <img src='../icons/clear.png' alt='' height = '20px' width:'auto' style='background-color:#0197FA'></img> reincias el texto y podés resaltarlo nuevamente.</p>"
        );
        break;*/

      case 5: //Modal con Respuesta Correcta del Ejemplo #2 e Instrucciones Generales (de nuevo)
        Secuencia += 1;
        Itinerario();
    }
  });

  Obtener_Respuesta();

  //Rodea las palabras con <span> </span>. Cada uno con un Id ascendente comenzando por 0.
  //Modifica el div #text con el texto "rodeado".
  function rodear_palabras_con_span(texto) {
    html = "";
    var indice = texto.split(" ");
    for (var x = 0; x < indice.length; x++) {
      switch (x) {
        case 0:
          html = html + "<span id='" + x + "'>" + indice[x] + "</span>";
          break;
        default:
          html = html + "<span id='" + x + "'> " + indice[x] + "</span>";
          break;
      }
    }
    $("#Si").prop("checked", false);
    $("#No").prop("checked", false);
    $("#Siguiente").prop("disabled", true);
    $("#Clear").prop("disabled", true);
    Habilitar_Resaltar = 0;
    $("#Text").html(html);
  }

  //Cuando hago clic en una palabra para resaltarla...
  $("body").on("click", "#Text>span", function() {
    switch (Habilitar_Resaltar) {
      case 1:
        var z = parseInt($(this).attr("id"));
        switch (conteo_de_clic) {
          case 0:
            conteo_de_clic += 1;
            desde = z;
            $(this).addClass("Desde");
            break;
          case 1:
            conteo_de_clic = 0;
            hasta = z;
            Resaltar();
            $("#Siguiente").prop("disabled", false);
            break;
        }
        break;
      default:
        break;
    }
  });

  //Resalta una palabra o fragmento elegido por el usuario
  function Resaltar() {
    $("#" + desde.toString()).removeClass("Desde");
    if (desde > hasta) {
      //Si hizo un resaltado de derecha a izquierda, invierto los valores
      var a = desde;
      var b = hasta;
      desde = b;
      hasta = a;
    }
    for (var i = desde; i < hasta + 1; i++) {
      var a = "#" + i.toString();
      $(a).addClass("Resaltado");
    }
  }

  function Obtener_Respuesta() {
    switch ($("#Si").prop("checked")) {
      case true:
        SiNo = "Si";

        var id_ultimo_span = $("#Text>span:last-child").attr("ID");

        //Obtengo los ids de los span resaltados y los almaceno en Indice
        var Indice = [];
        for (var i = 0; i < parseInt(id_ultimo_span) + 1; i++) {
          var s = $("#" + i.toString()).attr("class");
          switch (typeof s) {
            case "string":
              switch (s.includes("Resaltado")) {
                case true:
                  Indice.push(i);
                  break;
                default:
                  break;
              }
              break;
            default:
              break;
          }
        }

        for (var i = 0; i < Indice.length; i++) {
          switch (i) {
            case 0:
              Respuesta_ID = Indice[i].toString();
              break;
            default:
              switch (Indice[i] - Indice[i - 1]) {
                case 1:
                  Respuesta_ID = Respuesta_ID + "-" + Indice[i].toString();
                  break;
                default:
                  Respuesta_ID = Respuesta_ID + " // " + Indice[i].toString();
                  break;
              }
          }
        }

        //Almaceno en Respuesta la frase seleccionada. Si eligió fragmentos discontinuos los divide con //. Por ejemplo: "porttitor velit eros, eget lobortis // tortor // sapien tortor ut lectus. // in"
        for (var i = 0; i < Indice.length; i++) {
          var r = parseInt(Indice[i]); //38       int
          var w = "#" + r.toString(); //"#38"    id

          switch (
            i //y es la diferencia entre un id y el anterior (para saber si dos span son continuos o no)
          ) {
            default:
              var y = r - Indice[i - 1];
              break;
            case 0:
              y = 1;
              break;
          }

          switch (y) {
            case 1:
              Respuesta_String = Respuesta_String + $(w).html();
              break;
            default:
              //Si los span no son continuos...
              switch (i) {
                case 0: //el primero
                  Respuesta_String = Respuesta_String + $(w).html();
                  break;
                default:
                  Respuesta_String = Respuesta_String + " //" + $(w).html();
                  break;
              }
          }
        }
        Respuesta_String = Respuesta_String.trim();
        break;
      case false:
        SiNo = "No";
        break;
    }
  }

  //Obtengo el orden de presentación aleatorio en dos niveles: (1) Si comienza por Alto o Bajo conocimiento previo y (2) un orden aleatorio de los 15 textos al interior de cada grupo.
  //Orden_de_Presentación = "A6, A5, A9, A10, A14, A12, A4, A3, A2, A13, A11, A7, A8, A15, A1, B15, B4, B7, B12, B14, B2, B5, B8, B1, B13, B9, B10, B6, B11, B3"
  function Orden_Aleatorio(cantidad) {
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

    //El menor de los dos grupos va primero
    if (A < B) {
      Random("A", cantidad);
      Random("B", cantidad);
    } else {
      Random("B", cantidad);
      Random("A", cantidad);
    }

    function Random(letra, cantidad) {
      var Codigos_Textos = [];

      //Codigos_Textos, obtengo un array con los códigos según la cantidad. Por ej.: A1, A2, A3... o B1, B2, B3...
      for (var i = 0; i < cantidad; i++) {
        Codigos_Textos.push(letra + (i + 1).toString());
      }

      //Numeros_Azar, obtengo un array con los números al azar que no se repiten entre sí.
      var Numeros_Azar = [];
      for (var i = 0; i < cantidad; i++) {
        var j = 0;
        switch (Numeros_Azar.length) {
          case 0:
            j = Math.random();
            Numeros_Azar.push(j);
            break;
          default:
            j = Math.random();
            Verificar_Diferente();
            function Verificar_Diferente() {
              Numeros_Azar.forEach(element => {
                if (element == j) {
                  j = Math.random();
                  Verificar_Diferente();
                }
              });
              Numeros_Azar.push(j);
            }
        }
      }

      //Asigno a cada Código, uno de los números al azar. Obtengo un array por ej.: ["A3", "0,0765465378932"], ["A5", "0,80967854233556"]
      var Orden = [];

      for (var i = 0; i < cantidad; i++) {
        var y = [Codigos_Textos[i], Numeros_Azar[i]];
        Orden.push(y);
      }

      //Ordeno el Array en función de los números al azar
      Orden.sort(comparar);
      function comparar(a, b) {
        return a[1] - b[1];
      }

      //Almaceno en la variable Orden_de_Presentación los códigos ordenados al azar. Por ej: "A4, A7, A2, A9, A13,......"
      for (var g = 0; g < cantidad; g++) {
        switch (Orden_de_Presentacion) {
          case "":
            Orden_de_Presentacion = Orden_de_Presentacion + Orden[g][0];
            break;
          default:
            Orden_de_Presentacion = Orden_de_Presentacion + "," + Orden[g][0];
        }
      }
      Orden_de_Presentacion_Array = Orden_de_Presentacion.split(",");
      console.log(Orden_de_Presentacion_Array);
    }
  }

  function Presento_Texto(a) {
    Reinicio_Variables();
    Texto = a;
    Tiempo_Inicio = new moment();
    rodear_palabras_con_span(Recuperar_Texto_Desde_String(a));
  }

  function Reinicio_Variables() {
    Texto = "";
    SiNo = "";
    Respuesta_String = "";
    Respuesta_ID = "";
    Tiempo_Inicio = 0;
    Tiempo_Fin = 0;
  }

  function Recuperar_Texto_Desde_String(x) {
    switch (x) {
      case "A1":
        return A1;
        break;
      case "A2":
        return A2;
        break;
      case "A3":
        return A3;
        break;
      case "A4":
        return A4;
        break;
      case "A5":
        return A5;
        break;
      case "A6":
        return A6;
        break;
      case "A7":
        return A7;
        break;
      case "A8":
        return A8;
        break;
      case "A9":
        return A9;
        break;
      case "A10":
        return A10;
        break;
      case "A11":
        return A11;
        break;
      case "A12":
        return A12;
        break;
      case "A13":
        return A13;
        break;
      case "A14":
        return A14;
        break;
      case "A15":
        return A15;
        break;
      case "B1":
        return B1;
        break;
      case "B2":
        return B2;
        break;
      case "B3":
        return B3;
        break;
      case "B4":
        return B4;
        break;
      case "B5":
        return B5;
        break;
      case "B6":
        return B6;
        break;
      case "B7":
        return B7;
        break;
      case "B8":
        return B8;
        break;
      case "B9":
        return B9;
        break;
      case "B10":
        return B10;
        break;
      case "B11":
        return B11;
        break;
      case "B12":
        return B12;
        break;
      case "B13":
        return B13;
        break;
      case "B14":
        return B14;
        break;
      case "B15":
        return B15;
        break;
    }
  }

  function Itinerario() {
    switch (Secuencia) {
      case 0: //Modal con pregunta por ¿Cuántos Libros lee?...
        Orden_Aleatorio(15);
        rodear_palabras_con_span(Ejemplo_1);

        $("#Modal").attr("ID", "Modal_1");

        $("#Modal_Title").html("Bienvenido de nuevo...");

        //$("#Modal_Close").hide();

        $("#Modal_Body").html(
          "<p>Antes de continuar, respondé la siguiente pregunta:</p><p>En estos dos últimos años, ¿con qué frecuencia leíste libros en tu casa (por fuera de la facultad)?</p><input type='radio' name='Libros' id='L1' value='1. Menos de un libro al año' required><label for='L1'>&nbsp;1. Menos de un libro al año</label><br><input type='radio' name='Libros' id='L2' value='2. Entre uno y dos libros al año'><label for='L2'>&nbsp;2. Entre uno y dos libros al año</label><br><input type='radio' name='Libros' id='L3' value='3. Tres libros por año'><label for='L3'>&nbsp;3. Tres libros por año</label><br><input type='radio' name='Libros' id='L4' value='4. Entre cuatro y cinco libros por año'><label for='L4'>&nbsp;4. Entre cuatro y cinco libros por año</label><br><input type='radio' name='Libros' id='L5' value='5. Más de cinco libros por año'><label for='L5'>&nbsp;5. Más de cinco libros por año</label>"
        );

        //$("#No_Volver").hide();
        //$("#No_Volver_Label").hide();

        //$("#Entendido").attr("ID", "Entendido_1");
        //$("#Entendido_1").html("Siguiente");
        $("#Entendido").html("Siguiente");
        /*$("#Entendido_1").on("click", function() {
          for (var i = 0; i < 5; i++) {
            var a = "#L" + (i + 1).toString();
            if ($(a).prop("checked")) {
              Libros = $(a).attr("VALUE");
            }
          }
          if (Libros != "") {
            $("#Modal_1").hide();
            Secuencia += 1;
            Itinerario();
          }
        });*/

        $("#Modal_1").modal("toggle");
        break;
      case 1: //Modal con Instrucción General...
        $("#Modal_1").attr("ID", "Modal_2");

        $("#Modal_Title").html("¿Qué tengo que hacer?");

        $("#Modal_Body").html(
          "<p>En esta segunda etapa, se presentarán diferentes textos pequeños.<br> Deberás leerlos con el objetivo de detectar si hay alguna información incorrecta o incoherente.</p><p><b>En caso afirmativo:</b> Seleccioná la opción <b>Si</b> y luego <b>resaltá dicha información </b> incorrecta o incoherente.</p><hr><p><b>En caso negativo:</b> Seleccioná la opción <b>No</b>.</p><hr><p> Finalmente, para pasar al <b>siguiente ejercicio</b>, hace clic en <img src='../icons/siguiente.png' height = '20px' style='background-color:#0197FA ' alt=''></img></p> <hr> Para tu comodidad, podes <b>aumentar</b> <img src='../icons/increase.png' height = '20px' width:'auto' style='background-color:#0197FA ' alt=''></img> o <b>disminuir </b><img src='../icons/decrease.png' height = '20px' width:'auto' style='background-color:#0197FA' alt=''></img> el tamaño del texto. <br> Comencemos con un ejemplo para practicar...</p >"
        );

        //$("#Entendido_1").attr("ID", "Entendido_2");
        //$("#Entendido_2").html("Entendido");
        $("#Entendido").html("Entendido");
        /*$("#Entendido_2").on("click", function () {
          $("#Modal_2").modal("toggle");
          Secuencia += 1;
          Itinerario();
        });*/
        $("#Modal_2").show();
        break;
      case 2: //Modal 3: Si presiona Si -> Resaltá la información incoherente...
        /*$("#Modal_2").attr("ID", "Modal_3");
        $("#Modal_Title").html("Resaltá la información incoherente");*/

        //$("#Modal_Close").html("<span aria-hidden='true'>&times;</span>");
        //$("#Modal_Close").css("display", "flex");

        /* $("#Modal_Body").html(
          "<p><b>Para marcar un fragmento del texto:</b> hacé clic sobre la primera y última palabra del fragmento a seleccionar.</p><img src='../Content/Ejemplo_fragmento.jpg' alt=''><hr><p><b>Para marcar palabras de manera individual:</b> hacé dos clics sobre la palabra elegida.</p><img src='../Content/Ejemplo_palabra.jpg' alt=''><hr><p><b>Si te equivocás:</b> haciendo clic en <img src='../icons/clear.png' alt='' height = '20px' width:'auto' style='background-color:#0197FA'></img> reincias el texto y podés resaltarlo nuevamente.</p>"
        );*/

        //$("#Entendido_2").attr("ID", "Entendido_3");
        //$("#Entendido_3").attr("data-dismiss", "modal");
        $("#Entendido").attr("data-dismiss", "modal");

        /*$("#No_Volver").css("display", "inline-block");
        $("#No_Volver_Label").css("display", "inline-block");*/

        /*$("#Entendido_3").on("click", function() {
          if ($("#No_Volver").prop("checked")) {
            No_Volver_A_Mostrar = 1;
          }
        });*/

        break;
      case 3:
        $("#Modal_2").attr("ID", "Modal_4");

        $("#Modal_Title").html("¿Cuál era la Respuesta Correcta?");

        $("#Modal_Body").html(
          "<p>En el texto anterior, la información incoherente que debía ser seleccionada era: <b>'Se interesa así por los cambios en el psiquismo inconsciente entre las tópicas freudianas.'</b><br> Hagamos otro ejercicio de práctica..."
        );

        /*$("#No_Volver").hide();
        $("#No_Volver_Label").hide();*/

        $("#Modal_4").modal("toggle");

        break;
      case 4:
        rodear_palabras_con_span(Ejemplo_2);
        Habilitar_Resaltar = 0;

        break;

      case 5:
        $("#Modal_4").attr("ID", "Modal_5");

        $("#Modal_Title").html("¿Cuál era la Respuesta Correcta?");

        $("#Modal_Body").html(
          "<p>El texto anterior <b>no contenía información errónea o incoherente</b>, por ello la respuesta correcta era: No.<hr>Hasta aquí la práctica.<br> A continuación,  seguirás con la actividad propiamente dicha.  <hr> Se presentará el texto, deberás leerlo y decidir si contiene o no información errónea o incoherente (seleccionando, luego, la opción correspondiente). En caso afirmativo tendrás que resaltarla antes de continuar con el próximo ejercicio.</p>"
        );

        $("#Modal_5").modal("toggle");
        break;
      default:
        Presento_Texto(Orden_de_Presentacion_Array[Secuencia - 6]);
        break;
      case Orden_de_Presentacion_Array.length + 5: //Termino los 30 textos
        /*console.log(Libros);
        console.log(Orden_de_Presentacion);
        console.log(Respuesta_Total);*/
        $("#Libros").val(Libros);
        $("#Orden_de_Presentacion").val(Orden_de_Presentacion);

        var f = "";
        var string = "";

        for (var i = 0; i < Respuesta_Total.length; i++) {
          
          a(Respuesta_Total[i]);

          
          function a(x) { 
            //x[0]  // A1
            //x[1] // Si
            //x[2] // la psicología cognitiva...
            //x[3] // 34-35-36-37-40-50
            //x[4] // 34567 int
          
            string = "[\"" + x[0] + "\", \"" + x[1] + "\", \"" + x[2] + "\", \"" + x[3] + "\", " + x[4] + "]";
          }
          
          switch (i) {
            default:
              f = f + string + ",";
              break;
            case Respuesta_Total.length - 1:
              f = f + string;
              break;
          }
        }

        console.log(f);
        $("#Respuesta_Total").val(f);
        
        console.log($("#Libros").val());
        console.log($("#Orden_de_Presentacion").val());
        console.log($("#Respuesta_Total").val());
        
        // $("#Submit").click();


        break;
    }
  }
  Itinerario();
});
