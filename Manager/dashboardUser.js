const body = document.querySelector(".body");
const menuHeader = document.querySelector(".menuHeader");
const backMenuHeader = document.querySelector(".backMenuHeader");
const checkbox = document.querySelector("#checkbox2");
const themeToggle = document.querySelector(".input");
const content = document.querySelector(".content");
const down = document.querySelector("#down");
const td = document.querySelectorAll("td");
const tr = document.querySelectorAll("tr");
const option = document.querySelector(".divPresent select");
const valueOption = parseInt(option.value);

if (valueOption > 6) {
    tr[5].innerText = "";
}

themeToggle.checked = false;
checkbox.checked = false;
function toggleMenu() {
    if (checkbox.checked == false) {
        menuHeader.style.width = "60px";
        backMenuHeader.style.backgroundColor = "none";
        backMenuHeader.style.transition = "all 0.75s";
        backMenuHeader.style.display = "none";
    }else{
        menuHeader.style.width = "165px";
        backMenuHeader.style.backgroundColor = "#f5ab356c";
        backMenuHeader.style.transition = "all 0.75s";
        backMenuHeader.style.display = "block";
    }
}
function themeToggleBody() {
    if (themeToggle.checked == false) {
        body.style.backgroundColor = "#ffffff";
        body.style.transition = "all 1s";
    }else{
        body.style.backgroundColor = "#373737";
        body.style.transition = "all 1s";
    }
}
function downUp(){
    if (content.style.paddingBottom == "230px") {
        content.style.paddingBottom = "0px";
        down.style.transform = "rotate(0deg)";
    }else{
        content.style.paddingBottom = "230px";
        down.style.transform = "rotate(180deg)";
    }
}
function contentHover() {
    content.style.paddingBottom = "230px";
    down.style.transform = "rotate(180deg)";
}
function normal() {
    content.style.paddingBottom = "0px";
    down.style.transform = "rotate(0deg)";
}


  
const date = new Date;

const myArray = date.toLocaleString("fa-IR", { dateStyle: "medium" }).split(" ", 3);
let day = myArray[0]; //روز
let month = myArray[1]; //ماه
//alert(myArray[2]); //سال
const converter = (text) => text.replace(/[٠-٩۰-۹]/g,a=>a.charCodeAt(0)&15);
let dayP = parseInt(converter(`${day}`));

//حضور
function presented() {
    td[dayP - 1].classList.add("present");
}