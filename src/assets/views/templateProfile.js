
export const templateProfile = () => {
    //creamos div que contendrá la plantilla
    const container = document.createElement('div');
    let fotourl;
    console.log(firebase.auth().currentUser)
    if(!firebase.auth().currentUser.photoURL){   //
        fotourl="https://www.familias.com/wp-content/uploads/2015/08/featuredImageId59050-700x547.jpg";
    } else {
        fotourl=firebase.auth().currentUser.photoURL;
    };
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
                    <p id="iddescription">descripcion blalblalalalla</p> `;
                    //aqui muestro el codigo para que se vea mi pantalla
                    //$variable , para meter una variable dentro del string
                    //acá se creó la función auth() para que aparezca el nombre del usuario que se logueo y se creo una imagen para mostar
    
                    //pasar el contenido al div
    container.innerHTML = content;     
    //solo 1 vista, la que va a tener el boton con google
    return container; 
    }
    