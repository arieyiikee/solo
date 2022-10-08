let homeScore = 0
let addOne = document.getElementById("homescore")
function plus1(){
    homeScore += 1
    addOne.innerText = homeScore
}

let addTwo = document.getElementById("homescore")
function plus2(){
    homeScore += 2
    addOne.innerText = homeScore
}

let addThree = document.getElementById("homescore")
function plus3(){
    homeScore += 3
    addOne.innerText = homeScore
}


let guestScore = 0
let additionOne = document.getElementById("guestscore")
function plusone(){
    guestScore += 1
    console.log(guestScore)
    additionOne.innerText = guestScore
}

let additionTwo = document.getElementById("guestscore")
function plustwo(){
    guestScore += 2
    console.log(guestScore)
    additionOne.innerText = guestScore
}

let additionThree = document.getElementById("guestscore")
function plusthree(){
    guestScore += 3
    console.log(guestScore)
    additionOne.innerText = guestScore
}

let reset = document.getElementById("homescore")
function resetgame(){
    homeScore = 0
    reset.innerText = homeScore

}


let resetGame = document.getElementById("guestscore")
function resetme(){
    guestScore = 0
    resetGame.innerText = guestScore

}




