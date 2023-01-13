window.onload = function() {
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

  submit.addEventListener("click", function(event) {
    event.preventDefault();
  })
}