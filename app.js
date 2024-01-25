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

  if (body.classList.contains("light-theme")) {
    console.log("true");
    document.querySelector(".fa-moon").style.display = "none";
    document.querySelector(".fa-sun").style.display = "block";
    body.classList.remove("light-theme");
  } else {
    document.querySelector(".fa-moon").style.display = "block";
    document.querySelector(".fa-sun").style.display = "none";
    body.classList.add("light-theme");
  }
}
