describe('Pruebas en el archivo Demo.js',()=>{
  test('deben de er iguales los string', () => {
    //1. Inicialización
    const mensaje='Hola Mundo';
    
    //2. Estimulo
    const mensaje2="Hola Mundo";
    
    //3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2)
    })
    
}

);


