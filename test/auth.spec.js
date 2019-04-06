
import { suma,emptyKey } from './../src/assets/js/validation.js'


/*describe('createAccount', () => {
    it('debe devolver es una función', () => {
        expect(createAccount()).toBeA('function')
    });  
});
 describe('createAccount', () => {
    it('debe devolver cuenta creada OK', () => {
        expect(createAccount('jperezr@udd.cl',123456)).toBe('cuenta creada OK');
    });    
});*/


//////////////ejemplo//////////////////////////////////
//describe('suma', () =>{
   // it ('deberia retornar 4 para la suma de 2+2',()=>{
       // expect(suma(2,2)).toBe(4)
    //})
//} );
//////////////////////////////////////////////////////


/*describe('emptyKey',() =>{
    it('deberia retornar falso si es que no ingresa correo y contraseña',()=>{
        expect(emptyKey("","")).toBe('folse')
    })
});
*/
describe('emptyKey', () =>{
    it('deberia retornar falso si es que no ingresa correo y contraseña',()=>{
        expect(emptyKey("","")).toBe(false);
    })
} );