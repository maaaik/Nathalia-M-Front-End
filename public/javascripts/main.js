var request = new XMLHttpRequest(); // Objeto tipo HttpRequest
request.onload = function(){		// Quando abre o programa ele inicia a abertura do JSON
	if(request.status >= 200 && request.status < 300){ //Caso ele encontre o arquivo e da um  codigo de status da requisição 											  //caso ache ele entre mostra que o json esta correto e funciona
		
		jsonresult = JSON.parse(request.responseText); //peguei a requisição fiz um tratamento JSON usando o JSON.parse para que ele pegue somente os valores 
		mostrarJSON(jsonresult);// Coloquei ele dentro de uma função.
	}else{
		
	}
	
};

// Abrindo o arquivo utilizando GET
request.open('GET', '/fazenda.json', true); 
request.send(); // Envio de Requisição com o Resultado

function mostrarJSON (participanetes){
	let teste = `<img src="${participanetes.data[4].picture}">`;
	let teste2 = `<h2>${participanetes.data[4].name}</h2>`;
	let desc1 = `<p>Modelo e filha de Monique Evans</p>`;
	document.getElementById('barbara-img').innerHTML = teste;
	document.getElementById('barbara-name').innerHTML = teste2;
	document.getElementById('barbara-desc').innerHTML = desc1;

	let teste3 = `<img src="${participanetes.data[2].picture}">`;
	let teste4 = `<h2>${participanetes.data[2].name}</h2>`;
	let desc2 = `<p>Apresentador e ídolo teen</p>`;
	document.getElementById('yudi-img').innerHTML = teste3;
	document.getElementById('yudi-name').innerHTML = teste4;
	document.getElementById('yudi-desc').innerHTML = desc2;

	let teste5 = `<img src="${participanetes.data[0].picture}">`;
	let teste6 = `<h2>${participanetes.data[0].name}</h2>`;
	let desc3 = `<p>Cracrete n&ordm;1</p>`;
	document.getElementById('rita-img').innerHTML = teste5;
	document.getElementById('rita-name').innerHTML = teste6;
	document.getElementById('rita-desc').innerHTML = desc3;

	let teste7 = `<img src="${participanetes.data[1].picture}">`;
	let teste8 = `<h2>${participanetes.data[1].name}</h2>`;
	let desc4 = `<p>Fofoqueiro de Plantão</p>`;
	document.getElementById('gominho-img').innerHTML = teste7;
	document.getElementById('gominho-name').innerHTML = teste8;
	document.getElementById('gominho-desc').innerHTML = desc4;

	let test9 = `<img src="${participanetes.data[3].picture}">`;
	let teste0 = `<h2>${participanetes.data[3].name}</h2>`;
	let desc5 = `<p>Personalidade da mídia</p>`;
	document.getElementById('andressa-img').innerHTML = test9;
	document.getElementById('andressa-name').innerHTML = teste0;
	document.getElementById('andressa-desc').innerHTML = desc5;

	function mDown(obj) {
		obj.style.backgroundColor = "#1ec5e5";
		obj.innerHTML = "Release Me";
	  }
	  
	  function mUp(obj) {
		obj.style.backgroundColor="#D94A38";
		obj.innerHTML="Thank You";
	  }
}
