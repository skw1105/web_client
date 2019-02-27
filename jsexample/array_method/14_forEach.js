/**
 * 
 */

var score = [82, 96, 54, 76, 9, 100, 69, 88];
var sum = 0;

//for (var i = 0; i < score.length; i++){
//	sum += score[i];
//}

score.forEach(function (value){
	sum += value;
});

console.log("sum: " + sum);
