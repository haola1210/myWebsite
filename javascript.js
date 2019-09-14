showMenu = () => {
	let menu = document.getElementById("drop-content");
	if(menu.style.display === "none")
		menu.style.display = "block"
	else
		menu.style.display = "none"
}
document.getElementById("drop-btn").addEventListener("click", showMenu);

let miniAvt = document.getElementById("mini-avt")
let myModal = document.getElementById("my-modal")
let avt = document.getElementById("avt")

displayModal = () => {
	myModal.style.display = "block";
	avt.src = "./images/ngaosenpai.jpg"
}

undisplayModal = () => {
	myModal.style.display = "none"
}

miniAvt.addEventListener("click", displayModal)
myModal.addEventListener("click", undisplayModal)

