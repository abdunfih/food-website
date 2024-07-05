/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById('humburger');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav_link')

navLink.forEach(link =>
  link.addEventListener("click", () => {
    navMenu.classList.add('hidden')
  })
)

navClose.addEventListener("click", () => {
  navMenu.classList.add('hidden')
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove('hidden')
})

// const tabs = document.querySelectorAll(".tabs_wrap ul li");

// tabs.forEach(tab => {
//   tab.addEventListener("click", () => {
//     tabs.forEach(tab => {
//       tab.classList.remove("active")
//     })
//     tab.classList.add("active")
//   })
// }) 

// scrollUp

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};

window.addEventListener('scroll', scrollUp);

// scrollHeade
const scrollHeader = () => {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-secondaryColor");
  } else {
    header.classList.remove("border-b", "border-secondaryColor");
  }
};

window.addEventListener('scroll', scrollHeader);

// dark

const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener('click', (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }

})

function darkMode()  {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark")
}

function lightMode()  {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}