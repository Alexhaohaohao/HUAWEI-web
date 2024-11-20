document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slides .slide');
    const radios = document.querySelectorAll('input[name="slider"]');
    let currentIndex = 0;
    function autoPlay() {
        currentIndex = (currentIndex + 1) % slides.length;
        changeSlide(currentIndex);
    }

    function changeSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = 0;
            radios[i].checked = false;
        });
        slides[index].style.opacity = 1;
        radios[index].checked = true;
    }
    setInterval(autoPlay, 6000);

    document.querySelector('.slides .left-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        changeSlide(currentIndex);
    });

    document.querySelector('.slides .right-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        changeSlide(currentIndex);
    });

    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                currentIndex = index;
                changeSlide(currentIndex);
            }
        });
    });

});