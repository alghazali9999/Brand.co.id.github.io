const logoContainer = document.querySelector('.logo-container');
const logos = logoContainer.innerHTML; // Get the inner HTML of the logo container

// Duplicate the logos inside the container for continuous scroll effect
logoContainer.innerHTML += logos;

document.addEventListener('DOMContentLoaded', () => {
    const borderElement = document.querySelector('.border-animate');
    
    // Contoh: Mulai animasi saat elemen berada dalam viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          borderElement.classList.add('animate');
        } else {
          borderElement.classList.remove('animate');
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(borderElement);
  });
  
  const toggle = document.getElementById('dark-mode-toggle');
  const htmlElement = document.documentElement;

  toggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  });


  document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const closeSidebar = document.getElementById('close-sidebar');
    const menuLinks = document.querySelectorAll('#sidebar a'); // Mengambil semua link dalam sidebar

    // Membuka sidebar dan menampilkan overlay
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.add('sidebar-open');
        overlay.classList.remove('hidden');
    });

    // Menutup sidebar dan menyembunyikan overlay
    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('sidebar-open');
        overlay.classList.add('hidden');
    });

    // Menutup sidebar saat overlay diklik
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('sidebar-open');
        overlay.classList.add('hidden');
    });

    // Menutup sidebar saat salah satu item menu diklik
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('sidebar-open');
            overlay.classList.add('hidden');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
  const slideMenu = document.getElementById('slide-menu');
  const overlay = document.getElementById('overlay');
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const menuIcon = document.getElementById('menu-icon');
  const fadeUps = document.querySelectorAll('.fade-up');

  menuToggle.addEventListener('click', () => {
      slideMenu.classList.toggle('open');
      overlay.classList.toggle('show');
      menuIcon.classList.toggle('rotate');
      fadeUps.forEach(el => el.classList.add('visible'));
  });

  closeMenu.addEventListener('click', () => {
      slideMenu.classList.remove('open');
      overlay.classList.remove('show');
      menuIcon.classList.remove('rotate');
      fadeUps.forEach(el => el.classList.remove('visible'));
  });

  overlay.addEventListener('click', () => {
      slideMenu.classList.remove('open');
      overlay.classList.remove('show');
      menuIcon.classList.remove('rotate');
      fadeUps.forEach(el => el.classList.remove('visible'));
  });
});

const navbar = document.querySelector('nav');

// Fungsi untuk menambah atau menghapus kelas 'scrolled' saat scroll
function onScroll() {
    if (window.scrollY > 50) { // Jika scroll lebih dari 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Event listener untuk scroll
window.addEventListener('scroll', onScroll);

function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", function () {
  animateValue("totalSales", 0, 4800000, 3000);
  animateValue("officialAddons", 0, 224000, 3000);
  animateValue("totalAddons", 0, 786, 2000);
  animateValue("downloads", 0, 900000, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const carouselInner = document.querySelector('.carousel-inner');
  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = items[0].offsetWidth;
  let currentIndex = 0;

  function updateCarousel() {
      const offset = -currentIndex * itemWidth;
      carouselInner.style.transform = `translateX(${offset}px)`;
  }

  nextButton.addEventListener('click', () => {
      if (currentIndex < items.length - 1) {
          currentIndex++;
          updateCarousel();
      }
  });

  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
      }
  });
});
