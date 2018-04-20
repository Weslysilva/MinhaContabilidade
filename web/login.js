/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var url = "login/";

function cadastrese(){
     window.location.assign("cadastreSe.html");
   }

function logar(){
   
   
   var login = {
        nome  : document.getElementById("nome").value,
        senha : document.getElementById("senha").value
    }; 
    
    if(login.nome === "" || login.senha === "") alerta("ERRO", "Preencha os campos corretamente!");
    else{
    $.get("login/validar?login="+JSON.stringify(login), function( resposta ) {

            if (resposta==="true"){
              window.location.assign("dashboard.html");
        }else {
              alerta("Atencao", "Login ou Senha invalido"); // -> Avise ao laranja que ele digitou errado.
              document.getElementById("nome").value = "";   // -> limpe o campo nome
              document.getElementById("senha").value = "";  // -> limpe o campo senha
        }
    });
  
    }
    
}
   
function cadastrar(){
    
     
   var nome = document.getElementById("nomeusuario").value;
   var senha = document.getElementById("senhausuario").value;
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        
        if(xhr.readyState == 4){
            if(xhr.responseText == "true"){
                alert("Usuario Cadastrado!");
                location.href="login.html";
                
            }else{
                
                alert("Usuario já cadastrado");   
                
            }
            
        }
        
        
    };
    xhr.open('POST', url+"salvar?nome="+nome+"&senha="+senha, true);
    xhr.send(null);
    
}