$(document).ready(function(){
    $("#suma").click(function(){
        var n1 = parseInt($("#n1").val(),10);
        var n2 = parseInt($("#n2").val(),10);
        var resultado = n1+n2;
        $("#resultado").text(resultado);
    });
    
    $("#resta").click(function(){
        var n1 = parseInt($("#n1").val(),10);
        var n2 = parseInt($("#n2").val(),10);
        var resultado = n1-n2;
        $("#resultado").text(resultado);
    });
    
    $("#multiplicacion").click(function(){
        var n1 = parseInt($("#n1").val(),10);
        var n2 = parseInt($("#n2").val(),10);
        var resultado = n1*n2;
        $("#resultado").text(resultado);
    });
    
    $("#division").click(function(){
        var n1 = parseInt($("#n1").val(),10);
        var n2 = parseInt($("#n2").val(),10);
        var resultado = n1/n2;
        $("#resultado").text(resultado);
    });
}); 
