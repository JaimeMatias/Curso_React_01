
import {heroes} from './data/heroes'

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


const getHeroeById =(id)=> heroes.find((heroes)=>heroes.id===id)

const promesa =new Promise((resolve,reject)=>{
    const operadorBool=false
    console.log(getHeroeById(2))
    console.log('Esto siempre se ejecuta')
    if(operadorBool){
        resolve()
    }else{
        reject()
    }

})

promesa.then(()=>{
    console.log('la promesa finaliza exitosamente')
}).catch(()=>{
    console.log('la promesa falla ')
})

