console.log('hello ji'); 
console.warn('This is a warning message');
console.error('This is an error message, hello');

var a=10;
var b=7;
console.log('sum of a & b is', a+b);
console.log('remainder of a & b is', a%b);

//- premitvie
/*
   - Number
   - String
   - Boolean
   - Undefined
   - Null
   -BigInt
   -Symbol( unique values)

*/

// - Non-Premitive
/*
   - Object
   - Array
   - Function
   
*/

var c= 10n;

console.log(typeof(c));

var s1= Symbol ('hi');
var s2= Symbol ('hi');

console.log(s1==s2);

//alert
//confirm
//prompt

alert('This is an alert message');
var ans= confirm('Are you 18+?');

console.log(ans);

var user= prompt('enter your name');
console.log(user);

// + : addition, concatenation 


console.table([10,20,30]);

console.log(a+b);

// Type coercion 
// -implicit
// -explicit

var a1 = '10'
var b1 = '20'

var a2 = Number(a1)
var b2 = Number(b1)

console.log(a2 + b2)
console.log(typeof(a2,b2))

// ye bhi kar skte hain... ye ek line me kar skte

var a3 = Number('10')
var b3 = Number('20')

console.log(a3+b3)

/* -binary operator 
   -assignment operator
   -comparison operator
   -logical operator
   -arithmetic operator
   -increment and decrement opeartor

*/


//conditionals 
/* 
if(conditions){
agar condition true hai toh kya karna hai ?

}
*/

if(10 == 1001){
   console.log('done');
}else{
   console.log("dead");
}


var x = 10
var y ='10'
if(x == y){
   console.log('love js');
}else{
   console.log("hate js");
}

if(x === y){
   console.log('love js');
}else{
   console.log("hate js");
}


var maths= Number(prompt('enter maths marks'))
var chem= Number(prompt('enter chem marks'))
var phy= Number(prompt('enter phy marks'))

var avg = (maths + chem+ phy )/3 
console.log('yor average marks is ', avg);
// if(avg >=85){
//    console.log('scholarship granted');

// }else{
//    console.log("not granted");
// }

if(avg >=85){
   console.log('scholarship granted');

}else if( avg >=75 & avg < 85){
   console.log(" pending");
}else if( avg>65){
   console.log('still pending');
}else if(avg>50){
console.log('koi fayda nahia hai');
}else if(avg>45){
   console.log('bhul jao scholarship');
   
}else{
   console.log('chla ja yaha se');
   
}


// logical operator


var gender = prompt('enter your gender (M/F) :')

var age = Number(prompt('enter your age :'))

if(gender == 'F'){
   if(age>= 18 && age<=60){
      console.log("you will gett 1500😍");
      
   }else{
      console.log("chala ja yaha se");
      
   }
}else{
   console.log('dihadi pe jao');
   
}

//ternary operator

console.log(10>5?'hello':'bye');


//Switch statement
var marks= 90

switch (marks){
   case (marks> 80):
      console.log('good marks');
      break;
   case (marks> 70):
      console.log('ok ok marks');
      break;
   case (marks> 60):
      console.log('not so well');
      break;

default: console.log('fail hogya');
     
}
