import Aos from "aos";
// AOS Library
Aos.init({
  disable: "mobile",
  once: true,
  duration: 800,
});

// Navbar
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {
  if (toggle.className === "bi bi-list") {
    toggle.className = "bi bi-x";
  } else {
    toggle.className = "bi bi-list";
  }
});

// Timeline
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const items = document.querySelectorAll(".timeline li");
function callbackFun() {
  for (let i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFun);
window.addEventListener("scroll", callbackFun);


// Loading lazy
const image = document.getElementsByTagName("img");

for (let i = 0; i < image.length; i++) {
  image[i].setAttribute("loading", "lazy");
}


// loading content

const loadingElement = document.getElementById('loading');

window.addEventListener('load', function () {
  loadingElement.style.display = 'none';
})

