const contactForm = document.querySelector(".hero-form");
const cookiePopup = document.getElementById("cookiePopup");
const acceptCookies = document.getElementById("acceptCookies");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location = "thank-you.html";
});

setTimeout(() => {
  if (!localStorage.getItem("cookiesAcceptedInvestaWay")) {
    cookiePopup.style.display = "block";
  }
}, 5000);

acceptCookies.addEventListener("click", function () {
  localStorage.setItem("cookiesAcceptedInvestaWay", "true");
  cookiePopup.style.display = "none";
});
