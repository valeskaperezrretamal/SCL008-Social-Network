//autentificación firebase

/*
1- Crearemos dos funciones que silumarán el login con Google y la creación de cuenta
*/
//export para exportar la función
export const loginGoogle = () => {
  console.log('Login con Google OK');
    return login();
}

export const createAccount = () => {
  return  firebase.auth().createUserWithEmailAndPassword(emailR, passwordR).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });;
}

// Initialize Firebase
var config = {
  apiKey: "AIzaSyASsH_R0MR7LTLDQEoXFWjjbmLHpz5d790",
  authDomain: "bacan-network-s.firebaseapp.com",
  databaseURL: "https://bacan-network-s.firebaseio.com",
  projectId: "bacan-network-s",
  storageBucket: "bacan-network-s.appspot.com",
  messagingSenderId: "758434856794"
};
firebase.initializeApp(config);

export const acount = () => {
    let mail = document.getElementById('email').value;
    let password = document.getElementById('contrasena').value;
    console.log(mail);
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(mail, password)
    .catch(function(error) {
    // Handle Errors here.
        var errorCode =alert (error.code);
        var errorMessage = alert(error.message);
    // ...
  });

}
function registrar(){
  var email = document.getElementById('emailR').value;
  var password = document.getElementById('passwordR').value;
}



function login() {
  var email = document.getElementById('emailI').value;
  var password = document.getElementById('passwordI').value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

}
export const logout=()=>{
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}