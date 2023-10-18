function add(num1, num2) {
    var sum = num1 + num2;
    console.log('The sum is:',sum);
    return sum;
}
var total = add(12,40);

//avarage make
function avg( a, b, c, d){
    const sum = a+b+c+d;
    const avg = sum / 4;
    console.log('Avarage is :',avg);
    return avg;
}
let value1 = 10;
let value2 = 60;
let value3 = 40;
let value4 = 30;
const avg_fun = avg(value1,value2,value3,value4);


//function  problem
function foo(){
    console.log('foo');
    bar();
}
foo();

function bar(){
    console.log('bar');
}
bar();