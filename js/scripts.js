function hideResults() {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("swift").setAttribute("class", "hidden");
  document.getElementById("reasonWhy").setAttribute("class", "hidden");
  document.getElementById("rather").setAttribute("class", "hidden");
}


window.addEventListener("load", function () {
  document.getElementById("radioForm").addEventListener("submit", languageSuggestion);
  hideResults();
  function languageSuggestion (event) {
    event.preventDefault();

  const questionOne = document.querySelector("input[name='questionOne']:checked").value;
  const questionTwo = document.querySelector("input[name='questionTwo']:checked").value;
  const questionThree = document.querySelector("input[name='questionThree']:checked").value;
  const questionFour = document.querySelector("input[name='questionFour']:checked").value;
  const questionFive = document.querySelector("input[name='questionFive']:checked").value;

  if (questionOne === "data" && questionTwo === "desktop" && questionThree === "home") {
    document.getElementById("python").removeAttribute("class");
  } else if (questionTwo === "mobile" && questionThree === "office") {
    document.getElementById("swift").removeAttribute("class");
  } else {
      document.getElementById("rather").removeAttribute("class")
  }
  // if (questionFour === "career" && questionFive === "stubToe") {
  //   document.getElementById("reasonWhy").removeAttribute("class");
  // } else if (userName && bday && animal === 4 || family === 4) {
  //   document.getElementById("csharp").removeAttribute("class");
  // } else if (userName && bday) {
  //   document.getElementById("ruby").removeAttribute("class");
  // } else {
  //   document.getElementById("error-message").removeAttribute("class");
  // }
  }
});



// function hideResults() {
//   document.getElementById("python").setAttribute("class", "hidden");
//   document.getElementById("javascript").setAttribute("hidden");
//   document.getElementById("swift").setAttribute("hidden");
//   document.getElementById("readonWhy").setAttribute("hidden");
//   document.getElementById("rather").setAttribute("hidden");
// }
// function languageSuggestion () {
// const questionOne = document.querySelector("input[name='questionOne']:checked");
// const questionTwo = document.querySelector("input[name='questionTwo']:checked");
// const questionThree = document.querySelector(
//   "input[name='questionThree']:checked"
// );
// const questionFour = document.querySelector(
//   "input[name='questionFour']:checked"
// );
// const questionFive = document.querySelector(
//   "input[name='questionFive']:checked"
// );



// if (questionOne === "data" && questionTwo === "desktop") {
//   document.querySelector("div#python").removeAttribute("class");
// } else if (questionThree === "home") {
//   document.querySelector("div#javascript").removeAttribute("class");
// } else {
//   document.querySelector("div#swift").removeAttribute("class");
// };

// if (questionFour === "career" && questionFour === "forFun") {
//   document.querySelector("div#reasonWhy").removeAttribute("class");
// } else {
// };

// if (questionFive === "bear" && questionFive === "stubToe") {
//   document.querySelector("div#rather").removeAttribute("class");
// } else {
// };
// }

// window.addEventListener("load", function (event) {
//   const form = document.getElementById("formOne");
//   form.addEventListener("submit", languageSuggestion);
//   event.preventDefault();
//   hideResults();
// });