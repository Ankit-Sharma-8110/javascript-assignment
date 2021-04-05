console.log("TYPE CONVERSION AND COERCION")
//1.
console.log("\'9\'-\'5\'; will result in \'4\'.");
//2.
console.log("\'19\'-\'13\'+\'17\'; will result in \'23\'.");
//3.
console.log("\'19\'-\'13\'+17; will result in \'6\'17.");
//4.
console.log("\'123\'<57; will result in same output.");
//5.
console.log("5+6+\'4\'+9-4-2; will result in 11\'4\'3.");

//CHECK RESULT
//1.
let result = '9'-'5';
console.log(result);
//2.
result = '19'-'13'+'17';
console.log(result);
//3.
result = '19'-'13'+17;
console.log(result);
//4.
result = '123'<57;
console.log(result);
//5.
result = 5+6+'4'+9-4-2;
console.log(result);