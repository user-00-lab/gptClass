document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('더 읽기 기능이 구현될 예정입니다.');
        });
    });

    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // 3초마다 슬라이드 변경
});
