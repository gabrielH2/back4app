const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");


let tarefas = [];

buttonElement.onclick = ev => {
  ev.preventDefault();

  //for (let i=0; i<tarefas.length; i++) {

  if (inputElement.value) {
    

    const textElement = document.createElement("span");
    textElement.innerHTML = inputElement.value;

    const btnElement = document.createElement("button");
    btnElement.innerHTML = "Remover";
    btnElement.id = "remove";

    const btncon = document.createElement('input');
    btncon.type = "checkbox";
    btncon.id = "check";

    const liElement = document.createElement("li");
    liElement.id = "li";
    liElement.appendChild(btncon);
    liElement.appendChild(textElement);
    liElement.appendChild(btnElement);

  
    btnElement.onclick = () => {
      ulElement.removeChild(liElement) 
    }

    btncon.onclick = () => {
        if (btncon.checkValidity) {
        textElement.style.textDecoration = 'line-through';
        } 
    }

    ulElement.appendChild(liElement);
    inputElement.value = "";
  }

};