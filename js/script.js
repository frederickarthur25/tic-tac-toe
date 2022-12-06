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
let choose = document.querySelectorAll(".choose")
let num1 = document.querySelector(".num1")
let num2 = document.querySelector(".num2")
let num3 = document.querySelector(".num3")
let img = document.querySelector(".img")
let xboxblue = document.getElementsByClassName(".xboxblue")
let oboxyellow = document.getElementsByClassName(".oboxyellow")

//Selecting "Starting Page" Tags
let mainMain = document.querySelector(".main-main"),
playButton = document.querySelector("#play"),
botButton = document.querySelector(".bot"),
playBoard = document.querySelector(".play-board")
playArea = document.querySelector(".play-area")
marks = document.querySelector(".marks"),
btn = document.querySelector(".btn"),
allBox = document.querySelectorAll("section button");
let box = document.querySelectorAll(".box")
let changeTurn = null;

//Create array to hold board data
let boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

//Find game variable
let player = 1
let gameOver = false;



//single player mode
playButton.onclick = ()=>{
    mainMain.classList.add("hide"); //hide the main container
    playBoard.style.display = "block"; //show the main container
    marks.style.display = "block" //hide the marks section

    box.forEach((box, index) => {
        box.addEventListener("click", () => {
           placeMarker(index)
        })
    })
    
    //Create function for placing markers
    function placeMarker(index){
        //Determine row and column from index
        let col = index % 3
        let row = (index - col) / 3
        //Checkif current box is empty
        if(boardData[row][col] ==0 && gameOver == false){
        boardData[row][col] = player;
        //Change player
        player *= -1;
        //Update the screen with markers
        drawMarkers();
        //Check if anyone has won
        checkResult();
        }
    }
    
    //Create function fro drawing player markers
    function drawMarkers() {
        //iterate over rows
        for(let row = 0; row < 3; row++) {
            //iterate over columns
            for(let col = 0; col < 3; col++) {
                // check if it is player 1's marker
                if(boardData[row][col] == 1) {
                   //update cell class to add  X  
                   box[(row * 3) + col].innerHTML = `<img src="icon-x.svg">`
                }else if(boardData[row][col] == -1) {
                    //update cell class to add O
                    box[(row * 3) + col].innerHTML = `<img src="icon-o.svg">`
                }
            }
        }
    }
    
    //Create function for checking results of the game
    function checkResult () {
        //Check rows and columns
        for(let i = 0; i < 3; i++) {
            let rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2];
            let colSum = boardData[0][i] + boardData[1][i] + boardData[2][i];
            if(rowSum == 3 || colSum == 3) {
                //Player 1 Wins
                endGame(1);
                return
            }else if (rowSum == -3 || colSum == -3) {
                //Player 1 Wins
                endGame(2);
                return
            }
        }
        //Check diagonals
        let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
        let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0];
        if(diagonalSum1 == 3 || diagonalSum2 == 3) {
            //Player 1 Wins
            endGame(1);
            return
        }else if (diagonalSum1 == -3 || diagonalSum2 == -3) {
            //Player 1 Wins
            endGame(2);
            return
        }
    
        //Check for tie
        if(boardData[0].indexOf(0) == -1 &&
        boardData[1].indexOf(0) == -1 &&
        boardData[2].indexOf(0) == -1) {
            endGame(0);
            return
        }
    }
    
    //Function to end the game and display the result
    function endGame(winner) {
       //Trigger game Over
       gameOver = true;
       //Check if game ended in a tie
       if(winner == 0) {
            playBoard.style.opacity = "0.2"
            restart.style.display = "block"
            marks.style.display ="block"
            restartPara.innerHTML = "ROUND TIED"
            num1.innerHTML = "14"
            num2.innerHTML = "32"
            num3.innerHTML = "11"
       }else if(player == 1) {
            playBoard.style.opacity = "0.2"
            popUp.style.display = "block"
            marks.style.display ="block"
            num1.innerHTML = "14"
            num2.innerHTML = "32"
            num3.innerHTML = "11"
       }else{
            playBoard.style.opacity = "0.2"
            popUpX.style.display = "block"
            marks.style.display ="block"
            num1.innerHTML = "14"
            num2.innerHTML = "32"
            num3.innerHTML = "11"
       }
    }
    
}

