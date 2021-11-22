function buttonFunction() {
	
	let score = 0
	
	/* textboxes */
	
	let the = document.getElementById("Question1").value;
	let Knight = the.toLowerCase();
	
	function textBox1(Knight) {
		if (Knight == "the knight") {
			score += 1;
		}
	};
	
	console.log(textBox1(Knight));
	
	let kings = document.getElementById("Question2").value;
	let Pass = kings.toLowerCase();
	
	function textBox2(Pass) {
		if (Pass == "kings pass") {
			score += 1;
		}
	};
	
	console.log(textBox2(Pass));
	
	
	
	// Checkbox //
	
	let white = document.querySelector("#checkbox1").checked;
	console.log(white);
	
	let dest = document.querySelector("#checkbox2").checked;
	console.log(dest);
	
	let dirt = document.querySelector("#checkbox3").checked;
	console.log(dirt);
	
	let hollow = document.querySelector("#checkbox4").checked;
	console.log(hollow);
	
	function checkbox4(hollow) {
		if (hollow == true) {
			score += 1;
		}
	};
	
	console.log(checkbox4(hollow))

	
	// Radiobox //
	
	
	let hornet = document.querySelector("#radio1").checked;
	
	let hollow2 = document.querySelector("#radio2").checked;
	
	let radiance = document.querySelector("#radio3").checked;
	
	let grey = document.querySelector("#radio4").checked;
	
	function radio3(radiance) {
		if (radiance == true) {
			score += 1;
		}
	};
	
	
	console.log(radio3(radiance))
	console.log(score)
	
	
	document.getElementById("p1").innerHTML = "Answers (each answer is worth 1 point)";
	document.getElementsByClassName("paragraph")[0].innerHTML = "The characters name is The Knight also known as the player";
	document.getElementsByClassName("paragraph")[1].innerHTML = "the 1st area you enter is the Kings Pass";
	document.getElementsByClassName("paragraph")[2].innerHTML = "The country of bugs you're in is called Hollownest";
	document.getElementsByClassName("paragraph")[3].innerHTML = "The final boss is the Radiance";
	document.getElementById("h3").innerText = "Score:" + score;
	

};