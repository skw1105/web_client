/**
 * 
 */

var list = require('./tour.js');
console.log(list.length);

var set = {};
var anyValue = 12;
list.forEach(e => set[e.region] = anyValue);

var regions = Object.keys(set);
console.log(regions);

var regions_value = Object.values(set);
console.log(regions_value);


console.log();


var regions = [ '강원권', '경상권', '서울/경기권', '전라권', '제주권', '충청권' ];

// 프로토타입 메서드
Array.prototype.shuffle = function() {
	var j, x;
	for (var i = this.length; i > 0; i--){
		j = parseInt(Math.random() * i);
		x = this[i - 1];
		this[i - 1] = this[j];
		this[j] = x;
	}
}

regions.shuffle();
console.log(regions);




