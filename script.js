let music=new Audio("");
let turnc=new Audio("");
let gameover=new Audio("");
let turn="X";
let isgameover=false;
//fucntion to change the turn
const changeturn=()=>{
    if(turn=="X"){
        return "0";
    }
    else{
        return "X";
    }
}
let color=()=>{
    let t1=Math.floor(Math.random()*256);
    let t2=Math.floor(Math.random()*256);
    let t3=Math.floor(Math.random()*256);
    let rgb=`rgb(${t1},${t2},${t3})`;
    return rgb;
}

//check for win
const checkwin=()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    let wins=[
        [0,1,2,5,5,0],[3,4,5,5,15,0],[6,7,8,5,25,0],[0,3,6,-5,15,90],[1,4,7,55,15,90],[2,5,8,15,15,90],[0,4,8,5,15,226],[2,4,6,5,15,136]
    ];
    wins.forEach((e)=>{
        if(((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML)) && (boxtext[e[0]].innerHTML !== "")){
            document.querySelector(".info").innerHTML=boxtext[e[0]].innerHTML + "won";
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width="20vw";
        }
    })
    
}

//Logic
let boxes=document.querySelectorAll(".box");
Array.from(boxes).forEach((e)=>{
    let boxtext=e.querySelector(".boxtext");
    e.addEventListener("click",(ele)=>{
        e.style.backgroundcolor=color();
        if(boxtext.innerHTML==""){
            boxtext.innerHTML=turn;
            turn=changeturn();
            turnc.play();
            checkwin();
            if(!isgameover){
                document.querySelector(".info").innerHTML="Turn for "+turn;
            }
        }

    })
    // console.log(e);
})
// console.log(boxes);
let reset=document.querySelector("#reset").addEventListener("click",(e)=>{
    let boxtext=document.querySelectorAll(".boxtext");
    document.querySelector(".line").style.width="0";
    Array.from(boxtext).forEach((e)=>{
        e.innerHTML="";
    })
    turn="X";
    isgameover=false;
    document.querySelector(".info").innerHTML="Turn for "+turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
})