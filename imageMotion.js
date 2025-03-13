document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".project-image");
    const middleImage = document.querySelector(".middle-image");
    const leftImage = document.querySelector(".left-image");
    const rightImage = document.querySelector(".right-image");

    images.forEach(image => {
        image.addEventListener("mouseenter", function () {
            resetZIndexes();
            this.style.zIndex = "50"; // Bring hovered image to the front
            this.style.filter = "brightness(1)"; // Ensure no dark effect
            this.style.backgroundColor = "white"; // Ensure image has a solid background
        });

        image.addEventListener("mouseleave", function () {
            resetZIndexes();
        });
    });

    function resetZIndexes() {
        images.forEach(img => {
            img.style.zIndex = "10"; // Reset all images
            img.style.filter = "brightness(1)"; // Reset brightness (prevents darkening)
            img.style.backgroundColor = "white"; // Ensure images stay white
        });

        middleImage.style.zIndex = "30"; // Ensure the middle image stays in front
        leftImage.style.zIndex = "20"; // Make sure left image is slightly behind middle when not hovered
        rightImage.style.zIndex = "20"; // Same for right image
    }
});
