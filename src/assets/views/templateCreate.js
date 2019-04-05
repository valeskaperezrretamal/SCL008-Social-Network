import {createAccount} from './../js/auth.js';
import {emptyKey} from './../js/validation.js';


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
                            <p id="erroremail"></p>
                           <input id="contrasena" type="password" placeholder="Ingresa contraseña">
                           <p id= "errorpassword"></p>
                           <button id= "create">Registrar</button>
                           </div>`;
                         //aqui muestro el codigo para que se vea mi pantalla
    
    //pasar el contenido al div

    containerCreate.innerHTML = contentCreate;
    containerCreate.querySelector('#create').addEventListener('click',() => {
    let mail = document.getElementById('email').value;
    let password = document.getElementById('contrasena').value;
        
        if(mail ===""){
            document.getElementById("erroremail").innerHTML=`Debes ingresar un correo, no puede estar vacio este campo` //para pasar info. al html
        
        }
        if(password===""){
            document.getElementById("errorpassword").innerHTML=`Debes ingresar una contraseña, no puede estar vacio este campo`
        }
        if(emptyKey(mail,password)) createAccount(mail,password); 
    });

    //solo 1 vista, la que va a tener el boton con google
    return containerCreate; 
    }
    

     