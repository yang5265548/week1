//1.Why does JavaScript output undefined instead of throwing an error in the following code?
//Variables declared with var are hoisted to the top of their scope and initialized with undefined
console.log(message);

var message = 'Hi there!';

//2.Why does JavaScript throw an error instead of logging undefined in the following code?
//Variables declared with let are hoisted but not initialized. 
console.log(message);

let message = 'Hi there!';

//3.Explain precisely what happens when the following code is executed.
//A ReferenceError will be reported because showMessage is referenced before initialization.
console.log(showMessage());

const showMessage = function(){
  return 'Hi there!';
};

//4.Why does JavaScript not throw any errors when the following code is executed?
//Function declarations are fully hoisted. The entire function is moved to the top of its containing scope, so it can be used before its actual declaration in the code.
console.log(showMessage());

function showMessage(){
  return 'Hi there!';
}