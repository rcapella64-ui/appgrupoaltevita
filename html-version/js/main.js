// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('active', menuOpen);
  mobileMenuBtn.innerHTML = menuOpen
    ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
    : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('active');
    mobileMenuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  });
});

// OS Detection & Download
const APP_STORE_URL = 'https://apps.apple.com/us/app/cuidame-gestor-de-sa%C3%BAde/id6744027992';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=br.com.cuidame&hl=pt';

function detectOS() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(ua)) return 'android';
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return 'ios';
  return 'desktop';
}

function handleDownload() {
  const os = detectOS();
  if (os === 'android') {
    window.open(GOOGLE_PLAY_URL, '_blank');
  } else if (os === 'ios') {
    window.open(APP_STORE_URL, '_blank');
  } else {
    openModal();
  }
}

// Modal
const modal = document.getElementById('downloadModal');

function openModal() {
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Attach download handlers
document.querySelectorAll('[data-download]').forEach(btn => {
  btn.addEventListener('click', handleDownload);
});

// Copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();
