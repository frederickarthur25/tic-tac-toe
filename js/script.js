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
mainCont = document.querySelector(".main-container"),
playButton = document.querySelector("#play"),
botButton = document.querySelector(".bot"),
playBoard = document.querySelector(".play-board")
playArea = document.querySelector(".play-area")
marks = document.querySelector(".marks"),
btn = document.querySelector(".btn"),
allBox = document.querySelectorAll("section button");
box = document.querySelectorAll(".box")
overlay = document.getElementById(".overlay")





//solo mode
playButton.onclick = ()=>{
    mainMain.classList.add("hide"); //hide the main container
    playBoard.style.display = "block"; //show the main container
    marks.style.display = "block" //hide the marks section

    const winCombos = [
        [0,1,2],
        [0,3,6], 
        [2,5,8], 
        [6,7,8], 
        [3,4,5], 
        [1,4,7], 
        [0,4,8], 
        [2,4,6],
    ]

    let turn = true;
    let usedCells = [];
    let winner = false;
    let ties = 0;

    let player1 = {
        symbol : `<img src="icon-x.svg">`,
        played : [],
        score : 0,
    }

    let player2 = {
        symbol : `<img src="icon-o.svg">`,
        played : [],
        score : 0,
    }

    checkTurn()

    for(let i = 0; i < 9; i++){
        box[i].addEventListener("click", () => {
            if(isEmpty(i)){
                if(turn){
                addSymbol(player1, i);
                checkWin(player1)
                turn = false;
                checkTurn()
            }else{
                addSymbol(player2, i);
                checkWin(player2)
                turn = true;
                checkTurn()
            }
        }else{
            alert("choose an empty cell")
        }
            
        })
    }
    
    function addSymbol(player, i){
        box[i].innerHTML = player.symbol;
        player.played.push(i);
        usedCells.push(i);
       }

       function checkWin(player){
        if(!winner){
            winCombos.some(combo => {
                if(combo.every(index => player.played.includes(index))){
                    player.score++;
                    winner = true
                    showScore()
                    playBoard.style.opacity = "0.2"
                    display()
                }
            })
        }
        
        if(!winner && usedCells.length == 9){
            ties++
            showScore()
            playBoard.style.opacity = "0.2"
            display()
        }
       }

       function isEmpty(i){
        if(usedCells.includes(i)){
            return false;
        }
            return true;
       }

       function reset(){
        box.forEach(box => {
            box.innerHTML = "";
        })
        usedCells = [];
        player1.played = [];
        player2.played = [];
        turn = true
        checkTurn()
    }

    res.addEventListener("click", reset);

    function checkTurn(){
        if(turn){
            img.innerHTML = player1.symbol;
        }else{
            img.innerHTML = player2.symbol;
        }
    }

    function showScore(){
        num1.innerHTML = player1.score
        num3.innerHTML = player2.score
        num2.innerHTML = ties;
    }

    function display(){
        if(turn){
            popUpX.style.display = "block"
        }else{
            popUp.style.display = "block"
        }
        if(!winner &&  usedCells.length == 9){
            restart.style.display = "block"
        }
    }


    winNext.addEventListener("click", ()=>{
        box.forEach(box => {
            box.innerHTML = "" 
         })
         playBoard.style.opacity = "1"
         usedCells = [];
         player1.played = [];
         player2.played = [];
         emptyCells = [0,1,2,3,4,5,6,7,8];
         winner = false
         turn = true;
         checkTurn()
         popUpX.style.display = "none"
    }
    )
    
    lostNext.addEventListener("click", ()=>{
        box.forEach(box => {
            box.innerHTML = "" 
         })
         playBoard.style.opacity = "1"
         usedCells = [];
         player1.played = [];
         player2.played = [];
         emptyCells = [0,1,2,3,4,5,6,7,8];
         winner = false
         turn = true;
         checkTurn()
         popUp.style.display = "none"
        })

        restartNext.addEventListener("click", ()=>{
            box.forEach(box => {
                box.innerHTML = "" 
             })
             usedCells = [];
             player1.played = [];
             player2.played = [];
             emptyCells = [0,1,2,3,4,5,6,7,8];
             turn = true;
             checkTurn(turn)
             restart.style.display = "none"
             playBoard.style.opacity = "1"
             popUp.style.display = "none"
            popUpX.style.display = "none"
            }
            )
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





//Multi-player mode
    botButton.onclick = ()=>{
    mainMain.classList.add("hide"); //hide the main container
    playBoard.style.display = "block"; //show the main container
    marks.style.display = "block" //hide the marks section
    
    let ties = 0;
    let score1 = 0;
    let score2 = 0;
    
    
    user1 = {
        symbol : `<img src="icon-x.svg">`,
        played :[],
        score:0
    }
    
    user2 = {
        symbol : `<img src="icon-o.svg">`,
        played :[],
        score:0
    }
    
    let computer = true;
    let winner = false;
    let usedBox = [];
    let emptyCells = [0,1,2,3,4,5,6,7,8];
    let turn = true;
    
       
        checkTurn(turn)
    
        setInterval(bot, 3000);
    
        for (let i = 0; i < box.length; i++){
            box[i].addEventListener("click", () => {
                if(!winner){
                    if(isEmpty(i)){
                        if(turn === true){ 
                            if(!computer){
                                addBoxPlayer(user2, i)
                            checkWin(user2)
                            }
                            
                        }else{
                            addBoxPlayer(user1, i)
                            if(computer){
                                emptyCells.splice(emptyCells.indexOf(i), 1);
                            }
                            checkWin(user1)
                        }
                        checkTurn(turn)
                    }else{
                        alert("choose an empty cell")
                    }
                }
            })
        }
    
    
    
    function checkTurn(turn){
        if(usedBox.length < 9 && !winner){
            if(turn){
                img.innerHTML = user2.symbol
            }else{
                img.innerHTML = user1.symbol
            }
        }else{
            img.innerHTML = ""
        }
    }
    
    let winningCombinations = [
        [0,1,2],
        [0,3,6], 
        [2,5,8], 
        [6,7,8], 
        [3,4,5], 
        [1,4,7], 
        [0,4,8], 
        [2,4,6],
    ];
    
    function checkWin(user){
        if(!winner){
            winningCombinations.some(item => {
                if(item.every((i) => user.played.includes(i))){
                    user.score++;
                    showScore();
                    winner = true;
                    display()
                }
            });
        } 
        if(!winner &&  usedBox.length == 9){
            ties++;
            display()
            showScore();
        }
    }
    
    function isEmpty(i){
        if(usedBox.includes(i)){
            return false;
        }
        return true;
    }
    
    function reset(){
        box.forEach(box => {
           box.innerHTML = "" 
        })
        usedBox = [];
        user1.played = [];
        user2.played = [];
        emptyCells = [0,1,2,3,4,5,6,7,8];
        winner = false
        turn = true;
        checkTurn(turn)
    }
    
    res.addEventListener("click", reset)
    
    
    
    
    function addBoxPlayer(user, i){
        box[i].innerHTML = user.symbol;
        user.played.push(i);
        usedBox.push(i); 
        if(turn === true){turn = false}
        else{turn = true}   
    }
    
    function showScore(){
        num1.innerHTML = user1.score
        num3.innerHTML = user2.score
        num2.innerHTML = ties;
    }
    
    function display(){
        if(turn){
            popUpX.style.display = "block"
        }else{
            popUp.style.display = "block"
        }
        if(!winner &&  usedBox.length == 9){
            restart.style.display = "block"
            restartPara.innerHTML = "ROUND TIED"
        }
    }
    
    
    function bot(){
    if(computer && !winner && turn){
        let random = Math.floor(Math.random() * emptyCells.length);
        addBoxPlayer(user2, emptyCells[random]);
        emptyCells.splice(random,1);
        checkWin(user2);
        checkTurn(turn)
    }
    console.log(emptyCells)
    }
    bot();

    
winNext.addEventListener("click", ()=>{
    box.forEach(box => {
        box.innerHTML = "" 
     })
     usedBox = [];
     user1.played = [];
     user2.played = [];
     emptyCells = [0,1,2,3,4,5,6,7,8];
     winner = false
     turn = true;
     checkTurn(turn)
    popUpX.style.display = "none"
}
)

lostNext.addEventListener("click", ()=>{
    box.forEach(box => {
        box.innerHTML = "" 
     })
     usedBox = [];
     user1.played = [];
     user2.played = [];
     emptyCells = [0,1,2,3,4,5,6,7,8];
     winner = false
     turn = true;
     checkTurn(turn)
    popUp.style.display = "none"
    }
    )


    restartNext.addEventListener("click", ()=>{
        box.forEach(box => {
            box.innerHTML = "" 
         })
         usedBox = [];
         user1.played = [];
         user2.played = [];
         emptyCells = [0,1,2,3,4,5,6,7,8];
         turn = true;
         checkTurn(turn)
         restart.style.display = "none"
         popUp.style.display = "none"
         popUpX.style.display = "none"
        }
        )

    

}






        
        




winQuit.onclick = () => {
    location.reload()
}


lostQuit.onclick = () => {
    location.reload()
}


restartQuit.onclick = () => {
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
    $('.restart-next').on('mouseenter', () =>{
        restartNext.style.backgroundColor = "#FFC860"
    })
})

//removing background color on mouseleave to NEXT ROUND button
$(document).ready(() =>{
    $('.restart-next').on('mouseleave', () =>{
        restartNext.style.backgroundColor = ""
    })
})

//adding background color to QUIT button
$(document).ready(() =>{
    $('.restart-quit').on('mouseenter', () =>{
        restartQuit.style.backgroundColor = "#DBE8ED"
    })
})

$(document).ready(() =>{
    $('.restart-quit').on('mouseleave', () =>{
        restartQuit.style.backgroundColor = ""
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