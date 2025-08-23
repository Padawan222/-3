import "/src/assets/styles/style.scss";
import "./index.scss";

const input = document.querySelector(".container-blur input");
const containerBlur = document.querySelector(".container-blur");
const opacity = document.querySelector('.opacity')
const text1 = document.querySelector('.text-1')
const text2 = document.querySelector('.text-2')

// ✅ Tu peux ajouter autant de phrases que tu veux ici
const validPhrases1 = ["182 jours"];

input.addEventListener("input", () => {
  const value = input.value.trim().toLowerCase();

  if (validPhrases1.includes(value)) {
 
      text1.style.display = "none";
    text2.style.display = "block";
    input.value = ""; // 🔥 supprime le texte de l’input

  } else {
  }
});
const validPhrases2 = ["test password"," Moi c'est toi", "moi c'est toi"];

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
