function openFullscreen(imgSrc) {
    const modal = document.getElementById("fullscreen-modal");
    const fullscreenImg = document.getElementById("fullscreen-img");

    // Set sumber gambar dan tampilkan modal
    fullscreenImg.src = imgSrc;
    modal.classList.remove("hidden");

    // Menambahkan event listener untuk menutup modal jika mengklik di luar gambar
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeFullscreen();
        }
    });
}

function closeFullscreen() {
    const modal = document.getElementById("fullscreen-modal");
    modal.classList.add("hidden");
}

document.addEventListener('DOMContentLoaded', function() {
// Get elements
    var season1Btn = document.getElementById('season1');
    var season2Btn = document.getElementById('season2');
    var modal1 = document.getElementById('myModal');
    var modal2 = document.getElementById('myModalPage2');
    var closeButtons = document.querySelectorAll('.close');

// Show modal for Season 1
    season1Btn.addEventListener('click', function(event) {
        event.preventDefault();
        modal1.style.display = 'block';
    });

// Show modal for Season 2
    season2Btn.addEventListener('click', function(event) {
        event.preventDefault();
        modal2.style.display = 'block';
    });

// Close modal when close button is clicked
    closeButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            btn.closest('.modal').style.display = 'none';
        });
    });

// Close modal when clicking outside of modal
    window.onclick = function(event) {
        if (event.target === modal1) {
            modal1.style.display = 'none';
        }
        if (event.target === modal2) {
            modal2.style.display = 'none';
        }
    };
});

document.addEventListener("DOMContentLoaded", function() {
    const heroPages = document.querySelectorAll(".hero-page");
    const modals = {
        page1: document.getElementById("myModal"),
        page2: document.getElementById("myModalPage2")
};
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    let currentPageIndex = 0;

// Fungsi untuk menampilkan halaman hero berdasarkan indeks
    function showPage(index) {
        heroPages.forEach((page, i) => {
            page.style.display = i === index ? "block" : "none";
        });
    }

// Event listener untuk tombol "Next" dan "Previous"
nextButton.addEventListener("click", function() {
currentPageIndex = (currentPageIndex + 1) % heroPages.length;
showPage(currentPageIndex);
});

prevButton.addEventListener("click", function() {
currentPageIndex = (currentPageIndex - 1 + heroPages.length) % heroPages.length;
showPage(currentPageIndex);
});

// Modal handling untuk setiap page
const moreInfoButtons = document.querySelectorAll(".hero-buttons button");

moreInfoButtons.forEach((button, index) => {
button.addEventListener("click", function() {
    const modal = modals[`page${index + 1}`];
    if (modal) {
        modal.style.display = "block";
    }
});
});

// Close modals
const closeModalButtons = document.querySelectorAll(".modal .close");

closeModalButtons.forEach(button => {
button.addEventListener("click", function() {
    button.closest(".modal").style.display = "none";
});
});

// Klik di luar modal untuk menutupnya
window.addEventListener("click", function(event) {
Object.values(modals).forEach(modal => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
});

// Awal: tampilkan halaman pertama
showPage(currentPageIndex);
});


function toggleText(episodeId) {
const episode = document.getElementById(episodeId);
const moreText = episode.querySelector('.more-text');
const readMoreLink = episode.querySelector('.read-more');

if (moreText.style.display === 'none' || moreText.style.display === '') {
    moreText.style.display = 'inline';
    readMoreLink.textContent = 'Read less';
} else {
    moreText.style.display = 'none';
    readMoreLink.textContent = 'Read more';
}
}

const pages = document.querySelectorAll('.hero-page');
const indicators = document.querySelectorAll('.indicator');
let currentPage = 0;
let isTransitioning = false;

// Menambahkan kelas 'active' ke halaman pertama agar terlihat saat pertama kali web dimuat
pages[currentPage].classList.add('active');
indicators[currentPage].classList.add('active');

document.getElementById('nextButton').addEventListener('click', () => {
if (!isTransitioning) {
slidePage('next');
}
});

document.getElementById('prevButton').addEventListener('click', () => {
if (!isTransitioning) {
slidePage('prev');
}
});

function slidePage(direction) {
isTransitioning = true; 

const current = pages[currentPage];
const currentIndicator = indicators[currentPage];
let nextPage;

if (direction === 'next') {
nextPage = (currentPage + 1) % pages.length;
current.classList.add('slide-out-left');
pages[nextPage].style.left = '100%';
} else {
nextPage = (currentPage - 1 + pages.length) % pages.length;
current.classList.add('slide-out-right');
pages[nextPage].style.left = '-100%';
}

const nextIndicator = indicators[nextPage];
pages[nextPage].classList.add('active');
nextIndicator.classList.add('active');

setTimeout(() => {
current.classList.remove('active', 'slide-out-left', 'slide-out-right');
currentIndicator.classList.remove('active');
pages[nextPage].style.left = '0';
currentPage = nextPage;
isTransitioning = false;
}, 5);
}

function toggleProfileDropdown(event) {
event.stopPropagation(); // Mencegah event bubbling
const profileDropdown = document.getElementById('profile-dropdown');
const notificationDropdown = document.getElementById('notification-dropdown');

// Tutup dropdown notifikasi jika terbuka
if (notificationDropdown.classList.contains('show')) {
    notificationDropdown.classList.remove('show');
}

// Toggle dropdown profile
profileDropdown.classList.toggle('show');
}


function confirmLogout(event) {
event.preventDefault(); // Prevent default link behavior

Swal.fire({
    title: 'Are you sure?',
    text: "Do you really want to log out?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#e50914',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, log out!'
}).then((result) => {
    if (result.isConfirmed) {
        // Redirect to log out page or perform logout action
        window.location.href = "index.html"; // Change this to your logout URL
    }
});
}

// Toggle dropdown untuk notifikasi
function toggleNotificationDropdown(event) {
event.stopPropagation(); // Mencegah event bubbling
const notificationDropdown = document.getElementById('notification-dropdown');
const profileDropdown = document.getElementById('profile-dropdown');

// Tutup dropdown profile jika terbuka
if (profileDropdown.classList.contains('show')) {
    profileDropdown.classList.remove('show');
}

// Toggle dropdown notifikasi
notificationDropdown.classList.toggle('show');
}

// Tutup semua dropdown saat klik di luar elemen
document.addEventListener('click', function () {
const profileDropdown = document.getElementById('profile-dropdown');
const notificationDropdown = document.getElementById('notification-dropdown');

profileDropdown.classList.remove('show');
notificationDropdown.classList.remove('show');
});

AOS.init(); // Inisialisasi AOS