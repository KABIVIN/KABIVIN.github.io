var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}

document.addEventListener("DOMContentLoaded", function() {
  const mobileToggleBtn = document.getElementById("mobileToggleBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileToggleBtn.addEventListener("click", function() {
      if (mobileMenu.style.display === "block") {
          mobileMenu.style.display = "none";
      } else {
          mobileMenu.style.display = "block";
      }
  });
});  

function checkAge() {
  var age = prompt("Ai peste 18 ani? Vă rugăm să introduceți vârsta dvs:");
  if (age === null || isNaN(age)) {
      alert("Intrare nevalidă. Vă rugăm mai încercați.");
  } else if (parseInt(age) <= 18) { 
      alert("Ne pare rău, trebuie să aveți mai mult de 18 ani pentru a accesa acest site.");
  } else {
      alert("Bine ați venit! Aveți voie să accesați acest site web.");
  }
}

function ageVerification() {
  var age = prompt("Ai peste 18 ani? Vă rugăm să introduceți vârsta dvs:");
  if (age === null || isNaN(age)) { 
      location.reload();
  } else if (parseInt(age) < 18) { 
      alert("Ne pare rău, trebuie să aveți mai mult de 18 ani pentru a accesa acest site..");
      window.location.href = "https://example.com/not-allowed.html"; 
  } else {
      alert("Bine ați venit! Aveți voie să accesați acest site web..");
  }
}

window.onload = ageVerification;