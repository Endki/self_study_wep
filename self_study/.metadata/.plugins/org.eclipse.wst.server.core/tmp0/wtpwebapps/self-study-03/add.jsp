<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%!
 int a=20,b=10;

public int add(int a,int b){
	int sum=a+b;
	return sum;
}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%= a %> + <%= b %> = <%= add(a,b) %>


</body>
</html>