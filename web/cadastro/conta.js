/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function addConta(){
    
    var conta = ({        
        apelido :   document.getElementById("apelido").value,
        agencia:    document.getElementById("agencia").value,
        conta:      document.getElementById("conta").value,
        banco:      document.getElementById("banco").value        
    });
    
    $.get("SrvContabilidade/addConta?conta="+JSON.stringify(conta), function( resposta ) {

           if(resposta == "true"){
               
                  alerta("CADASTRO DE CONTA","CONTA CADASTRADA COM SUCESSO!");
                  getListaConta();
               
           }else {
               
               
               alerta("CADASTRO DE CONTA","ESTA CONTA JA FOI CADASTRADA!");
               
               
           }
           
    });
  
    
    
}



function remConta(conta){
    
    $.get("")
    
    
    
}



function getListaConta(){
    
    
    $.get("SrvContabilidade/getConta", function( resposta ){

            
            document.getElementById("tabelaContas").innerHTML = "";
            
            var lista = JSON.parse(resposta);
                
                
                var tabela = document.createElement("table");
                    tabela.setAttribute("slyte","width: 100%");
                    tabela.setAttribute("border","1");
        
                var header = document.createElement("tr");
                    header.setAttribute("style","width: 20%");

                var col1 = document.createElement("th");
                    col1.setAttribute("style","width: 20%");
                    col1.innerHTML = "Apelido";


                var col2 = document.createElement("th");
                    col2.setAttribute("style","width: 20%");
                    col2.innerHTML = "Agencia";


                var col3 = document.createElement("th");
                    col3.setAttribute("style","width: 20%");
                    col3.innerHTML = "Conta";


                var col4 = document.createElement("th");
                    col4.setAttribute("style","width: 20%");
                    col4.innerHTML = "Banco";
                        

            
            header.appendChild(col1);
            header.appendChild(col2);
            header.appendChild(col3);
            header.appendChild(col4); 
            tabela.appendChild(header);
        
        
            for (var i = 0; i < lista.length; i++) {

                var linha = document.createElement("tr");
                
                    var col1 = document.createElement("td");
                        col1.setAttribute("style","width: 20%");
                        col1.innerHTML = lista[i].apelido;
                    
                    
                    var col2 = document.createElement("td");
                        col2.setAttribute("style","width: 20%");
                        col2.innerHTML = lista[i].agencia;
                    
                        
                    var col3 = document.createElement("td");
                        col3.setAttribute("style","width: 20%");
                        col3.innerHTML = lista[i].conta;
                    
                        
                    var col4 = document.createElement("td");
                        col4.setAttribute("style","width: 20%");
                        col4.innerHTML = lista[i].banco;
                    
                    var col5 = document.createElement("td");
                        col4.setAttribute("style","width: 20%");
                    
                    var btnRemover = document.createElement("button");
                        btnRemover.setAttribute("id",lista[i].conta);
                        btnRemover.setAttribute("onclick","remConta("+lista[i].conta+")");
                        btnRemover.innerHTML = "Remover item";
                    
                    linha.appendChild(col1);
                    linha.appendChild(col2);
                    linha.appendChild(col3);
                    linha.appendChild(col4);
                    linha.appendChild(btnRemover);

                    tabela.appendChild(linha);
            }
            
            document.getElementById("tabelaContas").appendChild(tabela);
        
        
    });
    
        
    
    
    
    
}