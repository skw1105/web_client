/**
 * 
 */

function launch(){
	console.log("발사!");
}

function fire(){
	console.log("펑!");
}

function countdown(counter, fn){
	//counter /= 1000;
	console.log(counter + "초..");
	
	var timerId = setInterval(function(){
		counter--;
		console.log(counter + "초..");
		if (counter == 0){
			clearInterval(timerId);
			fn();
		}
	}, 1000);
	
}

countdown(4, launch);
countdown(8, fire);