
 //solo vs computer
 botButton.onclick = ()=>{
    mainMain.classList.add("hide"); //hide the main container
    playBoard.style.display = "block"; //show the main container
    marks.style.display = "block" //hide the marks section
    
    

    function setHover(){
        //remove all hover
        boxes.forEach(box=>{
            box.classList.remove("x-hover")
            box.classList.remove("o-hover")
        });
        const hoverClassX = "x-hover"
        const hoverClassO = "o-hover"
        boxes.forEach(box=>{
            if(turn){
                if(box.innerHTML == ""){
                    box.classList.add(hoverClassX)
                }
            }
            if(!turn){
                if(box.innerHTML == ""){
                    box.classList.add(hoverClassO)
                }
            }
        })
    }
    
    setHover()
    checkTurn()
    startGame()
     var origBoard;
     const huPlayer = `<img src="icon-x.svg"></img>`;
     const aiPlayer = `<img src="icon-o.svg"></img>`;
     let ties = 0;
     let aiScore = 0;

     // Combo of ID of Squares to Win
    let winningCombinations = [
        [0,1,2],
        [0,3,6], 
        [2,5,8], 
        [6,7,8], 
        [3,4,5], 
        [1,4,7], 
        [0,4,8], 
        [6,4,2],
    ];

    // Resets the Board
    function startGame() {
        origBoard = Array.from(Array(9).keys());
        for(var i = 0;i < boxes.length; i++){
            if(turn){
                boxes[i].innerHTML = '';
            boxes[i].addEventListener('click', turnClick, false );
            }
        }
    }

    // Starts Turns Based on Human Click
    function turnClick(square) {
        if(typeof origBoard[square.target.id] == 'number'){
            tap(square.target.id, huPlayer)
            checkTurn()
            if(!checkTie()) 
                    tap(bestSpot(), aiPlayer)
        }
        setHover()
    }

    // Executes Turn
    function tap(squareId, player){
        origBoard[squareId] = player;
        document.getElementById(squareId).innerHTML = player;
        let gameWon = checkWin(origBoard, player)
        if(gameWon) {gameOver(gameWon);
        }
    }

    // Checks for a Winner
    function checkWin(board, player){
            let plays = [];
            let gameWon = null;
            for(let i = 0; i < board.length; i++) {
                if(board[i] === player){
                   plays.push(i);
                }
            }
           for (let i = 0; i < winningCombinations.length; i++){
            if (plays.includes(winningCombinations[i][0]) && plays.includes(winningCombinations[i][1]) && plays.includes(winningCombinations[i][2])) {
                gameWon = {i, player};
                aiScore++;
                break;
                
            }
            
           }  
           return gameWon  
    }


    // Stops the game and outputs result
    function gameOver(gameWon){
        for (let i of winningCombinations[gameWon.i]){
            document.getElementById(i).style.backgroundColor =
            gameWon.player == huPlayer ? "" : "#CC8B13";
            document.getElementById(i).innerHTML =
            gameWon.player == huPlayer ? `<img src="icon-x.svg"></img>` : `<img src="Black_circle.png">`;
        }
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].removeEventListener('click', turnClick, false)
        }
            
            display();
            showScore();
            mainCont.classList.add("overlay")
    }

    

    // Returns number of empty spots on board
    function emptySquares(){
        return origBoard.filter((s) => typeof s == 'number');
    }

    // AI uses minimax algorithm to find the best spot
    function bestSpot(){
        return minimax(origBoard, aiPlayer).index;
    }

    // Checks for any tie
    function checkTie(){
        if (emptySquares().length == 0) {
            ties++;
            mainCont.classList.add("overlay")
            for(var i = 0; i < boxes.length; i++){
                boxes[i].removeEventListener('click', turnClick, false);
                setHover();
                showScore();
            }
            display()
            return true;
        }
        return false
    }

    // Minimax Algorithm
    function minimax(board, player){
        var availSpots = emptySquares();
        if (checkWin(board, player)){
            return {score: -10};
        }else if (checkWin(board, aiPlayer)){
            return {score: 10};
        }else if (availSpots.length === 0){
            return {score: 0};
        }
        var moves = [];
        for(var i = 0; i < availSpots.length; i++){
            var move = {};
            move.index = board[availSpots[i]];
            board[availSpots[i]] = player;

            if (player == aiPlayer){
                var result = minimax(board, huPlayer);
                move.score = result.score;
            }else{
                var result = minimax(board, aiPlayer);
                move.score = result.score;
            }
            board[availSpots[i]] = move.index;

            moves.push(move);
        }

        var bestMove;
        if (player === aiPlayer){
            var bestScore = -Infinity;
            for(var i = 0; i < moves.length; i++){
                if (moves[i].score > bestScore){
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }else{
            var bestScore = Infinity;
            for(var i = 0; i < moves.length; i++){
                if (moves[i].score < bestScore){
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }

        return moves[bestMove];
    }


    function checkTurn(){
        if(turn){
            img.innerHTML = `<img src="icon-x.svg"></img>`;
        }else{
            img.innerHTML = `<img src="icon-o.svg"></img>`;
        }
    }
    
    
    

    res.addEventListener("click", reset)

    function reset(){
        winner = false;
        turn = true;
        checkTurn(turn);
        restart.style.display = "block";
    }
    

    function showScore(){//show score after a game has been won or drawn
        num3.innerHTML = aiScore
        num2.innerHTML = ties;
    }
    
 
    function display(){
        if(turn){
            popUp.style.display = "block"
            restart.style.display = "none"
        }else{
            popUp.style.display = "none"
            popUpX.style.display = "block"
        }
        if(emptySquares().length == 0){
            restart.style.display = "block"
            restartPara.innerHTML = "ROUND TIED"
            restartQuit.innerHTML = "QUIT"
            restartQuit.style.width = "76px"
            restartQuit.style.height = "52px"
            restartNext.innerText = "NEXT ROUND"
        }
    }


    winNext.addEventListener("click", ()=>{
    boxes.forEach(box => {
        box.style.backgroundColor = ''
     })
     startGame()
     turn = true;
     checkTurn(turn)
     popUpX.style.display = "none"
     mainCont.classList.remove("overlay")
     setHover()
     playBoard.classList.remove('inactiveBoard')
    })



    lostNext.addEventListener("click", ()=>{
        boxes.forEach(box => {
            box.style.backgroundColor = ''
         })
         startGame()
         turn = true;
         checkTurn(turn)
         popUp.style.display = "none"
         mainCont.classList.remove("overlay")
         setHover()
         playBoard.classList.remove('inactiveBoard')
    })


    restartNext.addEventListener("click", ()=>{
        boxes.forEach(box => {
            box.style.backgroundColor = ''
         })
         startGame()
         turn = true;
         checkTurn(turn)
         restart.style.display = "none"
         popUp.style.display = "none"
         mainCont.classList.remove("overlay")
         setHover()
         playBoard.classList.remove('inactiveBoard')
        })
}
