// Reference vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting the original value
const number1 = 1;
let number2 = number1;
number2 = 7;
console.log(`the first value is ${number1}`);
console.log(`the second value is ${number2}`);

// when assigning non-primitive data type value to a variable is done by reference, any changes will affect all the references. 
let person = {name:'bob'};
let person2 = person;
person2.name = 'susy';
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the first person is ${person2.name}`);


let person0 = {name:'jill'};
let person3 ={ ...person} ; // { ...person} request the value as opposed to the reffrence to avoid changing the reffrence.
person3.name = 'jack';
console.log(`the name of the first person is ${person0.name}`);
console.log(`the name of the first person is ${person3.name}`);