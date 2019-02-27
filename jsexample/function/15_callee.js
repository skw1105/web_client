/**
 * 익명함수 바로 정의하고 바로 재귀호출 하는거
 */

console.log("5! = " + function(n){
	if (n == 1){
		return 1;
	} else{
		return n * arguments.callee(n - 1);
	}
}(5));