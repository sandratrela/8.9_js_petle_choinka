// plik scripts.js

function rysujChoinkę(poziom) {

	for (var i = 0; i < poziom; i++) {

		var star = ' ';

		for (var y = poziom; y > i; y-- ) {
			star += ' ';
		}
		
		for (var x = 0; x < 2*i+1; x++) {
			star += '*';
		}

	console.log(star);

	}
}

var choinka = rysujChoinkę(10);
console.log(choinka);