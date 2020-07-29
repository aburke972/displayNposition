const buttonInLine = document.getElementById("button-inline")
const buttonBlock= document.getElementById("button-block")
const divLeft = document.getElementById("left-container")
const divCentral = document.getElementById("central-container")

buttonInLine.addEventListener("click",displayInLine)
buttonBlock.addEventListener("click",displayBlock)

function displayInLine(){
    console.log("Set inline-block")
    divLeft.classList.add("main-containers-inline-block")
    divLeft.classList.add("left-container-left")
    divCentral.classList.add("main-containers-inline-block")    
}

function displayBlock(){
    console.log("Reset to block")
    divLeft.classList.toggle("main-containers-inline-block")
    divLeft.classList.toggle("left-container-left")
    divCentral.classList.toggle("main-containers-inline-block") 
}



//To do: Find a way to modify a css element properties


//To do : 