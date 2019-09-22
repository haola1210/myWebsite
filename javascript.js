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

let home = document.getElementById("home")
let bio = document.getElementById("bio")
let hobby = document.getElementById("hobby")
let forU = document.getElementById("for-you")

let link = document.getElementsByClassName("linklink")
link[0].className = "linklink active"

let yHome = home.offsetHeight;
let yBio = bio.offsetHeight;
let yHobby = hobby.offsetHeight;
let yForU = forU.offsetHeight;


let myHeader = document.getElementById("my-header")

headerChange = () => {
	if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
		myHeader.style.backgroundColor = "#222";
	} else {
		myHeader.style.backgroundColor = "black";
	}
}

hao = (list, index, defaultStr = "linklink", newStr = "linklink active") =>{
	for(i in list){
		if(i == index)
			list[i].className = newStr;
		else
			list[i].className = defaultStr;
	}
}

navChange = () => {

	if(document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){
		hao(link,0)
	}
	if(document.body.scrollTop > yHome-100 || document.documentElement.scrollTop > yHome-100){
		hao(link,1)
	}
	if(document.body.scrollTop > yBio+yHome-100 || document.documentElement.scrollTop > yBio+yHome-100){
		hao(link,2)
	}
	if(document.body.scrollTop > yForU+yBio+yHome || document.documentElement.scrollTop > yForU+yBio+yHome){
		hao(link,3)
	}
	
}

window.addEventListener("scroll", headerChange)
window.addEventListener("scroll", navChange)



let firstShow = document.getElementById("first-show")
for(let i = 0; i < 4; i++){
	document.getElementById("part-btn"+i).addEventListener("click", () => {
		for(let j = 0; j < 4; j++){
			if(j == i){
				firstShow.style.display = "none";
				document.getElementById("part-btn"+j).className.baseVal = "part-btn active-btn"
				document.getElementById("part"+j).style.display = "block"
			} else {
				document.getElementById("part-btn"+j).className.baseVal = "part-btn"
				document.getElementById("part"+j).style.display = "none"
			}
		}
	});
}
