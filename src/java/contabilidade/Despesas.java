/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package contabilidade;

import java.util.Objects;

/**
 *
 * @author wesly
 */
public class Despesas {
    
    private Conta conta;
    private String despesa;
    private Categoria categoria;
    private Double valor;

    public Conta getConta() {
        return conta;
    }

    public void setConta(Conta conta) {
        this.conta = conta;
    }

    public String getDespesa() {
        return despesa;
    }

    public void setDespesa(String despesa) {
        this.despesa = despesa;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Despesas other = (Despesas) obj;
        if (!Objects.equals(this.despesa, other.despesa)) {
            return false;
        }
        if (!Objects.equals(this.conta, other.conta)) {
            return false;
        }
        if (!Objects.equals(this.categoria, other.categoria)) {
            return false;
        }
        if (!Objects.equals(this.valor, other.valor)) {
            return false;
        }
        return true;
    }
    
    
    
    
}
