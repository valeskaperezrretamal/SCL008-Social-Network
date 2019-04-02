//inicialización firebase
//llamado a la inicialización de la rutas
var config = {
  apiKey: "AIzaSyASsH_R0MR7LTLDQEoXFWjjbmLHpz5d790",
  authDomain: "bacan-network-s.firebaseapp.com",
  databaseURL: "https://bacan-network-s.firebaseio.com",
  projectId: "bacan-network-s",
  storageBucket: "bacan-network-s.appspot.com",
  messagingSenderId: "758434856794"
};
firebase.initializeApp(config);
  
import {initRouter} from './route.js';

const init = () => {
    initRouter();

}
window.addEventListener('load', init);

