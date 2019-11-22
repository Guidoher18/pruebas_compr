$(document).ready(function() {
  var text_1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor velit eros, eget lobortis nulla tempor sed. Vivamus a nisl faucibus, finibus elit id, porta ex. Sed blandit, nisi interdum mattis dictum, tortor purus aliquam ligula, eu dictum sapien tortor ut lectus. Interdum et malesuada fames ac ante ipsum primis in";

  var html = "";

  var conteo_de_clic = 0;
  var desde = 0;
  var hasta = 0;

  //f(x) rodea las palabras con <span> </span>. Cada uno con un Id ascendente comenzando por 0.
  //Retorna la variable que contiene el texto rodeado.
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
    $("body>div").html(html);
  }

  $("body").on("click", "div>span", function() {
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
        resaltar();
        break;
    }
  });

  function resaltar() {
    $("#"+ desde.toString()).removeClass("Desde");
    if (desde > hasta) { //Si hizo un resaltado de derecha a izquierda, invierto los valores
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
