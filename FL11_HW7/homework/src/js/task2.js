let landball;
let price = 0;
let zero = 0;
let hundred = 100;
let fifty = 50;
let twenty_five = 25;
let eight = 8;
let ok;
let counter = 0;
let four = 4;
let three = 3;
let upgrowth;
let rand;
let Obj = [hundred, fifty, twenty_five];

if (!confirm('Do you want to play a game?')){
    alert('You did not become a billionaire, but can.');
}else{
    do {
        upgrowth = counter * four + eight;
        rand = Math.floor(Math.random() * upgrowth) + zero;
        for (let i = 0; i < three; i++) {
            landball = parseInt(prompt('Choose a roulette number from ' + zero + ' to ' + upgrowth + '\n'
                + 'Attempts left:' + (three - i) + '\n' +
                'Total prize:' + price + '$' + '\n' +
                'Possible prize on current attempt :' + Obj[i] * (counter + 1) +'$'+'\n'));
            if (rand === landball) {
                price += Obj[i] * (counter + 1);
                ok = confirm('Congratulation, you won! Your prize is:' + price + '$.' + 'Do you want to continue?');
                break;
            }
        }   
		if(rand !== landball){
			ok= confirm('Thank you for your participation. Your prize is:' + price + '$.' + 'Do you want to continue?');
		}
        if(!ok){
                alert('Thank you for your participation. Your prize is:' + price + '$');
            }
            counter++;
        }
    while (ok);
}