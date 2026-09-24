/**
 *   let -> posso trocar o valor da variavel
 *   const -> constante, não posso trocar o valor da variavel
 *   var -> descontinuado
 * 
 *   console.log() -> imprime no console 
 *   "" -> string
 *   sem ""-> numero
 */

let nome ="davi";
let idade = 20;


"texto com aspas duplas" /**texto de aspas simples/duplas são iguais */
'texto com aspas simples'
`texto com crase` /**crase é usado para colocar variaveis dentro do texto */

const mystring = `meu nome é ${nome} e minha idade é ${idade}`;
console.log(mystring);


/**
 * number-numero
 * string-texto
 * boolean-verdadeiro ou falso
 * object-objeto
*/


const name = "rodolfo";
const age = 20;
const adress = "rua dos bobos";

const person = { /**o object serve para agrupar dados relacionados */
    name: "rodolfo",
    age: 20,
    adress: { /** objeto dentro de outro objeto */
        name: "davi",
        idade: 15
    }

}

console.log (person.adress)