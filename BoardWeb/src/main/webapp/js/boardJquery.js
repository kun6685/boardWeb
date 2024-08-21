/**
 * boardJquery.js
 * jquery용 Ajax 사용
 */

console.log('Jquery Start');

function makeRow(elem = {}){
		let temp = $('#replyList li:eq(0)').clone();
		temp.attr('data-rno', elem.replyNo);
		temp.css('display', 'block'); // 속성(attribute)변경
		temp.find('span:eq(0)').html(elem.replyNo);
		temp.find('span').eq(1).html(elem.replyContent);
		temp.find('span').eq(2).html(elem.replyer);

		let btn = $('<button>삭제1</button>').on('click', deleteRow);
		temp.find('span').eq(3).html(btn);
		
		return temp;
}


let page = 1;
$.ajax({
	url: 'replyList.do', // 서버url 호출
	data: { bno: bno, page: page },
	dataType: 'json', // 서버에 전달한 parameter 
	success: function(result) {
		console.log(result);
		$.each(result, function(i, elem) {
			console.log("요기 => ", i, elem);
			$('#replyList').append(makeRow(elem));
		});
	},

	error: function(err) {
		console.log(err);
	}
})

// 삭제 ajax
function deleteRow() {
	let li = $(this).parent().parent();
	let rno = li.data('rno');
	$.ajax({
		url: 'removeReply.do',
		data: { replyNo: rno },
		dataType: 'json',
		success: function(result) {
			console.log(result);
			if (result.retCode == 'Success') {
				li.remove();
			} else {
				alert('처리중 예외 발생');
			}
		},
		error: function(err) {
			console.log(err);
		}
	});
}

$(function() {
	$('#addReply').on('click', function() {
		$.ajax({
			url: 'addReply.do',
			data: { bno: bno, replyer: replyer, content: $('#content').val()},
			dataType: 'json',
			success: function(result) {
				console.log(result);
				let elem = result.retVal;
				$('#replyList').prepend(makeRow(elem));
				$('#content').val('');
			},
			error: function(err) {
				console.log(err);
			}
		});
	});
});