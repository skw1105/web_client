/**
 * sort(): default는 문자열로 비교하여 오름차순으로 정렬한다.
 * 숫자로 비교하고싶으면 자바처럼 전력패턴으로 비교함수를 주면 된다. 자바에서는 Comparable Comparator 사용
 */

var score = [ 82, 96, 100, 54, 76, 92, 99, 69, 88 ];
console.log("before = " + score);

score.sort();
console.log("after = " + score);