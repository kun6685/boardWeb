/**
 
board.js*/

console.log('board.js' + bno);
let page = 1; // 아래쪽에서 댓글의 페이지를 지정.

// 댓글등록 버튼에 클릭 이벤트 등록.
document.querySelector('#addReply').addEventListener('click', function(e) {
	let content = document.querySelector('#content').value;
	let param = { bno, replyer, content }
	if (!replyer || !content) {
		alert('필수입력항목을 확인하세요!');
		return;
	}

	svc.addReply(param, function() {
		// 등록완료 => 화면에 등록된 글 추가.
		let result = JSON.parse(this.response);
		console.log(result);
		if (result.retCode == 'Success') {
			// replyList.appendChild(makeRow(result.retVal));
			page = 1;
			showPage();
		}
	});
});

showPage();
// 댓글목록 출력.
function showPage() {
	svc.replyList({ bno, page }, function() {
		// 기존목록을 삭제
		replyList.querySelectorAll('li').forEach((li, idx) => {
			if (idx != 0) {
				li.remove();
			}
		})
		// 페이지 로드하면서 목록을 출력
		let result = JSON.parse(this.response);
		result.forEach(reply => {
			replyList.appendChild(makeRow(reply));
		});
		// 실제 데이터 ... 출력
		svc.pagingCount(bno, createPageList);
	});
}

// reply => row 생성
function makeRow(reply = {}) {
	let cloned = document.querySelector('div.reply>div.content li').cloneNode(true);
	cloned.setAttribute('data-rno', reply.replyNo);
	cloned.style.display = 'block'; // <li style="display: block;" ></li>
	cloned.querySelector('span:nth-of-type(1)').innerText = reply.replyNo;
	cloned.querySelector('span:nth-of-type(2)').innerText = reply.replyContent;
	cloned.querySelector('span:nth-of-type(3)').innerText = reply.replyer;
	cloned.querySelector('button').addEventListener('click', deleteReplyFnc);
	return cloned;
}

// 댓글삭제 이벤트핸들러.
function deleteReplyFnc(e) {
	let rno = e.target.parentElement.parentElement.dataset.rno;
	svc.removeReply(rno, function(e) {
		let result = JSON.parse(this.response);
		if (result.retCode == 'Success') {
			alert('삭제성공!!');
			// document.querySelector('li[data-rno="' + rno + '"]').remove();
			showPage();
		} else {
			alert('삭제실패!!');
		}
	})
}

// 페이지 a태그 생성.
function createPageList(event) {
	console.log(this.responseText);
	let result = JSON.parse(this.responseText);
	let totalCnt = result.totalCount;

	let startPage, endPage; // 현재페이지를 기준으로 계산한 첫페이지번호 ~ 마지막페이지번호.
	let next, prev; // 이전, 이후 체크하는 변수.
	let realEnd = Math.ceil(totalCnt / 5); // 20page

	endPage = Math.ceil(page / 10) * 10;
	startPage = endPage - 9;
	endPage = endPage > realEnd ? realEnd : endPage;

	prev = startPage > 1;
	next = endPage < realEnd ? true : false;

	document.querySelector('ul.pagination').innerHTML = ''; // 기존html 지우기.

	// 이전 10페이지 여부.
	let li = document.createElement('li');
	li.className = 'page-item';
	// 이전 페이지의 존재 여부.
	if (prev) {
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', startPage - 1);
		aTag.className = 'page-link';
		aTag.href = '#';
		aTag.innerHTML = 'Previous';
		li.appendChild(aTag);
	} else {
		li.classList.add('disabled');
		let span = document.createElement('span');
		span.className = 'page-link';
		span.innerHTML = 'Previous';
		li.appendChild(span);
	}
	document.querySelector('ul.pagination').appendChild(li);

	// 10개 출력. <li class="page-item active"><a class="page-link" href="#">1</a></li>
	for (let p = startPage; p <= endPage; p++) {
		let li = document.createElement('li');
		li.className = 'page-item'; // class='page-item active'
		if (page == p) {
			li.classList.add('active');
			let span = document.createElement('span');
			span.className = 'page-link';
			span.innerHTML = p;
			li.appendChild(span);
		} else {
			let aTag = document.createElement('a');
			aTag.setAttribute('data-page', p);
			aTag.className = 'page-link';
			aTag.href = '#';
			aTag.innerHTML = p;
			li.appendChild(aTag);
		}

		document.querySelector('ul.pagination').appendChild(li);
	} // enf of for.


	// 이후 10페이지 여부.
	li = document.createElement('li');
	li.className = 'page-item';
	// 이후 페이지의 존재 여부.
	if (next) {
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', endPage + 1);
		aTag.className = 'page-link';
		aTag.href = '#';
		aTag.innerHTML = 'Next';
		li.appendChild(aTag);
	} else {
		li.classList.add('disabled');
		let span = document.createElement('span');
		span.className = 'page-link';
		span.innerHTML = 'Next';
		li.appendChild(span);
	}
	document.querySelector('ul.pagination').appendChild(li);

	// a태그의 이벤트 등록
	pageMove();
} // end of createPageList

// paging영역의 a 태그를 클릭하면...
function pageMove() {
	document.querySelectorAll('div.reply ul.pagination a')
		.forEach(item => {
			item.addEventListener('click', function(e) {
				page = item.dataset.page;
				// service에서 목록을 출력하는 메소드 호출
				showPage();
			})
		});
} // end of pageMove