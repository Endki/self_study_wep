<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>1부터 10까지 자연수 합 구하기</h1>
<% 
	int sum=0;
	int tmp=Integer.parseInt(request.getParameter("sum"));
	for(int i=1;i<=tmp;i++){
		sum+=i;
		out.print(i+"+");
	}
	out.print("= "+sum);
		%>
	
</body>
</html>