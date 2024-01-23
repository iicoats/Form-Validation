"use strict";

const form = document.querySelector("form");

form.addEventListener("submit, (event") = {
    if (form.uname.value < 5) {
        alert("Username must be at least 5 characters long")
        event.preventDefault()
    }
};

// I can't get the event listener to work.  I want an alert stating user name needs to be at least 5 characters long