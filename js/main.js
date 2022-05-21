var container1 = document.querySelector(".container");
var zIndex = 2;
var colors = ["#344648", "#7d8e95", "#ffbb98"];

$(document).ready(function () {
  $(".button").on("click", function () {
    if ($("#memo").val() == "") {
      alert("請先輸入memo內容");
      return;
    }
    addNote();
  });
});

function createDiv() {
  return document.createElement("div");
}
function getTop() {
  var wHeight = window.innerHeight - 200;
  return Math.random() * wHeight + "px";
}
function getLeft() {
  var wWidth = window.innerWidth - 200;
  return Math.random() * wWidth + "px";
}

function addNote() {
  var note = createDiv();
  note.classList.add("note");
  note.style.top = getTop();
  note.style.left = getLeft();
  note.style.zIndex = zIndex;
  zIndex++;

  var noteText = createDiv();
  noteText.innerText = $("#memo").val();
  noteText.classList.add("note-text");
  noteText.style.backgroundColor = colors[Math.floor(Math.random() * 3)];

  var color1 = createDiv();
  color1.classList.add("colorBox");
  color1.classList.add("color1");
  color1.addEventListener("click", (e) => {
    var item = e.target.parentElement.children[0];
    item.style.backgroundColor = colors[0];
  });

  var color2 = createDiv();
  color2.classList.add("colorBox");
  color2.classList.add("color2");
  color2.addEventListener("click", (e) => {
    var item = e.target.parentElement.children[0];
    item.style.backgroundColor = colors[1];
  });

  var color3 = createDiv();
  color3.classList.add("colorBox");
  color3.classList.add("color3");
  color3.addEventListener("click", (e) => {
    var item = e.target.parentElement.children[0];
    item.style.backgroundColor = colors[2];
  });

  note.appendChild(noteText);
  note.appendChild(color1);
  note.appendChild(color2);
  note.appendChild(color3);
  container1.appendChild(note);
}
