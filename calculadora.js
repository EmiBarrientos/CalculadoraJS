
var terminoA;
var terminoB;
var operacion;

function init(){
    //variables
     var resultado = document.getElementById("resultado");
     var reset = document.getElementById("reset");
     var suma = document.getElementById ("suma");
     var resta = document.getElementById("rest");
     var division = document.getElementById("division");
     var multiplicacion =document.getElementById("multiplicacion");
     var uno = document.getElementById("button1");
     var dos = document.getElementById("button2");
     var tres = document.getElementById("button3");
     var cuatro = document.getElementById("button4");
     var cinco = document.getElementById("button5");
     var seis = document.getElementById("button6");
     var siete = document.getElementById("button7");
     var ocho = document.getElementById("button8");
     var nueve = document.getElementById("button9");
     var cero = document.getElementById("button0");
     var igual =document.getElementById("igual");
     
    //eventos

    uno.onclick=function(e){
        resultado.textContent = resultado.textContent + "1";
    }

    dos.onclick=function(e){
        resultado.textContent = resultado.textContent + "2";
    }

    tres.onclick=function(e){
        resultado.textContent = resultado.textContent + "3";
    }

    cuatro.onclick=function(e){
        resultado.textContent = resultado.textContent + "4";
    }

    cinco.onclick=function(e){
        resultado.textContent = resultado.textContent + "5";
    }

    seis.onclick=function(e){
        resultado.textContent = resultado.textContent + "6";
    }

    siete.onclick=function(e){
        resultado.textContent = resultado.textContent + "7";
    }

    ocho.onclick=function(e){
        resultado.textContent = resultado.textContent + "8";
    }

    nueve.onclick=function(e){
        resultado.textContent = resultado.textContent + "9";
    }

    cero.onclick=function(e){
        resultado.textContent = resultado.textContent + "0";
    }




    reset.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        terminoA = resultado.textContent;
        operacion ="+";
        limpiar();

    }

    resta.onclick = function(e){
        terminoA = resultado.textContent;
        operacion ="-";
        limpiar();

    }

    multiplicacion.onclick = function(e){
        terminoA = resultado.textContent;
        operacion ="*";
        limpiar();

    }

    division.onclick = function(e){
        terminoA = resultado.textContent;
        operacion ="/";
        limpiar();

    }

    igual.onclick =function(e){
        terminoB = resultado.textContent;
        resolver();
    }

    function limpiar(){
        resultado.textContent = "" ;
    }

    function resetear(){
        resultado.textContent = "";
        terminoA = 0;
        terminoB = 0;
        operacion= "";

    }


    function resolver(){
       
        var res = 0;
       
        switch(operacion){

            case "+": 
                res = parseFloat(terminoA) + parseFloat(terminoB); 
                break;
            
            case "-": 
                res =  parseFloat(terminoA) - parseFloat(terminoB);
                break;
        
            case "*": 
                res =  parseFloat(terminoA) * parseFloat(terminoB);
                break;
            
            case "/": 
                res =  parseFloat(terminoA) / parseFloat(terminoB);
                break;
            
        }
        
        resetear();
        resultado.textContent = res;


    }






    reset.onclick = function(e){
        resetear();
    }









}   