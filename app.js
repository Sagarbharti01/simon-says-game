let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple","green"];

let started = false;
let level = 0;
let maxScore = 0;

let h2 = document.querySelector("h2");
let maxScoreDisplay = document.querySelector(".maxScore");

document.addEventListener("keypress", function(){
    if(started === false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});
 
function btnFlash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");
        },250);
    }

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    if(level > maxScore){
        maxScore = level;
        maxScoreDisplay.innerText= `Max Score : ${maxScore}`;
    }

   let randomIdx = Math.floor(Math.random() * 4);
   let randomColor = btns[randomIdx];
   let randomBtn = document.querySelector(`.${randomColor}`);
   gameSeq.push(randomColor);
   console.log(gameSeq);
    btnFlash(randomBtn);
}

function checkAns(idx){
    if(userSeq[idx] ===  gameSeq[idx]) {
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
            h2.innerHTML= `Game Over! ,Your score was <b>${level}</b><br> Press any key to start.`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function() {
                document.querySelector("body").style.backgroundColor = "white";
            }, 150);
            reset();
        }
     }

function btnpress(){

    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

document.addEventListener("DOMContentLoaded", function(){
    const videoFrame = document.getElementById('youtube-video');
});