import {templateLogin} from './assets/views/templateLogin.js';
import{templateCreate} from './assert/views/templateCreate.js';

/*
crear una función que reciba el hash (#) y segu n el match o la cooincidencia retorne otra 
función que se va a encargar de imprimir el template en nuestro html
*/

const changeRouter =(hash) => {
    if(hash === '#/login'){
        return showTemplate(hash);
    }
    if (hash == '#/create'){
        return showTemplate(hash);
    }
}

//imprimirá el template en html
const showTemplate = (hash) => {
const router = hash.substring(2); //para que saque el # y tome solo login no #login
const containerRoot = document.getElementById('root');
containerRoot.innerHTML= "";

//hacemos match del hash utilizado y el template que quiero mostar
switch (router){
    case 'login':
    containerRoot.appendChild(templateLogin());
    break;
    case 'create':
    containerRoot.appendChild(templateCreate());
    break;
    default:
    containerRoot.innerHTML = '<p>Error 404</p>'
    }
}
//inicializar las rutas para que se ejecute changeRouter() y en su defecto showTemplate ()


 export const initRouter = () =>{ 
    window.addEventListener('load', changeRouter // le poedimos que escuche una "carga" osea una vez que se carge  y como parametro le pasamos el # que tenga como evento una vez que se cargo la pagina 
        (window.location.hash));

        //reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
        if('onhashchange' in window) {    //metodo, es así la configuación
            window.onhashchange = () =>{
                changeRouter(window.location.hash);
            }
        }
                                          
}