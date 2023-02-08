export class CuentaCorriente
{
    cliente;
    numero;
    agencia;
    #saldo;


    constructor(){
        //se trata de buenas prácticas asignar el valor null a las variables que están vacias
        this.cliente = null;  //este dato es del tipo objeto, null = no existe pero está implícito
        this.numero = "";
        this.agencia = "";
        this.#saldo = 0;  
    }

    depositoEnCuenta(valor){
        if(valor>0)
        this.#saldo +=  valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor){
        if(valor <=this.#saldo){
            this.#saldo -= valor; 
            return this.#saldo;
        }

        /*forma resumida de poner
        this.saldo = this.saldo - valor */

    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
    }
}