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
const contentLogin = `<p>Login con Google</p>
                    <button id= "login">Loguearlo</button>`;

//pasar el contenido al div
containerLogin.innerHTML = contentLogin;
const btn = containerLogin.querySelector('#login'); // que busque el id que tiene este #login, es pra que busque lo que yo quiero que busque, aun que no sea documento, hasta en hijoss

//evento del botón que llama a la autentificacióndel google.
btn.addEventListener('click',() => {
console.log (loginGoogle());
})
//solo 1 vista, la que va a tener el boton con google
return containerLogin; 
}
