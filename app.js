// function myFunction(e) {
//   var elems = document.querySelector(".active");
//   if (elems !== null) {
//     elems.classList.remove("active");
//   }
//   e.target.classList.add("active");
// }

let mybutton = document.getElementById("button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
  console.log("scrolling");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    console.log("fdhfhd");
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
};

// function scrollFunction() {

// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let section = document.querySelectorAll("section");
let lists = document.querySelectorAll(".nav-links");
function activeLink(li) {
  lists.forEach((item) => item.classList.remove("active"));
  li.classList.add("active");
}
lists.forEach((item) =>
  item.addEventListener("click", function () {
    activeLink(this);
  })
);

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY - 100;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // console.log(top, offset, height);
      const target = document.querySelector(`[href='#${id}']`);
      activeLink(target);
    }
  });
};
// function onScroll() {
//   sections.forEach((section) => {
//     let top = window.scrollY;
//     let offset = section.offsetTop - 150;
//     let height = section.offsetHeight;
//     let id = section.getAttribute("id");
//     console.log(section);
//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         console.log(links);
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a [href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// }

// window.onScroll = () => {
//   // console.log("scroll");
// };
// window.addEventListener("scroll", onScroll);
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
  let dark = document.querySelector(".fa-moon");
  let light = document.querySelector(".fa-sun");
  let nav = document.querySelector("nav");
  let socialLinks = document.querySelector(".hero_section .social-media-links");

  if (localStorage.getItem("isDarkMode") == "false") {
    dark.style.display = "block";
    light.style.display = "none";
    body.classList.add("light-theme");
    menu.style.background = "#c7d2f2";
    nav.style.background = "#c7d2f2";
    socialLinks.style.color = "#fff";
    // document.querySelector(".cv-btn").style.color = "#fff";
  } else {
    dark.style.display = "none";
    light.style.display = "block";
    menu.style.background = "#101530";
    body.classList.remove("light-theme");
    nav.style.background = "#101530";
  }
}
toggleColor();
