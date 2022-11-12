//O= <img src="icon-o.svg">
//X= <img src="icon-x.svg">


//Selecting "Starting Page" Tags
let mainMain = document.querySelector(".main-main")
let choose = document.querySelectorAll(".choose")

//Selecting "Main Page" Tags
let playBoard = document.querySelector(".play-board")
let box = document.querySelectorAll(".box")
let marks = document.querySelector(".marks")
let restartBtn = document.querySelector(".restart-btn")
let playArea = document.querySelector(".play-area")

//How Can We Change Turns
//False => X's Turn
//True => O's Turn 
let changeTurn = true;



//Select What You Want To Be
//X or O
choose.forEach(chooseNow =>{
    chooseNow.addEventListener("click" , ()=>{
        if(chooseNow.id === "cpu"){
            changeTurn = false;
            //console.log(changeTurn)
        }else{
            changeTurn = null;
            //console.log(changeTurn)
        } 
        mainMain.style.display ="none"
        playBoard.style.display = "block"
        marks.style.display = "none"
        restartBtn.style.display = "none"
        playArea.style.cursor = "pointer"
        box.style.pointerEvent = "none"
    })
});

box.forEach(items =>{
    items.addEventListener("click" , ()=>{
        //Add "X" Icon If "ChangeTurn" = False
        //Add "O" Icon If "ChangeTurn" = True
        if(changeTurn == false){
            items.innerHTML = `<img src="icon-o.svg">`;

            //Change The "ChangeTurn" Value False Into True
            changeTurn = true
        }else{
            items.innerHTML = `<img src="icon-x.svg">`;

            //Change The "ChangeTurn" Value False Into True
            changeTurn = false
        }
        winningFunc();
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
    for (let a = 0; a<= 7; a++){
        let b = winningCombinations[a];
        console.log(b)
    }
}