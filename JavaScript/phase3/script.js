//GEC - global context phase
/*
      - phase 1= memory allocation 
      - phase 2= code runs 

*/

//declaration 
var a
var b
var c

// initialization 
a=10
b=20
c=a+b 
console.log(c);


function add(){
    var d =a+b
    console.log(d);
    
}
add()

var user= 'jerry'
var age= 21

function greet(){
    var gender = 'male'
    console.log('hello ji');
    function sayHi(){
        console.log('im saying HI');
        
    }
    sayHi()
    return 20;

}

console.log(greet());

// var x =20
// let y= 30

// console.log(x);
// console.log(y);
// console.log(z);

// const z = 40

var user = 'Priyanshu'

function greett(){
    var age= 21
    function sayHi(){
        console.log("your age is",age);
    }
    return sayHi()
}
greett()


//lexical scope

function out(){
    var user = 'jerry'

    function inn(){
        console.log('my name is', user);
    }
    return inn
}

console.log(out());
  

// CLOSURES
function counter(){
    var count = 0
    return function (){
        count++ 
        console.log(count);
        
    }
}
var inc = counter()
inc()
inc()
inc()


///

function createBankAccount(){
    let balance=0;
    return {
        deposit(amount){balance += amount; return balance;},
        getBalance(){return balance;}
    };
}

const acc= createBankAccount();
acc.deposit(100)
console.log(acc.getBalance());
console.log(acc.balance);   // undefined b/c it's truely private 

