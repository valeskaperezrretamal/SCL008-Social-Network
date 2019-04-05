import {createAccount} from './../js/auth.js';


export const templateCreate = () => {
    //creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    const contentCreate = `
     
                           <div  class="logo">
                               <img src="assets/img/logo.png" style="width:250px" alt=""> 
                           ´</div>
                           <div class="imagen">
                               <img src="assets/img/nutricion_gr.jpg" alt="">
                           </div>
                           <div class="green"><h4>Registro Usuario</h4>
                               <ul id = "heading">
                           <hr>
                         
                           <input id="nombre" type="text" placeholder="Nombre Completo">
                           <input id="direccion" type="text" placeholder="Direccion Completa">
                           <input id="ciudad" type="text" placeholder="Indica tu ciudad">
                           <input id="email" type="email" placeholder="Ingresa email">
                           <input id="contrasena" type="password" placeholder="Ingresa contraseña">
                           <button id= "create">Registrar</button>
                           </div>`;
                         //aqui muestro el codigo para que se vea mi pantalla
    
    //pasar el contenido al div
    containerCreate.innerHTML = contentCreate;
    const btn = containerCreate.querySelector('#create'); // que busque el id que tiene este #login, es pra que busque lo que yo quiero que busque, aun que no sea documento, hasta en hijoss
    
    //evento del botón que llama a la autentificación de google.
    btn.addEventListener('click',() => {
        createAccount();
    })
    //solo 1 vista, la que va a tener el boton con google
    return containerCreate; 
    }
     