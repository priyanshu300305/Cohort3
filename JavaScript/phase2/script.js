// var a = 0
// while (a < 5) {
//     console.log(a);
//     a++

// const { use } = require("react");

// }

// var a = Number(prompt("enter any number: "));

// var b = 1
// while (b <= 10) {
//     console.log(a + ' x ' + b + ' = ' + a * b)
//     b++
// }


// var c = 5
// do {
//     console.log(c)
//     c++
// } while (c < 10)



// do {
//     var pass = prompt('enter the password')
// } while (pass != 123)

// console.log('Welcome bitch!')



// for (var d = 10; d > 0; d--) {
//     console.log('hello', d);

// }

// // var = vaalue ko baad me change kar skte hain
// //function scoped
// //value updataion happens

// // let= isme bhi change kar sakte hain
// // const= isme value ko change nhi kar skte hain // value updation not allowed
// //let and const: blocked scoped hota hai

// var age = 20
// var name = 'jerry'

// var gender = 'male'

// console.log(" hero name is ", name, " his age is, ", age, " and he is a ", gender);

// console.log(`hero's name is ${name}, his age is ${age} and he is a ${gender}`);

// console.log(name.length);
// console.log(name.toUpperCase());

// console.log(name.indexOf('y'));

// console.log(name.slice(1,3));


/* 






*/
// for (var e = 1; e<=10; e++) {
    
//     if(e%2 !=0){
//         continue;
        
//     }
//     if(e==5){
//         continue;
//     }
//     console.log(e);
    
// }

// function SayHi(){
//     console.log('hello guys, welcome');
    
// }
// SayHi()
// SayHi()
// SayHi()
// SayHi()
// SayHi()

// var f= 4.6
// console.log(Math.ceil(f));
// console.log(Math.floor(f));


// //function
// //DRY- don't repeat yourself

// function abc(){
//     console.log('hello !!!');
    
// }
// abc()

// function greet(num){
//     console.log('good evening...', num);
    
// }

// greet(12)
// greet(1)  
// greet('pk')

// function add(a,b){
//     console.log(a+b); 
// }

// add(10,20)

// function entry(user, age){
//     console.log('good morning ',user);
//     if(age>= 18){
//         console.log('welcome to the party!');
        
//     }else{
//         console.log('not allowed', user);
        
//     }
    
// }

// entry('pk',18)

// //function declaration -- hoesting possible
// function a1(a){
//     console.log('this is a function declaration',a); 
// }

// //function expression -- hoesting not possible
// var b1= function(a){
//     console.log('this is a function expression',a);
// }

// //Arrow function
// var c1 = (a)=>{
//     console.log('this is a arrow function',a);
    
// }

// var c2 =(a,b)=> console.log("hello",a,b);

// var c3= a=> console.log('hillooo',a);



// a1('pk')
// b1('jk')
// c1('bitch')

// c2('noooo', 'yesss')
// c3(10)

// // IIFE - Immidiately Invoked function expression

// // (function(){
// //     console.log('This is IIFE');
// // })();

// // (() => console.log('IIFE'))()


// function add(a,b){
//     return a+b
// }

// console.log(add(19,11));

// function hero(){
//     var a=10;
//     var b=30
//     var c= a+b
//     return c;
// }

// console.log(hero());

// function permission(gen){

//     if(gen == 'F'){
//         return "welcome to women's party";
//     }else if (gen == 'M'){
//         return "welcome to Men's party"
//     }else {
//         return "not allowed"
//     }
// }

// console.log( permission('M'));


// // pure functions 
// // impure functions 


// // pure function:- 
// function sqrt(s){
//     return s*s
    
// }

// sqrt(5)
 
// //impure function:-
// var t= 10

// function impure(){
//     t++
//     return t
// }

// console.log(impure());
// console.log(impure());
// console.log(impure());
// console.log(impure());

// function greettt(user = 'Sir', age= 20){
//     console.log('welcome', user, "your age is", age);
    
// }

