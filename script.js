//O= <img src="icon-o.svg">
//X= <img src="icon-x.svg">


//Selecting Main Page
let mainMain = document.querySelector(".main-main")
let choose = document.querySelectorAll(".choose")


//How Can We Change Turns
//False => X's Turn
//True => O's Turn 
let changeTurn = null



//Select What You Want To Be
//X or O
choose.forEach(chooseNow =>{
    chooseNow.addEventListener("click" , ()=>{
        if(chooseNow.id === "cpu"){
            changeTurn = false;
            console.log(changeTurn)
        }else{
            changeTurn = true;
            console.log(changeTurn)
        }
    })
})