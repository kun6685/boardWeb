/**
 * json2.js
 */

document.querySelector('div.container-fluid > div:nth-of-type(2)').remove();
document.querySelector('div.container-fluid > table').remove();

let json = `[{"id":1,"first_name":"Milton","last_name":"Corkett","email":"mcorkett0@patch.com","gender":"Male","salary":6737},
{"id":2,"first_name":"Aubree","last_name":"Loade","email":"aloade1@about.me","gender":"Female","salary":8093},
{"id":3,"first_name":"Matthaeus","last_name":"Worts","email":"mworts2@opensource.org","gender":"Male","salary":9375},
{"id":4,"first_name":"Burnaby","last_name":"Teers","email":"bteers3@canalblog.com","gender":"Bigender","salary":6187},
{"id":5,"first_name":"Durante","last_name":"Trewett","email":"dtrewett4@themeforest.net","gender":"Male","salary":3946},
{"id":6,"first_name":"Base","last_name":"Schirok","email":"bschirok5@list-manage.com","gender":"Male","salary":6678},
{"id":7,"first_name":"Emerson","last_name":"Sprade","email":"esprade6@virginia.edu","gender":"Male","salary":6270},
{"id":8,"first_name":"Gigi","last_name":"Ballinghall","email":"gballinghall7@nih.gov","gender":"Female","salary":5018},
{"id":9,"first_name":"Marsh","last_name":"Denisot","email":"mdenisot8@yandex.ru","gender":"Male","salary":8742},
{"id":10,"first_name":"Arnoldo","last_name":"Shire","email":"ashire9@live.com","gender":"Male","salary":5032},
{"id":11,"first_name":"Aloise","last_name":"Grimsell","email":"agrimsella@photobucket.com","gender":"Female","salary":2901},
{"id":12,"first_name":"Luigi","last_name":"O'Kenny","email":"lokennyb@blogger.com","gender":"Male","salary":4334},
{"id":13,"first_name":"Nikoletta","last_name":"Kingswell","email":"nkingswellc@youtu.be","gender":"Female","salary":2283},
{"id":14,"first_name":"Teddy","last_name":"Pfeffel","email":"tpfeffeld@spotify.com","gender":"Male","salary":6789},
{"id":15,"first_name":"Cayla","last_name":"Keatley","email":"ckeatleye@loc.gov","gender":"Genderqueer","salary":8035},
{"id":16,"first_name":"Cary","last_name":"Vido","email":"cvidof@netscape.com","gender":"Male","salary":3385},
{"id":17,"first_name":"Forest","last_name":"Oldfield-Cherry","email":"foldfieldcherryg@gnu.org","gender":"Male","salary":3253},
{"id":18,"first_name":"Kliment","last_name":"Esposi","email":"kesposih@springer.com","gender":"Male","salary":7259},
{"id":19,"first_name":"Cherilynn","last_name":"Wogden","email":"cwogdeni@sciencedaily.com","gender":"Female","salary":7423},
{"id":20,"first_name":"Sergei","last_name":"Royce","email":"sroycej@gnu.org","gender":"Male","salary":7275}]`

let employees = JSON.parse(json);
console.log(employees);

document.querySelector('#searchGender').addEventListener('change', function(e){
	initList();
})

function initList() {
	let target = document.getElementById('empList'); // tbody
	target.innerHTML = '';
	let selValue = document.querySelector('#searchGender').value;
	employees.forEach(emp => {
		if(selValue == 'All' || emp.gender == selValue) {
			target.appendChild(makeRow(emp));
		}
	});
}

initList();


// 사원정보 => row 생성
function makeRow(emp = {}) {
	let fields = ['id', 'first_name', 'last_name', 'salary'];
	let tr = document.createElement('tr');
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = emp[field];
		tr.appendChild(td);
	})
	return tr;
}
