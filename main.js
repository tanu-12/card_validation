let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let continueButton = document.createElement('button');
const completionMsg = document.createElement('div');
let completionImg = document.createElement('img');
completionImg.src = "images/icon-complete.svg";
completionMsg.textContent = "Thank You";
continueButton.type = "button";
continueButton.textContent = "Continue";
// continueButton.addEventListener('click', (e) => {
//     alert("new form");

// });
completionMsg.append(completionImg, continueButton);
console.log(completionMsg);
// let content = classes("content");

let cardHolder = id("Name");
let card_Number = id("card_Number");
let month = id("Expiry_mm");
let year = id("Expiry_yy");
let cvv = id("cvv");
let form = id("form");
let errorMsg = classes("error");
console.log(cardHolder);
console.log(year);
console.log(cvv);
console.log(errorMsg);


//let btn=document.getElementsByTagName(button);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ch = checkEmpty(cardHolder, 0, "Name can't be blank");
    let cn = checkEmpty(card_Number, 1, "Card number can't be blank");
    let m = checkEmpty(month, 2, "Month can't be blank");
    let y = checkEmpty(year, 3, "Year can't be blank");
    let cv = checkEmpty(cvv, 4, "CVV can't be blank");

    if (ch && cn && m && y && cv) {
        form.innerHTML = completionMsg.innerHTML;
    }

}
);

function checkEmpty(id, serial, message) {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        return false;
    }

    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid black";
        return true;


    }
}
card_Number.addEventListener("input", (e) => {
    var pattern = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{3}([0-9]|[A-Z])$/;
    if (!pattern.test(card_Number.value)) {
        errorMsg[1].innerHTML = "input correct format";
        card_Number.style.border = "2px solid red";
    }
    else {
        errorMsg[1].innerHTML = "";
        card_Number.style.border = "2px solid black";
    }
});


cvv.addEventListener("input", (e) => {
    var pattern = /^[\d]{3}/;
    if (!pattern.test(cvv.value)) {
        errorMsg[4].innerHTML = "enter last three digit on the back of the card";
        cvv.style.border = "2px solid red";
    }
    else
        errorMsg[4].innerHTML = "";
    cvv.style.border = "2px solid black";
}
);
form.addEventListener("input", (e) => {
    let c_number = document.getElementById("c_number");
    let c_name = document.getElementById("c_name");
    let c_date = document.getElementById("c_date");
    let c_cvv = document.getElementById("C_cvv");
    c_number.textContent = card_Number.value;
    c_name.textContent = cardHolder.value;
    c_date.textContent = `${month.value}/${year.value}`;
    c_cvv.textContent = cvv.value;

});





// continueButton.addEventListener("reset", (e) => {
//     alert("new form");

// });
// // function resetForm() {
// //     form.innerHTML = content;

// // }