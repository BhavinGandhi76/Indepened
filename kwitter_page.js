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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name, 
          message: msg, 
          like: 0 
      });
      document.getElementById("msg").value="";
  }
  function getdata(){
    firebase.database().ref("/"+room_name).on('value', function(snapshot) 
    { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
     { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      user_name1 = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
     message1 = "<h4 class='message_h4'>" + message + "</h4>";
     like1= "<button class='btn btn-warning'id="+firebase_message_id+" value= "+like+" onclick='updatelike(this.id)'> <span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
     row = user_name1 + message1 + like1;
    document.getElementById("output").innerHTML+=row;
     }
    }
    );
}
    );
}
getdata();
  function updatelike(message_id){
      console.log("message_id");
      likes = document.getElementById(message_id).value;
      updatedlikes = Number(likes)+1;
      console.log(updatedlikes);
  firebase.database().ref(room_name).child(message_id).update({
    like:updatedlikes});
  }

  function logout(){
    window.location = "index.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}   