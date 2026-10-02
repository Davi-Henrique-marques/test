/**
 * addEventListener => é um método que adiciona um ouvinte de evento a um elemento HTML.
 * Ele permite que você execute uma função específica quando um determinado evento ocorre nesse elemento,
 *  como um clique, uma mudança de valor, ou qualquer outro tipo de interação do usuário.
 */

const select = document.querySelector("select");//primeiro chamamos um elemnto para o js.

select.addEventListener("change", function() {//**depois colocamos a varianel + . + a propriedade*/
console.log("troquei de valor");//entre os () colocamos o evento que o addEventListener deve nos avisar,
// e a função que queremos executar quando o evento ocorrer.
});