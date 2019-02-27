/**
 * 가변 매개변수 함수 arguments[] 로 접근함
 */


function sumAll(){
	var sum = 0;
	
	for (var i = 0; i < arguments.length; i++){
		sum += arguments[i];
	}
	
	return sum;
}


console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9));