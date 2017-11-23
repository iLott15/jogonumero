window.onload = function(){
	var numeroMisterioso = Math.floor(Math.random()*101);
	var chutedojogador = 0;
	var tentativasrestantes = 10;
	var tentativas = 0; 
	var mensagemaojogador = "";
	var vitoria = false;

	var entrada = document.querySelector("#entrada");
	var saida = document.querySelector("#saida");
	var ponteiro = document.querySelector("#ponteiro");

	var btn = document.querySelector("button");

	btn.addEventListener("click",clickFunction);

	window.addEventListener("keydown",keydownFunction)

	function keydownFunction(e){
		if(e.keyCode == 13){
			validarJogada();
		}
	}

	function clickFunction(){
		validarJogada();
	}
	function validarJogada(){
		chutedojogador = parseInt(entrada.value);
		entrada.value = "";
		entrada.focus();
	
		if(isNaN(chutedojogador)){
			saida.innerHTML = "Por favor, digite apenas números.";
		}else if(chutedojogador > 100 || chutedojogador < 0){
			saida.innerHTML = "Por favor, digite apenas valores entre 0 e 100.";
		}else{
			playGame();
		}
	}

	function playGame(){
		render();
		tentativas++;
		tentativasrestantes--;
		mensagemaojogador = "<br>Tentativas:" + tentativas + " | Restantes: " + tentativasrestantes;

		if(chutedojogador > numeroMisterioso){
			saida.innerHTML = "Meu número é menor que " + chutedojogador + "." + mensagemaojogador;

			if(tentativasrestantes<1){
				fimDoJogo();

			}
		}else if(chutedojogador < numeroMisterioso){
			saida.innerHTML = "Meu número é maior que " + chutedojogador + "." + mensagemaojogador;

			if (tentativasrestantes<1){
				fimDoJogo();

			}
		}else if(chutedojogador === numeroMisterioso){
			vitoria = true;
			fimDoJogo();
		}
	}

	function fimDoJogo(){
		if(vitoria){
			saida.innerHTML = "Parabéns, você adivinhou! O número era " + numeroMisterioso + "<br>" + "Foram feitas " + tentativas + "tentativas.";
		}else{
			saida.innerHTML = "Acabaram suas tentativas.<br> O número era " + numeroMisterioso;
		}

		btn.removeEventListener("click",clickFunction);
		window.removeEventListener("keydown",keydownFunction)
		btn.disabled = true;
		entrada.disabled = true;
	}

	function render(){
		ponteiro.style.left = (chutedojogador * 3.7) + 13 + "px";
	}
}