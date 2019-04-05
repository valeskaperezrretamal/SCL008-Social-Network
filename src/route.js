import {templateLogin} from './assets/views/templateLogin.js';//aqui llamo los archivos
import{templateCreate} from './assets/views/templateCreate.js';
import{templateProfile} from './assets/views/templateProfile.js';
import{templateArticles} from './assets/views/templateArticles.js';
import{templateMenuBottom} from './assets/views/templateMenu.js';
import {loginGoogle, logout} from './assets/js/auth.js'; // es para ingresar al archivo js
import{templateloginwithoutgoogle} from './assets/views/templateloginwithoutgoogle.js';


/*
crear una función que reciba el hash (#) y segun el match o la cooincidencia retorne otra 
función que se va a encargar de imprimir el template en nuestro html
*/
 
const changeRouter =(hash) => {
    templateMenuBottom();
      
    if(hash){
        return showTemplate(hash);
    }else{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                showTemplate("#/articles");
            } else {
                showTemplate("#/login");
            }
          });
    }

};


//imprimirá el template en html
const showTemplate = (hash) => {
const router = hash.substring(2); //para que saque el # y tome solo login no #login
const containerRoot = document.getElementById('root');
containerRoot.innerHTML= "";

//hacemos match del hash utilizado y el template que quiero mostar
// aqui podemos poner la cantidad de casos que nosotras queramos
switch (router){
    case 'login':
    containerRoot.appendChild(templateLogin());
    break;
    case 'create':
    containerRoot.appendChild(templateCreate());
    break;
    case 'profile':
    containerRoot.appendChild(templateProfile());
    break;
    case 'articles':
    containerRoot.appendChild(templateArticles());
    break;
    case 'logingoogle':
    loginGoogle();
    containerRoot.appendChild(templateArticles());
    break;
    case 'loginwithoutgoogle':
    containerRoot.appendChild(templateloginwithoutgoogle());
    break;
    case 'logout':
    logout();
    break;
    default:
    containerRoot.innerHTML = '<p>Error 404</p>'
    }
}
//inicializar las rutas para que se ejecute changeRouter() y en su defecto showTemplate ()


 export const initRouter = () =>{ 
    window.addEventListener('load', changeRouter(window.location.hash));
    
     firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                showTemplate("#/articles");
            } else {
                showTemplate("#/login");
            }
          });
  
     // le pedimos que escuche una "carga" osea una vez que se carge  y como parametro le pasamos el # que tenga como evento una vez
     // que se cargo la pagina 
        

        //reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
        if('onhashchange' in window) {    //metodo, es así la configuación
            window.onhashchange = () =>{
                changeRouter(window.location.hash);
            }
        }
                                          
}
//todo esto esta constantemente verificando la ruta//