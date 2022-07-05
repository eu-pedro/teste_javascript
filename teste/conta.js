const conta = {
  titular:"Fulano da Silva",
  saldo: 2000,
  mostrarSaldo(){
      return this.saldo
  },
  sacarValor(valor){
      if(valor > this.saldo){
          return false
      }
      else{
          this.saldo = this.saldo - valor
          return this.saldo
      }
  }
}
module.exports = saldo;