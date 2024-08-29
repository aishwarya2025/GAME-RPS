let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usersc=document.querySelector("#userscore");
const compsc=document.querySelector("#computerscore");
const gencompchoice = () => {
    const options=["rock","paper","scissors"];
    const randid=Math.floor(Math.random()*3);
    return options[randid];
};
const drawGame=()=>{
   // console.log("game was draw");
    msg.innerText="Game was draw, play again";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        usersc.innerText=userScore;

        //console.log("Yu win!");
        msg.innerText="you win";
        
    }else{
        compScore++;
        compsc.innerText=compScore;
        //console.log("you lose");
        msg.innerText="you lose";
    }
}

const playgame=(userchoice)=> {
    //console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
   // console.log("computer choice=",compchoice);
    if(userchoice===compchoice)
    {
        drawGame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"? false:true;


    }else if(userchoice==="paper"){
        userwin=compchoice=="scissors"? false:true;
    }else {
        userwin=compchoice==="rock"? false:true;
    }
    showwinner(userwin,userchoice,compchoice);
    }

};

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        //console.log("choice was selected",userchoice);
        playgame(userchoice);
    });
}
);