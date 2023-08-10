let turn="X"
//Function to change the turn
const changeturn = () =>{
    return turn === "X"? "0": "X";
}
let gameover=false;
let f=0,c=0;
//Function to check for winner
const winner= () =>{
    let boxtxt=document.getElementsByClassName("boxtxt");
    let win=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [0,4,8,5,15,45],
        [2,5,8,15,15,90],
        [2,4,6,5,15,135],

    ]
    win.forEach(e=>{
        if((boxtxt[e[0]].innerText===boxtxt[e[1]].innerText) && (boxtxt[e[2]].innerText===boxtxt[e[1]].innerText) && (boxtxt[e[0]].innerText!=="") )
        {
            f=1;
            document.getElementsByClassName("info")[0].innerText=boxtxt[e[0]].innerText+" Won";
            gameover=true;
            document.getElementById("image").style.width ="150px";
            document.getElementById("line").style.width="20vw";    
            document.getElementById("line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;    
        }
    })

}

//game logic
let h=document.getElementsByClassName("boxtxt");
console.log(h[2]);

let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtxt=element.querySelector('.boxtxt');
    element.addEventListener('click',()=>{
        if(boxtxt.innerText==='')
        {
            boxtxt.innerText=turn;
            turn=changeturn();
            winner();
             c++;
            
            if(!gameover && c!=9 && f!=1)
            document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            else if(c==9 && f==0){
                document.getElementsByClassName("info")[0].innerText="Draw"
                let boxtxt=document.querySelectorAll('.boxtxt');
                Array.from(boxtxt).forEach(element=>{
                   element.innerText="";  
                })
                c=0;

             }
        
        }
    })
})

//reset
let reset=document.getElementById("reset")
 reset.addEventListener('click', ()=> {
      let boxtxt=document.querySelectorAll('.boxtxt');
      Array.from(boxtxt).forEach(element=>{
         element.innerText="";  
      })
      gameover=false;
      turn="X";
      document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
      document.getElementById("image").style.width ="0px";
      document.getElementById("line").style.width="0"; 

 })