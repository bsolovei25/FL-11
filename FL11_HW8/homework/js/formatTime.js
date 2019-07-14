function formatTime(xa) {
    let str;
    if(typeof xa === 'number'){
        let min = 0;
        let hour = 0;
        let day = 0;
            if(xa < 60){
                min = xa;
                hour = 0;
                day = 0;
            }else if (60 <= xa && xa < 1440) {
                min = xa % 60;
                hour = Math.trunc(xa / 60);
                day = 0;
            }else if (xa >= 1440) {
                min = xa % 60;
                hour = Math.trunc(xa / 60);
                while (hour >= 24){
                    day++;
                    hour = hour - 24;
                }
            }
        str = day + ' day(s) ' + hour + ' hour(s) ' + min + ' minute(s)';   
    }
    return str;
}

console.log(formatTime(7275));
