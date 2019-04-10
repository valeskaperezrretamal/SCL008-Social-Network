export const templateMenuBottom = () => {
    

  firebase.auth().onAuthStateChanged(function(user) {
    const container = document.getElementById("div-menu-bottom");
    const content =  `<div id="menu-bottom">
                        <a><img></a>
                        <a href="#/profile"><img src="assets/img/miperfil.png"></a>
                        <a href="#/articles"><img src="assets/img/temasdeinteres.png"></a>
                        <a href="#/logout"><img src="assets/img/salir.png"</a>
                        <a><img></a>
                      </div>`
                      
    if (user) {
      container.innerHTML = content;
    } else {
      container.innerHTML = "";
    }
  });
    
};
