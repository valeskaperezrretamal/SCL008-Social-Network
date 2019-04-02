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
//function registrar(){
  //var email = document.getElementById('emailR').value;
 // var password = document.getElementById('passwordR').value;
//}
export const login =() => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
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
//////////función de ejemplo para test////////////
export const suma = (a,b) => {
  return a+b;
}
//////////////////////////////////////////////////
