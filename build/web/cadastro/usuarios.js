/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function addUser(){
    
    var usuario = {
        
        nome: document.getElementById("nome"),
        sobrenome : document.getElementById("sobrenome"),
        email : document.getElementById("email"),
        senha : document.getElementById("senha")
    };
    
    if(usuario.nome === "" || usuario.sobrenome === "" || usuario.email === "" || usuario.senha === "" ) {
        alerta("ERRO", "Preencha os campos corretamente!");
    }
    else{
    
        $.get("Usuario/addUser?usuario="+JSON.stringify(usuario), function( resposta ) {

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


function editUser(){
    
    
    
}


function delUser(){}
