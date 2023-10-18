// array delear
var arr = [10, 20, 30, 40, 50];
console.log(arr); 

//add an item in array
arr.push(11);
arr.push(110);

//remove an item in array
arr.pop();

//add item in font of array
arr.unshift(200);
//remove item in font of array
arr.shift();
//change element 3 number index of array  
arr[2] = 100;
console.log(arr);

//find the item position from array using items
var GetItem = arr.indexOf(40);
console.log('position of 40 in array = ',GetItem);



