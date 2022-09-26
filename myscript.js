

var buttonaction = document.querySelector("#startaction")

var rowcancel = document.querySelectorAll("td")

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
