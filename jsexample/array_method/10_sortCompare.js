/**
 * 
 */

var score = [ 82, 96, "70", 54, 76, 92, 99, 69, 88 ];
console.log("before = " + score);

function compare(left, right) {
	return right - left;//내림차순
}

score.sort(compare);
score.sort((left, right) => { return left - right }); // 람다식으로 표현
console.log("after = " + score);