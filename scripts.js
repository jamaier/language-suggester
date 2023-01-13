

const bigData = document.querySelector('input[name="bigData"]:checked') === "true";
const buildWebsites = document.querySelector('input[name="buildWebsites"]:checked') === "true";

  window.onload = function () {
  document.querySelector('.formOne').addEventListener('submit',  function(event) {
    event.preventDefault();
    addEventListener('reset', (event) => {});
  })

  

    if (bigData === "bigData") {
        document.getElementById("python").classList.remove("hidden");
    } else {
      (buildWebsites === "buildWebsites") 
        document.getElementById("swift").classList.remove("hidden");
      }
    };