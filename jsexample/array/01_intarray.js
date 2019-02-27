/**
 * 
 */

var ar = [ 1, 2, 5, 9, 15 ];
// var ar = new Array(1, 2, 5, 9, 15);
for (var i = 0; i < ar.length; i++) {
	console.log("ar[" + i + "] =" + ar[i]);
}

ar.length = 4;
for (var i = 0; i < ar.length; i++) {
	console.log("ar[" + i + "] =" + ar[i]);
}

ar.length = 10;
for (var i = 0; i < ar.length; i++) {
	console.log("ar[" + i + "] =" + ar[i]);
}

ar[20] = 0;
for (var i = 0; i < ar.length; i++) {
	console.log("ar[" + i + "] =" + ar[i]);
}

console.log();

for (var num in ar){
	console.log("ar[" + num + "] =" + ar[num]);
}