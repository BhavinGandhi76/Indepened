function adduser(){
    Player_1= document.getElementById("P1").value;
    Player_2= document.getElementById("P2").value;

    localStorage.setItem("Player1", Player_1);
    localStorage.setItem("Player2", Player_2);

    window.location= "gamepage.html";
}