<%@page import="com.yedam.mapper.StudentMapper"%>
<%@page import="java.util.List"%>
<%@page import="com.yedam.vo.MemberVO"%>
<%@page import="com.yedam.common.DataSource"%>
<%@page import="org.apache.ibatis.session.SqlSession"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="container-fluid px-4">
	<h3 class="mt-3">회원목록</h3>

<ul class="nav nav-pills">
    <c:choose>
        <c:when test="${res == 'Admin'}">
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="memberList.do?res=Admin">관리자</a></li>
            <li class="nav-item"><a class="nav-link" href="memberList.do?res=User">사용자</a></li>
        </c:when>
        <c:otherwise>
            <li class="nav-item"><a class="nav-link" href="memberList.do?res=Admin">관리자</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="memberList.do?res=User">사용자</a></li>
        </c:otherwise>
    </c:choose>
</ul>

	<table class="table table-hover table-dark">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col"><a href="memberList.do?orderBy=member_id&res=${res}">아이디</a></th>
				<th scope="col">비밀번호</th>
				<th scope="col"><a href="memberList.do?orderBy=member_nm&res=${res}">이름</a></th>
				<th scope="col">권한</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="member" items="${member }" varStatus="stat">
				<tr>
					<th scope="row">${stat.count }</th>
					<td>${member.memberId }</td>
					<td>${member.memberPw }</td>
					<td>${member.memberNm }</td>
					<td>${member.responsibility }</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</div>
</div>
