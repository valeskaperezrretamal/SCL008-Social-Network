
export const templateProfile = () => {
    //creamos div que contendrá la plantilla
    const container = document.createElement('div');
    let fotourl;
    console.log(firebase.auth().currentUser)
    if(!firebase.auth().currentUser.photoURL){   
        fotourl="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-bot--n-de-perfil-de-instagram-by-vexels.png";
    } else {
        fotourl=firebase.auth().currentUser.photoURL;
    };
    const content =`<ul id = "heading">
                    <div  class="logo">
                     <img src="assets/img/logo.png" style="width:250px" alt=""> 
                    </div>
                   
                    <div class="green">
                    <h1 id="idperfilnombre">${firebase.auth().currentUser.displayName}</h1> 
                    <img src=${fotourl} alt="" id="idProfileImg">
                    <p id="iddescription">Estudiante de laboratoria</p> `;
                    //aqui muestro el codigo para que se vea mi pantalla
                    //$variable , para meter una variable dentro del string
                    //acá se creó la función auth() para que aparezca el nombre del usuario que se logueo y se creo una imagen para mostar
    
                    //pasar el contenido al div
    container.innerHTML = content;     
    //solo 1 vista, la que va a tener el boton con google
    return container; 
    }
    