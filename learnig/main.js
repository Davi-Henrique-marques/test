/**
 * getElementById = traz todo elemento do html que tenha o id especificado
 * getElementsByClass = traz todos os elementos do html que tenham a classe especificada
 * getElementsByTagName = traz todos os elementos do html que tenham o name especificado
 * getElementsByTag = traz todos os elementos do html que tenham a tag especificada
 * 
 * document = é o objeto que representa o documento HTML carregado no navegador
 */

const span = document.getElementsByClassName("highlight");
console.log(span);

/**
 * querySelector = traz o primeiro elemento do html que tenha o seletor especificado
 * querySelectorAll = traz todos os elementos do html que tenham o seletor especificado
 */

const querySelector = document.querySelector("span");
console.log(querySelector);

const button = document.querySelector(".button");/** para traser uma class utiliza-se . antes do nome da classe */
console.log(button);

/**
 * . --> para traser uma class utiliza-se . antes do nome da classe
 * # --> para traser um id utiliza-se # antes do nome do id
 */

const element = document.querySelectorAll (".button");/** traz todo elemento coma classe "button" */
console.log(element);