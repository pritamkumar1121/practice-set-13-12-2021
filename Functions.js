//Function Declaration:-

function name(parameters){
    //statements
  }

  function print_message(message) {
    console.log(message);
    }
    print_message("Hello World");
    //Output: Hello World

    //Function Expressions:-

    let variable_name = function(parameters){
        // statements
       }

       let add=function(a, b) {
        return a + b;
    }
    console.log(add(4,3));
    //Output: 7

    //Returning a value:-

    function print_message(message) {
        console.log(message);
    }
    let result = say('Hello World');
    console.log('Result:', result);
    //Output:
    //Hello World
    //Result: undefined

    