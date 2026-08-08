console.log('START');
var a = 10;
var b = 20;
var c = a + b;

function a1() {

    console.log(c);
}

a1();
console.log('END');

// async = ek sath Multiple function ko call karne ke liye use hota hai

console.log("Start");

// setTimeout(function s() {
//     console.log("hello this is timeout, setTimeout");


// }, 4000);

// console.log("End");


document.querySelector('h1').addEventListener('click', function () {
    console.log("hello, clicked on H1");
});
document.querySelector('h2').addEventListener('click', function () {
    console.log("hello, clicked on h2");
});


// console.log("Start");
// setTimeout(function () {
//     console.log("setTimeout");
// }, 0);
// console.log("End");




// //PROMISE


// let response = fetch('https://jsonplaceholder.typicode.com/todos/1');

// console.log(response);


// let int = setInterval(function () {
//     console.log("hello, this is setInterval...");
// }, 2000);
// setTimeout(function () {
//     clearInterval(int);
// }, 10000);



// // function orderFood() {
// //     console.log("Food is ordered");
// // }
// // //async orperation
// // orderFood();


// async function datalao(){

//     let response  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await response.json();
//     console.log(data);
// }
// datalao();  


let p1 = new Promise(function (resolve, reject) {

    // let val= true
    // if(val){
    //     console.log("Promise is resolved");
    // }else{
    //     console.log("Promise is rejected");
    // }

})

console.log(p1);


let p2 = new Promise(function (resolve, reject) {
    console.log('Promise pending hai...')

    let result = true;

    setTimeout(function () {
        if (result) {
            console.log("fulfilled");
            resolve();
        } else {
            console.log("rejected");
            reject();
        }
        console.log('this is timeOut');
    }, 20000)


})

console.log(p2);

p2.then(function () {
    console.log("Promise is fulfilled")
})
    .catch(function () {
        console.log("Promise is rejected")
    })
    .finally(function () {
        console.log("Promise END")
    })



function orderFood() {
    let myOrder = new Promise(function (resolve, reject) {
        console.log('your order is coming...');

        let orderStatus = true
        setTimeout(function () {
            if (orderStatus) {
                console.log("Delivery wale bhaiyaa aagye hain");
                resolve();
            } else {
                console.log("Order failed");
                reject();
            }
        }, 3000)
    })

    myOrder.then(function () {
        console.log("NOw, make payment");

        let paymentStatus = true;
        return new Promise(function(res,rej){
            setTimeout(function(){
                if(paymentStatus){
                    console.log("Payment done");
                    res()
                }else{
                    console.log("Payment cancelled");
                    rej()
                }
            }, 2000)
        })
    })
    .then(function(){
        console.log("Nacho Nacho");
    })
    myOrder.catch(function () {
        console.log("order failed");
        console.log("Complain karo");
    })
    .finally(function () {
        console.log("process completed");
    })
}

orderFood();



var arr= [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Bob", age: 35}
]

console.log(arr[0].name);


// let response= fetch('https://fakestoreapi.com/products/1')

// response
// .then(function(data){
//     console.log("data aagya ✅");
//     return data.json()
// })
// .then(function(mydata){
//     console.log(mydata);
// })
// .catch(function(){
//     console.error('Data nahi aaya ❌');
// })

let MY_API = 'https://fakestoreapi.com/products/1'
async function DataLao(){
    try{
        let responsee= await fetch(MY_API)
       
        let data= (await responsee).json()
        
        data.forEach(function (elem){
            console.log(elem.title);
        })
    } catch (error) {
        console.error('URL galat hai bhai ❌');
    }
}

DataLao();22