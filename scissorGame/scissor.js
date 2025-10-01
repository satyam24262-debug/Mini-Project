const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;
const uS = document.querySelector("#user_score");
const cS = document.querySelector("#comp_score");

 const genComp=()=>{
const comChoice = ["scissors","paper","rock"];
 const idx = Math.floor(Math.random()*3);
 return comChoice[idx];
};


const  showWinner = (userWin,choiceId,compChoice) =>{
             if(userWin){
                msg.innerHTML = `Your choice ${choiceId} beats the comp choice ${compChoice}`;
                msg.style.backgroundColor = "green";
                userScore++;
                uS.innerHTML = userScore;
             }      
             else{
                msg.innerHTML = `Comp choice ${compChoice} beats your choice ${choiceId}`;
                msg.style.backgroundColor = "red";
                compScore++;
                cS.innerHTML =compScore;
             }
};


const drawGame = ()=>{
    msg.innerHTML = "Draw The Game , Try Again";
    msg.style.backgroundColor = "black";
};


const playGame=(choiceId)=>{
     const compChoice = genComp();
     if(choiceId === compChoice){
        drawGame();
     }
     else{
        let userWin = true;
        if(choiceId === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }
        else if(choiceId ==="paper"){
            userWin = compChoice ==="scissors"? false:true;
        }
        else{
            userWin = compChoice === "rock" ? false:true;
        }
     showWinner(userWin,choiceId,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
let choiceId = choice.getAttribute("id");
playGame(choiceId);
    })
});