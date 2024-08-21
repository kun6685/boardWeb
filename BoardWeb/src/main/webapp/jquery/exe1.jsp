<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>exe1.jsp</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	<script> 
		
	$(document).ready(function() {
	    $('#addBtn').on('click', function() {
	    //$('#show #list').append($('<li />')).html($('#userVal').val());
	    let btn = $('<button>삭제</button>').on('click', function(){
	        console.log(this);
	        $(this).parent().hide(1000); //.hide() = 하위 요소 숨겨줌. 안에 숫자 적으면 삭제 시간 느려짐.
	    }); //btn
	    
	    let newElem = $('<li />').html($('#userVal').val() +" ").append(btn);
	    $('#list').append( newElem );
	    });
	    
	 		// 홀수
			$('#oddBtn').on('click', function() {
				$('#list li:gt(2)').css('background', 'red');
			});
	 		
			// 짝수
			$('#evenBtn').on('click', function() {
				$('#list li:not(:has(span))').css('color', 'blue');
			});
	});
	
	</script>
</head>
<body>
	입력:<input id="userVal"> <!-- val() -->
	<button id="addBtn">추가</button>
	<button id="oddBtn">3번째 이후</button>
	<button id="evenBtn">사과4</button>

	<div id="show">
		<ul id="list">
			<li>사과1 <span>span</span><button>삭제</button></li>
			<li>사과2 <button>삭제</button></li>
			<li>사과3 <button>삭제</button></li>
			<li>사과4 <button>삭제</button></li>
			<li>사과5 <button>삭제</button></li>
		</ul>
	</div>
</body>
</html>