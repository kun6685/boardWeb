package com.yedam.common;

import org.apache.ibatis.session.SqlSession;

import com.yedam.mapper.BoardMapper;
import com.yedam.vo.BoardVO;

public class AppTest {
	public static void main(String[] args) {
		SqlSession sqlSession = DataSource.getInstance().openSession(true);
		BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);

		BoardVO brd = new BoardVO();
//		brd.setTitle("매퍼테스트");
//		brd.setContent("조건이 제대로 되는지");
//		brd.setWriter("newbie");
  		brd.setBoardNo(3);
		
//		if(mapper.selectBoard(brd) == 1) {
//			System.out.println("OK");
//		}
  		
  		mapper.selectBoard(brd).forEach(board -> System.out.println(board.toString()));
		
  		mapper.selectList().forEach(board -> System.out.println(board.toString()));
	
  		System.out.println("- End -");
	}
}
