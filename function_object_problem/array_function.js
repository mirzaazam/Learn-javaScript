function make_avg(){
    var sum = 0;
    const arry = [10, 20, 30, 40, 50];
    console.log('The size of array: ',arry.length);
    for(let i = 0; i < arry.length; i++ ){
         sum += arry[i]; //using short hand
    }
    console.log('the sum is : ',sum);
    const avg = sum / arry.length;
    console.log('the avarage is : ', avg); 
}
make_avg();