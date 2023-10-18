function isEven(check){
    if ( check % 2 == 0){
        console.log('this number is even.');
    }
    else{
        console.log('this is odd.');
    }
}

let value = 40;
let checkValue = isEven(value);


function isOdd(valueChek){
  if (valueChek % 2 ==! 0 ){
    console.log('this number is Odd.'); //ata string er jonno
    return false; // ata flase or true pawwar jonno 
  }  
  else{
    console.log('this number is even.');
    return true;
  }
}
let value1 = isOdd(199);
console.log(value1);
let value2 = isOdd(20);
console.log(value2);
