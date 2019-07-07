const a1 = parseFloat(prompt('enter a1 value'));
const a2 = parseFloat(prompt('enter a2 value'));
const b1 = parseFloat(prompt('enter b1 value'));
const b2 = parseFloat(prompt('enter b2 value'));
const c1 = parseFloat(prompt('enter c1 value'));
const c2 = parseFloat(prompt('enter c2 value'));
const two = 2;
if (c1 === (a1 + b1) / two && c2 === (a2 + b2) / two){
    console.log(true);
}else{
    console.log(false)
}
