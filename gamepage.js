Player1 = localStorage.getItem("Player1");
Player2 = localStorage.getItem("Player2");

P1score= 0;
P2score= 0 ;
document.getElementById("player1").innerHTML = Player1 + ":";
document.getElementById("player2").innerHTML = Player2 + ":";
document.getElementById("player1_score").innerHTML = P1score;
document.getElementById("player2_score").innerHTML = P2score;
document.getElementById("player_ques").innerHTML = Player1;
document.getElementById("player_ans").innerHTML = Player2;

function send(){
    get = document.getElementById("word").value ;
    word = get.toLowerCase();
   console.log(word);
   charat1= word.charAt(1);
   console.log(charat1);
   centre= Math.floor(word.length/2);
   charat2= word.charAt(centre);
   console.log(charat2); 
   last= word.length- 1;
   charat3= word.charAt(last);
   console.log(charat3); 
   first= word.replace(charat1, "_");
   second= first.replace(charat2, "_");
   third= second.replace(charat3, "_");
   console.log(third);
   question = "<h4 id='wordDisplay'>Q."+ third +"</h4>";
   input = "<br> Answer: <input id='word2'>";
   check = "<br> <br> <button class='btn btn-info' onclick='Check()'>Check</button>";

   row= question+ input + check;
   document.getElementById("output").innerHTML= row;

   document.getElementById("word").value= "";
}
Question_Turn = "Player1";
Answer_Turn = "Player2";

function Check(){
    getAnswer = document.getElementById("word2").value;
    Answer = getAnswer.toLowerCase();
    console.log(Answer);
    if(Answer==word){
        if(Answer_Turn=="Player1"){
        P1score=P1score + 1;
        document.getElementById("player1_score").innerHTML= P1score;
        }
        else {
            P2score=P2score + 1;
            document.getElementById("player2_score").innerHTML= P2score;
        }
    }
    if(Question_Turn=="Player1"){
        Question_Turn= "Player2";
        document.getElementById("player_ques").innerHTML= Player2;
    }
    else{
        Question_Turn= "Player1";
        document.getElementById("player_ques").innerHTML= Player1;   
    }

    if(Answer_Turn=="Player1"){
        Answer_Turn= "Player2";
        document.getElementById("player_ans").innerHTML= Player2;
    }
    else{
        Answer_Turn= "Player1";
        document.getElementById("player_ans").innerHTML= Player1;   
    }
    document.getElementById("output").innerHTML= "";
}
