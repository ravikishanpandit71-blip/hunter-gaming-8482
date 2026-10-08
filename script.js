// Welcome message
console.log("🔥 Welcome to Hunter Gaming 8482!");

// YouTube button click effect
const button = document.querySelector("button");

button.addEventListener("click", function () {
  button.innerText = "🔥 Opening YouTube...";
  
  setTimeout(function () {
    button.innerText = "▶️ Visit My YouTube";
  }, 1500);
});

// Card animation
const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.style.transform = "scale(1.03)";
    
    setTimeout(function () {
      card.style.transform = "";
    }, 300);
  });
});

