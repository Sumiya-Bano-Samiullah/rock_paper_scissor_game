let userScore=0;
let compScore=0;
let cmSc=document.querySelector("#comp-score");
let useSc=document.querySelector("#user-score");
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const showWinner=(userWin,compChoice)=>{
    if(userWin){
        userScore++;
        useSc.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`Congratulations!You Win computer choice ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        cmSc.innerText=compScore;
        console.log("You Loss!");
        msg.innerText=`You Loss! computer choice ${compChoice}`;
        msg.style.backgroundColor="red";
    }
};
const drawGame=()=>{
    console.log("Game Draw");
    msg.innerText="Game Draw. Play again!";
        msg.style.backgroundColor="#081b31";
};
const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let randInd=Math.floor(Math.random()*3);
    return options[randInd];

};
const playGame=(userChoice)=>{
    console.log("choice has clicked",userChoice);
    const compChoice=genCompChoice();
    console.log(compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
           userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,compChoice);

        }
    };


choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
   
    playGame(userChoice);
    });
});
