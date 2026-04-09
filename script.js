/**
 * JEAN CARLOS MARTINS - Cosmos UI Engine
 * Foco: Interatividade de Dashboard e fundo dinâmico.
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA DO BENTO GRID (ACORDEÃO CENTRAL) ---
    const bentoItems = document.querySelectorAll('.bento-item');

    bentoItems.forEach(item => {
        item.addEventListener('click', () => {
            // Verifica se o item já está ativo
            const isActive = item.classList.contains('active');

            // Remove o estado ativo de todos (Efeito Sanfona)
            bentoItems.forEach(i => i.classList.remove('active'));

            // Se não estava ativo, abre. Se já estava, fecha todos.
            if (!isActive) {
                item.classList.add('active');

                // Log de sistema para feedback visual no console
                const sectionTitle = item.querySelector('h3').innerText;
                console.log(`[SYSTEM]: Módulo ${sectionTitle} montado com sucesso.`);
            }
        });
    });

    // --- 2. RELÓGIO DE ALTA PRECISÃO ---
    const clockElement = document.getElementById('realTime');

    const updateClock = () => {
        const now = new Date();

        // Formato de 24h para vibe corporativa/técnica
        const timeString = now.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        if (clockElement) {
            clockElement.textContent = timeString;
        }
    };

    // Inicializa e atualiza a cada segundo
    updateClock();
    setInterval(updateClock, 1000);

    // --- 3. INTERAÇÃO DINÂMICA COM O MOUSE (PARALLAX) ---
    // Faz as bolhas e a nebulosa reagirem levemente ao movimento do mouse
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        // Move a nebulosa de fundo levemente
        const nebula = document.querySelector('.nebulosa');
        if (nebula) {
            nebula.style.transform = `translate(${x * 30}px, ${y * 30}px) scale(1.1)`;
        }

        // Move as bolhas em velocidades diferentes
        const particles = document.querySelectorAll('.particles li');
        particles.forEach((particle, index) => {
            const depth = (index + 1) * 15;
            particle.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
        });
    });

    // --- 4. SEQUÊNCIA DE BOOT (INICIALIZAÇÃO) ---
    window.addEventListener('load', () => {
        console.log("%c COSMOS OS v2.0 - ONLINE ",
                    "background: #00f3ff; color: #020205; font-weight: bold; padding: 5px; border-radius: 4px;");

        // Pequeno atraso para abrir o primeiro item com uma animação elegante
        setTimeout(() => {
            const firstItem = document.querySelector('.bento-item');
            if (firstItem && !document.querySelector('.bento-item.active')) {
                firstItem.classList.add('active');
            }
        }, 800);
    });
});