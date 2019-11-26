$(document).ready(function() {
  var text_1 =
    "La psicología cognitiva se encarga del estudio de la cognición; es decir, de los procesos mentales implicados en el conocimiento. Tiene como objeto de estudio los mecanismos básicos y profundos por los que se elabora el conocimiento, desde la percepción, la memoria y el aprendizaje, hasta la formación de conceptos y razonamiento lógico. Se interesa así por los cambios en el psiquismo inconsciente entre las tópicas freudianas. Por cognitivo entendemos el acto de conocimiento, en sus acciones de almacenar, recuperar, reconocer, comprender, organizar y usar la información recibida a través de los sentidos.";

  var html = "";

  var conteo_de_clic = 0;
  var desde = 0;
  var hasta = 0;

  var Respuesta_String = "";
  var Respuesta_ID = "";

  var Habilitar_Resaltar = 0;
  var No_Volver_A_Mostrar = 0;

  //Rodea las palabras con <span> </span>. Cada uno con un Id ascendente comenzando por 0.
  //Modifica el div #text con el texto "rodeado".
  function rodear_palabras_con_span(texto) {
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
    $("#Text").html(html);
  }

  //Configuración de Botones
  //Borra el Highlighted
  $("#Clear").on("click", function() {
    $("#Text>span").removeClass("Resaltado");
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

  //Continua con el texto siguiente
  $("#Siguiente").on("click", function() {
    Obtener_Respuesta();
  });

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
            break;
        }
        break;
      default:
        break;
    }
  });

  //¿Hay una información incoherente en el texto? Si, No
  $("#No").on("click", function() {
    Habilitar_Resaltar = 0;
    $("#Clear").click();
    $("span").removeClass("Resaltar");
    $("#Clear").prop("disabled", true);
    $("#Siguiente").prop("disabled", false);
  });

  $("#Si").on("click", function() {
    Habilitar_Resaltar = 1;
    $("span").addClass("Resaltar");
    $("#Clear").prop("disabled", false);
    $("#Siguiente").prop("disabled", false);
    switch (No_Volver_A_Mostrar) {
      default:
        $("#Modal").modal("toggle");
        break;
      case 1:
        break;
    }
  });

  //Modal
  $("#Entendido").on("click", function() {
    if ($("#No_Volver").prop("checked")) {
      No_Volver_A_Mostrar = 1;
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
    var id_ultimo_span = $("#Text>span:last-child").attr("ID");

    //Obtengo los ids de los span resaltados y los almaceno en Indice
    var Indice = [];
    for (var i = 0; i < parseInt(id_ultimo_span) + 1; i++) {
      var s = $("#" + i.toString()).attr("class");
      switch (s.includes("Resaltado")) {
        case true:
          Indice.push(i);
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
          Respuesta_ID = Respuesta_ID + ", " + Indice[i].toString();
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
    alert(Respuesta_String);
    alert(Respuesta_ID);
  }

  rodear_palabras_con_span(text_1);
});

/* $('span').on('select', Seleccionar);

  function Seleccionar() { 
    var a = getElementById(this);
    if (this.onmousedown || this.onmouseup || this.onmouesemove) { 
      $(this).addClass("Resaltado");
    }
  };

  $("#context-text>p").html(html);
  const editor = new EditorJS({
    //Id of Element that should contain the Editor
    holder: "context-text",
    /**
     * Available Tools list.
     * Pass Tool's class or Settings object for each Tool you want to use
     */
/*
    tools: {
      Marker: {
        class: Marker,
        inlineToolbar: ["Marker"]
      }
    },

    /**
     * Previously saved data that should be rendered
     */
/*  data: {
      text: text_1
    }
  });
});*/
