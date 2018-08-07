package unit01;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class JoinServlet
 */
@WebServlet("/JoinServlet")
public class JoinServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JoinServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		String username=request.getParameter("username");
		String uniqenum=request.getParameter("uniqenum");
		String uniqenum2=request.getParameter("uniqenum2");
		
		String userid=request.getParameter("userid");
		String passward=request.getParameter("passward");
		String passward2=request.getParameter("passward2");
		
		String email=request.getParameter("email");
		String mailaddr=request.getParameter("mailaddr");
		String addr=request.getParameter("addr");
		
		String addrtext=request.getParameter("addrtext");
		String addrtext2=request.getParameter("addrtext2");
		String phone=request.getParameter("phone");
		
		String char1=request.getParameter("char");
		String chk_mail=request.getParameter("chk_mail");
		String hobby=request.getParameter("hobby");
		
		PrintWriter out=response.getWriter();
		
		out.print("<html><body>");
		out.println("�̸�  : "+username);
		out.println("<br>�ֹι�ȣ : "+uniqenum+"-"+uniqenum2);
		out.println("<br>���̵� : "+userid);
		out.println("<br>��й�ȣ : "+passward);
		out.println("<br>�� �� �� : "+email+"@"+mailaddr);
		out.println("<br>�����ȣ : "+addr);
		out.println("<br>�ּ� : "+addrtext+addrtext2);
		out.println("<br>�ڵ�����ȣ : "+phone);
		out.println("<br>���� : "+char1);
		out.println("<br>���ɺо� : "+hobby);
		
		out.println("<br><a href='javascript:history.go(-1)'>�ٽ�</a>");
		out.print("</html></body>");
		out.close();
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
