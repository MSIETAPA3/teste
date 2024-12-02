function scrollToEnd() {
    const button = document.getElementById('scrollButton');
    if (button.innerText === 'Ir para o Final') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        button.innerText = 'Ir para o Início';
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        button.innerText = 'Ir para o Final';
    }
}

function toggleMode() {
    const body = document.body;
    const button = document.getElementById('modeButton');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        button.innerText = 'Ativar Modo Claro';
    } else {
        button.innerText = 'Ativar Modo Escuro';
    }
}
