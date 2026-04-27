import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Test extends HttpServlet
{
    public void doGet(HttpServletRequest r, HttpServletResponse rs) throws IOException, ServletException
    {
        rs.setContentType("text/html");
        PrintWriter out = rs.getWriter();

        // Get marks of 5 subjects
        int m1 = Integer.parseInt(r.getParameter("sub1"));
        int m2 = Integer.parseInt(r.getParameter("sub2"));
        int m3 = Integer.parseInt(r.getParameter("sub3"));
        int m4 = Integer.parseInt(r.getParameter("sub4"));
        int m5 = Integer.parseInt(r.getParameter("sub5"));

        // Calculate total and average
        int total = m1 + m2 + m3 + m4 + m5;
        double average = total / 5.0;

        out.println("<html><body>");
        out.println("<h1>24071A05F0</h1>");
        out.println("<h2>Result</h2>");
        out.println("<table border='1' cellpadding='8'>");
        out.println("<tr><th>Subject</th><th>Marks</th></tr>");
        out.println("<tr><td>Subject 1</td><td>" + m1 + "</td></tr>");
        out.println("<tr><td>Subject 2</td><td>" + m2 + "</td></tr>");
        out.println("<tr><td>Subject 3</td><td>" + m3 + "</td></tr>");
        out.println("<tr><td>Subject 4</td><td>" + m4 + "</td></tr>");
        out.println("<tr><td>Subject 5</td><td>" + m5 + "</td></tr>");
        out.println("<tr><td><b>Total</b></td><td><b>" + total + "</b></td></tr>");
        out.println("<tr><td><b>Average</b></td><td><b>" + average + "</b></td></tr>");
        out.println("</table>");
        out.println("</body></html>");
        out.close();
    }
