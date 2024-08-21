/**
 * index.js 
 */

let json = "[{\"productCode\":\"A000000207770\",\"name\":\"[1+1/모공세정]비플레인 녹두 약산성 클렌징폼 더블 기획 조구만 에디션(160ml+160ml)\",\"price\":\"26,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020777004ko.jpg?l=ko\"},{\"productCode\":\"A000000207017\",\"name\":\"[7월 올영픽]마녀공장X미니언즈 퓨어&amp;딥 클렌징폼 120ml 1+1 기획 (+쉐이커 키링)\",\"price\":\"14,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020701702ko.jpg?l=ko\"},{\"productCode\":\"A000000207365\",\"name\":\"[증정이벤트] 토르홉 카모스 블랙 소금거품 클렌저 130g\",\"price\":\"18,600\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020736514ko.jpg?l=ko\"},{\"productCode\":\"A000000193919\",\"name\":\"[화해1위] 비건이펙트 클린 앤 글로우 청보리 LHA 젤 클렌저 205ml 기획(+토너패드 12ml 4EA 증정)\",\"price\":\"22,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0019/A00000019391913ko.jpg?l=ko\"},{\"productCode\":\"A000000175915\",\"name\":\"[단독기획] 토리든 다이브인 저분자 히알루론산 클렌징 폼 150ml 기획(+30ml 추가 증정)\",\"price\":\"15,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017591514ko.jpg?l=ko\"},{\"productCode\":\"A000000187479\",\"name\":\"비플레인 녹두 약산성 클렌징폼 160ml + 40ml 기획\",\"price\":\"21,900\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018747907ko.jpg?l=ko\"},{\"productCode\":\"A000000178633\",\"name\":\"[화해1위] 에스네이처 아쿠아 라이스 약산성 클렌징폼 160ml\",\"price\":\"19,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017863380ko.jpg?l=ko\"},{\"productCode\":\"A000000185100\",\"name\":\"[더블기획] 브링그린 티트리시카트러블클렌징폼 200mL더블기획_NEW\",\"price\":\"19,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018510002ko.jpg?l=ko\"},{\"productCode\":\"A000000207267\",\"name\":\"[NEW] 메이크프렘 세이프 미 아미노 리프레시 클렌징폼 150ml\",\"price\":\"18,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020726704ko.jpg?l=ko\"},{\"productCode\":\"A000000199970\",\"name\":\"아누아 어성초 쿼세티놀 포어 딥 클렌징폼 150ml\",\"price\":\"14,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0019/A00000019997008ko.jpg?l=ko\"},{\"productCode\":\"A000000207077\",\"name\":\"[리뷰이벤트] 넘버즈인 3번 쌀누룩 효소사우나 고마쥬폼 더블 기획 (170ml+170ml)\",\"price\":\"26,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020707706ko.jpg?l=ko\"},{\"productCode\":\"A000000206929\",\"name\":\"[7월 올영픽][리뷰이벤트] 메디필X민들레마음 레드락토 콜라겐 클리어 폼 클렌저 2.0 (+그린시카폼 15ml)\",\"price\":\"24,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020692903ko.jpg?l=ko\"},{\"productCode\":\"A000000168699\",\"name\":\"스트라이덱스 약알칼리성 바하 폼클렌저 기획 (150ml+15ml)\",\"price\":\"9,900\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016869908ko.jpg?l=ko\"},{\"productCode\":\"A000000204014\",\"name\":\"한율 어린쑥 클렌징 피지흡착 쑥떡팩폼\",\"price\":\"28,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020401408ko.jpg?l=ko\"},{\"productCode\":\"A000000184598\",\"name\":\"[1+1기획]식물나라 제주 탄산수 모공 딥 클렌징폼 150mL 1+1기획\",\"price\":\"12,800\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018459808ko.jpg?l=ko\"},{\"productCode\":\"A000000162212\",\"name\":\"[증량]닥터지 약산성 레드 블레미쉬 클리어 수딩 폼 더블기획 (150ml+150ml)\",\"price\":\"28,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016221218ko.jpg?l=ko\"},{\"productCode\":\"A000000182305\",\"name\":\"센카 퍼펙트 휩 아크네 케어 100g\",\"price\":\"9,800\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018230501ko.jpg?l=ko\"},{\"productCode\":\"A000000186843\",\"name\":\"[화해1위/여행용증정]일리윤 세라마이드 더마6.0 클렌징워터 폼 기획세트\",\"price\":\"21,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018684324ko.jpg?l=ko\"},{\"productCode\":\"A000000203582\",\"name\":\"[버블망&amp;여드름패치 증정]세타필 젠틀 클리어 여드름 폼클렌저 124ml\",\"price\":\"20,900\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020358221ko.jpg?l=ko\"},{\"productCode\":\"A000000113670\",\"name\":\"[단독기획]메이크프렘 세이프 미 릴리프 모이스처 클렌징폼150ml 1+1기획\",\"price\":\"16,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0011/A00000011367033ko.jpg?l=ko\"},{\"productCode\":\"A000000167372\",\"name\":\"[7월 올영픽] 아크네스 포밍워시 200ml 1+1 기획\",\"price\":\"16,500\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016737216ko.jpg?l=ko\"},{\"productCode\":\"A000000205161\",\"name\":\"[NEW] 브링그린 뱀부차콜모공정화클렌징폼200mL더블기획(+세안밴드증정)\",\"price\":\"19,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020516103ko.jpg?l=ko\"},{\"productCode\":\"A000000202904\",\"name\":\"[단독기획]주미소 포어 퓨리파잉 약산성 수분 클레이폼 120g기획(+20g)\",\"price\":\"18,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020290407ko.jpg?l=ko\"},{\"productCode\":\"A000000158141\",\"name\":\"아벤느 클리낭스 클렌징 젤 200ml 더블 기획 (200ml+200ml)\",\"price\":\"33,000\",\"img\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0015/A00000015814115ko.jpg?l=ko\"}]";
let url = "imageDownload.do";
let optionObj = {
	method: 'post',
	headers: {
		'Content-Type': 'application/json' // application/x-www-form-urlencoded
	},
	body: json
}

