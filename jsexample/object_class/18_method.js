/**
 * 
 */

function Student(name, korean, math, english, science) {
	
	if (!(this instanceof Student)){
		// 예외 발생시키기
		// throw "new"로 호출해야 합니다
		// 변환 함수로 작동하게
		console.log(this);
		return new Student(name, korean, math, englifsh, science);
	}
	
	this.name = name;
	this.korean = korean;
	this.math = math;
	this.english = english;
	this.science = science;
	
	this.getSum = function() {
		return this.korean + this.math + this.english + this.science;
	}
	
	this.getAverage = function() {
		return this.getSum() / 4;
	}
	
	this.toString = function() {
		return `${this.name}\t${this.getSum()}\t${this.getAverage()}`;
	}
}

var student = new Student('김세진', 90, 83, 76, 89);
console.log(student);



