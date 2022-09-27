

var buttonaction = document.querySelector("#startaction");

var rowcancel = document.querySelectorAll("td");

var header = document.querySelector("#header");

var switchXO = 0;

buttonaction.addEventListener("click", function(){

  buttonaction.style.color = 'red';

  for (var i=0; i<rowcancel.length; i++){
    rowcancel[i].textContent = '';
  }

});


function checkMaker(){
  if (this.textContent === ''){
    this.textContent = 'O';
  }
  else if (this.textContent === 'O') {
    this.textContent = 'X';
  }
  else {
    this.textContent = '';
  }
}

for (var k=0; k < rowcancel.length;k++){
  rowcancel[k].addEventListener("click", checkMaker);

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(){

  header.style.color = getRandomColor();
}

setInterval("changeColor()", 300);