// greettt('jerry',21)
// greettt(undefined, 24)
// greettt(sqrt(5))


// var sq = (q) => q*q;
// console.log(sq(20));

// //function callback

// //first-class function 
// function aa(cb){
//     console.log('hellooo');
//     cb()
    
// }
// function bb(){
// console.log('callback function');

// }

// aa(bb)


// function parent(cb){
//     console.log('i am dad');
    
//     function child(){
//     console.log('I am son');

//     }
//     return child()
// }

// parent()

/*



PART B:

ARRAYS



*/

// var arr1 = [10,20,30,40,50,60,70,'lastElement']

// console.log(arr1[0]);


// var arr2=['abc','def','ghi']

// console.log(arr2);

// var arr3= [10,10.34,'xyz', false]
// console.log(arr3);

// console.log(arr1.length);
// console.log(arr1[arr1.length-1]);

// arr2.push(99)
// arr2.push(100)
// console.log(arr2);

// arr2.pop()
// arr2.pop()
// arr2.pop()
// console.log(arr2);
// arr2.unshift(1)
// console.log(arr2);

// arr2.unshift(2)
// console.log(arr2);

// arr2.shift()
// console.log(arr2);


// var arr4= [15,45,78,90,78]

// arr4.shift()
// arr4.shift()
// arr4.unshift(99)
// arr4.pop()
// arr4.pop()
// arr4.push(89)
// arr4.unshift(67)
// arr4.push(89)
// arr4.unshift(1)   // [1,67,99,78,89,89]
// console.log(arr4[3]);


// //push-0 last me element add 
// //pop- last se element remove
// //unshift- starting me element add 
// //shift- starting se element remove


// //shift or unshift comparatively slow hai push & pop se 
// // push & pop is faster than shift & unshift


// var arr5 = [2,3,4,5,6,7,8]

// //arr.splice(startingIndex, deleteCount)
// //arr.splice(startingIndex, deleteCount,NewElemnet)
// arr5.splice(0,3)
// console.log(arr5);

// arr5.splice(0,0,33)
// console.log(arr5);


// var arr6= ['aman','bijoy',' chandu','dev', 'pk', 'jerry']

// arr6.splice(3,2,'deep', 'homelander')
// console.log(arr6[arr6.length-1]);


// var arr7= [10,20,30,40]

// arr7[10]=100
// console.log(arr7);
// console.log(arr7.length);

// var arr8= [
//     [10,20,30,40],
//     [11,21,31,41],
//     [12,22,32,42]
// ]

// console.log(arr8);
// console.log(arr8[2][2]+arr8[0][1]+arr8.length);


// console.log(arr7);
// arr7.reverse()
// console.log(arr7);

// var arr9= [2,4,6,8,3,1,0]
// arr9.sort()
// console.log(arr9);

// var arr10= [45,10,89,100,5,30,9]
// //predictated outcome= [5,9,10,30,45,89,100]

// arr10.sort()
// console.log(arr10);

// arr10.sort((a,b)=>a-b)
// console.log(arr10);
 
// arr10.sort((a,b)=>b-a)
// console.log(arr10);
 

// var arr11= [55,88,22,99,11]

// arr11.push(77)
// //[55,88,22,99,11,77]

// arr11.unshift(66)
// //[66,55,88,22,99,11,77]

// arr11.unshift(33)
// //[33,66,55,88,22,99,11,77]

// arr11.push(88)
// //[33,66,55,88,22,99,11,77,88]

// arr11.shift()
// //[66,55,88,22,99,11,77,88]

// arr11.reverse()
// //[88,77,11,99,22,88,55,66]

// arr11.sort((a,b)=> a-b)
// //[11,22,55,66,77,88,88,99]

// arr11.reverse()
// //[99,88,88,77,66,55,22,11]
// console.log(arr11[1]);



// // -------------------------------------------- 
// //                    ITERATION


// var arr12= [10,20,30,40]

// for(let a = 0; a<arr12.length; a++){
//     console.log(a);
// }

