//Add the staticeffect
var hairuClick = false;
function makeStatic() {
	var canvas = document.getElementById('staticeffect'),
		context = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var staticeffect = context.createImageData(canvas.width, canvas.height);

	window.setInterval(function () {
		for (var i = 0; i < staticeffect.data.length; i = i + 4) {
			staticeffect.data[i + 3] = getRandomInt(0, 255);
		}
		context.putImageData(staticeffect, 0, 0);
	}, 50);
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

//Resize the modal
function resizeModal() {
	var h = window.innerWidth * 0.6;
	if (h > 700) {
		h = 700;
	}
	if (h < 200) {
		h = 200;
	}
	var w = h * 1.6;
	if (w > 1200) {
		w = 1200;
	}
	if (w > window.innerWidth) {
		w = window.innerWidth * 0.75;
	}

	document.getElementById('okaken-modal').style.width = w.toString() + 'px';
	document.getElementById('okaken-modal').style.height = h.toString() + 'px';
	document.getElementById('promise').style.width = w.toString() + 'px';
	document.getElementById('promise').style.height = h.toString() + 'px';

	document.getElementById('okaken-modal-left').style.height =
		h.toString() + 'px';

	document.getElementById('okaken-modal-right').style.height =
		h.toString() + 'px';
	document.getElementById('okaken-modal-right').style.width = '50px';

	var toph = h * 0.114;
	if (toph < 40) {
		toph = 40;
	}

	var bottomh = h * 0.078;
	if (bottomh < 30) {
		bottomh = 30;
	}

	document.getElementById('okaken-modal-top').style.height =
		toph.toString() + 'px';
	document.getElementById('okaken-modal-top-left').style.height =
		toph.toString() + 'px';
	document.getElementById('okaken-modal-top-right').style.height =
		toph.toString() + 'px';
	document.getElementById('okaken-modal-top-center').style.height =
		toph.toString() + 'px';

	document.getElementById('x-button').style.height =
		(toph * (22 / 85.0)).toString() + 'px';
	document.getElementById('x-button').style.width =
		(toph * (22 / 85.0)).toString() + 'px';
	document.getElementById('x-button').style.top =
		(toph * (6 / 85.0)).toString() + 'px';
	document.getElementById('x-button').style.right =
		(toph * (8 / 85.0)).toString() + 'px';

	document.getElementById('okaken-modal-bottom').style.height =
		bottomh.toString() + 'px';
	document.getElementById('okaken-modal-bottom-left').style.height =
		bottomh.toString() + 'px';
	document.getElementById('okaken-modal-bottom-right').style.height =
		bottomh.toString() + 'px';
}

function closeModal() {
	//document.getElementById('okaken-modal').classList.add('close-modal');
	document.getElementById('okaken-modal').style.display = 'none';
	document.getElementById('promise').style.display = 'block';
}

function hairu(toggle) {
	if (hairuClick) {
		return;
	}
	if (toggle) {
		document.getElementById('okaken-modal-content-text').style.display = 'none';
		document.getElementById('okaken-modal-content-text-hover').style.display =
			'block';
	} else {
		document.getElementById('okaken-modal-content-text').style.display =
			'block';
		document.getElementById('okaken-modal-content-text-hover').style.display =
			'none';
	}
}
function makeCovenant() {
	hairu(true);
	window.location.href = 'https://okaken.club/story';
	hairuClick = false;
}
function covenant() {
	hairuClick = true;
	hairu(true);
	setTimeout(makeCovenant, 300);
}

window.onresize = function (event) {
	resizeModal();
};

makeStatic();
resizeModal();
