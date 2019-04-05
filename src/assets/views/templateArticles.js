///import {templateArticles} from './../js/auth.js';
export const templateArticles = () => {
    //creamos div que contendrá la plantilla
    const container = document.createElement('div');
    let fotourl;
    if(!firebase.auth().currentUser.photoURL){   //
        fotourl="https://balancegroup.cl/wp-content/uploads/IMG_0410-1-1.jpg";
    } else {
        fotour1=firebase.auth().currentUser.photoURL;
    };
    const container2 = document.createElement('div');
    let fotour2;
    if(!firebase.auth().currentUser.photoURL){   //
        fotour2="https://balancegroup.cl/wp-content/uploads/01.png";
    } else {
        fotour2=firebase.auth().currentUser.photoURL;
    };
    const content = `<div id="articlestitle">
                        <h1>Temas de Interes</h1> 
                                            
                        <p1>En este espacio podrás encontrar articulos referentes a como poder ayudar a tú hija, sobrina o ese niño
                        al cual quieres ayudar a solucionar o saber llevar su condición. Acá podrás encontrar ayuda de profesionales
                        de como consejos de Psicologo, tanto para tú hij@ como para ti en apoyo fundamental, también te invitamos a ller 
                        articulos de interés de nutricionistas, las cuales te podrán orientar en la alimentanción la cual juega un rol fundamental
                        a la hora de combatir la insulina, también te podremos dar los mejores tips de ejercios para cambatir esta enfermedad...todo eso
                        y más podrás encontrar en esta sección Temas de Interes</p1> 

                    </div>`
                         //aqui muestro el codigo para que se vea mi pantalla
     const content =`<ul id = "heading">
                         <div  class="logo">
                         <img src="assets/img/logo.png" style="width:250px" alt=""> 
                         </div>
                         <div class="imagen">
                         <img src="assets/img/nutricion_gr.jpg" alt="">
                         </div>
                         <div class="green">
                         <h1 id="idperfilnombre">${firebase.auth().currentUser.displayName}</h1> 
                         <img src=${fotourl} alt="" id="idProfileImg">
                         <h1 id="idperfilnombre">${firebase.auth().currentUser.displayName}</h1> 
                         <img src=${fotour2} alt="" id="idProfileImg">
                         <p>Danitza Aros</p>
                         <p id="iddescription">Nutricionista, Dietista, Mención Nutrición Deportiva. Auriculoterapeuta. Curso En Nutrición Materno-Infantil. </p>
                         <hr>
                         <p>Gilda Leiva</P>
                         <p id="iddescription2">Nutricionista, Universidad De Valparaíso, Candidata A Magister Envejecimiento Y Calidad De Vida (Geriatría), INTA, Universidad De Chile. Diplomado En Aceites Y Grasas En Nutrición Humana, INTA, Universidad De Chile. Diplomado Medicina Complementaria Y Terapias Alternativas, Universidad Viña Del Mar. Auriculoterapeuta. Certificación Del IFHI Institute For The Human Individuality En Genotipo, Registro F-856 Especializada En Obesidad Y Enfermedades Metabólicas, PUC Especialización En Nutrigenética Y Dieta Antinflamatoria Curso En Alergias Alimentarias E Inmunidad. Curso En Fisiología, Prescripción De Ejercicio Y Nutrición INTA, Universidad De Chile.</p>
                         <hr>
                         <button id="fuera">salir</button>`;
                         //aqui muestro el codigo para que se vea mi pantalla
                         //$variable , para meter una variable dentro del string
                         //acá se creó la función auth() para que aparezca el nombre del usuario que se logueo y se creo una imagen para mostar
         
                         //pasar el contenido al div
         container.innerHTML = content;     
         //solo 1 vista, la que va a tener el boton con google
         return container; 
         }                 
    
   