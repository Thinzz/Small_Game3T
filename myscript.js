

var buttonaction = document.querySelector("#startaction")

var rowcancel = document.querySelectorAll("td")

var header = document.querySelector("#header")

buttonaction.addEventListener("click", function(){

  buttonaction.style.color = 'red';

  for (var i=0; i<rowcancel.length; i++){
    rowcancel[i].textContent = '';
  }

});


function checkMaker(){
  if (this.textContent===''){
    this.textContent = 'X';
  }
  else if (this.textContent === 'X'){
    this.textContent = 'O';

  }else{
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
