let container = document.querySelector(".container");

let h1Tag = document.createElement("h1");
h1Tag.innerText = "Random Password Generator";

let inputContainer = document.createElement("div");
inputContainer.classList.add("inputContainer");

let inputTag = document.createElement("input");
inputTag.classList.add("inputTag");
inputTag.type = "text";
inputTag.placeholder = "Create Password";
inputTag.readOnly = true;

let copyBtn = document.createElement("button");
copyBtn.classList.add("copyBtn");
copyBtn.innerText = "copy";
inputContainer.append(inputTag, copyBtn);

let btnTag = document.createElement("button");
btnTag.classList.add("btnTag");
btnTag.innerText = "Generate"

container.append(h1Tag, inputContainer, btnTag);

btnTag.addEventListener("click", () => {
    createPassword();
})

copyBtn.addEventListener("click", () => {
    copyPassword();
    if (inputTag.value) {
        copyBtn.innerText = "copied!";
        copyBtn.style.backgroundColor = ("green");
        copyBtn.style.color = ("white");
        setTimeout(() => {
        copyBtn.innerText = "copy";
        copyBtn.style.backgroundColor = ("white");
        copyBtn.style.color = ("black");
            
        },2000);
        
    }
})


function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    inputTag.value = password;
}

function copyPassword() {
    inputTag.select();
    inputTag.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputTag.value);
}
