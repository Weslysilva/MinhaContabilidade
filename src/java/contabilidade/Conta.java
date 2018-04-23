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
public class Conta {

    Integer codigo;
    String apelido;
    String agencia;
    String conta;
    String banco;
    Double saldo;

    public Conta(Integer codigo, String apelido, String agencia, String conta, String banco, Double saldo) {
        this.codigo = codigo;
        this.apelido = apelido;
        this.agencia = agencia;
        this.conta = conta;
        this.banco = banco;
        this.saldo = saldo;
    }
    
    public Conta(String apelido, String agencia, String conta, String banco) {
        this.apelido = apelido;
        this.agencia = agencia;
        this.conta = conta;
        this.banco = banco;
        this.saldo = 0.0;
    }
    

    public Conta() {
    
    }

    public Double getSaldo() {
        return saldo;
    }

    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }
    
    

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }
    
    
    public String getApelido() {
        return apelido;
    }

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public String getAgencia() {
        return agencia;
    }

    public void setAgencia(String agencia) {
        this.agencia = agencia;
    }

    public String getConta() {
        return conta;
    }

    public void setConta(String conta) {
        this.conta = conta;
    }

    public String getBanco() {
        return banco;
    }

    public void setBanco(String banco) {
        this.banco = banco;
    }

    @Override
    public int hashCode() {
        int hash = 5;
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
        final Conta other = (Conta) obj;
        if (!Objects.equals(this.apelido, other.apelido)) {
            return false;
        }
        if (!Objects.equals(this.agencia, other.agencia)) {
            return false;
        }
        if (!Objects.equals(this.conta, other.conta)) {
            return false;
        }
        return true;
    }
    

    
    
    
    
}
