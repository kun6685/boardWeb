package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class addScheduleControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String title = req.getParameter("title");
		String start = req.getParameter("start");
		String end = req.getParameter("end");
		
		BoardVO bvo = new BoardVO();
		bvo.setTitle(title);
		bvo.setWriter(start);
		bvo.setContent(end);
		
		BoardService svc = new BoardServiceImpl();
		if(svc.addSchedule(bvo)) {
			resp.getWriter().print("");
		}

	}

}
