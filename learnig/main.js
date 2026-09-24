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


/**
 * array-É uma estrutura de dados que armazena uma coleção de elementos,
 *       que podem ser de diferentes tipos, como números, strings, objetos, etc.
 *       Os elementos em um array são indexados por números inteiros, começando do zero.
 */

const myArray = [1, "texto", true, { name: "davi", idade: 15 }, 5];/**utiliza-se colchetes no array e vírgula para separar os elementos */

const gerenciamento = [ /**o array pode ser utilizado para guadar dados de todas as pessoas em um único lugar */
    {name: "davi", idade: 15},
    {name: "rodolfo", idade: 20},/** o object é utilizado para agrupar dados de certas pessoas */
    {name: "joão", idade: 25}
]

/**               0  1  2  3   -- posição dos elementos começa no 0*/
const myArray2 = [1, 2, 3, 4];

console.log(myArray2[3]); /**para acessar um elemento do array, utiliza-se o nome do array e o índice do elemento entre colchetes */