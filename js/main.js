let container1 = document.querySelector(".container");
let zIndex = 2;
let colors = ["#344648", "#7d8e95", "#ffbb98"];

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
  let wHeight = window.innerHeight - 200;
  return Math.random() * wHeight + "px";
}
function getLeft() {
  let wWidth = window.innerWidth - 200;
  return Math.random() * wWidth + "px";
}

function addNote() {
  let note = createDiv();
  note.classList.add("note");
  note.style.top = getTop();
  note.style.left = getLeft();
  note.style.zIndex = zIndex;
  zIndex++;

  let noteText = createDiv();
  noteText.innerText = $("#memo").val();
  noteText.classList.add("note-text");
  noteText.style.backgroundColor = colors[Math.floor(Math.random() * 3)];
  noteText.addEventListener("mousedown", (e) => {
    e.preventDefault();
    let startX = 0;
    let startY = 0;
    let item = e.target.parentElement;

    document.onmousemove = function (e) {
      startX = e.clientX - e.offsetX;
      startY = e.clientY - e.offsetY;
      x = startX + e.offsetX;
      y = startY + e.offsetY;
      item.style.left = x + "px";
      item.style.top = y + "px";
    };
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  });

  let color1 = createDiv();
  color1.classList.add("colorBox");
  color1.classList.add("color1");
  color1.addEventListener("click", (e) => {
    let item = e.target.parentElement.children[0];
    item.style.backgroundColor = colors[0];
  });

  let color2 = createDiv();
  color2.classList.add("colorBox");
  color2.classList.add("color2");
  color2.addEventListener("click", (e) => {
    let item = e.target.parentElement.children[0];
    item.style.backgroundColor = colors[1];
  });

  let color3 = createDiv();
  color3.classList.add("colorBox");
  color3.classList.add("color3");
  color3.addEventListener("click", (e) => {
    let item = e.target.parentElement.children[0];
    item.style.backgroundColor = colors[2];
  });

  let deleteBtn = createDiv();
  deleteBtn.classList.add("colorBox");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.addEventListener("click", (e) => {
    let item = e.target.parentElement.parentElement;
    item.remove();
  });

  note.appendChild(noteText);
  note.appendChild(color1);
  note.appendChild(color2);
  note.appendChild(color3);
  note.appendChild(deleteBtn);
  container1.appendChild(note);
}
