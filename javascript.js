AOS.init({
  once: false, // l’animazione avviene una volta sola
  offset: 300, // distanza dal fondo dello schermo per farla partire
  duration: 800, // durata animazioni
  delay: 0, // default delay
  easing: 'ease-in-out', // più compatibile con Safari
});
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    AOS.refresh();
  }, 100); // debounce per performance
});



