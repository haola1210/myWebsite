showMenu = () => {
	let menu = document.getElementById("drop-content");
	if(menu.style.display === "none")
		menu.style.display = "block"
	else
		menu.style.display = "none"
}
document.getElementById("drop-btn").addEventListener("click", showMenu);
