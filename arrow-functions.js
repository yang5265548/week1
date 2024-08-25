function sayHello(){
    return "Hello,world!";
}

console.log(sayHello())

const sayHelloArrow=()=>"Hello,world,arrow!";
console.log(sayHelloArrow())

function double(x){
    return x*2;
}

console.log(double(5))

const doubleArrow=x=>x*2;
console.log(doubleArrow(5))

function add(x, y) {
    return x + y;
}
console.log(add(5,6))
const addArrow=(x,y)=>x+y;

console.log(addArrow(5,6))

const person = {
    name: "Alice",
    sayHi: function() {
        return "Hi, " + this.name + "!";
    }
};

const personArrow={
    name:"Alice",
    sayHi:()=>"Hi, " + this.name + "!"
}
console.log(person.sayHi())
console.log(personArrow.sayHi())

const numbers=[1, 2, 3, 4, 5]
const doubled=[];
numbers.forEach(function(num){
    doubled.push(num*2);
});
console.log(doubled)
const doubledArrow=[]
numbers.forEach(num=>doubledArrow.push(num*2));
console.log(doubledArrow)