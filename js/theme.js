const toggleBtn = document.getElementById('theme-toggle');

if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.classList.toggle('light');

    const isLight = document.documentElement.classList.contains('light');
    toggleBtn.textContent = isLight ? '☀️' : '🌙';

    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
    document.documentElement.classList.toggle('light');

    const isLight = document.documentElement.classList.contains('light');
    toggleBtn.textContent = isLight ? '☀️' : '🌙';

    localStorage.setItem('theme', isLight ? 'light' : 'dark');
})

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle('light');

    const isLight = document.documentElement.classList.contains('light');
    toggleBtn.textContent = isLight ? '☀️' : '🌙';

    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});