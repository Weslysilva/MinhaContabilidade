/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function alerta(titulo,texto){
    
    
    var btn = document.createElement("button");
        btn.setAttribute("data-toggle","modal");
        btn.setAttribute("data-target","#myModal");
        btn.setAttribute("type","button");
        btn.setAttribute("visibility","hidden");
        btn.setAttribute("id","btn-modal");
           
    var div1 = document.createElement("div");
        div1.setAttribute("class","modal fade");
        div1.setAttribute("id","myModal");
        div1.setAttribute("style","display: block;");
       
    var div2 = document.createElement("div");
        div2.setAttribute("class","modal-dialog");
        
    var div3 = document.createElement("div");
        div3.setAttribute("class","modal-content");
    
    var div4  = document.createElement("div");
        div4.setAttribute("class","modal-header");
     
    var titulomodal = document.createElement("h4");
         titulomodal.setAttribute("class","modal-title");
         titulomodal.innerHTML=titulo;

    var botaosuperior = document.createElement("button");
        botaosuperior.setAttribute("type","button");
        botaosuperior.setAttribute("class","close");
        botaosuperior.setAttribute("data-dismiss","modal");
        botaosuperior.innerHTML="&times;";
    
    var div5 = document.createElement("div");
        div5.setAttribute("class","modal-body");
        div5.innerHTML=texto;
            
    var div6 = document.createElement("div");
       div6.setAttribute("class","modal-footer");
       
    var botaoinferior = document.createElement("button"); 
        botaoinferior.setAttribute("type","button");
        botaoinferior.setAttribute("data-dismiss","modal");
        botaoinferior.setAttribute("class","btn btn-danger");
        botaoinferior.innerHTML="Fechar";

     
    div1.appendChild(div2);
    div1.appendChild(btn);
    div2.appendChild(div3);
    div3.appendChild(div4);
    div3.appendChild(div5);
    div3.appendChild(div6);
    div4.appendChild(titulomodal);
    div4.appendChild(botaosuperior);
    div6.appendChild(botaoinferior);
    
    
    document.getElementById("target").innerHTML="";
    document.getElementById("target").appendChild(div1);    
    document.getElementById("btn-modal").click();
}
