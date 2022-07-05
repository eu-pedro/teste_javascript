
const conta = require('./conta');
test('O valor do saldo tem que ser igual a 2000',()=>{
    expect(conta.mostrarSaldo()).toEqual(2000)
})
test('O valor tem que ser maior que 2000', ()=>{
    expect(conta.sacarValor(3000)).toBeFalsy()
})
test('A diferença entre saldo e o valor que foi sacado', ()=>{
    expect(conta.sacarValor(100)).toEqual(1900)
})
