import { Cliente } from "./Cliente.js";

export class CuentaCorriente
{
    #cliente;
    numero;
    agencia;
    #saldo;

    set setcliente(valor) {
        if (valor instanceof Cliente)  //si el valor recibido es una instancia de la clase cliente, entonces se logró atribuir la referencia de cliente
            this.#cliente = valor;
    }

    get getcliente() {
        return this.#cliente;
    }
   //se trata de buenas prácticas asignar el valor null a las variables que están vacias
    constructor(cliente, numero, agencia) {
        this.setcliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    } /*forma resumida de poner
    this.saldo = this.saldo - valor */

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
}