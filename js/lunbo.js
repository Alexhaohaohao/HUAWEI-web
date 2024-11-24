document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slides .slide');
    let currentIndex = 0;

    // 初始化第一个幻灯片的显示
    slides[currentIndex].style.opacity = 1;

    function autoPlay() {
        currentIndex = (currentIndex + 1) % slides.length;
        changeSlide(currentIndex);
    }

    function changeSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = 0;
        });
        slides[index].style.opacity = 1;
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
});