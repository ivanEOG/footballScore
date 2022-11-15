//Goals
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let golH = 0
let golG = 0
//Red Cards
let redH = document.getElementById("redH")
let redG = document.getElementById("redG")
let countRedH = 0
let countRedG = 0
//Yellow Cards
let yellowH = document.getElementById("yellowH")
let yellowG = document.getElementById("yellowG")
let counterYellowH = 0
let counterYellowG = 0
//Corners
let cornerH = document.getElementById("cornerH")
let cornerG = document.getElementById("cornerG")
let countCornerH = 0
let countCornerG = 0
//Fault
let faultH = document.getElementById("faultH")
let faultG = document.getElementById("faultG")
let faultCountH = 0
let faultCountG = 0


//GOALS
function addGoalH(){
    golH += 1
    scoreHome.innerText = golH
}

function addGoalG() {
    golG += 1
    scoreGuest.innerText = golG
}

function subsGoalH(){
    golH -= 1
    scoreHome.innerText = golH
}

function subsGoalG() {
    golG -= 1
    scoreGuest.innerText = golG
}

//Red Cards

function addRedH(){
    countRedH +=1
    redH.innerText = countRedH
}

function addRedG(){
    countRedG +=1
    redG.innerText = countRedG
}

function subsRedH(){
    countRedH -=1
    redH.innerText = countRedH
}

function subsRedG(){
    countRedG -=1
    redG.innerText = countRedG
}

//Yellow Cards
function addYellowH(){
    counterYellowH +=1
    yellowH.innerText = counterYellowH
}

function addYellowG(){
    counterYellowG +=1
    yellowG.innerText = counterYellowG
}

function subsYellowH(){
    counterYellowH -=1
    yellowH.innerText = counterYellowH
}

function subsYellowG(){
    counterYellowG -=1
    yellowG.innerText = counterYellowG
}

//Corners
function addCornerH(){
    countCornerH +=1
    cornerH.innerText = countCornerH
}

function addCornerG(){
    countCornerG +=1
    cornerG.innerText = countCornerG
}

function subsCornerH(){
    countCornerH -=1
    cornerH.innerText = countCornerH
}

function subsCornerG(){
    countCornerG -=1
    cornerG.innerText = countCornerG
}

//Fault
function addFaultH(){
    faultCountH +=1
    faultH.innerText = faultCountH
}

function addFaultG(){
    faultCountG += 1
    faultG.innerText = faultCountG
}

function sunbsFaultH() {
    faultCountH -=1
    faultH.innerText = faultCountH
}

function subsFaultG(){
    faultCountG -= 1
    faultG.innerText = faultCountG
}