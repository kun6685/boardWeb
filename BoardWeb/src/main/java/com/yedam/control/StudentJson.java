package com.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.StudentVO;

public class StudentJson implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 학생목록을 json문자열로 표현 
		// [{"stdNo": "s2024-001", "stdName" : "홍길동"...}, {}, {}...{}]
		resp.setContentType("text/json; charset=utf-8");
		String json = ""; // json 문자열을 담기
		MemberService svc = new MemberServiceImpl();
		List<StudentVO> list = svc.studentList();
		
		json += "[";
		for(int i = 0; i < list.size(); i++) {
			json += "{\"studentNumber\":\"" + list.get(i).getStudentNumber() 
					+ "\",\"studentName\":\"" + list.get(i).getStudentName()
					+ "\", \"studentPhone\":\"" + list.get(i).getStudentPhone() + "\"}";
			
			if(i != list.size() - 1) {
				json += ",";
			}
		}
		json += "]";
		
		resp.getWriter().print(json);
		
	}

}
