/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function criaRodape(){
    
    var rodape = document.createElement("footer");
        rodape.setAttribute("class","art-footer");
        
    var paragrafo = document.createElement("p");
        paragrafo.setAttribute("class","art-page-footer");
        
        
    var a1 = document.createElement("a");
        a1.setAttribute("href","https://www.linkedin.com/in/wesly-silva∴-4251288b");
        a1.setAttribute("target","blank");
        a1.innerHTML = "Wesly Silva , ";
   
     var a2 = document.createElement("a");
         a2.setAttribute("href","https://www.linkedin.com/in/mois%C3%A9s-farias-806ab111a/");
         a2.setAttribute("target","blank");
         a2.innerHTML = "Moises Farias";
    
    var spa1 = document.createElement("span");
        spa1.setAttribute("id","art-footnote-lins");
        spa1.innerHTML = "Desenvolvedores <br>";
    
    
    var spa2 = document.createElement("span");
        spa2.setAttribute("id","art-footnote-lins");
        
        
    var spa3 = document.createElement("span");
        spa3.setAttribute("id","art-footnote-lins");
    
   
        
    
    var paragrafo2 = document.createElement("p");
        paragrafo2.innerHTML = "<br>Copyright © 2018. All Rights Reserved";
        
        spa2.appendChild(a1);
        spa3.appendChild(a2);
        
        paragrafo.appendChild(spa1);
        paragrafo.appendChild(spa2);
        paragrafo.appendChild(spa3);
        rodape.appendChild(paragrafo);
        rodape.appendChild(paragrafo2);
        
        document.getElementById("rodape").appendChild(rodape);
        
        
    
}