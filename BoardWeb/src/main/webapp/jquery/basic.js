
// jquery객체 vs dom객체

// $(document).ready(function(){
	
// })

document.addEventListener('DOMContentLoaded', function() {
	let obj = $('.show');

	$(obj).eq(0).html('Hello');
	$(obj).eq(1).html('World');
	// obj[0].innerHTML = 'Great';

	console.log(obj[0]);
	console.log(obj[1]);

	// jquery 객체 생성
	// <button>삭제</button>
	$('#show').append($('<button />').html('삭제')); 
	
	// $('#show').append($('<button> 삭제 <button />')); <button>삭제</button>
});