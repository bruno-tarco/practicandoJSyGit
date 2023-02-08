
//clases son los moldes que nos permite
//formar un conjunto de datos relacionados entre sí

class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente
{
    numero;
    saldo;
    agencia;

    depositoEnCuenta(valor){
        this.saldo +=  valor;
    }
}

const cliente1 = new Cliente();

cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "13232";
cliente1.rutCliente = "V13231242"

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero ="232323";
cuentaCorriente1.saldo = 5000;
cuentaCorriente1.agencia = 5002;


const cliente2 = new Cliente();

cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "13804050";
cliente2.rutCliente = "H1231555"


const cuentaCorriente2 = new CuentaCorriente();

cuentaCorriente2.numero ="215223";
cuentaCorriente2.saldo = 1000;
cuentaCorriente2.agencia = 1200;

console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100); 
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(200); 
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(500); 
console.log(cuentaCorriente2.saldo);



const cliente3 = new Cliente();

cliente3.nombreCliente = "Maria";
cliente3.dniCliente = "2324343";
cliente3.rutCliente = "J123123123"


const cuentaCorriente3 = new CuentaCorriente();

cuentaCorriente3.numero ="2324233";
cuentaCorriente3.saldo = 5100;
cuentaCorriente1.agencia = 5300;


/*console.log(cliente1 );
console.log(cuentaCorriente1);
console.log(cliente2 );
console.log(cuentaCorriente2);
*/ 