
function kiloTomili(kilo){
    let senti = 100 * kilo;
    let miliMeter = senti * 10;
    return miliMeter, senti;
}

var kilometer = 50;
let getMilimeter = kiloTomili(kilometer);
console.log('10 kilo =',getMilimeter,'Milimeter');