// for(a of arr12){
//     console.log(a);   
// }

// var arr13=[]
// for( let b=0; b<100;b++){
//     if(b%2==0){
//      arr13.push(b)
//     }
// }
// console.log(arr13);



// // Mutation = jo original array me changes kare


// var arr14=[90,80,70,60,50]

// var arr15 = arr14.pop()  //jo element pop out hogya woh wala store hoga isme

// console.log(arr15);

// var arr16= arr14.slice(1,3)
// console.log(arr16);

// var arr17=[11,22,33,44]
// var brr= arr14.concat(arr17)
// console.log(brr);

// var i = brr.includes(33)
// console.log(i);

// var str= ' jerry prince'
// console.log(str);

// var srr= str.split('')
// console.log(srr);

// var arr18= ['aman', 'ram','jerry', 'prince']

// var arr19= arr18.join('-')
// console.log(arr19);

// var brr1= 'aman ram jerry prince'
// var crr= brr1.split(' ')
// var drr= crr[1].split('')
// drr.reverse()
// var err= drr.join('')
// console.log(err);


// // copying a array

// var arr20=[100,200,300,400]

// var arr21=[arr20[0],arr20[1],arr20[2],arr20[3]]  // spreading an array
// var arr22=[...arr20]  //spread operator

// console.log(arr21);


// //forEach

// var arr23=[11,12,13,14,15]

// // function run(){
// //     console.log('hey');
// // }

// // arr23.forEach(function(element,index){         
// //     console.log(element,index);
// // })


// arr23.forEach(function(elem,idx){         
//     console.log(elem,idx);
// })

// arr23.forEach(function(){
//     console.log('hihi');
// })


// arr23.forEach(function(val){
//     console.log(val);
// })


// var sum=0
// arr23.forEach(function(elem){
//     sum= sum+elem
//     //sum +=elem
//     console.log(sum);
// })


// //MAP

// var arr24= [10,20,30,40]

// var arr25= arr24.map(function(elem){
//     return elem*elem
// })

// console.log(arr25);

// var users= ['ram', 'pk', 'jerry', 'prince']

// var newUsers= users.map(function(elem1){
//     return elem1+' raj'
// })
// console.log(newUsers);

// var newUsers2= users.map(function(elem2){
//     //return elem2.length
//     return elem2.substring(0,2)
// })
// console.log(newUsers2);


// //FILTER

// var arr26=[5,-9,2,-4,33,8]

// var arr27= arr26.filter(function(elem){
//     return elem>0

// })
// console.log(arr27);

// var marks = [56,22,90,51,88,93,15]
// var finalMarks= marks.filter(function(elem){
//     return elem>55
// })

// console.log(finalMarks);

// var fltr = ['aman', 'jerry', 'priyanshu', 'harsh']

// var fltr2 = fltr.filter(function(elem3){
//     return elem3.includes('a')
// })
// console.log(fltr2);


// var fltr3 = ['prince','aman', 'jerry', 'priyanshu', 'harsh']
// var fltr4 = fltr.filter(function(elem3){
   
// })
// console.log(fltr4);

// var fltr5 = ['prince','aman', 'jerry', 'priyanshu', 'harsh']
// var fltr6 = fltr5.map(function(elem3){
   
// })
// console.log(fltr6);


// var fltr7 = ['prince','aman', 'jerry', 'priyanshu', 'harsh']
// var fltr8 = fltr7.filter(function(elem4){
//    return elem4.startsWith('p')
// })
// console.log(fltr8);



// // forEach - used for iteration 
// // map     - used for transformation , length same rahega, har element add hoga
// // filter  - used for filteration , select karega, length change ho skta hai, sirf matching element hee add hoga


// //REDUCE

// var arr28 = [1600, 4000, 500, 800]

// var sum = arr28.reduce(function(acc,val){
//     return acc+val
// })
// console.log(sum);

