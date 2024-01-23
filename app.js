use strict;

const form = document.querySelector("form");

form.addEventListener("submit, (event") => {
    if (form.uname.value < 5){
        alert("Username must be at least 5 characters long")
        event.preventDefault()
    }
};

// document.getElementById("uname").addEventListener("click", function(event){
//     event.preventDefault()
//   });