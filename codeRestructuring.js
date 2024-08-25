//Restructure the following instances of code to work correctly:
// 1.
// for(let i = 0; i < values.length; i++){
//     console.log(values[i]);
//   }
  
//   let values = [10, 20, 30];

let values = [10, 20, 30];
for(let i = 0; i < values.length; i++){
  console.log(values[i]);
}

// 2.
// console.log(welcome('Charlie', 'Munger'));

// function welcome(first, last) {
//   return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
// };

// let lastLogin = '1/1/1970';
let lastLogin = '1/1/1970';
console.log(welcome('Charlie', 'Munger'));


function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};
