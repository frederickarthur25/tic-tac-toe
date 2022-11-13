//O= <img src="icon-o.svg">
//X= <img src="icon-x.svg">
//O= <img src="icon-o-outline.svg">
//X= <img src="icon-x-outline.svg">


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

    botButton.onclick = ()=>{
        mainMain.classList.add("hide"); //hide the main container
        playBoard.style.display = "block"; //show the main container
        marks.style.display = "none" //hide the marks section
    }
}  


//user clicked function
function clickedBox(element){
    //console.log(element);
    if(btn.classList.contains("botButton")){
        element.innerHTML =  `<img src="icon-o.svg">` //adding circle icon tag inside user clicked element
    }else{
        element.innerHTML =  `<img src="icon-x.svg">` ////adding cross icon tag inside user clicked element
    }
    element.style.pointerEvents = "none"; //Once selected cannot be selected again
    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed(); //generating random delay so bot will delay randomly to selct box
    setTimeout(()=>{
        robot(); //CALLING BOT FUNTION
    }, randomDelayTime); //passing random delay time
}

//bot click function
function robot(){
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
        if(btn.classList.contains("botButton")){
            allBox[randomBox].innerHTML =  `<img src="icon-x.svg">` //adding cross icon tag inside user clicked element
        }else{
            allBox[randomBox].innerHTML =  `<img src="icon-o.svg">` //adding circle icon tag inside user clicked element
        }
    } 
    allBox[randomBox].style.pointerEvents = "none" ////Once selected cannot be selected again
}