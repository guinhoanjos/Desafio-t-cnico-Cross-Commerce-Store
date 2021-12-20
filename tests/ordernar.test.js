const ordenarFunction = require('../helpers/sort')



describe('Ordenando numeros', () =>{
  
  test('com numeros inteiros', () => {
    const array = [ 3, 2 , 1 ];
    const arrayOrdernado = [ 1, 2, 3];
    
    expect(ordenarFunction(array)).toEqual(arrayOrdernado);
  });

  test('com numeros negativos', () => {
    const array = [-5, -10, -15, -2, -13 ];
    const arrayOrdernado = [ -15, -13, -10, -5, -2];
    
    expect(ordenarFunction(array)).toEqual(arrayOrdernado);
  });

  test('com numeros negativos, reais e inteiros', () => {
    const array = [ 0.1, 2, -3, 5, 4.5 , -0.1, 1];
    const arrayOrdernado = [ -3, -0.1, 0.1, 1, 2, 4.5, 5];

    expect(ordenarFunction(array)).toEqual(arrayOrdernado);
  });

})