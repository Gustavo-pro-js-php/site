document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.ler-mais');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Mais detalhes em breve!');
        });
    });
});