import {createAccount} from './..js/auth.js';


export const templateLogin = () => {
    //creamos div que contendrá el plantilla
    const containerCreate = document.createElement ('div');
    const contentLogin = `<p>Login con Google</p>
                          <button id = "create">Loguearlo</button>`;
    
    //pasar el contenido al div
    containerCreate.innerHTML = containerCreate;
    const btn = containerCreate.querySelector('#create'); // que busque el id que tiene este #login, es pra que busque lo que yo quiero que busque, aun que no sea documento, hasta en hijoss
    
    //evento del botón que llama a la autentificacióndel google.
    btn.addEventListener('click',() => {
    console.log (createAccount());
    })
    //solo 1 vista, la que va a tener el boton con google
    return containerCreate; 
    }
    