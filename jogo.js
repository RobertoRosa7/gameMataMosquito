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
	console.log(largura, altura);
}
ajustaTamanhoJogo();


// Função para encapsular os elementos de criação da página de forma programática
function posicaoRondomica(){

	// Criando posições randômicas para a imagem mosquito
	var posicaoX = Math.floor(Math.random() * largura) - 90; // -90 para a imagem não sair da dimensão da página
	var posicaoY = Math.floor(Math.random() * altura) - 90;

	// verificação para a imagem não sair da tela se a posição for menor que zero
	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;

	// debug
	console.log(posicaoX, posicaoY);

	// Criando o elemento HTML de imagem
	var mosquito = document.createElement('img');

	// Adicionando atribuo src da imagem
	mosquito.src = 'imagens/mata-mosquito-mosca.png';

	// Adicionando Classe ao elemento
	mosquito.className = 'mosquito1';

	// Modificando a posição da imagem randômicamente
	mosquito.style.left = posicaoX + 'px';
	mosquito.style.top = posicaoY + 'px';
	mosquito.style.position = 'absolute';

	// Criando elemento filho do body
	document.body.appendChild(mosquito);

}