document.querySelector("#uploadBtn").onclick = function(e) {
	fetch(url, optionObj) // promise객체 then(), catch()
		.then(function(result) {
			console.log(result); // Response 객체
			return result.json(); // json 문자열 형태로 반환
		})
		.then(function(result) {
			console.log(result);
		})
		.catch(function(err) {
			console.error(err);
		})
}

// 접종센터 정보
let centerAry = [];

let selectCenter = document.querySelector('#selectCenter');

selectCenter.addEventListener('change', function(e) {
	// forEach, map, filter, reduce
	document.query
	let newAry = centerAry.filter(center => center.sido == this.value);
	console.log(newAry);
	let field = ['id', 'centerName', 'address', 'phoneNumber'];
	newAry.forEach(center => {
		let tr = document.createElement('tr');
		tr.addEventListener('click', function(e){
			// location.href = 'map.jsp?lat=' + center.lat + '&lng=' + center.lng;
			window.open('map.jsp?lat=' + center.lat + '&lng=' + center.lng);
		});
		
		for (let prop of field) {
			let td = document.createElement('td');
			td.innerHTML = center[prop];
			tr.append(td);
		}
		document.querySelector('tbody').append(tr);
	});
})


url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=qteIMyDk2uxQbcMZ6U3o4T%2BkjM74vxk1d3DHvhW0utcIhZiZ8nZhDk99edv1g40ZPIQS43sYVYh8MHimJ6uZeg%3D%3D';

let arrayFunc = result => {
	console.log(result);
	centerAry = result.data;

	// forEach, map, filter, reduce
	let newAry = centerAry.filter(center => center.sido == result);
	console.log(newAry);
	let field = ['id', 'centerName', 'address', 'phoneNumber'];
	newAry.forEach(center => {
		let tr = document.createElement('tr');
		tr.addEventListener('click', function(e){
			// location.href = 'map.jsp?lat=' + center.lat + '&lng=' + center.lng;
			window.open('map.jsp?lat=' + center.lat + '&lng=' + center.lng);
		});
		
		for (let prop of field) {
			let td = document.createElement('td');
			td.innerHTML = center[prop];
			tr.append(td);
		}
		document.querySelector('tbody').append(tr);
	});
} // end of arrayFunc

fetch(url) // ajax
	.then(result => result.json())
	.then(arrayFunc)
	.catch(err => console.error('error : ', err));