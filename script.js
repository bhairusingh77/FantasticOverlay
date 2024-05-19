// document.addEventListener("DOMContentLoaded", function() {
//     // Carousel functionality
//     let carouselIndex = 0;
//     const carouselItems = document.querySelectorAll('.carousel-item');
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');

//     function showCarouselItem(index) {
//         carouselItems.forEach((item, i) => {
//             item.classList.toggle('active', i === index);
//         });
//     }

//     function nextCarouselItem() {
//         carouselIndex = (carouselIndex + 1) % carouselItems.length;
//         showCarouselItem(carouselIndex);
//     }

//     function prevCarouselItem() {
//         carouselIndex = carouselIndex === 0 ? carouselItems.length - 1 : carouselIndex - 1;
//         showCarouselItem(carouselIndex);
//     }

//     nextButton.addEventListener('click', nextCarouselItem);
//     prevButton.addEventListener('click', prevCarouselItem);

//     // Video modal functionality
//     const portfolioItems = document.querySelectorAll('.portfolio-item');
//     const modal = document.getElementById('videoModal');
//     const modalVideo = modal.querySelector('video');
//     const closeModal = modal.querySelector('.close');

//     portfolioItems.forEach(item => {
//         item.addEventListener('click', () => {
//             const videoSrc = item.getAttribute('data-video');
//             modalVideo.src = videoSrc;
//             modal.style.display = 'block';
//         });
//     });

//     closeModal.addEventListener('click', () => {
//         modal.style.display = 'none';
//         modalVideo.src = '';
//     });

//     window.addEventListener('click', (e) => {
//         if (e.target === modal) {
//             modal.style.display = 'none';
//             modalVideo.src = '';
//         }
//     });
// });

// Add any JavaScript functionality if needed for form validation or other purposes
document.addEventListener("DOMContentLoaded", function() {
    // Add JavaScript code here if needed
});

document.addEventListener("DOMContentLoaded", function() {
    const descriptions = document.querySelectorAll('.description');
    const showMoreButtons = document.querySelectorAll('.show-more');

    showMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const description = this.parentElement.querySelector('.description');
            description.classList.toggle('expanded');
            if (description.classList.contains('expanded')) {
                this.textContent = 'Show Less';
            } else {
                this.textContent = 'Show More';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let carouselIndex = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const intervalTime = 5000; // Change this value to set the interval time in milliseconds

    function showCarouselItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function nextCarouselItem() {
        carouselIndex = (carouselIndex + 1) % carouselItems.length;
        showCarouselItem(carouselIndex);
    }

    function prevCarouselItem() {
        carouselIndex = carouselIndex === 0 ? carouselItems.length - 1 : carouselIndex - 1;
        showCarouselItem(carouselIndex);
    }

    nextButton.addEventListener('click', nextCarouselItem);
    prevButton.addEventListener('click', prevCarouselItem);

    // Function to auto change slide
    function autoChangeSlide() {
        setInterval(() => {
            nextCarouselItem();
        }, intervalTime);
    }

    // Call the autoChangeSlide function to start auto sliding
    autoChangeSlide();
});


