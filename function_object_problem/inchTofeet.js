function inchesTofeet(inch){
    const feet = inch / 12;
    return feet;
}

const footballPlayer = 140;
const fbPfeet = inchesTofeet(footballPlayer);
var value_2 = fbPfeet.toFixed(2);
value_2 = parseFloat(value_2);
console.log('Football player feet is: ',value_2);
