/**
 * 
 */

function outcount(name, interval) {
	var count = 0; // 클로저 변수
	
	setInterval(function() { // 이런 함수를 콜백함수라고 한다.
		//count++;
		count += interval / 1000;
		console.log(name, count + "초 지났습니다.");
	}, interval);
}

outcount("test1", 1000);
outcount("test2", 2000);