/**
 * 
 */

var cap = new Object(); // var cap = {};
cap["한국"] = "서울";
cap["미국"] = "워싱턴";
cap["일본"] = "독교";
cap["영국"] = "런던";
cap["프랑스"] = "파리";
console.log("영국의 수도는 " + cap["영국"] + "입니다.");

var keys = Object.keys(cap);
console.log(keys);

var set = {};
set["한국"] = 1;
set["미국"] = 1;
set["일본"] = 1;
set["영국"] = 1;
set["프랑스"] = 1;

keys = Object.keys(set);
console.log(keys);