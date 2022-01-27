let bg1 = document.getElementById("bg1")
let bg2 = document.getElementById("bg2")
let bg3 = document.getElementById("bg3")
let time = 2000


let slider = function(){
	if(bg1.className === "bgImg"
		&& bg2.className === "bgImg"
		&& bg3.className === "bgImg"){
		bg1.className = "bgImgShow"
		}
		else if(bg1.className === "bgImgShow"){
			bg1.className = "bgImg"
			bg2.className = "bgImgShow"
		}
		else if(bg2.className === "bgImgShow"){
			bg2.className = "bgImg"
			bg3.className = "bgImgShow"
		}
		else if(bg3.className === "bgImgShow"){
			bg3.className = "bgImg"
			bg1.className = "bgImgShow"
		}

		setTimeout("slider()",time)
}

window.onLoad = slider()





