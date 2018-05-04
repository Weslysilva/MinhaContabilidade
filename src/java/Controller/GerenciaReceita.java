/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import contabilidade.Conta;
import contabilidade.Receitas;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 *
 * @author nostradamus
 */
public class GerenciaReceita {
     private final List<Receitas> receita = new ArrayList<>();
    
    public boolean adicionar(Receitas receita){
        if (this.receita.contains(receita)) {
            return false;            
        }else{
            this.receita.add(receita);
            return true;
        }
    }
    
    public boolean remove(Receitas receita){
        if (this.receita.contains(receita)) {
            this.receita.remove(receita);
            return true;            
        }else{
            return false;
        }
    }
    
    public boolean validar(Receitas receita){
        for(Receitas l:this.receita){
            if (l.equals(receita)){
                if(l.getNome().equals(receita.getNome())){
                    return true;
                }
            }
        }
        return false;
    }
    
    public Collection<Receitas> getListaReceitas(){
        return this.receita;
    }
}
