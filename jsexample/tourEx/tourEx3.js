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
console.log(tourList);

for (var i in tourList) {
	console.log(i);
}







