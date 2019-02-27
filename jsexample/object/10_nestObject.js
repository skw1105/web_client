/**
 * 
 */

var human = {
	name: "김상형",
	age: 29,
	address: {
		city: "하남시",
		dong: "덕풍동",
		bunji: 638
	},
	
	print: function(){
		console.log("이름: " + this.name + ", 나이: " + this.age);

		console.log("주소: " + this.address.city + " "
				+ this.address.dong + " "
				+ this.address.bunji);
	}
};

//human.print();

//print = human.print; // 에러
var print = human.print.bind(human);
print();