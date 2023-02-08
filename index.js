/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('Maria','16979808','8989');



const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');


//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo(); //tengo que poner () para indicar
// que hay un valor que está pasando como "hijo"

saldo = cuentaDeLeonardo.depositoEnCuenta(150);

console.log(CuentaCorriente.cantidadCuentas);

new CuentaCorriente(cliente2, '2', '002');
new CuentaCorriente(cliente2, '2', '002');
new CuentaCorriente(cliente2, '2', '002');
new CuentaCorriente(cliente2, '2', '002');
console.log(CuentaCorriente.cantidadCuentas);
