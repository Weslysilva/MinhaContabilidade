
/* global xhr */

var url = "login/";

function logar(){
    
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    
    
    var xhr = new XMLHttpRequest();   
    xhr.onreadystatechange = function(){
        
     if(xhr.readState === 4){
         if(xhr.responseText === true);
            window.location = "index.html";
     }else{
         alert("Login ou Senha Invalido!");
     }   
        
    };
    
    xhr.open('POST',url+"validar?nome=" + nome + "&senha="+senha, true);
    xhr.send(null);
}



