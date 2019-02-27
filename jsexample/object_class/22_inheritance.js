/**
 * 
 */

function Rectangle(w, h) {

	var width = w; // 스코프를 활용, 클로저 변수 활용, private멤버로 선언하는 기법
	var height = h; // 외부에서는 볼 수 없고 내부함수에서만 볼 수 있음 -> private멤버

	// 내부함수
	this.getWidth = function() {
		return width; // width가 객체의 어트리뷰트가 아니라 그냥 지역변수이므로 this.width 말고 width를
		// 리턴한다.
	};

	this.getHeight = function() {
		return height;
	};

	this.getWidth = function(w) {
		width = w;
	};

	this.getHeight = function(h) {
		height = h;
	};
}

// 스코프에 있는 클로저 변수를 private멤버처럼
// function Rectangle(width, height) {
// this.getWidth = function() {
// return width;
// };
//
// this.getHeight = function() {
// return height;
// };
//
// this.getWidth = function(w) {
// width = w;
// };
//
// this.getHeight = function(h) {
// height = h;
// };
// }

function Square(length) {
	var width = w;
	var height = h;
	this.getWidth = function() {
		return width;
	};
	this.getHeight = function() {
		return height;
	};
	this.setWidth = function(w) {
		width = w;
	};
	this.setHeight = function(h) {
		height = h;
	};
}
Square.prototype.getArea = function() {
	return this.getWidth() * this.getHeight();
};

Rectangle.prototype.getArea = function() {
	return this.getWidth() * this.getHeight();
};

var rectangle = new Rectangle(5, 7);
console.log('AREA: ' + rectangle.getArea());

function Square(length) {
	this.base = Rectangle; // 부모 클래스 생성자 함수
	this.base(length, length); // 부모 클래스의 생성자 함수 호출
	// new 없이 호출했으므로 this가 Sqaure의 인스턴스가 됨
}

Square.prototype = Rectangle.prototype;
Square.prototype.constructor = Square;
var rectangle = new Rectangle(5, 7);
var square = new Square(5);
console.log(rectangle.getArea() + ' : ' + square.getArea());
console.log(square instanceof Rectangle);
