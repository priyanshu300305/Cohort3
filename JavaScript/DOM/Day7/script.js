localStorage.setItem("name", "niti gadkari");

localStorage.setItem("song", "ek mulaqat ho...");

let lsd = localStorage.getItem("name");

let song = localStorage.getItem("song");

console.log(lsd);
console.log("Song -> ",song);

let data = [
    {
        name: "priyanshu",
        age: 21,
        address: "mahilong",
        pincode: 00000,
    },
    {
        name: "jerry",
        age: 23,
        address: "lalpur",
        pincode: 00001,
    },
    {
        name: "Aman",
        age: 19,
        address: "kanke",
        pincode: 00045,
    },
    {
        name: "Aditya",
        age: 22,
        address: "chennai",
        pincode: 98765,
    },
    {
        name: "xyz",
        age: 11,
        address: "rnc",
        pincode: 12345,
    }

];

let newData = ["polo"];

localStorage.setItem("people", JSON.stringify(data));
localStorage.setItem("people", JSON.stringify(newData));

const lsdd = localStorage.getItem('people');
let value= JSON.parse(lsdd);

console.log(value);

localStorage.removeItem("people")

