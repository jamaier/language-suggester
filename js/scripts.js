window.onload = function () {
  function preventDefault(event) {
    event.preventDefault();
  }

  const questionOne = document.getElementById("questionOne");
  const questionTwo = document.getElementById("questionTwo");
  const questionThree = document.getElementById("questionThree");
  const questionFour = document.getElementById("questionFour");
  const questionFive = document.getElementById("questionFive");
  const submit = document.getElementById("submit");
  const hidden = document.getElementById("hidden");

  questionOne.addEventListener("change", suggestLanguage);
  questionTwo.addEventListener("change", suggestLanguage);
  questionThree.addEventListener("change", suggestLanguage);
  questionFour.addEventListener("change", suggestLanguage);
  questionFive.addEventListener("change", suggestLanguage);
  submit.addEventListener("submit", preventDefault);

  function suggestLanguage() {
    let language = "";

    if (questionOne.value === "Mobile") {
      if (questionTwo.value === "data") {
        language = "Python";
      } else if (questionTwo.value === "games") {
        language = "JavaScript";
      } else {
        language = "Swift";
      }
    } else if (questionOne.value === "Desktop") {
      if (questionTwo.value === "data") {
        language = "Python";
      } else if (questionTwo.value === "games") {
        language = "JavaScript";
      } else {
        language = "Swift";
      }
    } else {
      if (questionTwo.value === "data") {
        language = "JavaScript";
      } else if (questionTwo.value === "games") {
        language = "JavaScript";
      } else {
        language = "Python";
      }
    };
  };

  

};


