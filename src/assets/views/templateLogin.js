/*
2- Crear la plantilla estructural del html que representa al login de la red social
Debemos importar la función loginGoogle()
// dos puntos ingresar a otra carpeta y 1 punto entra a esta carpeta

*/
//importar y exportar las vistas, para que se muestren en html
//exportar se va a utilizar de otro archivo
import {loginGoogle} from './../js/auth.js'; // es para ingresar al archivo js  

export const templateLogin = () => {
//creamos div que contendrá en plantilla
const containerLogin = document.createElement('div');
const contentLogin = `
                           <ul id = "heading">
                           <div  class="logo">
                               <img src="assets/img/logo.png" style="width:250px" alt=""> 
                               </div>
                           <div class="imagen">
                               <img src="assets/img/nutricion_gr.jpg" alt="">
                           </div>
                           <div class="green">
                           <ul id = "tabla">
                                <li> <a >inicia sesion</a>  

                                </li>
                               <li>
                                   <a href="#/logingoogle" id="logingoogle">Ingreso Usuario con Google</a>
                               </li>
                               <li>
                                   <a href="#/create">Registro Usuario</a>
                               </li>
                           </ul>
                           
                           <ul id="menu-bottom">
                                   
                                   <li><a href="#/profile">Mi perfil</a></li>
                                   <li><a href="#/articles">Temas de Interes</a></li>
                           </ul>
                           </div>`;

//pasar el contenido al div
containerLogin.innerHTML = contentLogin;
const btn = containerLogin.querySelector('#logingoogle'); 
// que busque el id que tiene este #login, es para que busque lo que yo quiero que busque, aun que no sea documento, hasta en hijoss

//evento del botón que llama a la autentificación del google.
btn.addEventListener('click',() => {
    loginGoogle();
})
//solo 1 vista, la que va a tener el boton con google
return containerLogin; 
}
