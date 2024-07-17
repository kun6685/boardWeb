<%@page import="com.yedam.mapper.StudentMapper"%>
<%@page import="org.apache.ibatis.session.SqlSession"%>
<%@page import="com.yedam.common.DataSource"%>
<%@page import="com.yedam.vo.StudentVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>studentList.jsp</title>
</head>
<body>
	<table border="2">
		<thead>
			<tr>
				<th>학번</th>
				<th>이름</th>
				<th>연락처</th>
			</tr>
		</thead>
		<tbody>
			<%
			// 자바 영역
			SqlSession sqlSession = DataSource.getInstance().openSession(true);
			StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);
			List<StudentVO> list = mapper.studentList();
			for (StudentVO studentVO : list) { 
			%>

			<tr>
				<td><a href="student.jsp?sno=<%=studentVO.getStudentNumber()%>"><%=studentVO.getStudentNumber()%></a></td>
				<td>이름:<%=studentVO.getStudentName()%></td>
				<td>연락처:<%=studentVO.getStudentPhone()%></td>
			</tr>
			<%
			}
			%>
		</tbody>
	</table>
	<!-- HTML 영역 -->
</body>
</html>