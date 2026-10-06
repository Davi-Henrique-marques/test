/**
 * addEventListener() = ocorre determinada ação quando o evento especificado ocorre.
 */

const button = document.querySelector("#button");//trouxe um botão ao js.

//       propriedade    evento     ação que ocorrerá quando o evento ocorrer. 
button.addEventListener("click", function () {
              console.log("O botão foi clicado!");//o evento fica entre "" e a virgula separ os elementos do addEventListener.
});