let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

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
    checkEmpty(cardHolder, 0, "Name can't be blank");
    checkEmpty(card_Number, 1, "Card number can't be blank");
    checkEmpty(month, 2, "Month can't be blank");
    checkEmpty(year, 3, "Year can't be blank");
    checkEmpty(cvv, 4, "CVV can't be blank");

}
);

let checkEmpty = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
    }

    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid black";

    }
}
card_Number.addEventListener("input", (e) => {
    var pattern = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{3}([0-9]|[A-Z])$/;
    ;
    if (!pattern.test(card_Number.value)) {
        errorMsg[1].innerHTML = "input correct format";
        card_Number.style.border = "2px solid red";
    }
    else
        errorMsg[1].innerHTML = "";

});
cvv.addEventListener("input", (e) => {
    var pattern = /^[\d]{3}/;
    if (!pattern.test(cvv.value)) {
        errorMsg[4].innerHTML = "enter last three digit on the back of the card";
        cvv.style.border = "2px solid red";
    }
    else
        errorMsg[4].innerHTML = "";
}
);

