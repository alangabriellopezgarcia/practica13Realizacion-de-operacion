$(document).ready(function(){
    alert("Empezando con jquery's");
    $("#cambio").text("Se sustituye");
    $("#btnoperaciones").click(function(){
        var num1 =parseInt($("#num1").val(),10);
        var num2 =parseInt($("#num2").val(),10);
        var resul = num1 + num2;
        $("#resultado").text(resul);
    });
    $("#Mostrar").click(function(){
        $("#dinamico").show();
    });
    $("#ocultar").click(function(){
        $("#dinamico").hide();
    });
    $("#cssborde").click(function(){
        $("#dinamico").css("background-color","magenta");
        $("#dinamico").css("border","2px  double yellow");
    });
    $("#cssborde").hover(function(){
        alert("estas encima del boton");
    });
});