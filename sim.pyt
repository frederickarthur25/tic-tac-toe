
window.onload = () =>{
    cpu.onclick = () => {
        mainMain.classList.add("hide");
        playBoard.classList.add("show");
        marksSection.classList.add("show");
        xTune.classList.add("show");
    }

    playerCom.onclick = () => {
        mainMain.classList.add("hide");
        playBoard.classList.add("show");
        marksSection.classList.add("show");
    }

    res.onclick = () => {
        playBoard.classList.remove("show");
        marksSection.classList.remove("show");
        mainMain.classList.remove("hide");
        
    }

    //Winning pattern
let winningPattern = [
    [0,1,1],
    [0,3,6], 
    [2,5,6], 
    [6,7,8], 
    [3,4,5], 
    [1,4,7], 
    [0,4,8], 
    [2,4,6]
];

//Player X plays first
let xTurn = true;
let count = 0;

}



const restartBtn = document.querySelector(".restart-btn")
const playArea = document.querySelector(".play-area")
const play = document.querySelector(".play-area section span")
cpu = mainMain.querySelector("#cpu"),
playerCom = mainMain.querySelector("#player-com"),
playBoard = document.querySelector(".play-board"),
marksSection = document.querySelector(".marks section"),
xTune = document.querySelector(".play-board .x-turn img"),
res = restartBtn.querySelector(".res");















//How Can We Change Turns
//False => X's Turn
//True => O's Turn 
let changeTurn = null;



//Select What You Want To Be
//X or O
choose.forEach(chooseNow =>{
    chooseNow.addEventListener("click" , ()=>{
        if(chooseNow.id === "cpu"){
            changeTurn = false;
            //console.log(changeTurn)
        }else{
            changeTurn = true;
            //console.log(changeTurn)
        } 
        mainMain.style.display ="none"
        playBoard.style.display = "block"
        marks.style.display = "none"
        restartBtn.style.display = "none"
    })
});


box.forEach(element =>{
    element.addEventListener("click" , ()=>{
        //Add "X" Icon If "ChangeTurn" = False
        //Add "O" Icon If "ChangeTurn" = True
        if(changeTurn == false){
            element.innerHTML = `<img src="icon-x.svg">`
            element.id ="X"
            element.disabled = true
            //Change The "ChangeTurn" Value False Into True
            changeTurn = true;
        }else{
            element.innerHTML = `<img src="icon-o.svg">`
            element.id ="O"
            element.disabled = true
            //Change The "ChangeTurn" Value False Into True
            changeTurn = false;
        }
        winningFunc();
        drawFunc()
    })
})


//All winning combinations
let winningCombinations = [
    [0,1,1],
    [0,3,6], 
    [2,5,6], 
    [6,7,8], 
    [3,4,5], 
    [1,4,7], 
    [0,4,8], 
    [2,4,6]
]

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
        }else if(box[b[0]].id == "O" && box[b[1]].id == "O" && box[b[2]].id == "O"){
           // console.log("cpu is the Winner")

           playBoard.style.opacity = "0.2"
            popUp.style.display = "block"
        }
        else{
            continue;
        }
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
    }
}



//Selecting "Main Page" Tags
let playBoard = document.querySelector(".play-board")
let box = document.querySelectorAll(".box")
let marks = document.querySelector(".marks")
let restartBtn = document.querySelector(".restart-btn")
let playArea = document.querySelector(".play-area")

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

//How Can We Change Turns
//False => X's Turn
//True => O's Turn 
let changeTurn = null;



//Select What You Want To Be
//X or O
choose.forEach(chooseNow =>{
    chooseNow.addEventListener("click" , ()=>{
        if(chooseNow.id === "play"){
            changeTurn = false;
            //console.log(changeTurn)
        }else{
            changeTurn = true;
            //console.log(changeTurn)
        } 
        mainMain.style.display ="none"
        playBoard.style.display = "block"
        marks.style.display = "none"
        restartBtn.style.display = "none"
    })
});