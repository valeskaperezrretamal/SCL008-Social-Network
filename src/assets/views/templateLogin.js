/*
2- Crear la plantilla estructural del html que representa al login de la red social
Debemos importar la función loginGoogle()
// dos puntos ingresar a otra carpeta y 1 punto entra a esta carpeta

*/
//importar y exportar las vistas, para que se muestren en html
//exportar se va a utilizar de otro archivo
import {loginGoogle} from './../js/auth.js'; // es para ingresar al archivo js  

export const templateLogin = () => {
//creamos div que contendrá el plantilla
const containerLogin = document.createElement ('div');
const contentLogin = `<h4>Ingreso Usuario con Google</h4>
                           <hr>
                           <input id="emailI" type="email" placeholder="Ingresa email">
                           <input id="passwordI" type="password" placeholder="Ingresa contraseña">
                           <button id= "login">Ingresar</button>`;
                           //aqui muestro el codigo para que se vea mi pantalla

//pasar el contenido al div
containerLogin.innerHTML = contentLogin;
const btn = containerLogin.querySelector('#login'); 
// que busque el id que tiene este #login, es pra que busque lo que yo quiero que busque, aun que no sea documento, hasta en hijoss

//evento del botón que llama a la autentificación del google.
btn.addEventListener('click',() => {
console.log (login());
})
//solo 1 vista, la que va a tener el boton con google
return containerLogin; 
}
