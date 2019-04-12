
import { emptyKey } from './../src/assets/js/validation.js'



describe('emptyKey', () =>{
    it('deberia retornar falso si es que no ingresa correo,contraseña,nombre,direccion,ciudad',()=>{
        expect(emptyKey("","","","","")).toBe(false);
    })
} );
export const validateEmail = (email) => {
    //simula el patron del correo electronico para que verifique que el correo sea correo 
    let pattern = /\S+@\S+.\S+/;
    return pattern.test(email);
}