console.log("hello sir!");

// --- EVENT DELEGATION 

// --- react follows event delegation 



// const five= document.querySelector("#five")
const main = document.querySelector("main");
const overlay = document.querySelector('#overlay')
// // const box = document.querySelector(".box");
const btn = document.querySelector("button");
const timer = document.querySelector("#timer");
const scoree = document.querySelector("#score");


const box = document.createElement("div");
box.classList.add("box");

let time = 0;
let interval;
let score = 0;


const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}
const randomBox = () => {

    box.style.backgroundColor = randomColor();
    main.append(box);


    let mainH = main.clientHeight - box.offsetHeight;
    let mainW = main.clientWidth - box.offsetWidth;


    const rY = Math.random() * mainH;
    const rX = Math.random() * mainW;

    box.style.top = `${rY}px`;
    box.style.left = `${rX}px`;
};

btn.addEventListener('click', () => {

    interval = setInterval(() => {
        randomBox();
        time += 1;
        timer.textContent = time;
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
        overlay.style.display = "flex";
        setTimeout(() => {
            overlay.style.display = "none";
            time = 0;
            score = 0;

            timer.textContent = time;
            scoree.textContent = score;
        }, 3000);


    }, 10000);



});

box.addEventListener("click", () => {
    score += 1;
    scoree.textContent = score;

    box.remove();

});

// // five.addEventListener("click", (event)=> {
// //     console.log(event.target);

// // });

// main.addEventListener("click", (events)=>{
//     console.log(events.target);
// });

// let interval= setInterval(() => {
//     console.log("i'm setInterval");

// }, 100);


// setTimeout(() => {
//     clearInterval(interval); // this helps in stoping/ ending the setInterval function;
//     console.log("i'm clearInterval");
// }, 1000);

// setTimeout(() => {
//     console.log("i'm timeOut");
// }, 2000);

// let random = Math.random() * 10;
// let r = Math.floor(random);  //--- this function will roundOff the decimal output;
// //--- in this if 1.567... => 1 (it is base/ it will return the base value);


// console.log(random);
// console.log(r);

// let c = Math.ceil(random);
// //--- in this if 1.567 or 1.925 or 1.1213... => 2 (it is top/ it will return the top value);
// console.log(c);






