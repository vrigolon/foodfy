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