// With Font Awesome 5, the <i> element is
// changed to <svg> automatically.
// This line nests <svg> within <i>
// Not sure if necessary, but now my code
// works with this nested structure
FontAwesomeConfig = { autoReplaceSvg: 'nest' }

// Integer of savedStars is defined in the following line:
var savedStars = 0;

// Upon page load, input integer from database (0-5)
// to display correct amount of saved solid stars
function starLoad(x) {
  var fa1 = document.getElementById('fa1');
  var fa2 = document.getElementById('fa2');
  var fa3 = document.getElementById('fa3');
  var fa4 = document.getElementById('fa4');
  var fa5 = document.getElementById('fa5');
  var faArray = [fa1, fa2, fa3, fa4, fa5];

  switch(x) {
    case 0:
      for (var i = 0; i < faArray.length; i++) {
        faArray[i].className = 'far fa-star';
      }
      break;
    case 1:
      for (var i = 0; i < 1; i++) {
        faArray[i].className = 'fas fa-star';
      }
      for (var i = 1; i < faArray.length; i++) {
        faArray[i].className = 'far fa-star';
      }
      break;
    case 2:
      for (var i = 0; i < 2; i++) {
        faArray[i].className = 'fas fa-star';
      }
      for (var i = 2; i < faArray.length; i++) {
        faArray[i].className = 'far fa-star';
      }
      break;
    case 3:
      for (var i = 0; i < 3; i++) {
        faArray[i].className = 'fas fa-star';
      }
      for (var i = 3; i < faArray.length; i++) {
        faArray[i].className = 'far fa-star';
      }
      break;
    case 4:
      for (var i = 0; i < 4; i++) {
        faArray[i].className = 'fas fa-star';
      }
      for (var i = 4; i < faArray.length; i++) {
        faArray[i].className = 'far fa-star';
      }
      break;
    case 5:
      for (var i = 0; i < 5; i++) {
        faArray[i].className = 'fas fa-star';
      }
      break;
  }

}
window.onload = starLoad(savedStars);

// Here is the function to change the stars.
// This also changes savedStars variable.
function stars(id) {

  var c1 = document.getElementById('fa1').children[0];
  var c2 = document.getElementById('fa2').children[0];
  var c3 = document.getElementById('fa3').children[0];
  var c4 = document.getElementById('fa4').children[0];
  var c5 = document.getElementById('fa5').children[0];
  var fa1 = c1.getAttribute('data-prefix');
  var fa2 = c2.getAttribute('data-prefix');
  var fa3 = c3.getAttribute('data-prefix');
  var fa4 = c4.getAttribute('data-prefix');
  var fa5 = c5.getAttribute('data-prefix');

  switch (id) {
    case 'fa1':
      if (fa1.match('far') && fa2.match('far')) {
        c1.setAttribute('data-prefix', 'fas');
        savedStars = 1;
      }
      if (fa1.match('fas') && fa2.match('far')) {
        c1.setAttribute('data-prefix', 'far');
        savedStars = 0;
      }
      c2.setAttribute('data-prefix', 'far');
      c3.setAttribute('data-prefix', 'far');
      c4.setAttribute('data-prefix', 'far');
      c5.setAttribute('data-prefix', 'far');
      break;

    case 'fa2':
      if (fa2.match('far') && fa3.match('far')) {
        c1.setAttribute('data-prefix', 'fas');
        c2.setAttribute('data-prefix', 'fas');
        savedStars = 2;
      }
      if (fa2.match('fas') && fa3.match('far')) {
        c1.setAttribute('data-prefix', 'far');
        c2.setAttribute('data-prefix', 'far');
        savedStars = 0;
      }
      c3.setAttribute('data-prefix', 'far');
      c4.setAttribute('data-prefix', 'far');
      c5.setAttribute('data-prefix', 'far');
      break;

    case 'fa3':
      if (fa3.match('far') && fa4.match('far')) {
        c1.setAttribute('data-prefix', 'fas');
        c2.setAttribute('data-prefix', 'fas');
        c3.setAttribute('data-prefix', 'fas');
        savedStars = 3;
      }
      if (fa3.match('fas') && fa4.match('far')) {
        c1.setAttribute('data-prefix', 'far');
        c2.setAttribute('data-prefix', 'far');
        c3.setAttribute('data-prefix', 'far');
        savedStars = 0;
    }
      c4.setAttribute('data-prefix', 'far');
      c5.setAttribute('data-prefix', 'far');
      break;

    case 'fa4':
      if (fa4.match('far') && fa5.match('far')) {
        c1.setAttribute('data-prefix', 'fas');
        c2.setAttribute('data-prefix', 'fas');
        c3.setAttribute('data-prefix', 'fas');
        c4.setAttribute('data-prefix', 'fas');
        savedStars = 4;
      }
      if (fa4.match('fas') && fa5.match('far')) {
        c1.setAttribute('data-prefix', 'far');
        c2.setAttribute('data-prefix', 'far');
        c3.setAttribute('data-prefix', 'far');
        c4.setAttribute('data-prefix', 'far');
        savedStars = 0;
      }
      c5.setAttribute('data-prefix', 'far');
      break;
    case 'fa5':
      if (fa5.match('far')) {
        c1.setAttribute('data-prefix', 'fas');
        c2.setAttribute('data-prefix', 'fas');
        c3.setAttribute('data-prefix', 'fas');
        c4.setAttribute('data-prefix', 'fas');
        c5.setAttribute('data-prefix', 'fas');
        savedStars = 5;
      }
      if (fa5.match('fas') && fa4.match('fas')) {
        c5.setAttribute('data-prefix', 'far');
        c1.setAttribute('data-prefix', 'far');
        c2.setAttribute('data-prefix', 'far');
        c3.setAttribute('data-prefix', 'far');
        c4.setAttribute('data-prefix', 'far');
        savedStars = 0;
      }
      break;
  }
}
