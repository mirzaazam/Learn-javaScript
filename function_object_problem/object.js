var object1 = {
    age: 23,
    name: 'Nohi',
    versity: 'UODA',
    phone: '01790656506'
}
console.log(object1);

console.log('\n' ,'after change the property value :');
object1.name = 'Nabil'; //change type 1
object1['phone'] = '022824828'; //change type 2
var propertyName = 'university'; //put the value in variable for change type 3
object1[propertyName] = 'Dhaka'; //change type 3
console.log(object1);

const pName = Object.keys(object1);
const pValue = Object.values(object1);
console.log(pName,pValue);