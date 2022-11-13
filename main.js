let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let cardHolder = id(Name),
    card_Number = id(card_Number),
    month = id(Expiry_mm),
    year = id(Expiry_yy),
    cvv = id(Cvv),
    form = id(form);
let errorMsg = classes(error);

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
    if (id.value.trim() = "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
    }

    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid black";

    }
}