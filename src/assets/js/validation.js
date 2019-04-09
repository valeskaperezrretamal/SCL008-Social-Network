//Aquí van todas las validaciones 
 export const emptyKey=(name,address,city,mail,password) =>{
  if(name==="" || address==="" ||city==="" ||mail==="" || password===""){ //aqui se muestra que si esta vacio el campo ""retorne falso,de cada una de mis variables
  return false;
}
else{
    return true;//si esta lleno el campo retorna verdadero
} 
};





