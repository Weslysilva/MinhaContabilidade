package Controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import login.Login;

public class GerenciaLogin {
    
    private final List<Login> logins = new ArrayList<>();
    
    public GerenciaLogin(){
        
        Login admin = new Login();
        
        admin.setNome("wesly");
        admin.setSenha("123");
        
        this.logins.add(admin);
    }
    public boolean adicionar(Login login){
        if (this.logins.contains(login)) {
            return false;            
        }else{
            this.logins.add(login);
            return true;
        }
    }
    public boolean validar(Login login){
        for(Login l:this.logins){
            if (l.equals(login)){
                if(l.getSenha().equals(login.getSenha())){
                    return true;
                }
            }
        }
        return false;
    }
    public Collection<Login> getListaLogin(){
        return this.logins;
    }



}
