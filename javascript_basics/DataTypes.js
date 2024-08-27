// https://tc39.es/ecma262/

// Types of data Types

// 1. Primitive DataType (Stack) => String, number, boolean, null, undefined, Symbol, BigInt
// 2. Reference Type (Heap) => Array, objects, function

// All Primitive type goes to stack and you will get copy of data.
// All reference type goes to heap and you will get a refence of a memeory where data is saved.

// String

const myName = "Pushpraj Chaudhary";
const age = 32;
const boool = false;

// String interpolation, new way to add multiple string types and other types

console.log(`My name is ${myName} and my age is ${age} ${boool}` );

// 

const myGitusername = 'pushpraj';

console.log('charAt:', myGitusername.charAt(2)); // It gives charater presents on a given index
//Output: s
console.log('charCodeAt:', myGitusername.charCodeAt(1)); // It provide ASCII number of a character. Nan if desired index is not found.
//Output: 117
console.log('codePointAt:', myGitusername.codePointAt(1)); // It provide ASCII number of a character. undefined if desired index is not found.
//Output: 117
console.log('concat:', myGitusername.concat('chaudhary')); // It add two strings
//Output: pushprajchaudhary
console.log('endsWith:', myGitusername.endsWith('raj')); // It add two strings
//Output: true
console.log('includes:', myGitusername.includes('ushp')); // It check whether the given string/character is present inside the sentence/String
//Output: true
console.log('indexOf:', myGitusername.indexOf('p')); // It provides first index of a given character
//Output: 0
console.log('lastIndexOf:', myGitusername.lastIndexOf('p')); // It provides last index of a given character 
//Output: 4
console.log('length:', myGitusername.length); // It provide the length of a string 
//Output: 8
console.log('substring:', myGitusername.substring(1, 5)); // it provides sub string from a given string 
//Output: pushp
console.log('slice:', myGitusername.slice(-7, 3)); // It slice the srting into desired range it also accepts negative number but fir -ves it starts from end
//Output: us

console.log(myGitusername);
/* Output: String {'pushprajchaudhary'}
0: "p"
1: "u"
2: "s"
3: "h"
4: "p"
5: "r"
6: "a"
7: "j"
8: "c"
9: "h"
10: "a"
11: "u"
12: "d"
13: "h"
14: "a"
15: "r"
16: "y"
*/
