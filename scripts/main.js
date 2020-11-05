// Hover over "mepick" swap.
document.getElementById("mepick").onmouseover = function () {
  mepickOver();
};

function mepickOver() {
  document.getElementById("mepick").src = "images/mepick-2.png";
}

// Hover out "mepick" swap.
document.getElementById("mepick").onmouseout = function () {
  mepickOut();
};

function mepickOut() {
  document.getElementById("mepick").src = "images/mepick-1.png";
}
