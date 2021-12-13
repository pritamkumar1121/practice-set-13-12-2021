//The for… in Loop:-

for(variable in object) {
    // Code to be executed
   }

   // An object with some properties 
var person = {name: "Harry", language: "JavaScript", age: 20};

// Loop through all the properties in the object
for(var i in person) {  
console.log( i + " = " + person[i]); 
}

//The forEach Loop:-

const  alpha = ['a', 'b', 'c'];
for (let i = 0; i < alpha.length; i++) {
console.log(alpha[i]);
}

//while loop:-

while (expression) {
    // body of loop
  }

  let i = 1, n = 100;
while (i <= n) {
    console.log(i);
    i += 1;
}

//do...while loop:-

do {
    // body of loop
} while(condition)

let i = 1;
let n =100;
do {
    console.log(i);
    i++;
} while(i <= n);

//Breaking a Loop:-

for (let i = 0; i < 100; i++) {
    console.log(i);
       if (i == 90) {
           break;
       }
   }

 //  Skipping an Iteration:-

 let i = 10;
for (let x = 1; x <=i; x++) {
    if (x == 5) {
        continue;
    }}