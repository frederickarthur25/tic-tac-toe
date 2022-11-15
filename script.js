//O= <img src="icon-o.svg">
//X= <img src="icon-x.svg">
//O= <img src="icon-o-outline.svg">
//X= <img src="icon-x-outline.svg">


//Selecting "Outcome" Tags
let popUp = document.querySelector(".popup")
let lostPop = document.querySelector(".lost-pop")
let lostPara = document.querySelector(".lost-para")
let lostMid = document.querySelector(".lost-mid")
let lostBtn = document.querySelector(".lost-btn")
let lostQuit = document.querySelector(".lost-quit")
let lostNext = document.getElementById(".lost-next")
let popUpX = document.querySelector(".popup-x")
let winPop = document.querySelector(".win-pop")
let winPara = document.querySelector(".win-para")
let winMid = document.querySelector(".win-mid")
let winBtn = document.querySelector(".win-btn")
let winQuit = document.getElementById(".win-quit")
let winNext = document.getElementById(".win-next")
let restart = document.querySelector(".restart")
let restartPop = document.querySelector(".restart-pop")
let restartPara = document.querySelector(".restart-para")
let restartBt = document.querySelector(".restart-bt")
let restartQuit = document.querySelector(".restart-quit")
let restartNext = document.querySelector(".restart-next")
let restartBtn = document.querySelector(".restart-btn")
let res = document.querySelector(".res")
let choose = document.querySelectorAll(".choose")
let num1 = document.querySelector(".num1")
let num2 = document.querySelector(".num2")
let num3 = document.querySelector(".num3")

//Selecting "Starting Page" Tags
let mainMain = document.querySelector(".main-main"),
playButton = document.querySelector(".play"),
botButton = document.querySelector(".bot"),
playBoard = document.querySelector(".play-board")
playArea = document.querySelector(".play-area")
marks = document.querySelector(".marks"),
btn = document.querySelector(".btn"),
allBox = document.querySelectorAll("section span");
let box = document.querySelectorAll(".box")

let changeTurn = null;


window.onload =()=>{ //once windows load
for(let i = 0; i < box.length; i++) { //add onclick attribute in all available section's span
    box[i].setAttribute("onclick", "clickedBox(this)");
    
}
    botButton.onclick = ()=>{
        mainMain.classList.add("hide"); //hide the main container
        playBoard.style.display = "block"; //show the main container
        marks.style.display = "block" //hide the marks section
    }
    res.onclick = () => {
        window.location.reload(1)
    }
} 

box.forEach(items => {
    items.addEventListener("mouseenter", () => {
        if(changeTurn !== true){
            items.innerHTML = `<img src="icon-x-outline.svg">`
        }else{
            items.innerHTML = `<img src="icon-o-outline.svg">`
            changeTurn = false;
        }
    })
})

box.forEach(items => {
    items.addEventListener("mouseleave", () => {
        if(changeTurn === true){
            items.innerHTML = ``
        }else{
            items.innerHTML = ``
        }
    })
})

let playerSign = "X"; //suppose player will be X
let  runBot = true;



//user clicked function
function clickedBox(element){
    //console.log(element);
    if(btn.classList.contains("botButton")){
        element.innerHTML =  `<img src="icon-o.svg">` //adding circle icon tag inside user clicked element
        playerSign = "O"
        element.setAttribute("id", playerSign);
    }else{
        element.innerHTML =  `<img src="icon-x.svg">` ////adding cross icon tag inside user clicked element
        element.setAttribute("id", playerSign);
    }
    winningFunc(); // calling winner function
    drawFunc();
    playBoard.style.pointerEvents = "none"
    element.style.pointerEvents = "none"; //Once selected cannot be selected again
    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed(); //generating random delay so bot will delay randomly to selct box
    setTimeout(()=>{
        robot (runBot); //calling bot function
    }, randomDelayTime); //passing random delay time

}

//bot click function
function robot(runBot){
    if(runBot){ //if  runBot is true then run the following code
        let playerSign = "O"
    let array = []; 
    for (let i = 0; i < box.length; i++) {
        if(box[i].childElementCount === 0){ //if span has no any child element
             array.push(i);// inserting unclicked or unselected boxes inside array means that span has no children
             //console.log(i + " " + "has no child")
        }
    }
    let randomBox = array[(Math.floor(Math.random() * array.length))]; //getting random index from array so bot will select random unselected
    //console.log(randomBox);
    if(array.length > 0){
        if(btn.classList.contains("botButton")){
           box[randomBox].innerHTML =  `<img src="icon-x.svg">` //adding cross icon tag inside user clicked element
            box[randomBox].setAttribute("id", playerSign);
            playerSign = "X"
        }else{
            playBoard.style.pointerEvents = "auto"
            box[randomBox].innerHTML =  `<img src="icon-o.svg">` //adding circle icon tag inside user clicked element
            box[randomBox].setAttribute("id", playerSign);
        }
    } 
    winningFunc(); // calling winner function
    drawFunc()
    box[randomBox].style.pointerEvents = "none" ////Once selected cannot be selected again
    }
}


//All winning combinations
let winningCombinations = [
    [0,1,2],
    [0,3,6], 
    [2,5,8], 
    [6,7,8], 
    [3,4,5], 
    [1,4,7], 
    [0,4,8], 
    [2,4,6],
]

//Winning function for user and bot
let winningFunc = ()=>{
    for (let a = 0; a <= 7; a++){
        let b = winningCombinations[a];
        //console.log(b)

        if(box[b[0]].id == "" || box[b[1]].id == "" || box[b[2]].id == ""){
            continue;
        }else if(box[b[0]].id == "X" && box[b[1]].id == "X" && box[b[2]].id == "X"){
            //console.log("Player is the Winner")

            //Add Outcome
            playBoard.style.opacity = "0.5"
            popUpX.style.display = "block"
            marks.style.display ="block"
            num1.innerHTML = "14"
            num2.innerHTML = "32"
            num3.innerHTML = "11"
        }else if(box[b[0]].id == "O" && box[b[1]].id == "O" && box[b[2]].id == "O"){
           // console.log("cpu is the Winner")
           playBoard.style.opacity = "0.2"
            popUp.style.display = "block"
            marks.style.display ="block"
            num1.innerHTML = "14"
            num2.innerHTML = "32"
            num3.innerHTML = "11"
        }
        else{
            continue;
        }
        runBot = false;
        robot(runBot);
    }
}

//Draw Function 
let drawFunc = ()=> {
    if(box[0].id != "" && box[1].id != "" &&
    box[2].id != "" && box[3].id != "" &&
    box[4].id != "" && box[5].id != "" &&
    box[6].id != "" && box[7].id != "" && box[8].id != ""){

            //Add Outcome
            playBoard.style.opacity = "0.5"
            restart.style.display = "block"
            marks.style.display ="block"
    }
}