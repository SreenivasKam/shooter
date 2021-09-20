var player1score = 0;
var player2score = 0;
function mygame(){    
    mygame1(100,100);
}

function call(){
    delete player1;
    delete player2;
    mygame1(100,100);

}
function mygame1(player1,player2){
    if(player1score >=3 | player2score >=3){
        if(player1score>player2score){
            alert("Player 1 wins final");
            document.getElementById("gameover").classList.remove("invisible");
            document.getElementById("gameover1").classList.remove("invisible");
            document.getElementById("start").classList.add("invisible");
            document.getElementById("restart").classList.add("invisible");
            document.getElementById("gamer").classList.add("invisible");
            return;
        }
        else{
            alert("Player 2 wins final");
            document.getElementById("gameover").classList.remove("invisible");
            document.getElementById("gameover1").classList.remove("invisible");
            document.getElementById("start").classList.add("invisible");
            document.getElementById("restart").classList.add("invisible");
            document.getElementById("gamer").classList.add("invisible");
            return;

        }
    }
    document.getElementById("start").classList.add("invisible");
    document.getElementById("restart").classList.remove("invisible");
    document.getElementById("gamer").classList.remove("invisible");
    document.getElementById("player1").innerHTML="HEALTH : 100";
    document.getElementById("bull").classList.add("lefts");
    document.getElementById("player2").innerHTML="HEALTH : 100";
    setTimeout(() => { alert("Click on Player1 to start");
    var p = Math.floor(Math.random() * 6);
    console.log(p);
    document.getElementById("myBtn1").addEventListener("click", function() {
        document.getElementById("bull").classList.remove("lefts");
        document.getElementById("bull").classList.add("rights");
        player2 = player2-p;
        document.getElementById("player2").innerHTML="HEALTH :" + player2;
        if(player1<1 || player2<1){
            if(player1>player2){
                player1 = undefined;
                player2 = undefined;
                player1score = player1score +1;
                alert("Player1 Win\n              SCOREBOARD\nPlayer1 = "+player1score+"\nPlayer2 = "+player2score);
                call();
            }
            else if(player2>player1){
                player1 = undefined;
                player2 = undefined;
                player2score = player2score +1;
                alert("Player1 Win\n              SCOREBOARD\nPlayer1 = "+player1score+"\nPlayer2 = "+player2score);
                call();
            }
            else{
                alert("Match Draw");
            }
        }else{
            p =  Math.floor(Math.random() * 6);
        }
        console.log(player1);
        });
    document.getElementById("myBtn2").addEventListener("click", function() {
        document.getElementById("bull").classList.add("lefts");
        document.getElementById("bull").classList.remove("rights");
        player1 = player1-p;
        document.getElementById("player1").innerHTML="HEALTH :" + player1;
        console.log(p);
        if(player1<1 || player2<1){
            if(player1>player2){
                player1 = undefined;
                player2 = undefined;
                player1score = player1score +1;
                alert("Player1 Win\n              SCOREBOARD\nPlayer1 = "+player1score+"\nPlayer2 = "+player2score);
                call();
            }
            else if(player2>player1){
                player1 = undefined;
                player2 = undefined;
                player2score = player2score +1;
                alert("Player1 Win\n              SCOREBOARD\nPlayer1 = "+player1score+"\nPlayer2 = "+player2score);
                call();
            }
            else{
                alert("Match Draw");
            }
        }else{
            p =  Math.floor(Math.random() * 6);
        }
        console.log(player2);

    });
    console.log('\n');
 }, 300);

    

}
