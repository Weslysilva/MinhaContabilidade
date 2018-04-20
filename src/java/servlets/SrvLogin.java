package servlets;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import Controller.GerenciaLogin;
import Controller.GerenciaUsuario;
import departamentoPessoal.Usuario;
import login.Login;

/**
 *
 * @author weslysniper
 */
@WebServlet(urlPatterns = {"/login/*"})
public class SrvLogin extends HttpServlet {

    private static final long serialVersionUID = 1L;
     
    @Override
    protected void doGet(HttpServletRequest resquest, HttpServletResponse response) throws IOException{
             this.execute(resquest, response);
         }
     
    @Override
    protected void doPost(HttpServletRequest resquest, HttpServletResponse response) throws IOException{
             this.execute(resquest, response);
         }
     
    private void execute(HttpServletRequest request, HttpServletResponse response) throws IOException{

             //Capturando Caminho passado pelo navegador
             String action = request.getPathInfo();

             //Obejson Json utlizando a bilioteca GSON da google (Google Script Objetect Node)
             Gson gson = new Gson();

             //Gerenciador de Objetos Login
             GerenciaLogin gl = (GerenciaLogin) super.getServletContext().getAttribute("gl");
                if (gl == null){
                    gl= new GerenciaLogin();
                    super.getServletContext().setAttribute("gl", gl);
                }

             //Gerenciador de Objetos Usuario   
             GerenciaUsuario gu = (GerenciaUsuario) super.getServletContext().getAttribute("gu");
                if (gu == null){    
                       gu= new GerenciaUsuario();
                       super.getServletContext().setAttribute("gu", gu);
                }
//-------------//-------------//-------------//-------------//-------------//-------------//-------------//-------------//-------------//-------------//

                                            //*       Condicoes disponiveis ao solicitar a pagina  /login       *//

//-------------//-------------//-------------//-------------//-------------//-------------//-------------//-------------//-------------//-------------//


    if (action.contains("logout")){
            request.getSession().setAttribute("logado",null);
            response.getWriter().print(true);

        }else if (action.contains("logado")){

            if( (request.getSession().getAttribute("logado")) == null) {
                response.getWriter().print(false);
            }else {

                Login login = (Login) request.getSession().getAttribute("logado"); //Pega o usuario que esta no scopo da sessao
                response.getWriter().print(login.getNome()); //envia para a pagina que requisitou 
            }         

        }else if (action.contains("validar")) { //Verificar se o usuario esta cadastrado

            Login login = gson.fromJson(request.getParameter("login"), Login.class);
            if (gl.validar(login)){
                response.getWriter().print(true);
                request.getSession().setAttribute("logado", login);

            }else {
                response.getWriter().print(false);
                request.getSession().setAttribute("logado",null);
            }

        }else if (action.contains("lista")){ //Return a lista de Logins
               response.getWriter().print(gl.getListaLogin());

        }else if (action.contains("salvar")){ //Return a lista de Logins

            Login login = gson.fromJson(request.getParameter("login"), Login.class);
            if (gl.validar(login)){
               response.getWriter().print(false);
            }else {
                gl.adicionar(login);
                response.getWriter().print(true);
            }

        }else if (action.contains("addUser")){

           Usuario usuario = (Usuario) gson.fromJson(request.getParameter("usuario"), Usuario.class);
           gu.adicionar(usuario);

        }else if (action.contains("listaUser")){ //Return a lista de Logins
               response.getWriter().print(gu.getListaUsuarios());
        }

    }

}   