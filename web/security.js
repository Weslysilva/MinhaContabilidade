


verificalogado();

function verificalogado(){
    
    var btn = document.createElement("button");
        btn.setAttribute("class","art-button");
        btn.setAttribute("onclick","logout()");
        btn.innerHTML = "Sair";
    
   
   $.get("login/logado", function( resposta ) {
            
        if (resposta!=="false"){
              document.getElementById("slogan").innerHTML = "Bem vindo, " + resposta + " ";
              document.getElementById("slogan").appendChild(btn);
        }else {
              window.location.assign("login.html");
        }
    });
  

}

function logout (){
        
        $.get("login/logout", function( resposta ) {
              window.location.assign("login.html");
        });
    
}    