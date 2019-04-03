export const templateMenuBottom = () => {
    //creamos div que contendrá la plantilla
    const container = document.getElementById("div-menu-bottom");
    const content =  `<ul id="menu-bottom">
                                   
                             <li><a href="#/profile">Mi perfil</a></li>
                              <li><a href="#/articles">Temas de Interes</a></li>
                            </ul>`
                         //aqui muestro el codigo para que se vea mi pantalla
    
    //pasar el contenido al div
    container.innerHTML = content;
};
