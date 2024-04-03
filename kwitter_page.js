user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDnbIg1_FY5ewQ0__V-Iys42MfNrP_T6E0",
      authDomain: "c-93-97-kwitter.firebaseapp.com",
      databaseURL: "https://c-93-97-kwitter-default-rtdb.firebaseio.com",
      projectId: "c-93-97-kwitter",
      storageBucket: "c-93-97-kwitter.appspot.com",
      messagingSenderId: "781817823911",
      appId: "1:781817823911:web:0803904cf33168b3ec5182"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
      row = name_with_tag + message_with_tag + like_button + span_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      console.log(msg);
      
      firebase.database().ref(room_name).push({
            name: user_name,
            meassage: msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function updateLike(meassage_id){
      console.log("Clicked On Like Button - " + meassage_id);
      button_id = meassage_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updateLike);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}