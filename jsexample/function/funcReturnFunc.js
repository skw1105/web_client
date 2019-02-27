/**
 * 
 */

function outer(){
	return function(){
		console.log("Hello world");
	};
}

outer()();

var fn = outer();
fn();