
function findOddSum(array){
    console.log(array);
    let sum = 0;
    for(let i = 0; i < array.length; i++ ){
        sum = sum + array[i];
        let index = i;
        let element = array[i];
        console.log(index,element,sum);
    }
    console.log('Total sum is: ',sum);
    return sum;
}
const arr = [10, 20, 49, 34, 42, 33, 77, 98];
findOddSum(arr);
