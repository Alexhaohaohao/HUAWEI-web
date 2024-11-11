document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slides .slide');
    const radios = document.querySelectorAll('input[name="slider"]');
    let currentIndex = 0;

    // 自动播放轮播图
    function autoPlay() {
        currentIndex = (currentIndex + 1) % slides.length;
        changeSlide(currentIndex);
    }

    // 切换轮播图
    function changeSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = 0;
            radios[i].checked = false;
        });
        slides[index].style.opacity = 1;
        radios[index].checked = true;
    }

    // 设置自动播放的时间间隔
    setInterval(autoPlay, 5000); // 每3秒切换一次

    // 手动切换
    document.querySelectorAll('.navigation .nav').forEach((nav, index) => {
        nav.addEventListener('click', () => {
            currentIndex = index;
            changeSlide(currentIndex);
        });
    });
});