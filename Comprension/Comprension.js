$(document).ready(function() {
  var text_1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor velit eros, eget lobortis nulla tempor sed. Vivamus a nisl faucibus, finibus elit id, porta ex. Sed blandit, nisi interdum mattis dictum, tortor purus aliquam ligula, eu dictum sapien tortor ut lectus. Interdum et malesuada fames ac ante ipsum primis in";

  var html = "";

  var conteo_de_clic = 0;
  var desde = 0;
  var hasta = 0;

  var Respuesta_String = "";
  var Respuesta_ID = "";

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
    $("#text").html(html);
  }

  //Configuración de Botones
  //Borra el Highlighted
  $("#Clear").on("click", function() {
    $("#text>span").removeClass("Resaltado");
  });

  //Aumenta el tamaño de la letra
  $("#Increase").on("click", function() {
    var j = $("#text").css("font-size");
    $("#text").css("font-size", (parseInt(j) + 2).toString() + "px");
  });

  //Disminuye el tamaño de la letra
  $("#Decrease").on("click", function() {
    var j = $("#text").css("font-size");
    $("#text").css("font-size", (parseInt(j) - 2).toString() + "px");
  });

  //Continua con el texto siguiente
  $("#Siguiente").on("click", function() {
    Obtener_Respuesta();
  });

  //Cuando hago clic en una palabra para resaltarla...
  $("body").on("click", "#text>span", function() {
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
    var id_ultimo_span = $("#text>span:last-child").attr("ID");

    //Obtengo los ids de los span resaltados y los almaceno en Indice
    var Indice = [];
    for (var i = 0; i < id_ultimo_span + 1; i++) {
      switch ($("#" + i.toString()).attr("class")) {
        case "Resaltado":
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
