
export const templateProfile = () => {
    //creamos div que contendrá la plantilla
    const container = document.createElement('div');
    const content =`<ul id = "heading">
                    <div  class="logo">
                    <img src="assets/img/logo.png" style="width:250px" alt=""> 
                    </div>
                    <div class="imagen">
                    <img src="assets/img/nutricion_gr.jpg" alt="">
                    </div>
                    <div class="green">
                    <h1 id="idperfilnombre">juanito perez</h1>
                    <img src="https://cdn.memegenerator.es/descargar/25823245" alt="" id="idProfileImg">
                    <p id="iddescription">descripcion blalblalalalla</p> `
                    //aqui muestro el codigo para que se vea mi pantalla
    
                    //pasar el contenido al div
    container.innerHTML = content;
    
    

    //solo 1 vista, la que va a tener el boton con google
    return container; 
    }
     