function reverseNumber(num) {
    let j = 0;
    let mas = 0;
    let arg=Math.abs(num);
     
    while (arg / 10 > 0){
        arg = Math.trunc(arg / 10);
        j++;
    }
     
    while(j>0){
         let tmp = num % Math.pow(10, 1);
         num = Math.trunc(num / 10);
         mas += tmp * Math.pow(10, --j);
        }
    
    return mas;
}

console.log(reverseNumber(-15660));