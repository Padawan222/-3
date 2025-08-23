import "/src/assets/styles/style.scss";
import "./index.scss";

const input = document.querySelector(".container-blur input");
const containerBlur = document.querySelector(".container-blur");
const opacity = document.querySelector('.opacity')

// ✅ Tu peux ajouter autant de phrases que tu veux ici
const validPhrases = ["Moi c'est toi", "moi c'est toi"];

input.addEventListener("input", () => {
  const value = input.value.trim().toLowerCase();

  if (validPhrases.includes(value)) {
    containerBlur.classList.add("no-blur");
    opacity.classList.add('opacity-active')
    setTimeout(()=>{
        containerBlur.classList.add("test-active")
    },3000)
  } else {
    containerBlur.classList.remove("no-blur");
  }
});
