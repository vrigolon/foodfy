const cards = document.querySelectorAll('.card')

// Generate cards for recipes page and links
for (let card of cards) {

  card.addEventListener("click", function(){
    const recipeId = card.getAttribute("id")
    window.location.href = `/recipes/${recipeId}`

  })
}

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


function addIngredientField() {
  document.getElementById('ingredients').innerHTML += '<input type="text"  name="ingredients[]"  placeholder="Novo ingrediente" value=""><br>';
}

function addPrepareField(){
  document.getElementById('prepare').innerHTML += '<input type="text"  name="preparation[]"  placeholder="Novo passo" value=""><br>';
}

// ADICIONAR CAMPO INGREDIENTES
function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");
  
  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;
  
  // Deixa o valor do input vazio
  newField.children[0].value = "";
  ingredients.appendChild(newField);
  
}

document.querySelector(".add-ingredient").addEventListener("click", addIngredient);


// ADICIONAR CAMPO PASSO
function addPrepare() {
  const ingredients = document.querySelector("#prepare");
  const fieldContainer = document.querySelectorAll(".prepareField");
  
  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;
  
  // Deixa o valor do input vazio
  newField.children[0].value = "";
  ingredients.appendChild(newField);
  
}

document.querySelector(".add-prepare").addEventListener("click", addPrepare);