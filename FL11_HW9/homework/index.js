function getNumbers(arr) {
    let a = new Array();
    let j = 0;
    for (let i = 0; i < arr.length;i++){
        if (arr[i].search(/^(\D)/)){
            a[j++] = parseInt(arr[i]);
        }
    }
    return a;
}

function findTypes(){
   
    let arr = new Object();
    let types = [];
    for(let i = 0;i < arguments.length;i++){     
        let str = typeof arguments[i];
        let counter = 0;
        let ok = true;
        for(let r = 0;r < types.length;r++){
            if(types[r] === str){
                ok = false;
            }
        }
        if (ok) {
            types.push(str);
            for (let j = 0; j < arguments.length; j++) {
                if (str === typeof arguments[j]) {
                    counter++;
                }
            }
            arr['"' + str + '"'] = counter;
        }
    }
    return arr;
}


function executeforEach(mas,func){
    for (let i = 0; i < arguments[0].length; i++) {
        func(mas[i]);
    }
}

function mapArray(mas, func) {
    let array = [];
    executeforEach(mas, function (el) {
        array.push(func(el))
    })
    return array;
}

function filterArray(mas, func) {
    let array = [];
    executeforEach(mas, function (el) {
        if (func(el)){
            array.push(el)
        }
        
    })
    return array;
}

function showFormattedDate(date){
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return 'Date: ' + date.getDate() + ' ' + months[date.getMonth() - 1] + ' ' + date.getFullYear();
}

function canConvertToDate(date) {
    let str = date.toString();
    let first = str.split('T');
    let arr = first[0].split('-');
    let ymd = ['year', 'month', 'day'];
 
    const four = 4;
    const two = 2;
    const hundred = 100;
    const fourhundred = 400;
    const twelwe = 12;
   
    let days = {
        'Jan': 31, 'Feb': 28, 'Mar': 31, 'Apr': 30, 'May': 31,
        'Jun': 30, 'Jul': 31, 'Aug': 31, 'Sep': 30, 'Oct': 31, 'Nov': 30, 'Dec': 31
    };
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let ok = false;
    if (arr.length === ymd.length) {
        let year = arr[ymd.indexOf('year')].length === four && arr[ymd.indexOf('year')].search(/^(\D)/);
        let month = arr[ymd.indexOf('month')].length === two && arr[ymd.indexOf('month')].search(/^(\D)/);
        let day = arr[ymd.indexOf('day')].length === two && arr[ymd.indexOf('day')].search(/^(\D)/);
        if (year && month && day) {
            if (arr[0] % four === 0 && arr[0] % hundred !== 0 || arr[0] % fourhundred === 0) {               
                days['Feb'] = 29;
            }          
            if (1 <= arr[ymd.indexOf('year')]){
              if (1 <= arr[ymd.indexOf('month')] && arr[ymd.indexOf('month')] <= twelwe) {                    
               if (1<=arr[ymd.indexOf('day')] && arr[ymd.indexOf('day')]<=days[months[arr[ymd.indexOf('month')] - 1]]) {
                  ok = true;
               }
              }
            } 
        } 
    }
    return ok;
  }

function daysBetween(date1, date2) {
    let hun = 1000;
    let ts = 3600;
    let wf = 24;
    let daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (hun * ts * wf));
    return daysLag;
}

function getAmountOfAdultPeople(data){
    let array = [];
    let counter = 0;
    let year = 365;
    let age = 18;
    for (let i = 0; i < data.length;i++) {
        for (let j = 0; j < Object.values(data[i]).length; j++) {
            array.push(Object.values(data[i])[j]);
            if (canConvertToDate(Object.values(data[i])[j])) {
             
                let dat = new Date(Date.now());
                let agedata = new Date(Object.values(data[i])[j]);
                if (dat >= agedata) {
                    if (daysBetween(agedata, dat) / year >= age) {
                        counter++;
                    }
                }
            }       
        }
        
        
    }
    console.log(counter);
    return counter;
}

function keys(Obj){

    let array = [];
  
    for (let key in Obj) {
        if (Obj.hasOwnProperty(key)) {
            array.push(key);
        }
    }
    return array;
}

function values(obj) {
    let array = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            array.push(obj[key]);
        }
    }
    return array;
}
