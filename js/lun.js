document.addEventListener('DOMContentLoaded', function() {
    var imgs = document.querySelectorAll('.slides .slide');
    var index = 0;
    var timer;
    var left = document.getElementById("left");
    var right = document.getElementById("right");

    // 初始化第一个图片的显示
    imgs[index].style.opacity = 1;

    function autoPlay() {
        index = (index + 1) % imgs.length;
        changeSlide(index);
    }

    function changeSlide(newIndex) {
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = 0;
        }
        imgs[newIndex].style.opacity = 1;
    }

    // 开始自动播放
    timer = setInterval(autoPlay, 6000);

    // 绑定左右箭头点击事件
    left.onclick = function () {
        index = (index - 1 + imgs.length) % imgs.length;
        changeSlide(index);
    }

    right.onclick = function () {
        index = (index + 1) % imgs.length;
        changeSlide(index);
    }
});