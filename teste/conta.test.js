const { default: TestRunner } = require('jest-runner');
const conta = require('./conta');
test('O valor de saque não pode ser maior que 2000',()=>{
  expect(conta.mostrarSaldo()).toBeTruthy(1000)
})

