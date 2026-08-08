console.log('this is JS phase 4');

console.log(this);


//syntax Erorr
//reference Erorr
//type Error

const a = 20

console.log(a);
// console.log(b);


//  'use strict'

var obj = {
    firstName: 'Jerry',
    lastName: ' Prince',
    age: 21,
    getInfo: function () {
        console.log(this);
    }

}

var objj = {
    firstName: 'Jerry',
    lastName: ' Prince',
    age: 21,
    getInfo: function () {
        console.log(this.firstName);
    }

}

obj.getInfo()
objj.getInfo()


var objjj = {
    firstName: 'Jerry',
    lastName: ' Prince',
    age: 21,
    getInfo: () => {
        console.log(this.firstName);
    }

}

objjj.getInfo()

var btn = document.querySelector('button')

btn.addEventListener('click', function () {

    console.log(this);
    console.log(this.tagName);
})


//  var oobjj= {
//     firstName: 'Jerry',
//     lastName: ' Prince',
//     age:21,
//     getCompany:function(){
//         const companyName={
//             name:'Sheriyans',
//             isGood: true,
//             greet:function(){
//                 console.log(this.name);
//             }
//         }
//         companyName.greet()
//     }


// }
// oobjj.getCompany()



// with arrow function
var oobbjj = {
    name: 'Jerry',
    age: 21,
    getCompany: function () {
        const companyName = {
            name: 'Sheryians',
            isGood: true,
            greet: () => {
                console.log(this.name);
            }
        }
        companyName.greet()
    }
}
oobbjj.getCompany()


var student1 = {
    firstName: 'Priyanshu',
    lastName: ' Kumar',
    getIntro: function () {
        console.log("I'm " + this.firstName + "" + this.lastName);
    }
}

var student2 = {
    firstName: "jerry",
    lastName: " prince",
}

student1.getIntro()
student1.getIntro.call(student2)


var student3 = {
    firstName: 'Chandan',
    lastName: 'Kumar',
    maths: 80,
    computer: 77,
    english: 76

}

var student4 = {
    firstName: "Harsh",
    lastName: "Kumar",
    maths: 55,
    computer: 67,
    english: 76
}

var student5 = {
    firstName: "aman",
    lastName: "kumar",
    maths: 80,
    computer: 87,
    english: 79
}

var getResult = function () {
    console.log(`${this.firstName} ${this.lastName}, you got ${(this.maths + this.computer + this.english) / 3}% marks `);

}


getResult.call()
getResult.call(student5)


var student6 = {
    firstName: 'Priyanshu',
    lastName: ' Kumar',
    getIntroo: function (city, state) {
        console.log(`I'm ${this.firstName} ${this.lastName}, ${city} ${state}`);
    }
}

var student7 = {
    firstName: "jerry",
    lastName: " prince",
}

var student8 = {
    firstName: "Shazib",
    lastName: " Anwer",
}

student6.getIntroo.call(student7, 'Ranchi', 'jh')

student6.getIntroo.apply(student7, ['Ranchi', 'jh'])  //passes ARRAY

var out = student6.getIntroo.bind(student8, 'Ranchi', 'jh')
out()
/* inshort
student6.getIntroo.bind(student8, 'Ranchi','jh')()
*/

//PROTOTYPES

var arr = [10, 20, 30, 40]

console.log(arr);

var obj = {
    name: "jerry",
    age: 21
}

console.log(obj);

console.log(arr.__proto__.__proto__);
console.log(Function.prototype);


var college = {
    title: 'college',
    name: 'SBU',
    Rating: "C+",
    students: 4000,
    saySlogan: function () {
        console.log("we destroy future of students");
    },
    hasClubs: true

}

var branch = {
    title: 'branch',
    name: 'CSE',
    Rating: "D+",
    students: 400,
    subjects: ['TOC', 'SD', "CD"]
}

var user = {
    name: 'Aman',
    age: 20,
    marks: 80
}

console.log(user.__proto__);

user.__proto__ = branch
branch.__proto__ = college

console.log(user);
console.log(user.saySlogan());
console.log(user.subjects);
console.log(user.hasClubs);

console.log(Object.prototype);
console.log(Array.prototype);
console.log(Function.prototype);



