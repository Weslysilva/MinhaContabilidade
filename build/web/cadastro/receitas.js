/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function addReceita(){
    
    var receita = ({        
        data :      document.getElementById("data").value,
        nome:       document.getElementById("nome").value,
        categoria:  document.getElementById("categoria").value,
        conta:      document.getElementById("conta").value,        
        valor:      document.getElementById("valor").value
    });
    
    $.get("SrvContabilidade/addReceita?receita="+JSON.stringify(receita), function( resposta ) {
           
           if(resposta === "true"){
                  alerta("Cadastro de Receita","CADASTRADA COM SUCESSO!");
                  getListaReceita();
           }else {
               alerta("CADASTRO DE Receita","ESTA RECEITA JA FOI CADASTRADA!");
           }
            
            alerta("Objeto Json",receita);
            alerta("Resposta",resposta);
           
    });
}

function remReceita(cod){
            var receita = ({        
             data :      document.getElementById("data").value,
             nome:       document.getElementById("nome").value,
             categoria:  document.getElementById("categoria").value,
             conta:      document.getElementById("conta").value,        
             valor:      document.getElementById("valor").value
         });
        
        //alert (cod+"\n"+conta.apelido+"\n"+conta.agencia+"\n"+conta.conta+"\n"+conta.banco);
        
    $.get("SrvContabilidade/remConta?conta="+JSON.stringify(conta), function( resposta ) {
        
        if(resposta == "true"){
                  alerta("Removendo conta....","Conta Removida com Sucesso!");
                  getListaReceita();
           }
    });
    
}

function getListaReceita(){
    
    $.get("SrvContabilidade/getListaReceita", function( resposta ){
            
            document.getElementById("tabelaReceita").innerHTML = "";
            
            var lista = JSON.parse(resposta);
            
                var tabela = document.createElement("table");
                    tabela.setAttribute("slyte","width: 100%");
                    tabela.setAttribute("border","1");
        
                var header = document.createElement("tr");
                    header.setAttribute("style","width: 20%");

                var col1 = document.createElement("th");
                    col1.setAttribute("style","width: 20%");
                    col1.innerHTML = "Data";


                var col2 = document.createElement("th");
                    col2.setAttribute("style","width: 20%");
                    col2.innerHTML = "Nome";


                var col3 = document.createElement("th");
                    col3.setAttribute("style","width: 20%");
                    col3.innerHTML = "Categoria";


                var col4 = document.createElement("th");
                    col4.setAttribute("style","width: 20%");
                    col4.innerHTML = "Conta";
                        
                var col5 = document.createElement("th");
                    col5.setAttribute("style","width: 20%");
                    col5.innerHTML = "Valor";        
            
            header.appendChild(col1);
            header.appendChild(col2);
            header.appendChild(col3);
            header.appendChild(col4); 
            tabela.appendChild(header);
        
        
            for (var i = 0; i < lista.length; i++) {
                
                var linha = document.createElement("tr");
                
                    var col1 = document.createElement("td");
                        col1.setAttribute("style","width: 20%");
                        col1.setAttribute("style","text-align:center");
                        col1.setAttribute("id","apelido"+lista[i].conta);
                        col1.innerHTML = lista[i].apelido;
                    
                    
                    var col2 = document.createElement("td");
                        col2.setAttribute("style","width: 20%");
                        col2.setAttribute("style","text-align:center");
                        col2.setAttribute("id","agencia"+lista[i].conta);
                        col2.innerHTML = lista[i].agencia;
                    
                        
                    var col3 = document.createElement("td");
                        col3.setAttribute("style","width: 20%");
                        col3.setAttribute("style","text-align:center");
                        col3.setAttribute("id","conta"+lista[i].conta);
                        col3.innerHTML = lista[i].conta;
                        
                    var col4 = document.createElement("td");
                        col4.setAttribute("style","width: 20%");
                        col4.setAttribute("style","text-align:center");
                        col4.setAttribute("id","banco"+lista[i].conta);
                        col4.innerHTML = lista[i].banco;
                    
                    var col5 = document.createElement("td");
                        col5.setAttribute("style","width: 20%");
                        col5.setAttribute("style","text-align:center");
                        
                    
                    var btnRemover = document.createElement("button");
                        btnRemover.setAttribute("onclick","remConta("+lista[i].conta+")");
                        btnRemover.setAttribute("style","align-items: center");
                        btnRemover.innerHTML = "Remover item";
                    
                    linha.appendChild(col1);
                    linha.appendChild(col2);
                    linha.appendChild(col3);
                    linha.appendChild(col4);
                    linha.appendChild(col5);
                    col5.appendChild(btnRemover);

                    tabela.appendChild(linha);
            }
            
            document.getElementById("tabelaReceita").appendChild(tabela);
        
        
    });
    
    
}
