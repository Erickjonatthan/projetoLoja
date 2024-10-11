let count = 1;
document.getElementById("radio1").checked = true;

let intervalId = setInterval(nextImage, 5000);
let timeoutId;

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

function prevImage() {
    count--;
    if (count < 1) {
        count = 3;
    }
    document.getElementById("radio" + count).checked = true;
}

function disableAutoSlide() {
    clearInterval(intervalId);
}

function restartAutoSlide() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
    intervalId = setInterval(nextImage, 5000);
    }, 500);
}

function nextSlide() {
    disableAutoSlide();
    nextImage();
    restartAutoSlide();
}

function prevSlide() {
    disableAutoSlide();
    prevImage();
    restartAutoSlide();
}

function manualBtnClicked() {
    disableAutoSlide();
    restartAutoSlide();
}

// Adiciona eventos de clique aos elementos com a classe 'manual-btn'
document.querySelectorAll('.manual-btn').forEach(btn => {
    btn.addEventListener('click', manualBtnClicked);
});

