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
let lostNext = document.querySelector(".lost-next")
let popUpX = document.querySelector(".popup-x")
let winPop = document.querySelector(".win-pop")
let winPara = document.querySelector(".win-para")
let winMid = document.querySelector(".win-mid")
let winBtn = document.querySelector(".win-btn")
let winQuit = document.querySelector(".win-quit")
let winNext = document.querySelector(".win-next")
let restart = document.querySelector(".restart")
let restartPop = document.querySelector(".restart-pop")
let restartPara = document.querySelector(".restart-para")
let restartBt = document.querySelector(".restart-bt")
let restartQuit = document.querySelector(".restart-quit")
let restartNext = document.querySelector(".restart-next")
let restartBtn = document.querySelector(".restart-btn")
let res = document.querySelector(".res")

//Selecting "Starting Page" Tags
const mainMain = document.querySelector(".main-main"),
playButton = document.querySelector(".play"),
botButton = document.querySelector(".bot"),
playBoard = document.querySelector(".play-board")
marks = document.querySelector(".marks"),
btn = document.querySelector(".btn"),
allBox = document.querySelectorAll("section span");


window.onload =()=>{ //once windows load
for (let i = 0; i < allBox.length; i++) { //add onclick attribute in all available section's span
    allBox[i].setAttribute("onclick", "clickedBox(this)");
    
}

    playButton.onclick = ()=>{
        mainMain.classList.add("hide"); //hide the main container
        playBoard.style.display = "block"; //show the main container
        marks.style.display = "none" //hide the marks section
    }

    restartBtn.onclick = () => {
        playBoard.classList.remove("show");
        marksSection.classList.remove("show");
        mainMain.classList.remove("hide");
    }
}  

let playerSign = "X"; //suppose player will be X
let  runBot = true;


//user clicked function
function clickedBox(element){
    //console.log(element);
    if(btn.classList.contains("playButton")){
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
    for (let i = 0; i < allBox.length; i++) {
        if(allBox[i].childElementCount === 0){ //if span has no any child element
             array.push(i);// insserting unclicked or unselected boxes inside array means that span has no children
             //console.log(i + " " + "has no child")
        }
    }
    let randomBox = array[(Math.floor(Math.random() * array.length))]; //getting random index from array so bot will select random unselected
    //console.log(randomBox);
    if(array.length > 0){
        if(btn.classList.contains("playButton")){
            allBox[randomBox].innerHTML =  `<img src="icon-x.svg">` //adding cross icon tag inside user clicked element
            allBox[randomBox].setAttribute("id", playerSign);
            playerSign = "X"
        }else{
            playBoard.style.pointerEvents = "auto"
            allBox[randomBox].innerHTML =  `<img src="icon-o.svg">` //adding circle icon tag inside user clicked element
            allBox[randomBox].setAttribute("id", playerSign);
        }
    } 
    winningFunc(); // calling winner function
    drawFunc()
    allBox[randomBox].style.pointerEvents = "none" ////Once selected cannot be selected again
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

let winningFunc = ()=>{
    for (let a = 0; a <= 7; a++){
        let b = winningCombinations[a];
        //console.log(b)

        if(allBox[b[0]].id == "" || allBox[b[1]].id == "" || allBox[b[2]].id == ""){
            continue;
        }else if(allBox[b[0]].id == "X" && allBox[b[1]].id == "X" && allBox[b[2]].id == "X"){
            //console.log("Player is the Winner")

            //Add Outcome
            playBoard.style.opacity = "0.5"
            popUpX.style.display = "block"
            marks.style.display ="block"
        }else if(allBox[b[0]].id == "O" && allBox[b[1]].id == "O" && allBox[b[2]].id == "O"){
           // console.log("cpu is the Winner")

           playBoard.style.opacity = "0.2"
            popUp.style.display = "block"
            marks.style.display ="block"
        }
        else{
            continue;
        }
        runBot = false;
        bot(runBot);
    }
}

//Draw Function 
let drawFunc = ()=> {
    if(allBox[0].id != "" && allBox[1].id != "" &&
    allBox[2].id != "" && allBox[3].id != "" &&
    allBox[4].id != "" && allBox[5].id != "" &&
    allBox[6].id != "" && allBox[7].id != "" && allBox[8].id != ""){

            //Add Outcome
            playBoard.style.opacity = "0.5"
            restart.style.display = "block"
            marks.style.display ="block"
    }
}