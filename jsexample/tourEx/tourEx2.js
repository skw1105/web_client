/**
 * 
 */

var list = require('./tour.js');

list.shuffle();
var region = "경상권";

var tours = list.filter(e => e.region === region);
console.log(tours.length);

for (var key in tours){
	if (key != "shuffle"){
		console.log(key + "]", tours[key].region);
	}
}