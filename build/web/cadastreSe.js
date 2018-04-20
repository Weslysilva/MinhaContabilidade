/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function cadastrarse(){
    
    var novoRegistro = ({
        nome  : document.getElementById("nome").value,
        email : document.getElementById("email").value,
        senha : document.getElementById("senha").value        
    });
       
    $.get("login/salvar?login="+JSON.stringify(novoRegistro), function( resposta ) {

           if(resposta=="true"){
               alerta("Usuario cadastrado com sucesso!","Sr(a) "+nome.value +" ja pode efetuar o login usando<br> seu email "+email.value);
           }else {
               
                alerta("Usuario ja cadastrado","Porfavor tente usando outro login/email");    
               
           }
           
    });
  
    
    
}

