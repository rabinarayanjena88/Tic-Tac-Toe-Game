let boxes=document.querySelectorAll(".box");
let restBtn =document.querySelector("#reset_but");
let newGameBtn = document.querySelector("#new_but");
let msgCointer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        // console.log("box was cliekded");
        if(turno){
            box.innerText ="O";
            box.classList.add("o");
            turno=false;
            
        }
        else{
            box.innerText ="X";
            turno=true;
        }
        box.disabled = true;
        
        chackWinner();
    });
});

const chackWinner = () => {
    for (let pattern of winPatterns) {
       
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    // console.log("winner" , pos1Val);

                    showWinner(pos1Val);
                }
            }
            
    }
};

const showWinner = (winner) => {
   msg.innerText = `Congratulation , Winner is ${winner} ` ;
   msgCointer.classList.remove("hide");
   disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};
const resetGame = () => {
    turno =true;
    enableBoxes();
    msgCointer.classList.add("hide");
};

newGameBtn.addEventListener("click",resetGame);
restBtn.addEventListener("click",resetGame);
