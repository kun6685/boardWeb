package com.yedam.mapper;

import java.util.List;

import com.yedam.common.SearchVO;
import com.yedam.vo.ReplyVO;

public interface ReplyMapper {
  
	//datatable 연습용
	List<ReplyVO> selectList(int boardNo); // 댓글조회
	List<ReplyVO> selectListPaging(SearchVO search); // 원본글 번호, 페이지 정보
	
	int insertReply(ReplyVO rvo); // 댓글등록
	int deleteReply(int replyNo); // 댓글삭제
	
	// 댓글 페이징
	int totalReplyCnt(int boardNo); // 글 번호 댓글 갯수
}
