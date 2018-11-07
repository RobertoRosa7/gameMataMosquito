/*
* Game Mata Mosquito
*/

var altura = 0;
var largura = 0;
/*
* Função para encapuslar os valores das dimensões da página de forma dinâmica
* Necessário o atributo onresize na tag body
*/
function ajustaTamanhoJogo(){

	// Obtendo as dimensões da página
	altura = window.innerHeight;
	largura = window.innerWidth;

	//degug
	console.log(altura, largura);
}