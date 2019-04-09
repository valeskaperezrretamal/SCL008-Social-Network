///import {templateArticles} from './../js/auth.js';
export const templateArticles = () => {
    //creamos div que contendrá la plantilla
    const container = document.createElement('div');
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
    
         //pasar el contenido al div
         container.innerHTML = content;     
        
        
        
         //solo 1 vista, la que va a tener el boton con google
         return container; 
}              
    
   