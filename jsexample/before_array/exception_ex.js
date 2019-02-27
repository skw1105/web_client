/**
 * 
 */

console.log("실행을 시작합니다.");
try {
	console.log(value);
} catch (exception) {
	console.log("예외가 발생했습니다.");
}
console.log("실행을 완료하였습니다.");
console.log("\n\n");

// 라이브러리 내부
function func() {
	if (true)
		throw "예외가 발생했습니다";
}
// 라이브러리 사용
try {
	func();
} catch (exception) {
	console.log(exception);
}
console.log("실행을 완료하였습니다.");