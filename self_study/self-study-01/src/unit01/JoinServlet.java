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
		out.println("이름  : "+username);
		out.println("<br>주민번호 : "+uniqenum+"-"+uniqenum2);
		out.println("<br>아이디 : "+userid);
		out.println("<br>비밀번호 : "+passward);
		out.println("<br>이 메 일 : "+email+"@"+mailaddr);
		out.println("<br>우편번호 : "+addr);
		out.println("<br>주소 : "+addrtext+addrtext2);
		out.println("<br>핸드폰번호 : "+phone);
		out.println("<br>직업 : "+char1);
		out.println("<br>관심분야 : "+hobby);
		
		out.println("<br><a href='javascript:history.go(-1)'>다시</a>");
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
