/**
 * 닫아놓고 쓴다는 뜻에서 클로저
 * 내부함수를 통해서 접근하고 있다.
 * 객체의 private멤버처럼
 */

function test(name) {
	var output = 'Hello ' + name + '...!';
	return function() {
		console.log(output)
	}
}

//test('Javascript')();

var f1 = test('Javascript');
var f2 = test('World');

f1();
f2();
