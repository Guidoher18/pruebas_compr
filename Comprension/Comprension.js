$(document).ready(function(){
    
/*
    $(document).on("mouseup", function (e) {
    var selected = getSelection();
    var range = selected.getRangeAt(0);
    if(selected.toString().length > 1){
        var newNode = document.createElement("span");
        newNode.setAttribute("class", "red");
        range.surroundContents(newNode);       
    }
    selected.removeAllRanges();
 });

    */
    
    
    
    
    var text = $('#Text').html();


    var Resaltado = [];
    
    //var b = document.getElementById(a);
    //a.toString(); permite tomar la selección del usuario en texto
   



    $('#Seleccionar').on('click', function(){
        if (getSelection().getRangeAt(0) === getSelection().getRangeAt(0)){ //Evalua true si la selección no está vacía.
            var text2 = document.getElementById('Text');
            var t_html = text2.outerHTML;

           /* if ($(t_html).search('<span>') == true && $(t_html).search('</span>') == true)
            {

            } */

            //Se pueden borrar al final
            var a  = window.getSelection();
            var a = a.toString();
            //

            
            var indice_inicio = getSelection().anchorOffset;
            var indice_fin = getSelection().focusOffset;
            
            if(indice_inicio > indice_fin){
                var s = indice_inicio;
                var d = indice_fin;
                indice_inicio = d;
                indice_fin = s;
            }

            Resaltado.push(indice_inicio,indice_fin);
            //(Resultado.legth)/2 

            var uno = text.substring(0,indice_inicio); 
            var dos = text.substring(indice_inicio, indice_fin); 
            var tres = text.substring(indice_fin,);
            
            
            

        $('#Text').html(uno + "<span>" + dos + "</span>" + tres);

        }
    });

    $('#Borrar').on('click', function(){
        var a  = window.getSelection().toString();
        var text = $('#Text').html();
        var indice_inicio = text.search(a);
        var indice_fin = indice_inicio + a.toString().length;

        var uno = text.substring(0,indice_inicio); 
        var dos = text.substring(indice_inicio, indice_fin); 
        var tres = text.substring(indice_fin,);

        $('#Text').html(uno + "<span>" + dos + "</span>" + tres);
    });


    //https://clipboardjs.com/
    //https://prismjs.com/#features-full

    });
