// This is a JS file for userHome.php

/* Assign possible template ids here */
/* These must be represented in html as div ids */
var templateList = ["prompt", "quote", "custom", "empty"];

/* Upon clicking "Next" button, assign desired template id here */
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
};

function dataCheck(data) {
  var yes = document.getElementById("yesData");
  var no = document.getElementById("noData");
  if (data === true) {
    yes.style.display = "block";
    no.style.display = "none";
  } else {
    yes.style.display = "none";
    no.style.display = "block";
  }
};


// Adjusts screen content to reflect if user has data in database.
// If so, true is the parameter. If not, false is the parameter.
window.onload = dataCheck(true);

// Upon page load, immediately load this template
window.onload = switchTemplate("prompt");

/* In html, example button code:
<button id="button1" onclick="switchTemplate(myTemplate)" type="button" class="btn btn-info">
<i class="fas fa-arrow-circle-right"></i>Switch Template</button> */
