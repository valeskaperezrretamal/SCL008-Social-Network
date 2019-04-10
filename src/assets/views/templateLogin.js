/*
2- Crear la plantilla estructural del html que representa al login de la red social
Debemos importar la función loginGoogle()
// dos puntos ingresar a otra carpeta y 1 punto entra a esta carpeta

*/
//importar y exportar las vistas, para que se muestren en html
//exportar se va a utilizar de otro archivo
  

export const templateLogin = () => {
//creamos div que contendrá en plantilla
const containerLogin = document.createElement('div');
const contentLogin = `
                           
                          
                          
                           <div class="green">
                                <img src="assets/img/logo.png" alt=""> 
                           <ul>
                                <li> <a href="#/loginwithoutgoogle">inicia sesion</a> </li>
                               <li> <a href="#/logingoogle"><img id="google" src="http://www.stickpng.com/assets/images/5a951939c4ffc33e8c148af2.png">Ingresa con Google</a> </li>
                               <li><a href="#/create">Registro Usuario</a> </li>
                           </ul>                       
                           
                           </div>`;

//pasar el contenido al div
containerLogin.innerHTML = contentLogin;

//solo 1 vista, la que va a tener el boton con google
return containerLogin; 
}

