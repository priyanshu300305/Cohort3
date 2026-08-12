const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");



/*
here
callback function
()=>{}
    
    */

let flag= true;
btn.addEventListener("click", /* ()=>{} */function () {
    if(flag){
        console.log("i'm triggered....");
        // bulb.style.backgroundColor= "yellow";
        bulb.style.background= "radial-gradient(circle, yellow, red)";
        btn.textContent="Off";
        flag= false;
    }else{
        // bulb.style.backgroundColor= "transparent";
        bulb.style.background="transparent";
        btn.textContent="On";
        flag=true;
        
    }
});


// btn.addEventListener("click", function(){
//    if( bulb.classList.toggle("lightup")){
//        btn.textContent="off";
//    }else{
//     btn.textContent="On";
//    }

// });