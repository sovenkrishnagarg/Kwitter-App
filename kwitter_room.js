user_name = localStorage.getItem("user_name");
document.getElementById("welcome_label").innerHTML += user_name + "!"

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDnbIg1_FY5ewQ0__V-Iys42MfNrP_T6E0",
      authDomain: "c-93-97-kwitter.firebaseapp.com",
      databaseURL: "https://c-93-97-kwitter-default-rtdb.firebaseio.com",
      projectId: "c-93-97-kwitter",
      storageBucket: "c-93-97-kwitter.appspot.com",
      messagingSenderId: "781817823911",
      appId: "1:781817823911:web:9403e8d98d2189f8ec5182"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name = " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;      
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding A Room Name"
      });

      localStorage.setItem("Room Name = ", room_name);

      window.location.replace("kwitter_page.html") ;     
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("Room Name = ", name);
      window.location.replace("kwitter_page.html");
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
      // window.location.replace("index.html");
}