

let arr = new Array();
let arr = [];
//Accessing array elements:-
//Arrays are zero-indexed. The first element of an array is store at 0 indexes and the second element store at index 1 and so on. If we use an invalid index number it returns undefined.

let arr = ['first element', 'second element', 'last element']
console.log(arr[0]) // output ' first element'
console.log(arr[1]) //  output ' second element'
console.log(arr[arr.length - 1]) //  output ' last element'

 
//Following are some arrays method:

//Length of an Array:- The property length sets or returns the number of elements in an array.
let age = [33,55,67,18]
console.log(age.length)

//indexOf():- This method Search the array for an element and returns its position
let std = ["Mark", "John", "Jonas", "Jack"];
let a = std.indexOf("John");

 //sort(): This method is used to sort the elements of an array
let age = [33,55,67,18]
let s_age= age.sort(age)
//18,33,55,67

//reverse(): This method is used to reverses the element of an array. The first array element becomes the last and the last becomes the first.
let age = [33,55,67,18]
let r_age= age.reverse(age)
//18,67,55,33

//concat(): This method will returns a new array comprised of this array joined with an other array or value
let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric); // a,b,c,1,2,3

//Here are some methods which are used to modify an array. Remember that, when we modify an array, we are modifying the original array.

 //push(): This method is used to add an item to the end of an Array
let fruits = ["Banana", "Orange", "Apple"];
let len = fruits.push('Mango')
// ["Apple", "Banana", "Orange", "Mango"]

//pop():- This method is used to remove an item from the end of an Array
let last = fruits.pop() // remove Mango (from the end)
["Apple", "Banana", "Orange"]

 //shift():- This method is used to remove an item from the beginning of an Array
let first = fruits.shift() // remove Apple from the front
 ["Banana", "Orange"]
