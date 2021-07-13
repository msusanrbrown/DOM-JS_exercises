let button = document.querySelector("#superDuperButton");

button.addEventListener("click", function() {
	const list = document.querySelector("#myList");
	const list1 = document.createElement("li");
	list1.innerHTML = "Fourth element";
	list.appendChild(list1);
	//your code here
});
