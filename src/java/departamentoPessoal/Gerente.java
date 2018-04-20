package departamentoPessoal;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Moisa
 */
public class Gerente {
    
    private final List<Funcionario> listaFuncionarios = new ArrayList<Funcionario>();
    
    
    public boolean cadastrar(String nome, String sobrenome, String idade) {
        
        
        Funcionario f = new Funcionario();
        f.setNome(nome);
        f.setSobreNome(sobrenome);
        f.setIdade(Integer.parseInt(idade));
        f.setEmail(nome.toLowerCase() + "."+ sobrenome.toLowerCase() + "@unime.edu.br");

        
        if (this.listaFuncionarios.contains(f)) {

            return false;
        } else {

            this.listaFuncionarios.add(f);
            return true;
        }

    }

    public boolean demitir(String email) {

        Funcionario f = new Funcionario();
        f.setEmail(email);

        for (Funcionario listaFuncionario : this.listaFuncionarios) {

            if (f.equals(listaFuncionario)) {

                this.listaFuncionarios.remove(listaFuncionario);
                return true;

            }

        }
        return false;
    }

    public List<Funcionario> getListaFuncionarios() {
        return listaFuncionarios;
    }

 
    
}
