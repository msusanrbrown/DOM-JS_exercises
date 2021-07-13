window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	let elem = document.querySelector("#mySelect");

	for (let i = 0; i < countries.length; i++) {
		let opt = document.createElement("option");
		opt.innerHTML = `<option value=${i}>${countries[i]}</option>`;
		elem.appendChild(opt);
	}

	elem.addEventListener("change", event => {
		alert(`${event.target.value}`);
	});
};
