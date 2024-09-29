const body = document.querySelector(".body");
const menuHeader = document.querySelector(".menuHeader");
const backMenuHeader = document.querySelector(".backMenuHeader");
const checkbox = document.querySelector("#checkbox2");
const themeToggle = document.querySelector(".input");
const content = document.querySelector(".content");
const down = document.querySelector("#down");
const checkboxInput = document.querySelectorAll(".checkbox-input");

themeToggle.checked = false;
checkbox.checked = false;
function toggleMenu() {
    if (checkbox.checked == false) {
        menuHeader.style.width = "60px";
        backMenuHeader.style.backgroundColor = "none";
        backMenuHeader.style.transition = "all 0.75s";
        backMenuHeader.style.display = "none";
    }else{
        menuHeader.style.width = "140px";
        backMenuHeader.style.backgroundColor = "#f5ab356c";
        backMenuHeader.style.transition = "all 0.75s";
        backMenuHeader.style.display = "block";
    }
}
function themeToggleBody() {
    if (themeToggle.checked == false) {
        body.style.backgroundColor = "#ffffff";
        body.style.transition = "all 1s";
    }else{
        body.style.backgroundColor = "#373737";
        body.style.transition = "all 1s";
    }
}
function downUp(){
    if (content.style.paddingBottom == "400px") {
        content.style.paddingBottom = "0px";
        down.style.transform = "rotate(0deg)";
    }else{
        content.style.paddingBottom = "400px";
        down.style.transform = "rotate(180deg)";
    }
}
function contentHover() {
    content.style.paddingBottom = "400px";
    down.style.transform = "rotate(180deg)";
}
function normal() {
    content.style.paddingBottom = "0px";
    down.style.transform = "rotate(0deg)";
}

document.querySelector(".button").onclick = () => {
  const g = document.getElementById("gallery");
  while (g.firstChild) {
    g.removeChild(g.lastChild);
  }
}

$(document).ready(function(){
	$('#baceSorting').change(function(){
		var baceSorting = $(this).val();
		if (baceSorting == 'I') {
      window.open("uploadFileImg.html", "_self")
      $('#c1').text('زندگینامه');
      $('#c2').text('خاطرات');
      $('#c3').text('دستنوشته');
      $('#c4').text('به‌وقت‌روضه');
		}
		else if (baceSorting == 'V') {
      window.open("uploadFileVideo.html", "_self")
			$('#c1').text('زندگینامه');
			$('#c2').text('خاطرات');
			$('#c3').text('دستنوشته');
			$('#c4').text('به‌وقت‌روضه');
		}
		else if (baceSorting == 'A') {
      window.open("uploadFileAudio.html", "_self")
			$('#c1').text('رمان');
			$('#c2').remove();
			$('#c3').remove();
			$('#c4').remove();
		}
		else {
      window.open("uploadFileTxt.html", "_self")
			$('#c1').text('متن');
			$('#c2').remove();
			$('#c3').remove();
			$('#c4').remove();
		}
	});
});