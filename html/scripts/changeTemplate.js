/* Assign possible template ids here */
/* These must be represented in html as div ids */
var templateList = ["prompt", "quote", "custom", "empty"];

/* Upon clicking "Next" button, sssign desired template id here */
var myTemplate = "quote";

function switchTemplate(template) {
  var htmlTemplate = document.getElementById(template);
  if (htmlTemplate.style.display !== "block") {
    templateList.forEach(function(element) {
      var htmlOther = document.getElementById(element);
      htmlOther.style.display = "none";
    })
    htmlTemplate.style.display = "block";
  }
}

// Upon page load, immediately load this template
window.onload = switchTemplate("empty");


/* In html, example button code:
<button id="button1" onclick="switchTemplate(myTemplate)" type="button" class="btn btn-info">
<i class="fas fa-arrow-circle-right"></i>Switch Template</button> */
