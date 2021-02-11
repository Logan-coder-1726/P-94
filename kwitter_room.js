
//ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCvBUFMc8b91rHamWlq-cZ0vbXjV9BWpZ4",
    authDomain: "bfjehgfsghgv.firebaseapp.com",
    databaseURL: "https://bfjehgfsghgv.firebaseio.com",
    projectId: "bfjehgfsghgv",
    storageBucket: "bfjehgfsghgv.appspot.com",
    messagingSenderId: "553168405535",
    appId: "1:553168405535:web:49c31c6438dd40f770012a",
    measurementId: "G-JQPVGN7MVW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
  function addUser()
  {
user_name= document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
   purpose: "adding user" 
});
  }


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

