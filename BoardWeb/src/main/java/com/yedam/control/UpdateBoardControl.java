package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class UpdateBoardControl implements Control {

    @Override
    public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            String bnoStr = req.getParameter("bno");
            String content = req.getParameter("content");
            String title = req.getParameter("title");

            int bno = Integer.parseInt(bnoStr);

            BoardVO boardVO = new BoardVO();
            boardVO.setBoardNo(bno);
            boardVO.setContent(content);
            boardVO.setTitle(title);

            BoardService svc = new BoardServiceImpl();
            boolean isUpdated = svc.updateBoard(boardVO);

            if (isUpdated) {
                resp.sendRedirect("boardList.do");
            } else {
                throw new ServletException("게시글 수정에 실패하였습니다.");
            }

        } catch (NumberFormatException e) {
            throw new ServletException("유효하지 않은 게시글 번호입니다.", e);
        } catch (Exception e) {
            throw new ServletException("게시글 수정 중 오류가 발생했습니다.", e);
        }
    }
}
