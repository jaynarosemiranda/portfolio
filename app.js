fetch("./data/projects.json")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    res.data.forEach((data, index) => {
      const container = document.querySelector(".project_wrapper");
      const project = document.createElement("div");

      project.setAttribute(
        "style",
        "width:100%; display:flex; justify-content:center;flex-wrap:wrap;align-items:center;"
      );
      let htmlContent = "";
      const className = index % 2 === 0 ? "order-2" : "order-1";
      htmlContent += `
        <div class="lg:w-1/2 w-full ${className}">
            <img src="${data.image}"  alt="" />
        </div>`;
      htmlContent += `<div class="lg:w-1/2 w-full p-2 project-details">`;
      htmlContent += `<a href="${data.link}" target="_blank" class="project_title"> <h2 class="text-red-300 text-2xl pb-2">${data.title}</h2> </a>`;
      htmlContent += `<p class="">${data.description} </p>`;
      htmlContent += "<ul class='flex mt-2 text-white'>";
      data.techStack.forEach((tech) => {
        htmlContent += `<li class="tech-stack"> ${tech} </li>`;
      });
      htmlContent += "</ul>";
      htmlContent += "</div>";
      // Add class based on odd or even index

      project.innerHTML = htmlContent;
      container.appendChild(project);
    });
  })
  .catch((err) => {
    console.log(err);
  });

let mybutton = document.getElementById("button");

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
};

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
    let top = window.scrollY - 300;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`);
      activeLink(target);
    }
  });
};

function changeTheme() {
  localStorage.getItem("isDarkMode") == "false"
    ? localStorage.setItem("isDarkMode", "true")
    : localStorage.setItem("isDarkMode", "false");

  toggleColor();
}
function toggleColor() {
  let body = document.body;
  let menu = document.querySelector(".menu");
  let dark = document.querySelector(".fa-moon");
  let light = document.querySelector(".fa-sun");
  let nav = document.querySelector("nav");

  //   let bgPhoto = document.querySelector(".bg-photo");

  if (localStorage.getItem("isDarkMode") == "false") {
    dark.style.display = "block";
    light.style.display = "none";
    body.classList.add("light-theme");
    menu.style.background = "#fff";
    nav.style.background = "#fff";
    // socialLinks.style.color = "#fff";
    // bgPhoto.style.border = "5px solid #519cd4";
  } else {
    dark.style.display = "none";
    light.style.display = "block";
    menu.style.background = "#101530";
    body.classList.remove("light-theme");
    nav.style.background = "#101530";
  }
}
toggleColor();

const btnScrollToTop = document.querySelector(".scroll-button");

function btnScroll() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

function scrollToTop() {
  if (window.pageYOffset > 100) {
    btnScrollToTop.classList.add("active");
  } else {
    btnScrollToTop.classList.remove("active");
  }
}
window.addEventListener("scroll", scrollToTop);

// Form Submission Web 3

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      console.log(json);
      if (response.status == 200) {
        result.innerHTML = json.message;
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});
