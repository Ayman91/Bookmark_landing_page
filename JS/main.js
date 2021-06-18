// features section navigation feature
const simple = document.querySelector(".simple");
const speedy = document.querySelector(".speedy");
const easy = document.querySelector(".easy");

const tab1 = document.querySelector(".features__section--tab1");
const tab2 = document.querySelector(".features__section--tab2");
const tab3 = document.querySelector(".features__section--tab3");

simple.addEventListener("click", () => {
  tab1.classList.remove("hide");
  tab2.classList.add("hide");
  tab3.classList.add("hide");
  simple.classList.add("active");
  speedy.classList.remove("active");
  easy.classList.remove("active");
});
speedy.addEventListener("click", () => {
  tab1.classList.add("hide");
  tab2.classList.remove("hide");
  tab3.classList.add("hide");
  simple.classList.remove("active");
  speedy.classList.add("active");
  easy.classList.remove("active");
});
easy.addEventListener("click", () => {
  tab1.classList.add("hide");
  tab2.classList.add("hide");
  tab3.classList.remove("hide");
  simple.classList.remove("active");
  speedy.classList.remove("active");
  easy.classList.add("active");
});

const answer = document.querySelector(".answer");
const question = document.querySelector(".question");

question.addEventListener("click", function () {
  if (answer.style.height) {
    answer.style.height = null;
  } else {
    answer.style.height = answer.scrollHeight + "px";
  }
});
