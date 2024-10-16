let count = 1;
document.getElementById("radio1").checked = true;

let intervalTime = 8000; // Tempo padrão do intervalo
if (window.location.pathname.startsWith('/piso-') || window.location.pathname.startsWith('/rodape')) {
    intervalTime = 2500; // Tempo reduzido do intervalo para páginas que começam com "piso-"
}

let intervalId = setInterval(nextImage, intervalTime);
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
        intervalId = setInterval(nextImage, intervalTime);
    }, 1000);
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

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    toggleButton.addEventListener('click', function () {
        dropdownContent.classList.toggle('show');
    });
});

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        menu.classList.remove('fade-in');
    } else {
        menu.style.display = 'block';
        menu.classList.add('fade-in');
    }
}

// Adiciona um evento de redimensionamento à janela
window.addEventListener('resize', function() {
    var menu = document.getElementById('menu');
    if (window.innerWidth > 768) { // Define o valor de largura para diferenciar entre dispositivos móveis e desktops
        menu.style.display = 'block';
    }
    else {
        menu.style.display = 'none';
    }
});