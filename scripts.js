function languageSuggestion() {


  const questionOne = document.querySelector("input[name='questionOne']:checked")
  const questionTwo = document.querySelector("input[name='questionTwo']:checked")
  const questionThree = document.querySelector("input[name='questionThree']:checked")
  const questionFour = document.querySelector("input[name='questionFour']:checked")
  const questionFive = document.querySelector("input[name='questionFive']:checked")

  if (questionOne === "data" && questionTwo === "desktop") {
    document.querySelector("div#python").removeAttribute("hidden")
  } else if (questionThree === "home") {
    document.querySelector("div#javascript").removeAttribute("hidden")
  } else {
    document.querySelector("div#swift").removeAttribute("hidden")
  }

  if (questionFour === "career") {
    document.querySelector("div#reasonWhy").removeAttribute("hidden")
  } else {
    document.querySelector("div#reasonWhy").removeAttribute("hidden")
  }

  if (questionFive === "rather") {
    document.querySelector("div#rather").removeAttribute("hidden")
  } else {
    document.querySelector("div#rather").removeAttribute("hidden")
  }
};

window.addEventListener("load", function(event) {
  const form = document.getElementById("formOne");
  form.addEventListener("submit", languageSuggestion)
  event.preventDefault();
  languageSuggestion();
});