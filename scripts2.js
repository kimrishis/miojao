

    document.getElementById("resultado").onclick =  function() {
    var select = document.getElementById('relogio')
    var opcaoValorA = select.options[select.selectedIndex].value;
    alert(opcaoValorA)
    }

    document.getElementById("amostra").onclick =  function() {
     var select = document.getElementById('areia')
     var opcaoValorB = select.options[select.selectedIndex].value;
     alert(opcaoValorB)
    }
    

document.getElementById("calc").onclick = function calcular() {
   if (opcaoValorA == opcaoValorB)  {
       alert()  
    }
    
    
}