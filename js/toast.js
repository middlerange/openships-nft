window.showToast = (msg) => {
  var x = document.getElementById("snackbar");
  x.className = "show";
  x.innerHTML = msg;
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};
