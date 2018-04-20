/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import departamentoPessoal.Usuario;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 *
 * @author wesly
 */
public class GerenciaUsuario {
    
       private final List<Usuario> usuario = new ArrayList<>();
    
    
    public boolean adicionar(Usuario usuario){
        if (this.usuario.contains(usuario)) {
            return false;            
        }else{
            this.usuario.add(usuario);
            return true;
        }
    }
    public boolean validar(Usuario usuario){
        for(Usuario l:this.usuario){
            if (l.equals(usuario)){
                if(l.getSenha().equals(usuario.getSenha())){
                    return true;
                }
            }
        }
        return false;
    }
    public Collection<Usuario> getListaUsuarios(){
        return this.usuario;
    }


    
    
}
