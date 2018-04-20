/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var url = "login/";

function cadastrar(){
    
      
   var login = {
        nome: document.getElementById("nome").value,
        senha: document.getElementById("senha").value
   }; 
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        
        if(xhr.readyState == 4){
            if(xhr.responseText == "false"){
                
                alert("Usuario Cadastrado!");
                location.href="login.html";
                
            }else{
                
                alert("Usuario já cadastrado");   
                
            }
            
        }
        
        
    };
    xhr.open('POST', url+"salvar?login="+JSON.stringify(login), true); //Requisição para o Servlet !
    xhr.send(null);
    
}



// SEM JSON
//var url = "login/";
//
//function cadastrar(){
//    
//     
//   var nome = document.getElementById("nome").value;
//   var senha = document.getElementById("senha").value;
//    
//    var xhr = new XMLHttpRequest();
//    xhr.onreadystatechange = function(){
//        
//        if(xhr.readyState == 4){
//            if(xhr.responseText == "false"){
//                
//                alert("Usuario Cadastrado!");
//                location.href="login.html";
//                
//            }else{
//                
//                alert("Usuario já cadastrado");   
//                
//            }
//            
//        }
//        
//        
//    };
//    xhr.open('POST', url+"salvar?nome="+nome+"&senha="+senha, true); //Requisição para o Servlet !
//    xhr.send(null);
//    
//}

