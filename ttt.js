let butns= document.querySelectorAll(".but");
let reset1= document.querySelectorAll("#reset-but");
let ctr=0;
let turnO=true;

let winCond=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

butns.forEach((but)=>{
    but.addEventListener("click",()=>{
        if(turnO){
            but.innerText="O"
            turnO=false;
        }else{
            but.innerText="X"
            turnO=true;
        }
        but.disabled=true;
        let isWinner=checkWinner();
        ctr++;
        if (ctr==9 && isWinner==false){
            alert("Ohoo, It's a draw!")
        }
    })
})

function checkWinner(){
    for(let cond of winCond){
      let pos1= butns[cond[0]].innerText;
      let pos2= butns[cond[1]].innerText;
      let pos3= butns[cond[2]].innerText;

      if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1 == pos2 && pos2 == pos3){
            setTimeout(declareWinner(pos1),1000);
            return true;
        }else{
            return false;
        }
    }
    }
   
}

function declareWinner(winner){
    alert(`Congratulations, The Winner is ${winner}!!!!`);
    disableBoxes();
}
function disableBoxes(){
    for( let but of butns){
        but.disabled=true;
    }
}
function enableBoxes(){
    for( let but of butns){
        but.disabled=false;
        but.innerText="";
    }
}
function reset(){
    turnO=true;
    enableBoxes();
}