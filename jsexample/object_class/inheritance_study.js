/**
 * 
 */
function Rectangle(w, h) {
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

Rectangle.prototype.getArea = function() {
	return this.getWidth() * this.getHeight();
};

//var rect = new Rectangle(5, 6);
//console.log(rect.getArea());

function Square(length) {
	this.base = Rectangle;
	this.base(length, length);
//	var width = w;
//	var height = h;
//
//	this.getWidth = function() {
//		return width;
//	};
//	this.getHeight = function() {
//		return height;
//	};
//	this.setWidth = function(w) {
//		width = w;
//	};
//	this.setHeight = function(h) {
//		height = h;
//	};
}

//Square.prototype.getArea = function() {
//	return this.getWidth() * this.getHeight();
//};

Square.prototype = Rectangle.prototype;
Square.prototype.constructor = Square;

var rect = new Rectangle(5, 7);
var square = new Square(5);
console.log(rect.getArea());
console.log(square.getArea());

console.log(square instanceof Rectangle);


