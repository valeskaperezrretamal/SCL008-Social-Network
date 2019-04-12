import {templateLogin} from './../views/templateLogin.js';

export const createAccount = (name,address,city,mail,password) => {//te lo va a crear en el autentificacion
    firebase.auth().createUserWithEmailAndPassword(mail, password)
    .then(res => {
      console.log(res);
      // Aqui llamar funcion registrarUsuario(name, address, city, mail, password, res.uid);

    })
    
    .catch(function(error) {// catch es agarrar(este agarra error)
    // maneja los errores aqui.
        var errorCode =alert (error.code);
        var errorMessage = alert(error.message);
       
  });
  firebase.auth().onAuthStateChanged(function(user) { // escucha de quien se creo
    if (user) {// si esta activo
      firebase.database().ref('users/' + user.uid).set({
        username: name, // aqui tu le das lo que quieres que te guarde en database
        address:address,
        city:city,
        email: mail, 
       
      });
    }
      // User is signed in.
     else {
      // No user is signed in.
    }
  });
}


export const loginGoogle =() => {
  var provider = new firebase.auth.GoogleAuthProvider();//(aparece en autentificacion de firebase)autenticar a tus usuarios con Firebase mediante sus cuentas de Google es manejar el flujo de acceso con Firebase/Crea una instancia del objeto del proveedor de Google
  firebase.auth().signInWithPopup(provider)
  .then(function(result) { 
   // Esto te da un token de acceso de Google. Puedes usarlo para acceder a la API de Google.
    var token = result.credential.accessToken;
    var user = result.user;
    firebase.auth().onAuthStateChanged(function(user) { // escucha quien en google
      if (user) {// si esta activo
        firebase.database().ref('users/' + user.uid).set({
          username: user.displayName,
          email: user.email, 
         
        });
      } 
      else {

      }
})
  .catch(function(error) {
   // Manejar los errores aquí.
    var errorCode = error.code;
    var errorMessage = error.message;
   // El correo electrónico de la cuenta del usuario utilizado.
    var email = error.email;
   // El tipo firebase.auth.AuthCredential que se usó.
    var credential = error.credential;
    // ...
  });
});
};

export const logout=()=>{
  firebase.auth().signOut().then(function() {
    document.getElementById('root').appendChild(templateLogin());

  }).catch(function(error) {
    // Ha ocurrido un error.
  });
};

export const login=(email,password)=>{
firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
    var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    
  } else {
    
  }
  
});
}