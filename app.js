fetch("./data/projects.json")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    res.data.forEach((data) => {
      const container = document.querySelector(".project_wrapper");
      const project = document.createElement("div");
      const overlay = document.createElement("div");
      let ul = document.createElement("ul");
      const listWrapper = document.createElement("div");
      project.classList.add("project");
      project.classList.add("glass_form");

      const img = document.createElement("img");
      img.src = data.image;
      img.setAttribute(
        "style",
        "width:100%; height:100%; border-radius: 0.375rem;"
      );

      project.appendChild(img);
      project.appendChild(overlay);
      overlay.classList.add("overlay");

      data.techStack.forEach((tech, index) => {
        let li = document.createElement("li");
        li.innerHTML = index < data.techStack.length - 1 ? `${tech} | ` : tech;
        li.style.display = "inline";
        ul.appendChild(li);
      });

      //   listWrapper.appendChild(ul);

      overlay.innerHTML = `  <h2 class="text-md md:text-lg lg:text-2xl py-2 data-title">${data.title}</h2>
          <p class="text-sm"> ${data.description}</p>  
          <br/>
          <h3 class="text-sm">Tech Stack: </h3>    
        `;
      overlay.appendChild(ul);
      //   project.innerHTML = `
      //           <img
      //                 src="${data.image}"
      //                 alt=""
      //                 class="rounded-md w-full h-full"
      //                 id="project_image"
      //           />
      //               <div class="overlay">
      //                   <h2 class="text-md md:text-lg py-2">${data.title}</h2>
      //                   <p id="description_project">
      //                       ${data.description}
      //                   </p>
      //                   <a
      //                     href="project.html"
      //                     target="_blank"
      //                     class="mt-2 mb-1 block text-sm md:text-md see_project-btn"
      //                   >
      //                     See Project <i class="fa-solid fa-arrow-right ml-1"></i>
      //                   </a>
      //               </div>
      //     `;

      container.append(project);
    });
  })
  .catch((err) => {
    console.log(err);
  });

let mybutton = document.getElementById("button");

window.onscroll = () => {
  console.log("scrolling");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    console.log("fdhfhd");
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
    let top = window.scrollY - 100;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`);
      activeLink(target);
    }
  });
};

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
  let details = document.querySelector(".hero-section_details");

  if (localStorage.getItem("isDarkMode") == "false") {
    dark.style.display = "block";
    light.style.display = "none";
    body.classList.add("light-theme");
    menu.style.background = "#cdd5ef";
    nav.style.background = "#cdd5ef";
    socialLinks.style.color = "#fff";
  } else {
    dark.style.display = "none";
    light.style.display = "block";
    menu.style.background = "#101530";
    body.classList.remove("light-theme");
    nav.style.background = "#101530";
    details.style.color = "#fff";
  }
}
toggleColor();

const btnScrollToTop = document.querySelector(".scroll-button");

function btnScroll() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

function scrollTopTop() {
  if (window.pageYOffset > 100) {
    btnScrollToTop.classList.add("active");
  } else {
    btnScrollToTop.classList.remove("active");
  }
}
window.addEventListener("scroll", scrollTopTop);

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
