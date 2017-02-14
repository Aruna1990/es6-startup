function component () {
	var element = document.createElement('div');

	let func = text => `Hello ${text}`;

	element.innerHTML = func("ES6");

	return element;
}

document.body.appendChild(component());