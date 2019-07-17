window.onload = function(){	//executes when HTML is fully loaded
	let block = document.getElementById("block")

	//Position Y manipulation
	let posY = document.getElementById('pos-y')
	posY.onchange = function(){
		block.style.top = posY.value+'px'
	}

	//Position X manipulation
	let posX = document.getElementById('pos-x')
	posX.onchange = function(){
		block.style.left = posX.value+'px'
	}

	//Size manipulation
	let size = document.getElementById('size')
	size.onchange = function(){
		block.style.transform = 'scale('+size.value+')'
	}

	//Opacity manipulation
	let opacity = document.getElementById('opacity')
	opacity.onchange = function(){
		block.style.opacity = opacity.value;
	}

	//Shape manipulation
	let shape = document.getElementById('shape-select')
	let ok = document.getElementById('ok-shape')
	ok.onclick = function(){
		switch (shape.value){
			case '1':
				block.style.borderRadius = '0%';
				block.style.transform = 'rotate(0deg)'
				break;
			case '2':
				block.style.borderRadius = '50%';
				break;
			case '3':
				block.style.borderRadius = '0%';
				block.style.transform = 'rotate(45deg)'
				break;
		}
	}

	//HEX manimulation
	let hex = document.getElementById('hex')
	hex.addEventListener('keyup', function(){
		block.style.backgroundColor = '#'+hex.value;
	})

	//RGBA manipulation
	let r = document.getElementById('rgba-r')
	let g = document.getElementById('rgba-g')
	let b = document.getElementById('rgba-b')
	let a = document.getElementById('rgba-a')

	let rgbaInput = document.querySelector(".rgba-container").querySelectorAll('input')

	for (let i = 0 ; i < rgbaInput.length; i++){
		rgbaInput[i].onchange = function(){
			block.style.backgroundColor = `rgba(${r.value},${g.value},${b.value},${a.value}`
		}
	}
}