let container = document.querySelector(".container");

let h1Tag = document.createElement("h1");
h1Tag.innerText = "Random Password Generator";

let strengthTag=document.querySelector(".strength");

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

let strengthContainer = document.createElement("div");
strengthContainer.classList.add("strengthContainer");
strengthContainer.append(inputContainer,strengthTag);

let btnTag = document.createElement("button");
btnTag.classList.add("btnTag");
btnTag.innerText = "Generate";

container.append(h1Tag,strengthContainer,btnTag);

btnTag.addEventListener("click", () => {
    createPassword();
})

let alertMsg=document.createElement("p");
alertMsg.classList.add("alertMsg");
document.body.append(alertMsg);

copyBtn.addEventListener("click", () => {
    copyPassword();
    if (inputTag.value) {
        alertMsg.innerText = inputTag.value +" Copied!";
        alertMsg.style.display="block";
        setTimeout(() => {
        alertMsg.style.display="none";
        },2000); 
    }
})

function createPassword() {
    const strengthValue=document.getElementById("strength").value;
    let passwordLength,chars;
    if(strengthValue==="easy"){
        passwordLength=6;
        chars="abcdefghijklmnopqrstuvwxyz";
    }else if(strengthValue==="medium"){
        passwordLength=10;
        chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }
    else if(strengthValue==="strong"){
    passwordLength = 14;
    chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
    }

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
