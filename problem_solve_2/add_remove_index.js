var furits = ['Apple', 'Bananna', 'Orange'];
console.log(furits);
var index = furits.indexOf("Bananna");
console.log('Index of bananna =',index);
furits.pop();
furits.push('watermelon');
console.log(furits);
furits.splice(index, 1, "Mango");
console.log(furits);