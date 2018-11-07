/*
* Game Mata Mosquito
*/

var altura = 0;
var largura = 0;
var vidas = 1;
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
function posicaoRandomica(){

	// Remover o mosquito - caso já exista
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove();

		// substituindo a imagem do coração e verificando o Game Over
		if(vidas > 3){
			alert('Game Over')
		}else{
			document.getElementById('v' + vidas).src="imagens/mata-mosquito-coracao_vazio.png";
			vidas++;

		}
	}

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

	// Adicionando Classe ao elemento fixo
	//mosquito.className = 'mosquito1';

	// Adicionando Class ao elemento de forma randômica
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();

	// Modificando a posição da imagem randômicamente
	mosquito.style.left = posicaoX + 'px';
	mosquito.style.top = posicaoY + 'px';
	mosquito.style.position = 'absolute';

	// Criação de um Id para o elemento, assim podemos remover se já existe o mesmo elemento
	mosquito.id = 'mosquito';

	// Criação do clique no elemento e removê-lo
	mosquito.onclick = function(){
		//this - faz referência ao próprio elemento HTML que está na função, isto é, posicaoRandomica()
		this.remove();
	}

	// Criando elemento filho do body
	document.body.appendChild(mosquito);

}

// Tamanhos aleatórios para as imagens dos mosquitos
function tamanhoAleatorio(){
	// gerar randomicamente números de 0 ate 2
	var classe = Math.floor(Math.random() * 3);

	// Switch ou if para as tomadas de decisões
	switch(classe){
		case 0:
			// sem break porque a instrução return é a última 
			return 'mosquito1';
		case 1:
			return 'mosquito2';
		case 2:
			return 'mosquito3';
	}
}
// Lados aleatórios do mosquito
function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2);

	switch(classe){
		case 0:
			return 'ladoA';
		case 1:
			return 'ladoB';
	}
}