let place = {
    placeName: 'Office',
    behavior: 'proffesional',
    // sayHello: function(){
    //     console.log(this);
    // }
    sayHello: function () {
        const insidePlace = {
            placeName: 'Meeting Room',
            behavior: 'Roasting',
            sayHi: () => {
                console.log(this);
            }
        }
        insidePlace.sayHi()
    }
}

place.sayHello()



//          OOPS

function createBook(bookName, authorName, pages) {
    this.bookName = bookName
    this.authorName = authorName
    this.pages = pages
    this.getfrontPage = function () {
        console.log('Book Name: ', this.bookName);
        console.log('Author Name: ', this.authorName);
        console.log('Pages: ', this.pages);
    }
}

let book1 = new createBook('Hp- Prisonerof azkaban', 'J.K Rowling', 776);
let book2 = new createBook('Rich Dad Poor Dad', 'Robert Kiyosaki', 446);
let book3 = new createBook('Sapiens', 'Yuvan Noah Harrari', 850);

book1.getfrontPage()


// ES6 se pahele class banane ka tarika 
// it works on prototype inheritence

/*




function MakeStudents(fname, lname, contact, isVerified) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    this.isVerified = isVerified;
    this.showProfile = function () {
        if (this.isVerified) {
            console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
        } else {
            console.log('User Not Found');
        }
    }
}
let s1 = new MakeStudents('Priyanshu', 'kumar', 843459, true)
let s2 = new MakeStudents('Aman', 'kumar', 705040, true)
let s3 = new MakeStudents('Harsh', 'kumar', 985248, false)
let s4 = new MakeStudents('Rautik', 'kumar', 985201, true)

s1.showProfile()
s3.showProfile()

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);


*/
// NOW ON 
// it works on classical inheritence

// class MakeStudents {
//     constructor(fname, lname, contact, isVerified) {
//         this.fname = fname;
//         this.lname = lname;
//         this.contact = contact;
//         this.isVerified = isVerified;
//         this.showProfile = function () {
//             if (this.isVerified) {
//                 console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
//             } else {
//                 console.log('User Not Found');
//             }
//         }
//     }

// }

// let s1 = new MakeStudents('Harsh', 'kumar', 985248, false)
// let s2 = new MakeStudents('Priyanshu', 'kumar', 843459, true)
// let s3 = new MakeStudents('Aman', 'kumar', 705040, true)
// s1.showProfile()
// s2.showProfile()
// s3.showProfile()

// console.log(s2);


// ----------------------

   function MakeStudent(fname, lname, contact, isVerified) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
        this.isVerified = isVerified;
    }

let showProfile = function () {
    if (this.isVerified) {
        console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
    } else {
        console.log('User Not Found');
    }
}

MakeStudent.prototype.showProfile = showProfile

let s1 = new MakeStudent('Harsh', 'kumar', 985248, false)
let s2 = new MakeStudent('Priyanshu', 'kumar', 843459, true)
let s3 = new MakeStudent('Aman', 'kumar', 705040, true)
s1.showProfile()
s2.showProfile()


let dada = {
    fName: "Bhola",
    lName: "Prasad",
    land: "100 acre"
}
let papa = {
    fName: "Niranjan",
    lName: "kumar",
    shop: "Electronics shop"
}

let beta={
    fName: "Priyanshu",
    lName:"kumar",
}

beta.__proto__=papa
papa.__proto__=dada

console.log(beta.shop);
console.log(beta.land);



class User{
    constructor(fname, lname,contact){
        this.fname= fname
        this.lname=lname
        this.contact=contact
    }
    greetUser(){
        console.log(`Welcome User, ${this.fname} ${this.lname}`);
    }
}
class Admin extends User{
    constructor(fname, lname,contact){
        super(fname, lname,contact)
        this.accessAdminPanel= true
    }
    addCourse(){
        console.log("new Course Added");
    }
    removeAllCourses(){
        console.log("removed all Courses...");
    }
    //overwrite greetUser
    greetUser(){
        console.log(`Welcome Admin, ${this.fname} ${this.lname}`);
    }
}

let u1= new User('Jerry', 'prince', 912231)
let u2= new Admin('Priyanshu', 'Kumar', 912231)

u1.greetUser()

console.log(u2);

u2.greetUser()
u2.addCourse()
u2.removeAllCourses()

u1.greetUser()
u2.greetUser()

