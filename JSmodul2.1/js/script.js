
//ДЗ 1-2


var x = prompt ('ввести значение');
var n = prompt('ввести степень');


function pow (x,n){
    var result=x;
    for  (var i=1; i<n; i++){
        result*=x;
    }
    return result;

}

alert (pow(x,n));








