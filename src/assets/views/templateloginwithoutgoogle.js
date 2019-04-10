import { login } from "../js/auth.js";
import {emptyKey} from './../js/validation.js';

export const templateloginwithoutgoogle = () => {
    //creamos div que contendrá la plantilla
    const container = document.createElement('div');
    const content =`   <div id="iniciosesion"  class="green"><img src="assets/img/logo.png" alt=""> 
    <input  type="text" id="email" placeholder="E-mail">
    <input  type="password" id="password" placeholder="Contraseña">
    <button id="login">ingresar</button>`
    
                         //aqui muestro el codigo para que se vea mi pantalla
    
    //pasar el contenido al div
    container.innerHTML = content;
    
    container.querySelector('#login').addEventListener('click',() => {
        let mail = document.getElementById('email').value;
        let password = document.getElementById('password').value;
            
            if(mail ===""){
                document.getElementById("erroremail").innerHTML=`Debes ingresar un correo, no puede estar vacio este campo` //para pasar info. al html
            
            }
            if(password===""){
                document.getElementById("errorpassword").innerHTML=`Debes ingresar una contraseña, no puede estar vacio este campo`
            }
            if(emptyKey(mail,password)) login(mail,password); 
        });
    
    

    //solo 1 vista, la que va a tener el boton con google
    return container; 
    }