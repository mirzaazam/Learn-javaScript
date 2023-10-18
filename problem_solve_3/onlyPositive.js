function onlyPositive(array){
    let newArr = [];
    for (let i = 0; i < array.length; i++ ){
        if ( array[i] > 0){
            newArr.push(array[i]);
        }
        else{
            break;
        }
    }
    return newArr;
}

const arr = [12, 23, 53, 56, -23, 12, 35, 64];
const result = onlyPositive(arr);
console.log(result);