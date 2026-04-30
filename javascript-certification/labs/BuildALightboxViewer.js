const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

const openLightbox = (src) => {
    lightboxImage.src = src;
    lightbox.style.display = "flex";
}

const closeLightbox = () => {
    lightbox.style.display = "none";
}

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        openLightbox(item.src.replace("-thumbnail", ""));
    });
});