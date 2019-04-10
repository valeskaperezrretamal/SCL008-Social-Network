import {createAccount} from './../js/auth.js';
import {emptyKey} from './../js/validation.js';


export const templateCreate = () => {
    //creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    const contentCreate = `
     
                           
                           <div class="green"><h4>Registro Usuario</h4>
                           <ul id = "heading">
                         <hr>
                         
                          <input id="nombre" type="text" placeholder="Nombre Completo">
                          <p id="errornombre"></p>
                          <input id="direccion" type="text" placeholder="Direccion Completa">
                          <p id="errordireccion"></p>
                          <input id="ciudad" type="text" placeholder="Indica tu ciudad">
                          <p id="errorciudad"></p>
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
    let name = document.getElementById('nombre').value;
    let address = document.getElementById('direccion').value;
    let city = document.getElementById('ciudad').value; //agarrando valores de id
    let mail = document.getElementById('email').value;
    let password = document.getElementById('contrasena').value;
        
        if(mail ===""){
            document.getElementById("erroremail").innerHTML=`Debes ingresar un correo, no puede estar vacio este campo` //para pasar info. al html
        
        }
        if(name===""){
            document.getElementById("errornombre").innerHTML=`debe ingresar nombre`
        }
        if(address===""){
            document.getElementById("errordireccion").innerHTML=`debe ingresar direccion valida`
        }
        if(city===""){
            document.getElementById("errorciudad").innerHTML=`debe ingresar una ciudad de chile`//muestra el error en las cajas vacias
        }
        if(password===""){
            document.getElementById("errorpassword").innerHTML=`Debes ingresar una contraseña, no puede estar vacio este campo`
        }
        if(emptyKey(name,address,city,mail,password)) createAccount(name,address,city,mail,password); //se esta pasando a la funcion emptykey para que me las valide, con la funcion de validar
    });
    //solo 1 vista, la que va a tener el boton con google
    return containerCreate; 
    }
    