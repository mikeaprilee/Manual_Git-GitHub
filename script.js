document.querySelectorAll('.code-block').forEach(block => {
            const btn = document.createElement('button');
            btn.innerText = 'Copiar';
            btn.className = 'copy-btn no-print';
            btn.addEventListener('click', async () => {
                const codeText = block.innerText.replace('Copiar', '').replace('✅ Copiado', '').trim();
                try {
                    await navigator.clipboard.writeText(codeText);
                    btn.innerText = '✅ Copiado';
                } catch (error) {
                    console.error('No se pudo copiar el bloque de código al portapapeles.', error);
                    btn.innerText = 'No se pudo copiar';
                }
                setTimeout(() => btn.innerText = 'Copiar', 1800);
            });
            block.appendChild(btn);
        });
        const htmlEl = document.documentElement;
        const themeBtn = document.getElementById('theme-toggle');
        function applyTheme(theme) {
            htmlEl.setAttribute('data-theme', theme);
            themeBtn.innerText = theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
        }
        const savedTheme = localStorage.getItem('manual-git-theme');
        if (savedTheme) {
            applyTheme(savedTheme);
        }
        function toggleTheme() {
            const current = htmlEl.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            localStorage.setItem('manual-git-theme', next);
        }
        const btnTop = document.getElementById('btn-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                btnTop.classList.add('visible');
            } else {
                btnTop.classList.remove('visible');
            }
        });