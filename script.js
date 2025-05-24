function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  document.getElementById('btn-cita').addEventListener('click', function() {
    window.open('https://web.whatsapp.com/send?phone=59899616991', '_blank');
});
 document.getElementById('whatsapp-button').addEventListener('click', function() {
    window.open('https://api.whatsapp.com/send?phone=59899616991', '_blank');
});