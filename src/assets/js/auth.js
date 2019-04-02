/*
1- Crearemos dos funciones que silumarán el login con Google y la creación de cuenta
*/
//export para exportar la función
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
    .catch(function(error) {// catch es agarrar(este agarra error)
    // maneja los errores aqui.
        var errorCode =alert (error.code);
        var errorMessage = alert(error.message);
       
  });

}
//function registrar(){
  //var email = document.getElementById('emailR').value;
 // var password = document.getElementById('passwordR').value;
//}
export const loginGoogle =() => {
  var provider = new firebase.auth.GoogleAuthProvider();//(aparece en autentificacion de firebase)autenticar a tus usuarios con Firebase mediante sus cuentas de Google es manejar el flujo de acceso con Firebase/Crea una instancia del objeto del proveedor de Google
  firebase.auth().signInWithPopup(provider).then(function(result) { 
   // Esto te da un token de acceso de Google. Puedes usarlo para acceder a la API de Google.
    var token = result.credential.accessToken;
// La información del usuario que ha iniciado sesión.
    var user = result.user;
    // ...
  }).catch(function(error) {
   // Manejar los errores aquí.
    var errorCode = error.code;
    var errorMessage = error.message;
   // El correo electrónico de la cuenta del usuario utilizado.
    var email = error.email;
   // El tipo firebase.auth.AuthCredential que se usó.
    var credential = error.credential;
    // ...
  });
}
export const logout=()=>{
  firebase.auth().signOut().then(function() {
   // Cierre de sesión exitoso.
  }).catch(function(error) {
    // Ha ocurrido un error.
  });
}
//////////función de ejemplo para test////////////
export const suma = (a,b) => {
  return a+b;
}
//////////////////////////////////////////////////
