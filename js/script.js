//O= <img src="icon-o.svg">
//X= <img src="icon-x.svg">
//O= <img src="icon-o-outline.svg">
//X= <img src="icon-x-outline.svg">


//Selecting "Outcome" Tags
let popUp = document.querySelector(".popup")
let lostQuit = document.querySelector(".lost-quit")
let lostNext = document.querySelector(".lost-next")
let popUpX = document.querySelector(".popup-x")
let winQuit = document.querySelector(".win-quit")
let winNext = document.querySelector(".win-next")
let restartQuit = document.querySelector(".restart-quit")
let restartNext = document.querySelector(".restart-next")
let res = document.querySelector(".res")
let num1 = document.querySelector(".num1")
let num2 = document.querySelector(".num2")
let num3 = document.querySelector(".num3")
let img = document.querySelector(".img")
mainMain = document.querySelector(".main-main"),
mainCont = document.querySelector(".main-container"),
playButton = document.querySelector("#play"),
botButton = document.querySelector(".bot"),
playBoard = document.querySelector(".play-board")
marks = document.querySelector(".marks"),
boxes = document.querySelectorAll(".box")
fig1 = document.querySelector(".fig-1")
fig2 = document.querySelector(".fig-2")
playerActive = document.querySelector(".player-2 p")
overlay = document.getElementById("#overlay")
slider = document.querySelector(".slider")



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




change = true;
turn = true;

slider.onclick = () =>{//slider to show whether either "X" or "O" has togo first
    if(change){
        slider.classList.add("active");
        iconX.classList.add("active")
        iconO.classList.add("active")
        change = false
        playerActive.innerText ="Remember: O goes first"
    }else{
        slider.classList.remove("active");
        iconX.classList.remove("active");
        iconO.classList.remove("active")
        change = true
        playerActive.innerText ="Remember: X goes first"
    }
}

//multiplayer
playButton.onclick = ()=>{
    mainMain.classList.add("hide"); //hide the main container
    playBoard.style.display = "block"; //show the main container
    marks.style.display = "block" //hide the marks section
    fig1.innerText = "X (P2)"
    fig2.innerText = "O (P1)"

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

 //Hover style for box when a user tries to click on a box
    boxes.forEach(items => {
    items.addEventListener("mouseenter", () => {
        if(turn !== false){
            items.innerHTML = `<img src="icon-x-outline.svg">`
            turn = true;
        }else{
            items.innerHTML = `<img src="icon-o-outline.svg">`
            turn = false;
        }
    })
})

    boxes.forEach(items => {
    items.addEventListener("mouseleave", () => {
        if(turn == false){
            items.innerHTML = ``
        }else{
            items.innerHTML = ``
        }
    })
})
    

    for(let i = 0; i < 9; i++){//adding symbols to cells
        boxes[i].addEventListener("click", () => {
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
            checkTurn()
        }else{
            alert("choose an empty cell")
        } 
        })
    }

    
    function addSymbol(player, i){
        boxes[i].innerHTML = player.symbol;
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
                    mainCont.classList.add("overlay")
                    display()  
                }
            })
        }
        if(!winner && usedCells.length == 9){
            ties++
            showScore()
            mainCont.classList.add("overlay")
            display()
        }
        return true
    }

       function isEmpty(i){
        if(usedCells.includes(i)){
            return false;
        }
            return true;
    }

       function reset(){
        boxes.forEach(box => {
            box.innerHTML = "";
        })
        winner = false;
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
        boxes.forEach(box => {
            box.innerHTML = "" 
         })
         playBoard.style.opacity = "1"
         usedCells = [];
         player1.played = [];
         player2.played = [];
         emptyCells = [0,1,2,3,4,5,6,7,8];
         winner = false
         mainCont.classList.remove("overlay")
         turn = true;
         checkTurn()
         popUpX.style.display = "none"
    })
    
    lostNext.addEventListener("click", ()=>{
        boxes.forEach(box => {
            box.innerHTML = "" 
         })
         playBoard.style.opacity = "1"
         usedCells = [];
         player1.played = [];
         player2.played = [];
         emptyCells = [0,1,2,3,4,5,6,7,8];
         turn = true;
         checkTurn()
         winner = false;
         popUp.style.display = "none"
         mainCont.classList.remove("overlay")
    })

    restartNext.addEventListener("click", ()=>{
            boxes.forEach(box => {
                box.innerHTML = "" 
             })
             usedCells = [];
             player1.played = [];
             player2.played = [];
             emptyCells = [0,1,2,3,4,5,6,7,8];
             turn = true;
             winner = false;
             checkTurn(turn)
             mainCont.classList.remove("overlay")
             restart.style.display = "none"
             playBoard.style.opacity = "1"
             popUp.style.display = "none"
             popUpX.style.display = "none"
    })
}




//solo vs computer
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
    
        for (let i = 0; i < boxes.length; i++){
            boxes[i].addEventListener("click", () => {
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
                    mainCont.classList.add("overlay")
                }
            });
        } 
        if(!winner &&  usedBox.length == 9){
            ties++;
            display()
            showScore();
            mainCont.classList.add("overlay")
        }
    }
    
    function isEmpty(i){
        if(usedBox.includes(i)){
            return false;
        }
        return true;
    }
    
    function reset(){
        boxes.forEach(box => {
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
        boxes[i].innerHTML = user.symbol;
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
    
    
    function bot(){ //ading a bot function
    if(computer && !winner && turn){
        let random = Math.floor(Math.random() * emptyCells.length);
        addBoxPlayer(user2, emptyCells[random]);
        emptyCells.splice(random,1);
        checkWin(user2);
        checkTurn(turn)
    }
    //console.log(emptyCells)
    }
    bot();

    winNext.addEventListener("click", ()=>{
    boxes.forEach(box => {
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
     mainCont.classList.remove("overlay")
    })

    lostNext.addEventListener("click", ()=>{
    boxes.forEach(box => {
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
    mainCont.classList.remove("overlay")
    })


    restartNext.addEventListener("click", ()=>{
        boxes.forEach(box => {
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
         mainCont.classList.remove("overlay")
        })
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