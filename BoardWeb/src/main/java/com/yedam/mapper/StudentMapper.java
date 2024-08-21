package com.yedam.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.yedam.vo.MemberVO;
import com.yedam.vo.StudentVO;

public interface StudentMapper {
	List<MemberVO> memberList(MemberVO memberVO);
	List<StudentVO> studentList();
	StudentVO selectOne(String sno);
	int insertStudent(StudentVO svo);
	int deleteStudent(String studentNumber);
	
	// 로그인 체크
	MemberVO selectMember(@Param("id") String id,@Param("pw") String pw);
	
	// 권한별 테이블 
	List<MemberVO> memberList(@Param("res") String res, @Param("orderBy") String orderBy);
	
	// 차트 (작성자별 건수)
	List<Map<String, Object>> selectCountByMember();
}
