window.onload = star(4);

function star(number) {
    var a = document.getElementById("1");
    var b = document.getElementById("2");
    var c = document.getElementById("3");
    var d = document.getElementById("4");
    var e = document.getElementById("5");
    if (number == 1) {
      a.className = "fas fa-star";
      b.className = "far fa-star";
      c.className = "far fa-star";
      d.className = "far fa-star";
      e.className = "far fa-star";
    }
    if (number == 2) {
      a.className = "fas fa-star";
      b.className = "fas fa-star";
      c.className = "far fa-star";
      d.className = "far fa-star";
      e.className = "far fa-star";
    }
    if (number == 3) {
      a.className = "fas fa-star";
      b.className = "fas fa-star";
      c.className = "fas fa-star";
      d.className = "far fa-star";
      e.className = "far fa-star";
    }
    if (number == 4) {
      a.className = "fas fa-star";
      b.className = "fas fa-star";
      c.className = "fas fa-star";
      d.className = "fas fa-star";
      e.className = "far fa-star";
    }
    if (number == 5) {
      a.className = "fas fa-star";
      b.className = "fas fa-star";
      c.className = "fas fa-star";
      d.className = "fas fa-star";
      e.className = "fas fa-star";
    }
}
