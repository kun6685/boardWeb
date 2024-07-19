<%@page import="com.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp"%>
<h3>수정화면(modifyForm.jsp)</h3>
<%
BoardVO board = (BoardVO) request.getAttribute("board");
%>
<form action="updateBoard.do">
 <input type="hidden" name="bno" value="<%= board.getBoardNo() %>">
	<table class="table">
		<thead>
			<tr>
				<th class="col-sm-3">글번호</th>
				<td class="col-sm-3"><%=board.getBoardNo()%></td>
				<th class="col-sm-3">조회수</th>
				<td class="col-sm-3"><%=board.getViewCnt()%></td>
			</tr>
		</thead>

		<tr>
			<th>제목</th>
			<td colspan="5"><input class="form-control" type="text" name="title"></td>
		</tr>

		<tr>
			<th>내용</th>
			<td colspan="5"><textarea class="form-control" type="text" name="content"></textarea></td>
		</tr>

		<tr>
			<th>작성자</th>
			<td colspan="5"><%=board.getWriter()%></td>
		</tr>

		<tr>
			<td colspan="5" align="center"><input class="btn btn-danger" type="submit" value="수정"> 
			<input class="btn btn-warning" type="reset" value="취소">
			</td>
		</tr>
	</table>
</form>
<%@ include file="../includes/footer.jsp"%>