$(document).ready(() =>{
    $('#play').on('mouseenter', () =>{
        playButton.style.backgroundColor = "#65E9E4" 
    })
})

$(document).ready(() =>{
    $('#play').on('mouseleave', () =>{
        playButton.style.backgroundColor = "" 
    })
})
//hover styles for bot
    $(document).ready(() =>{
        $('.bot').on('mouseenter', () =>{
            botButton.style.backgroundColor = "#FFC860" 
        })
    })
    
    $(document).ready(() =>{
        $('.bot').on('mouseleave', () =>{
            botButton.style.backgroundColor = "" 
        })
    })








    let playerSign = "X"
    runBot = true;
//Multi-player mode
botButton.onclick = ()=>{
    mainMain.classList.add("hide"); //hide the main container
    playBoard.style.display = "block"; //show the main container
    marks.style.display = "block" //hide the marks section


    box.forEach((box, index) => {
        box.addEventListener("click", () => {
           placeMarker(index)
        })
    })
    
    //Create function for placing markers
    function placeMarker(index){
        //Determine row and column from index
        let col = index % 3
        let row = (index - col) / 3
        //Check if current box is empty
        if(boardData[row][col] ==0 && gameOver == false){
        boardData[row][col] = player;
        //Change player
    
        //Update the screen with markers
        drawMarkers();
        //Check if anyone has won
        checkResult();
        let randomDelayTime = ((Math.random() * 1000) + 200).toFixed(); //generating random delay so bot will delay randomly to selct box
        setTimeout(() =>{
            robot(runBot); //calling bot function
        }, randomDelayTime); //passing random delay time
        }
    }
    
    //Create function fro drawing player markers
    function drawMarkers() {
        //iterate over rows
        for(let row = 0; row < 3; row++) {
            //iterate over columns
            for(let col = 0; col < 3; col++) {
                // check if it is player 1's marker
                if(boardData[row][col] == 1) {
                   //update cell class to add  X  
                    box[(row * 3) + col].innerHTML = `<img src="icon-x.svg">`
                }else if(boardData[row][col] == -1) {
                   return
                }
            }                                                                               
        }
    }
    
    //Create function for checking results of the game
    function checkResult () {
        //Check rows and columns
        for(let i = 0; i < 3; i++) {
            let rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2];
            let colSum = boardData[0][i] + boardData[1][i] + boardData[2][i];
            if(rowSum == 3 || colSum == 3) {
                //Player 1 Wins
                endGame(1);
                
                return
            }else if (rowSum == -3 || colSum == -3) {
                //Player 1 Wins
                endGame((runBot)); 
            }  
        }
        //Check diagonals
        let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
        let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0];
        if(diagonalSum1 == 3 || diagonalSum2 == 3) {
            //Player 1 Wins
            endGame(1);
            
            return
        }else if (diagonalSum1 == -3 || diagonalSum2 == -3) {
            //Player 1 Wins
            endGame((runBot));
        }else{
            return
        }
    
        //Check for tie
        if(boardData[0].indexOf(0) == -1 &&
        boardData[1].indexOf(0) == -1 &&
        boardData[2].indexOf(0) == -1) {
            endGame(0);
            return
        }
    }
    
    //Function to end the game and display the result
    function endGame(winner) {
       //Trigger game Over
       gameOver = true;
       //Check if game ended in a tie
       if(winner == 0) {
            playBoard.style.opacity = "0.2"
            restart.style.display = "block"
            marks.style.display ="block"
            restartPara.innerHTML = "ROUND TIED"
            num1.innerHTML = "14"
            num2.innerHTML = "32"
            num3.innerHTML = "11"
       }else if(player == 1) {
            playBoard.style.opacity = "0.2"
            popUpX.style.display = "block"
            marks.style.display ="block"
            num1.innerHTML = "14"
            num2.innerHTML = "32"
            num3.innerHTML = "11"
       }else if(robot(runBot)) {
            playBoard.style.opacity = "0.2"
            popUp.style.display = "block"
            marks.style.display ="block"
            num1.innerHTML = "14"
            num2.innerHTML = "32"
            num3.innerHTML = "11"
       }
    }

    function robot(runBot){
        if(runBot){ //if  runBot is true then run the following code
            let playerSign = "O"
        let array = []; 
        for (let row = 0; row < box.length; row++) {
            if(box[row].childElementCount === 0){ //if span has no any child element
                 array.push(row);// inserting unclicked or unselected boxes inside array means that span has no children
                 //console.log(i + " " + "has no child")
            }
        }
        let randomBox = array[(Math.floor(Math.random() * array.length))]; //getting random index from array so bot will select random unselected
        //console.log(randomBox);
        if(array.length > 0){
            if(btn.classList.contains("botButton")){
               box[randomBox].innerHTML =  `<img src="icon-x.svg">` //adding cross icon tag inside user clicked element  
               playerSign = "X"  
            }else{
                playBoard.style.pointerEvents = "auto"
                box[randomBox].innerHTML =  `<img src="icon-o.svg">` //adding circle icon tag inside user clicked element
            }
        } 
        }
        drawMarkers(); // calling winner function
        checkResult()
    }
}


