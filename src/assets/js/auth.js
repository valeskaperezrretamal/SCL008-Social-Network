//autentificación firebase
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

/*
1- Crearemos dos funciones que silumarán el login con Google y la creación de cuenta
*/
//export para exportar la función
export const loginGoogle = () => {
    return 'Login con Google OK';
}

export const createAccount = () => {
    let email = document.getElementById('email').value;
    let contrasena = document.getElementById('contrasena').value
  return  firebase.auth().createUserWithEmailAndPassword(email, contrasena) 
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });;
}
