// write avarage mark of some subjects

var math = 75.25;
console.log('Mark of Math =',math);
var biology = 65;
console.log('Mark of Biology =',biology);
var chemistry = 80;
console.log('Mark of Chemistry =',chemistry);
var physics = 35.45;
console.log('Mark of Physics =',physics);
var bangla = 99.50;
console.log('Mark of Bangla =',bangla);
console.log('\n');

//avarage method
var sum = (math + biology + chemistry + physics + bangla);
var avarage = (sum / 5);
avarage = avarage.toFixed(2);
avarage = parseFloat(avarage);
console.log('The avarage is =',avarage);

