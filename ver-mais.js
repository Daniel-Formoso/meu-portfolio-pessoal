const btn = document.querySelector('#show-or-hide');
const divExibida = document.querySelector('.container-escondido');

btn.addEventListener('click', () => {

    divExibida.classList.toggle('hidden');
    
    if (divExibida.classList.contains('hidden')) {
        btn.textContent = 'Ver mais';
    } else {
        btn.textContent = 'Ver menos';
    }
});

