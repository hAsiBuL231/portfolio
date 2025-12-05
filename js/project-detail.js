// Project Detail Page - Lightbox functionality
document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    const screenshots = document.querySelectorAll('.screenshot-item img');

    let currentIndex = 0;

    // Open lightbox when clicking on a screenshot
    screenshots.forEach((img, index) => {
        img.addEventListener('click', function () {
            currentIndex = index;
            openLightbox(this.src);
        });
    });

    function openLightbox(src) {
        lightboxImage.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showPrevious() {
        currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
        lightboxImage.src = screenshots[currentIndex].src;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % screenshots.length;
        lightboxImage.src = screenshots[currentIndex].src;
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevious);
    lightboxNext.addEventListener('click', showNext);

    // Close on background click
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrevious();
                break;
            case 'ArrowRight':
                showNext();
                break;
        }
    });
});
