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

function toggleSystem() {
  // let body = document.querySelector("body");
  let body = document.body;
  let links = document.querySelectorAll("a");
  let menu = document.querySelector(".menu");

  if (body.classList.contains("light-theme")) {
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
