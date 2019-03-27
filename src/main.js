//inicialización firebase
//llamado a la inicialización de la rutas

import {initRouter} from './route.js';

const init = () => {
    initRouter();

}
window.addEventListener('load', init);