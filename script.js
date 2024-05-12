let userscore=0;
let compscore=0;
let bodycursor=document.querySelectorAll(".main");
let msgrt=document.querySelector("#msg");
let scoreupdation=document.querySelector("#you1");
let scoreupdation1=document.querySelector("#comp1");


const winners=(flags,times,compchoice)=>{
    if(flags){
        userscore++;
        console.log("you win!");
        msgrt.innerText='YOU WIN!';
        msgrt.style.backgroundColor="green";
        scoreupdation.innerText=userscore;
    }
    else{
        compscore++;
        console.log("you loose!");
        msgrt.innerText='YOU loose!';
        msgrt.style.backgroundColor="red";
        scoreupdation1.innerText=compscore;
        
    }
}
const drawgame=()=>{
    console.log("Game is draw");
    msgrt.innerText="game is draw! play again";
    msgrt.style.backgroundColor="black";
}
const genchoice=()=>{
    const options =["rock", "paper" ,"scissors"];
    const randix=Math.floor(Math.random()*3);
    return options[randix];
}

const playgame=(times)=>{
    console.log("userchoice:", times);
    const compchoice=genchoice();
    console.log("compchoice:", compchoice);
    if(times===compchoice){
        drawgame();
    }
    else{
        let flag=true;
        if(times==="rock"){
            if(compchoice==="scissors"){
                flag=true;

            }
            else{
                flag=false;
            }

        }
        else if(times==="scissors"){
            if(compchoice==="paper"){
                flag=true;
            }
            else{
                flag=false;
            }

        }
        else{
            if(compchoice==="rock"){
                flag=true;
            }
            else{
                flag=false;
            }
        }
        winners(flag,times,compchoice);
    }
    
}
bodycursor.forEach((main)=>{
    main.addEventListener("click",() =>{
        let times=main.getAttribute("id");
        playgame(times);
    })
})