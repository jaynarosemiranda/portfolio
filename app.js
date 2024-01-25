function goToMenu() {
  let navlinks = document.querySelector("#nav-links");
  //   navlinks.classList.add("hidden");

  console.log("hello!");
}
function myFunction(e) {
  var elems = document.querySelector(".active");
  if (elems !== null) {
    elems.classList.remove("active");
  }
  e.target.classList.add("active");
}

function changeTheme() {
  if (localStorage.getItem("isDarkMode") == "true") {
    localStorage.setItem("isDarkMode", "false");
  } else {
    localStorage.setItem("isDarkMode", "true");
  }
  toggleColor();
}
function toggleColor() {
  let body = document.body;
  let menu = document.querySelector(".menu");

  if (localStorage.getItem("isDarkMode") == "true") {
    document.querySelector(".fa-moon").style.display = "none";
    document.querySelector(".fa-sun").style.display = "block";
    menu.style.background = "#101530";
    body.classList.remove("light-theme");
  } else {
    document.querySelector(".fa-moon").style.display = "block";
    document.querySelector(".fa-sun").style.display = "none";
    body.classList.add("light-theme");
    menu.style.background = "#c7d2f2";
  }
}
toggleColor();
