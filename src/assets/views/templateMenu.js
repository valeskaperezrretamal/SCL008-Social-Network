export const templateMenuBottom = () => {
    

  firebase.auth().onAuthStateChanged(function(user) {
    const container = document.getElementById("div-menu-bottom");
    const content =  `<ul id="menu-bottom">
                                   
                             <li><a href="#/profile">Mi perfil</a></li>
                              <li><a href="#/articles">Temas de Interes</a></li>
                              <li><a href="#/logout">cerrar sesion</a></li>
                            </ul>`
    if (user) {
      container.innerHTML = content;
    } else {
      container.innerHTML = "";
    }
  });
    
};
