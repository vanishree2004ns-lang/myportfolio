const words = [
    "Web Developer",
    "Python Programmer",
    "Frontend Developer",
    "BCA Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);
    }else{

        typing.textContent = current.substring(0,charIndex--);
    }

    if(charIndex > current.length){

        deleting = true;

        setTimeout(typeEffect,1000);

        return;
    }

    if(charIndex < 0){

        deleting = false;

        wordIndex++;

        if(wordIndex == words.length){

            wordIndex = 0;
        }
    }

    setTimeout(typeEffect,deleting ? 80 : 120);

}

typeEffect();
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = () => {
    document.body.classList.toggle("light-mode");
};
document.getElementById("topBtn").onclick = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};