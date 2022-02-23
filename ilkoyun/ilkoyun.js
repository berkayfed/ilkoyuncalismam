const time = document.querySelector(".time");
const button = document.getElementById("button");
const startcont = document.querySelector(".startcont")
const gamemain = document.querySelector(".gamemain")
const boxdiv = document.getElementsByClassName("box")
const scoreboard = document.querySelector(".score")

button.addEventListener("click",game)
button.addEventListener("click",gamestart)




/**
KRONOMETRE * 
**/
function game(){
        

     const interval = setInterval(rnumb,1000)
    function rnumb() {
         random = Math.floor(Math.random()*9 )
        
    }

    
    
    var sayılar = []
    
    let sayaç =10;
    let score = 0;

    const point = setInterval(function(){
        rnumb()
        boxdiv[random].addEventListener("click",function(){
            score++
            scoreboard.innerHTML=`Score: ${score}`
        })

    },1000)
        
    
    
    
    const tekrar = setInterval(tekr,1000)
    function tekr(){
        rnumb()
        sayılar.push(random)
        son = sayılar[sayılar.length - 1]
        sononce = sayılar[sayılar.length - 2]
        if(time.innerHTML!=="Time is Up"){
            boxdiv[son].classList.add("red");
            boxdiv[sononce].classList.remove("red");
        }
    }


    const id = setInterval(kron,1000)
    function kron(){
        if(sayaç == 0){
            time.innerHTML="Time is Up"
            clearInterval(id,tekrar,point,interval)
        }else{
            sayaç--
            time.innerHTML=`TimeLeft: ${sayaç}`
        }
    }
}







function gamestart(){
    startcont.remove()

    const game = document.createElement("div");
    game.className="game";
    const box1 = document.createElement("div");
    box1.className="box";
    box1.id="1";
    const box2 = document.createElement("div");
    box2.className="box";
    box2.id="2"
    const box3 = document.createElement("div");
    box3.className="box";
    box3.id="3"
    const box4 = document.createElement("div");
    box4.className="box";
    box4.id="4"
    const box5 = document.createElement("div");
    box5.className="box";
    box5.id="5"
    const box6 = document.createElement("div");
    box6.className="box";
    box6.id="6"
    const box7 = document.createElement("div");
    box7.className="box";
    box7.id="7"
    const box8 = document.createElement("div");
    box8.className="box";
    box8.id="8"
    const box9 = document.createElement("div");
    box9.className="box";
    box9.id="9"

    game.appendChild(box1);
    game.appendChild(box2);
    game.appendChild(box3);
    game.appendChild(box4);
    game.appendChild(box5);
    game.appendChild(box6);
    game.appendChild(box7);
    game.appendChild(box8);
    game.appendChild(box9);
    gamemain.appendChild(game);


}
