/*
1- Crearemos dos funciones que silumarán el login con Google y la creación de cuenta
*/
//export para exportar la función
export const loginGoogle = () => {
  console.log('Login con Google OK');
    return login();
}

//export const  = () => {
  //  let email = document.getElementById('email').value;
   // let contrasena = document.getElementById('contrasena').value
  //return  firebase.auth().createUserWithEmailAndPassword(email, contrasena) 
  //.catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    //var errorMessage = error.message;
    // ...
 // });;
//}

export const createAccount = () => {
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
