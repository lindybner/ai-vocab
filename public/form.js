// form & btns
const vocabForm = document.querySelector(".vocab-form");
const btnPronounce = document.querySelector("a#pronunciation");

// output element
const card = document.querySelector(".card p");

// newCard fn
const newCard = async (e) => {
  e.preventDefault();

  const res = await fetch("/openai/vocab", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  card.innerHTML = data.response.content;

  // display pronunciation btn
  btnPronounce.style.display = "block";
};

// event listener
vocabForm.addEventListener("submit", newCard);
