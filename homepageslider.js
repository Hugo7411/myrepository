const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    // Remove active classes
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    // Add active classes
    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

/* Change slide every 6 seconds */
setInterval(nextSlide, 6000);

// -----------------------------------------------------------------

function openPopup(element) {

    const popup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popupImg");

    popup.style.display = "flex";

    popupImg.src = element.querySelector("img").src;
}

function closePopup() {

    document.getElementById("imagePopup").style.display = "none";
}