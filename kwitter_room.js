
var firebaseConfig = {
      apiKey: "AIzaSyCx_ORc5f_vNaldOJeqsKlhPWH-DrSVx5g",
      authDomain: "practise-9efe9.firebaseapp.com",
      databaseURL: "https://practise-9efe9-default-rtdb.firebaseio.com",
      projectId: "practise-9efe9",
      storageBucket: "practise-9efe9.appspot.com",
      messagingSenderId: "1058186284114",
      appId: "1:1058186284114:web:a6614d369c65cec177e38b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    function addroom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
            purpose:"adding roomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
      output = "<div id= "+Room_names+" class='room_name' onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=output;
      });});}
getData();

function logout(){
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}

function redirect(name){
      console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";

}