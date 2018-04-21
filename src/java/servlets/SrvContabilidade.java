/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import Controller.GerenciaConta;
import Controller.GerenciaLogin;
import Controller.GerenciaUsuario;
import com.google.gson.Gson;
import contabilidade.Conta;
import departamentoPessoal.Usuario;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import login.Login;

/**
 *
 * @author wesly
 */
@WebServlet(urlPatterns = {"/cadastro/SrvContabilidade/*"})
public class SrvContabilidade extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet SrvContabilidade</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet SrvContabilidade at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
   @Override
    protected void doGet(HttpServletRequest resquest, HttpServletResponse response) throws IOException{
             this.execute(resquest, response);
         }
     
    @Override
    protected void doPost(HttpServletRequest resquest, HttpServletResponse response) throws IOException{
             this.execute(resquest, response);
         }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    
    private void execute(HttpServletRequest request, HttpServletResponse response) throws IOException{

             //Capturando Caminho passado pelo navegador
             String action = request.getPathInfo();

             //Obejson Json utlizando a bilioteca GSON da google (Google Script Objetect Node)
             Gson gson = new Gson();
   
             //Gerenciador de Contas 
             GerenciaConta gc = (GerenciaConta) super.getServletContext().getAttribute("contabilidade");
             Conta conta = new Conta();
             
             if(gc == null){
             
                   gc = new GerenciaConta();
                   super.getServletContext().setAttribute("contabilidade", gc);
             }
             
                System.out.println(action); 
//-------------//-------------//-------------//-------------//-------------//-------------//-------------//-------------//-------------//-------------//

                                            //*       Condicoes disponiveis ao solicitar a pagina  /login       *//

//-------------//-------------//-------------//-------------//-------------//-------------//-------------//-------------//-------------//-------------//


        if (action.contains("addConta")){
            
            conta = gson.fromJson(request.getParameter("conta"), Conta.class);
            
            
            if (gc.validar(conta)) {
                response.getWriter().print(false);
            }else{
                response.getWriter().print(gc.adicionar(conta));
            }
            
        }else if (action.contains("getConta")){
        
            response.getWriter().print(gson.toJson(gc.getListaContas()));
            
        }else if (action.contains("remConta")){
        
           
          conta = gson.fromJson(request.getParameter("conta"), Conta.class);
          response.getWriter().print(gc.remove(conta));
            
        }
    }

}   



