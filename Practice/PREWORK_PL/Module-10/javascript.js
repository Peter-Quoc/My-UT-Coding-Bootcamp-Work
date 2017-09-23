$("#grow").on("click", function() {
	$("#box").animate({height:"+=25px", width:"+=25px"}, "fast");
})

$("#blue").on("click", function() {
	$("#box").css("background-color", "blue")
})

document.getElementById("fade").addEventListener("click", function () {
	document.getElementById("box").style.opacity-="0.25";
})

$("#reset").on("click", function() {
	$("#box").css("background-color", "orange").animate({height: "150px",width: "150px"})
	document.getElementById("box").style.opacity="1.0";
})