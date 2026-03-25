//your JS code here. If required.
const year = Number(prompt("please enter a year"));
dayOfAYear(year) ;

function  dayOfAYear(year) {
	if(year%4==0 && year%100==0){
		console.log("366")
	}
	else if(year%40==0 ){
		console.log("366")
	}
	else {
		console.log("365")
	}
}