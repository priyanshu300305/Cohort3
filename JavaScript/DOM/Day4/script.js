// /*
// There are multiple types of EVENTS:-
// 1. mouseEvents
// 2. pointerEvents
// 3. keyboardEvents
// 4. inputEvents
// 5. submitEvents

// */


// const btn = document.querySelector("button");
// const div = document.querySelector("div");
// const main = document.querySelector("main");
// const body = document.body;

// btn.addEventListener('click', (events) => {
//     // console.log(events);
//     console.log("button triggered..");
// },
// {capture: true}
// );

// div.addEventListener('click', (events) => {
//     console.log("div triggered..");

// },
// {capture: true}
// );
// // window.addEventListener('keypress', (events)=>{
// //     console.log(events);

// // })

// // btn.addEventListener("click", (events)=>{
// //     console.log("button triggered");

// // })
// main.addEventListener("click", (events) => {
//     console.log("main triggered");

// },
// {capture: true}
// );
// body.addEventListener("click", (events) => {
//     console.log("body triggered");
// },
// {capture: true}
// );


const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");
const url = document.querySelector("#url");

let editIndex = null;

let usersData = [
    {
        "id": 1,
        "name": "Jerry",
        "email": "jerry@gmail.com",
        "imageURL": "https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "dob": "2003-03-30"

    },
    {
        "id": 2,
        "name": "Aarav Sharma",
        "email": "aarav.sharma@example.com",
        "imageURL": "https://i.pravatar.cc/150?img=12",
        "dob": "2002-04-15"
    },
    {
        "id": 3,
        "name": "Priya Verma",
        "email": "priya.verma@example.com",
        "imageURL": "https://i.pravatar.cc/150?img=47",
        "dob": "2001-09-22"
    },
    {
        "id": 4,
        "name": "Rohan Kumar",
        "email": "rohan.kumar@example.com",
        "imageURL": "https://i.pravatar.cc/150?img=33",
        "dob": "2003-01-08"
    },
    {
        "id": 5,
        "name": "Ananya Singh",
        "email": "ananya.singh@example.com",
        "imageURL": "https://i.pravatar.cc/150?img=44",
        "dob": "2002-12-19"
    },
    {
        "id": 6,
        "name": "Kabir Mehta",
        "email": "kabir.mehta@example.com",
        "imageURL": "https://i.pravatar.cc/150?img=11",
        "dob": "2000-06-30"
    }
];

const ui = () => {
    users.innerHTML = "";
    usersData.forEach((elem, index) => {
        users.innerHTML += ` <div class="user_card">
            <div class="img_box">
                <img src="${elem.imageURL}"
                    alt="image here">
            </div>
            <div class="text">
                <h3>Name - ${elem.name}</h3>
                <p>Email - ${elem.email}</p>
            </div>
            <div class="actions">
          <button onclick="editCard(${index})">Edit</button>
            <button onclick="deleteCard(${index})" id="del">Delete</button>
            </div>
        </div>`;

    });
};
ui();

form.addEventListener("submit", (events) => {
    events.preventDefault();
    console.log("form event");
    // console.log(name.value);
    // console.log(email.value);

    let name = inp1.value;
    let email = inp2.value;
    let imageURL = url.value;
    if (name.trim() === "" && email.trim() === "") return;

    if (editIndex !== null) {
        // Update existing user
        usersData[editIndex] = {
            name,
            email,
            imageURL
        };
 
        editIndex = null;
    } else {
        // Add new user
        usersData.push({
            name,
            email,
            imageURL,
        });
    }
    ui();
    console.log(usersData);

    form.reset();
});

let deleteCard = (index) => {
    usersData.splice(index, 1);
    console.log(usersData);
    ui();

};

function editCard(index) {
    let user = usersData[index];

    // Put existing data into the form
    inp1.value = user.name;
    inp2.value = user.email;
    url.value = user.imageURL;

    let editIndex = null;

    // Remove old user
    usersData.splice(index, 1);

    // Refresh cards
    ui();
}; 