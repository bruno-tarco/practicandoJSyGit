//importación de clases
import{Cliente} from './cliente.js'
import{CuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '13804050';
cliente.rutCliente = '123224';

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;


let saldo = cuentaDeLeonardo.verSaldo(); //tengo que poner () para indicar
// que hay un valor que está pasando como "hijo"

saldo = cuentaDeLeonardo.depositoEnCuenta(150); 
console.log(`El saldo actual (CuentaLeonardo) es ${saldo}`); 

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '16979808';
cliente2.rutCliente = '8989';

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;
if (cuentaDeMaria.cliente)
    console.log(cuentaDeMaria.cliente);
else
    console.log(cuentaDeMaria);

let parametroValor = 100;
/*
console.log('Parámetro Valor',parametroValor);
cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);
console.log('Parámetro Valor',parametroValor);

const saldoMaria = cuentaDeMaria.verSaldo()

console.log("Cuenta de Maria",cuentaDeMaria)
*/


/*
const saldoMaria = cuentaDeMaria.verSaldo();
console.log(`El saldo actual (Cuentamaria) es ${saldoMaria}`); 

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual (CuentaLeonardo) es ${saldoLeonardo}`); 
*/
//el texto siguiente sirve para crear el package.json

/*PS G:\Programas\Sublime editor de texto\Programación ALURA LATAM\JavaScript\JS_orientado_a_objetos> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (js_orientado_a_objetos) cuentasbancopopular
version: (1.0.0)
description: Gestión de Cuentas Corrientes del Banco Popular
entry point: (index.js)
test command:
git repository:
keywords:
author: Curso Alura Bruno
license: (ISC)
About to write to G:\Programas\Sublime editor de texto\Programación ALURA LATAM\JavaScript\JS_orientado_a_objetos\package.json:

{
  "name": "cuentasbancopopular",
  "version": "1.0.0",
  "description": "Gestión de Cuentas Corrientes del Banco Popular",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Curso Alura Bruno",
  "license": "ISC"
}


Is this OK? (yes)
PS G:\Programas\Sublime editor de texto\Programación ALURA LATAM\JavaScript\JS_orientado_a_objetos>*/
