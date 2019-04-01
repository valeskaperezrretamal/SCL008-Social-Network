
export const templateProfile = () => {
    //creamos div que contendrá la plantilla
    const container = document.createElement('div');
    const content = `<h1 id="idperfilnombre">juanito perez</h1>
    <img src="https://cdn.memegenerator.es/descargar/25823245" alt="" id="idProfileImg">
    <p id="iddescription">descripcion blalblalalalla</p>
    `                         //aqui muestro el codigo para que se vea mi pantalla
    
    //pasar el contenido al div
    container.innerHTML = content;
    
    

    //solo 1 vista, la que va a tener el boton con google
    return container; 
    }
     