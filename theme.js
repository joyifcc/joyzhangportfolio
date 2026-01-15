// theme.js
const themeToggle = document.getElementById('theme-toggle');
const toggleSlider = document.getElementById('toggle-slider');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'light') {
  if (themeToggle) themeToggle.classList.add('light');
  if (themeIcon) themeIcon.textContent = '☀️';
} else {
  if (themeIcon) themeIcon.textContent = '🌙';
}

if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'light') {
      themeToggle.classList.add('light');
      if (themeIcon) themeIcon.textContent = '☀️';
    } else {
      themeToggle.classList.remove('light');
      if (themeIcon) themeIcon.textContent = '🌙';
    }
  });
}