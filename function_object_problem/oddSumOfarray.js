// function oddSum(number){
//     let sum = 0;
//     for(let i = 1; i <= number; i+=2 ){
//       let odd = i;
//       sum += odd;
//       console.log(odd,sum);
//     }
//     console.log('Total odd sum is: ',sum);
//     return sum;
// }
// const sumOdd = oddSum(20);


function oddSumOfarray(num1) {
    let newArray = [];
    let sum = 0;
    for (let i = 0; i < num1.length; i++) {
        let index = i;
        let element = num1[index];
        if (num1[i] % 2 !== 0) {
            sum += num1[index];
            newArray.push(element);
        }
        console.log(index, element, sum);
    }
    console.log('Total odd sum is: ', sum);
    // console.log(newArray);
    return newArray;
}
let array = [10, 13, 15, 48, 39, 21, 30, 41];
const oddSum = oddSumOfarray(array);
console.log(oddSum);