winQuit.onclick = () => {
    location.reload()
}


lostQuit.onclick = () => {
    location.reload()
}



//adding background color on mouseenter to NEXT ROUND button
$(document).ready(() =>{
    $('.win-next').on('mouseenter', () =>{
        winNext.style.backgroundColor = "#FFC860"
    })
})

//removing background color on mouseleave to NEXT ROUND button
$(document).ready(() =>{
    $('.win-next').on('mouseleave', () =>{
        winNext.style.backgroundColor = ""
    })
})

//adding background color to QUIT button
$(document).ready(() =>{
    $('.win-quit').on('mouseenter', () =>{
        winQuit.style.backgroundColor = "#DBE8ED"
    })
})

$(document).ready(() =>{
    $('.win-quit').on('mouseleave', () =>{
        winQuit.style.backgroundColor = ""
    })
})


//adding background color on mouseenter to NEXT ROUND button
$(document).ready(() =>{
    $('.lost-next').on('mouseenter', () =>{
        lostNext.style.backgroundColor = "#FFC860"
    })
})

//removing background color on mouseleave to NEXT ROUND button
$(document).ready(() =>{
    $('.lost-next').on('mouseleave', () =>{
        lostNext.style.backgroundColor = ""
    })
})

//adding background color to QUIT button
$(document).ready(() =>{
    $('.lost-quit').on('mouseenter', () =>{
        lostQuit.style.backgroundColor = "#DBE8ED"
    })
})

$(document).ready(() =>{
    $('.lost-quit').on('mouseleave', () =>{
        lostQuit.style.backgroundColor = ""
    })
})


//adding event listener to RESET button
$(document).ready(() =>{
    $('.res').on('mouseenter', () =>{
        res.style.backgroundColor = "#DBE8ED"
    })
})

$(document).ready(() =>{
    $('.res').on('mouseleave', () =>{
        res.style.backgroundColor = ""
    })
})


 //Add event listener to restart button
 winNext.addEventListener("click", () => {
    //Reset game variales
        boardData = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
        player = 1
        gameOver = false;
    //Reset game board
        box.forEach(box => {
        box.innerHTML = (``)
    })
    playBoard.style.opacity = "1"
    popUpX.style.display = "none"
    num1.innerText = "0"
    num2.innerText = "0"
    num3.innerText = "0"
})

lostNext.addEventListener("click", () => {
    boardData = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
        player = 1
        gameOver = false;
    //Reset game board
        box.forEach(box => {
        box.innerHTML = (``)
    })
    playBoard.style.opacity = "1"
    popUp.style.display = "none"
    num1.innerText = "0"
    num2.innerText = "0"
    num3.innerText = "0"
})


res.addEventListener("click", () => {
    boardData = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
        player = 1
        gameOver = false;
    //Reset game board
        box.forEach(box => {
        box.innerHTML = (``)
    })
    playBoard.style.opacity = "1"
    popUp.style.display = "none"
    num1.innerText = "0"
    num2.innerText = "0"
    num3.innerText = "0"
})
