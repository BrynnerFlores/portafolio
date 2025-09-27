document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const icon = themeToggle.querySelector('i');
  icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  window.addEventListener('DOMContentLoaded', () => {
    const current = html.getAttribute('data-theme');
    const icon = themeToggle.querySelector('i');
    icon.className = current === 'light' ? 'fas fa-sun' : 'fas fa-moon';
  });
}
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const textToCopy = button.getAttribute('data-clipboard');
    const feedbackId = button.closest('.contact-item').querySelector('.copy-feedback').id;
    const feedback = document.getElementById(feedbackId);

    try {
      await navigator.clipboard.writeText(textToCopy);
      feedback.textContent = '¡Copiado!';
      feedback.classList.add('show');
      setTimeout(() => {
        feedback.classList.remove('show');
      }, 1500);
    } catch (err) {
      feedback.textContent = 'Error';
      feedback.classList.add('show');
      setTimeout(() => {
        feedback.classList.remove('show');
      }, 1500);
    }
  });
});