var pad = require("./padArray");

console.log(JSON.stringify(pad.pad([1,2,3], 5)) === JSON.stringify([1,2,3,null,null]));
console.log(JSON.stringify(pad.pad([1,2,3], 5, 'apple')) === JSON.stringify([1,2,3,'apple','apple']));
console.log(JSON.stringify(pad.pad([1,2,3], 3)) === JSON.stringify([1,2,3]));
console.log(JSON.stringify(pad.pad([1,2,3], 0)) === JSON.stringify([1,2,3]));