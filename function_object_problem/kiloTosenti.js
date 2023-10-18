// we know 1 kilometer = 100 sentimeter

function kiloTosenti(senti){
    const sentimeter = 100 / senti;
    return sentimeter;
}

let kilo = 10;
let getSentimeter = kiloTosenti(kilo);
console.log('kilo is: ',getSentimeter);