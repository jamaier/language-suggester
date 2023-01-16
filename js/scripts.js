function hideResults() {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("swift").setAttribute("class", "hidden");
  document.getElementById("reasonWhy").setAttribute("class", "hidden");
  document.getElementById("rather").setAttribute("class", "hidden");
}

window.addEventListener("load", function() {
  let form = document.getElementById("userForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    hideResults();

    const questionOne = parseInt(document.getElementById("questionOne").value);
    const questionTwo = parseInt(document.getElementById("questionTwo").value);
    const questionThree = parseInt(document.getElementById("questionThree").value);
    const questionFour = parseInt(document.getElementById("questionFour").value);
    const questionFive = parseInt(document.getElementById("questionFive").value);

    const results = questionOne + questionTwo + questionThree + questionFour + questionFive;

      if (results <=5 ) {
        document.getElementById("python").removeAttribute("class", "hidden");
      } else if (results <=7) {
        document.getElementById("javascript").removeAttribute("class", "hidden");
      } else if (results <=9) {
        document.getElementById("swift").removeAttribute("class", "hidden");
      } else { void(0);
      }
    });
  });

