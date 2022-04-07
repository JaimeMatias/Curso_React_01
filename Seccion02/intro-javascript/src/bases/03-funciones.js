import {heroes} from './data/heroes'

const persona = {
  nombre: 'Matias',
  edad: 25,
  ciudad: 'Corrientes',
  clave: 'IronMan',
};
const persona2 = persona; //persona2 apunta a la misma posición de memoria que persona, porque si realizo un cambio en 1, afecta a ambos
const persona3 = { ...persona };// para generar otra instacia del objeto,tenemos que usar esta sintaxis {...Objeto}
persona2.nombre = 'Luis';
console.log(persona)
console.log(persona2)
console.log(persona3)

const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2
})
console.log(arreglo2);
console.log(arreglo3)

const getUsuarioActivo = (nombre) => ({
  uid: 'ABC',
  nombre,

})



const usuarioActivo = getUsuarioActivo('Matias');
console.log(usuarioActivo)

const { nombre } = persona
console.log(nombre)

const retornarPersona = ({ nombre }) => console.log(`El nombre a mostrar es: ${nombre}`)

retornarPersona(persona)


// const useState = (valor) => {
//   return [valor, () => { console.log('Hola Mundo') }];
// };

const usesState = (valor) => {
  return [valor, () => { console.log('Hola Mundo') }];
};
console.log(usesState('matias'))
//console.log(useState('Matiias'))
const [nombre1, setNombre] = usesState('Goku');
//setNombre();


console.log(heroes)

const getHeroeById=(id)=>{
  
return heroes.find((heroes)=>{
    const{id:idHeroe}=heroes;
    if(id==idHeroe){
      return heroes
    };
  });
};

const getHeroesByOwner =(owner)=> heroes.filter((heroes)=>heroes.owner===owner)
console.log(getHeroeById(2))
console.log(getHeroesByOwner('DC'))