// var max = arr28.reduce(function(acc,val){
//     if(val> acc){
//         return val
//     }
//     return acc
// })
// console.log(max);
// // max wala code ka dry run hai
// // step 1= 0,1600
// // step 2= 1600,4000
// // step3 = 4000,500
// // step4 = 4000,800


// var fruitsrr = ['apple', 'banana', 'apple', 'mango', 'banana', 'apple']

// var abc= fruitsrr.reduce((acc,val)=>{
//     acc[val] = (acc[val] || 0)+1;
//     return acc
// },{})
// console.log(abc);
   

// var arr29 = [12,99,46,76,5]

// arr29.reduce(function(acc,val){
//     console.log(val);
    
// })



// //FIND 


// var rrr = ['raja', 'deepak', 'aman', 'virat']

// // var ans = rrr.find(function(elem){
// //     return elem == 'virat'
// var ans = rrr.find(e => e=='virat')

// console.log(ans);

// var qrr = [11,20,33,50,44,80]
// var anss= qrr.findIndex(a=>a%10==0)
// console.log(anss);


/*



PART C:

OBJECTS



*/



var obj = {
    name: 'jerry',
    age: 21,
    city: 'ranchi'
}
console.log(obj);

console.log(obj.name);

//CRUD - create, reflect, update, delete

var user={
    name: 'Priyanshu',
    age:21,
    marks: 98,
    isSingle: true,
    batch: 'cohort 3.0'
}
console.log(user);

user.city= 'las vegas'
user.isSingle= false

console.log(user);

delete user.marks
console.log(user);

var phone= {
    model: 'Samsung s26',
    color: 'red',
    price: 800000
}
console.log(Object.keys(phone));
console.log(Object.entries(phone));
console.log(Object.values(phone));

// var usernamee=  prompt('enter name')
// var agee = Number(prompt('enter age'))
// var cityy= prompt('enter city')

// var objj= {usernamee, agee, cityy}
// console.log(objj);


var userr= {
    namee: 'Rohit Sharma',
    age:39,
    team: 'India',
    isMarried: true,
    skills: ['batting', 'dancing','fielding'],
    spouse:{
        name: 'Anushka',
        proffession: 'acting',
        age:35

    }
}
console.log(userr);
console.log(userr.skills);
console.log(userr.spouse);

var objjj= {
    name: 'chitthi',
    ram: '20mb',
    age: 1,
    isWorking: false,
    skills:[ 'fight', 'wlak','dance'],
    creator: {
        name:'vashi',
        age : 40,
        isIntelligent: true
    },
    sayHi:function(a){
        console.log('hello, I am Chitthi Robot.',a);
        
    }
}

console.log(objjj.sayHi());
objjj.sayHi('jerry')

var maths={
    add:(a,b)=>{
        return a+b
    },
    square:(a)=>{
        return a*a
    },
    cube:(a)=>{
        return a*a*a
    },
    mul:(a,b)=>{
        return a*b
    }  
}
console.log(maths.add(10,20));
console.log(maths.square(10));
console.log(maths.cube(20));
console.log(maths.mul(10,20));


const groom={
    name: 'Salmon',
    age: 60,
    city:'Mumbai'
}
const bride={
    name: 'kat',
    age:42
}
Object.seal(groom) // in SEAL - you can modify the value but can't delete it or add new fields

groom.name= 'vicky'

console.log(groom);

delete groom.name
console.log(groom);

Object.freeze(bride)
bride.name='kareena'
console.log(bride);

var jrr= [11,22,33,44]

var[a,b]= jrr
console.log(a);

// var yrr= ['aman','harsh','rautik','atharav','shreyansh']

// var[a,...b]=yrr
// console.log(b);

var original= {
    name:'aman',
    age:20,
    batch:'cohort 3.0',
    college:{
        name:'SBU',
        students: 100000
    },
    skills:['HTML','css','js']
}
var {name:fullname,...b}=original
console.log(fullname);
console.log(b);

var str = JSON.stringify(original)
var copy= JSON.parse(str)

console.log(copy);
