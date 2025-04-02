document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;
  
    // Function to show the current slide
    function showSlide(n) {
      if (n < 0) {
        currentSlide = slides.length - 1;
      } else if (n >= slides.length) {
        currentSlide = 0;
      }
  
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      slides[currentSlide].style.display = "block";
    }
  
    // Function to navigate to the previous slide
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Function to navigate to the next slide
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
  
    // Show the initial slide
    showSlide(currentSlide);
  
    // Add event listeners to the navigation buttons
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.addEventListener("click", () => {
      prevSlide();
    });
  
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", () => {
      nextSlide();
    });
  
    document.querySelector(".carousel-container").appendChild(prevButton);
    document.querySelector(".carousel-container").appendChild(nextButton);
  });
  