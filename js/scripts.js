window.onload = function () {
  function preventDefault(event) {
    event.preventDefault();
  }

  const questionOne = document.getElementById("questionOne");
  const questionTwo = document.getElementById("questionTwo");
  const questionThree = document.ggetElementById("questionThree");
  const questionFour = document.getElementById("questionFour");
  const questionFive = document.getElementById("questionFive");
  const submit = document.getElementById("submit");
  const result = document.getElementById("result");

  submit.addEventListener("click", function (event) {
    event.preventDefault();
  });

  function suggestLanguage() {
    let language = "";

    if (questionOne.value === "Desktop") {
      if (questionTwo.value === "Data") {
        language = "Python";
      } else if (questionTwo.value === "Games") {
        language = "JavaScript";
      } else {
        language = "Swift";
      }
    } else if (questionOne.value === "Web") {
    }
    if (questionOne.value === "Desktop") {
      if (questionTwo.value === "Data") {
        language = "Python";
      } else if (questionTwo.value === "Games") {
        language = "JavaScript";
      } else {
        language = "Swift";
      }
    } else if (questionOne.value === "Web") {
    }
    if (questionOne.value === "Desktop") {
      if (questionTwo.value === "Data") {
        language = "Python";
      } else if (questionTwo.value === "Games") {
        language = "JavaScript";
      } else {
        language = "Swift";
      }
    } else if (questionOne.value === "Web") {
    }
  }
};
