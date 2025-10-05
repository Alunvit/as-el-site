// Плей видео (демо)
function playVideo() {
  alert("Видео воспроизведение пока не подключено. Это заглушка.");
}

// Можно добавить плавный скролл по ссылкам навигации
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
  });
});
