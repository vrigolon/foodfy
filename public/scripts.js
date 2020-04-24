

// Show/hide function
function hideShow(cssClass, button) {
  textToHide = document.querySelector(cssClass);
  buttonText = document.querySelector(button);
  if (textToHide.style.display == "none") {
    textToHide.style.display = "block";
    buttonText.textContent = "ESCONDER";
    setTimeout(function () {
      textToHide.style.opacity = 1;
      }, 100);

  } else {
    textToHide.style.opacity = 0;
    buttonText.textContent = "MOSTRAR";
    setTimeout(function () {
    textToHide.style.display = "none";
    }, 1000);
  }
} 



// ADICIONAR CAMPO INGREDIENTES
function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");
  if(!ingredients) return false
  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;
  
  // Deixa o valor do input vazio
  newField.children[0].value = "";
  ingredients.appendChild(newField);
  
}
if (document.querySelector(".add-ingredient")) {
document.querySelector(".add-ingredient").addEventListener("click", addIngredient);
}

// ADICIONAR CAMPO PASSO
function addPrepare() {
  const prepare = document.querySelector("#prepare");
  const fieldContainer = document.querySelectorAll(".prepareField");
  if(!prepare) return false
  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;
  
  // Deixa o valor do input vazio
  newField.children[0].value = "";
  prepare.appendChild(newField);
  
}

if (document.querySelector(".add-prepare")) {
document.querySelector(".add-prepare").addEventListener("click", addPrepare);
}