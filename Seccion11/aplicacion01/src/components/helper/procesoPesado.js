export const procesoPesado = (iteraciones) => {
    for (let index = 0; index < iteraciones; index++) {

        setTimeout(() => {
            console.log('Ahí vamos')
        }, 2000);

    }
  

    return `${iteraciones} iteraciones realizadas`
}
