//Declear a variable
var mango = 90;

//types of variable! How can you find out type of a variable
/**
 1. Number type 
 2. String type
 3. Boolean type
 */
var Book = 250;
var AreYouYHappy = true;
var Name = 'Mirza'
console.log(typeof(Book));
console.log(typeof(AreYouYHappy));
console.log(typeof(Name));


//Nameing conversion of js variable
/*
1. Name
2. NameNohi
3. hello90
4. hi_hello
5. bad$
*/ 

//-------math operation---------//
var a = 10;
var b = 10;
var sum = a + b;
var sub = a - b;
var multiply = a * b;
var divide = a / b;
var reminder = a % b;
console.log('sum is =',sum);
console.log('Sub is =',sub);
console.log('Multiply is =',multiply);
console.log('Divide is =',divide);
console.log('Reminder is =',reminder);
console.log('\n')
//-------end operation------------//

//-------short hand----------//
 var ab = 10;
 ab += 10;
 console.log(ab);
 var aab = 10;
 aab -= 5;
 console.log(aab);
 var abb = 10;
 abb *= 5;
 console.log(abb);
 var abc = 10;
 abc /= 2;
 console.log(abc,'\n');
//..........end shorthand.......//

//start..... ++ & -- .....//
 var dn = 63;
 dn++;
 console.log('this will be 63 from 64 =',dn);
 var dc = 63;
 dc--;
 console.log('this will be 63 from 62 =',dc);
 //..........end this topic............//

 //----- parseInt and ParseFloat ------//
 var int = 20;
 var out = parseFloat(int);
 console.log(out);

 var float = 20.34;
 var out2 = parseInt(float);
///--------end-------///

var FixedNumber = 24;
var SeconFixedNumber = 20.00000000000;
var addition = FixedNumber + SeconFixedNumber;
var FixedValue = addition.toFixed(2); // er madhome ami dosomic er porer duita sonkha chai jno baki gula na dekhai.
console.log('Dosomic er porer two value thakbe = ',FixedValue);



 