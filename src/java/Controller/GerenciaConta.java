/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import contabilidade.Conta;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 *
 * @author wesly
 */
public class GerenciaConta {
    
    private final List<Conta> conta = new ArrayList<>();
    
    public boolean adicionar(Conta conta){
        if (this.conta.contains(conta)) {
            return false;            
        }else{
            this.conta.add(conta);
            return true;
        }
    }
    
    public boolean remove(Conta conta){
        if (this.conta.contains(conta)) {
            this.conta.remove(conta);
            return true;            
        }else{
            return false;
        }
    }
    
    public boolean validar(Conta conta){
        for(Conta l:this.conta){
            if (l.equals(conta)){
                if(l.getConta().equals(conta.getConta())){
                    return true;
                }
            }
        }
        return false;
    }
    
    public Collection<Conta> getListaContas(){
        return this.conta;
    }

   
}
