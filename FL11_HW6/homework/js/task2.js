const a = parseFloat(prompt('enter 1st side value'));
const b = parseFloat(prompt('enter 2st side value'));
const c = parseFloat(prompt('enter 3st side value'));



if (a > b+c || b > a+c || c > a+b){
	console.log('Triangle doesn’t exist');
}else{
	if(a === b && b === c && c === a ){
		console.log('Eequivalent triangle');
	}else if(a === b || b === c || c === a){
		console.log('Isosceles triangle');
	}else if(a !== b && b !== c && c === a){
		console.log('Isosceles triangle');
	}else{
		console.log('Normal triangle');
	}
}