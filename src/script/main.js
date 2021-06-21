import Aos from "aos";
// AOS Library
Aos.init({
  disable: "mobile",
  once: true,
  duration: 800,
});

// Navbar
const toggle = document.getElementById("toggle");
const loadingElement = document.getElementById('loading');
const image = document.getElementsByTagName("img");
const items = document.querySelectorAll(".timeline li");

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


function callbackFun() {
  for (let i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

// Loading lazy
for (let i = 0; i < image.length; i++) {
  image[i].setAttribute("loading", "lazy");
}


// loading content
window.addEventListener('load', function () {
  loadingElement.style.display = 'none';
  callbackFun();
})
window.addEventListener("scroll", callbackFun);

