const persona ={
  nombre:'Matias',
edad:25,
ciudad:'Corrientes',
};
const persona2=persona; //persona2 apunta a la misma posición de memoria que persona, porque si realizo un cambio en 1, afecta a ambos
const persona3={...persona};// para generar otra instacia del objeto,tenemos que usar esta sintaxis {...Objeto}
persona2.nombre='Luis';
console.log(persona)
console.log(persona2)
console.log(persona3)

