/**
 * 
 */

var student = {};
student.name = '홍길동';
student.hobby = '악기';
student.special = '프로그래밍';
student.department = '생명공학과';
student.toString = function(){
	var str = ''; // 그냥 var str; 로 선언만 하면 타입이 undefined이고 값도 undefined인 변수 str이 되는거임.
	for (var key in student){
		if (key != 'toString'){
			//str += key + '\t' + this[key] + '\n';
			str += `${key}:${this[key]}, `;
		}
	}
	return str;
};

//for (var key in student){
//	if (key != 'toString'){
//		console.log(key + '\t' + student[key]);
//	}
//}

delete student.toString;

console.log(student);
console.log(student.toString());
console.log(' ' + student);