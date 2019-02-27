/**
 * 
 */

var list = require('./tour.js');
list.shuffle();

var tours = {};

list.forEach(tour => {
	if (!tours[tour.region]){ // 해당 권역(key)이 처음 나온 경우
		tours[tour.region] = []; // 배열 배정
	}
	tours[tour.region].push(tour); // 권역 배열에 추가
}); 

var regions = Object.keys(tours); // 권역 리스트 얻기
console.log(regions);

var tourList = tours["경상권"]; // 지정한 권역의 목록 얻기

function toTr(tour){
	return `<tr>
	<td>${tour.region}</td>
	<td>${tour.city}</td>
	<td>${tour.address}</td>\n</tr>`;
}

var trs = tourList.map(toTr).join('\n');
var table = '<table>\n' + trs + '\n</table>';

console.log(table);



function toCard(tour){
	return `
	<div class="card">
		<img class="card-img-top" src="../images/Penguins.jpg"
			alt="Card image">
		<div class="card-body">
			<h4 class="card-title">${tour.region}</h4>
			<p class="card-text">${tour.city}</p>
			<a href="#" class="btn btn-primary">${tour.address}</a>
		</div>
	</div>`;
}

var trs = tourList.map(toTr).join('\n');
var table = '<table>\n' + trs + '\n</table>';
console.log(table);


var asd = tourList.map(toCard).join('\n');
console.log(asd);