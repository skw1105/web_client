/**
 * 실제로는 참조가 넘어간다.
 */

function byValue(a){
	a = 9999;
}

function byRef(a){
	a[0] = 9999;
}

var int = 1000;
var ar = [1000, 2000, 3000];

byValue(int);
console.log("int = " + int + ", ar[0] = " + ar[0]);

byRef(ar);
console.log("int = " + int + ", ar[0] = " + ar[0]);