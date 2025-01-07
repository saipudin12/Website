// Tombol menu navigasi saat dibuka melalui tablet dan mobile
const navigasiMenu = document.querySelector('.navigasi-menu');
// saat tombol menu di klik
document.querySelector('#menu').onclick = () => {
    navigasiMenu.classList.toggle('active');
};