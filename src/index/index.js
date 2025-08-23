import "/src/assets/styles/style.scss";
import "./index.scss";

const input = document.querySelector(".container-blur input");
const containerBlur = document.querySelector(".container-blur");
const opacity = document.querySelector('.opacity')
const text1 = document.querySelector('.text-1')
const text2 = document.querySelector('.text-2')
const div1 = document.querySelector(".div-1")


// ✅ Tu peux ajouter autant de phrases que tu veux ici
const validPhrases1 = ["182 jours"];

input.addEventListener("input", () => {
  const value = input.value.trim().toLowerCase();

  if (validPhrases1.includes(value)) {
 
      text1.style.display = "none";
    text2.style.display = "block";
    div1.classList.add('div-1-active')
    input.disabled = true; 
    input.value = ""; // 🔥 supprime le texte de l’input

  } else {
  }
});
const validPhrases2 = [
    // "test password"," Moi c'est toi", "moi c'est toi"
];

input.addEventListener("input", () => {
  const value = input.value.trim().toLowerCase();

  if (validPhrases2.includes(value)) {
    containerBlur.classList.add("no-blur");
    opacity.classList.add('opacity-active')
    setTimeout(()=>{
        containerBlur.classList.add("test-active")
    },3000)
  } else {
    containerBlur.classList.remove("no-blur");
  }
});
 // Cible = 26 août 2025 à minuit
 const targetDate = new Date("2025-08-26T00:00:00").getTime();
 const countdown = document.querySelector(".countdown");

 setInterval(() => {
   const now = new Date().getTime();
   const distance = targetDate - now;

   if (distance <= 0) {
     countdown.innerHTML = "C'est fini 🎉";
     return;
   }

   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   countdown.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
 }, 1000);